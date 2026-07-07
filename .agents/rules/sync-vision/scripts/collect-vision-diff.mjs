#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '../../../..');
const syncDir = path.join(repoRoot, 'docs/sync/vision');
const statusPath = path.join(syncDir, 'status.json');
const args = process.argv.slice(2);

const sourcePathspecs = [
  'VISION.md',
  '.agents/AGENTS.md',
  '.agents/rules',
  'docs/plans',
  'docs/sync',
  'docs/architecture',
  'docs/brainstorms',
  'docs/issues',
  'docs/milestones',
  'docs/forms',
  'docs/world1',
  'docs/model',
  'docs/operations',
  'docs/gdds',
  'docs/research',
  'docs/sources',
  '*.md',
  '*.mdx',
  '*.mdc',
];

const excludedPathPrefixes = [
  '.agents/skills/',
  '.changeset/',
  'docs/sync/vision/runs/',
  'docs/sync/shadcn/dashboard.html',
  'docs/sync/shadcn/dashboard.json',
];

const exactInputFiles = new Set(['VISION.md', '.agents/AGENTS.md']);

const inputPathPrefixes = [
  '.agents/rules/',
  'docs/plans/',
  'docs/sync/',
  'docs/architecture/',
  'docs/brainstorms/',
  'docs/issues/',
  'docs/milestones/',
  'docs/forms/',
  'docs/world1/',
  'docs/model/',
  'docs/operations/',
  'docs/gdds/',
  'docs/research/',
  'docs/sources/',
];

const trackedExts = new Set([
  '.md',
  '.mdx',
  '.mdc',
  '.json',
  '.jsonl',
  '.tsv',
  '.txt',
]);

const patterns = {
  vision: /\b(VISION\.md|vision|north[- ]star|taste|doctrine)\b/i,
  supervisor:
    /\b(sync-vision|autogoal|autoclosure|architecture-cleanup|checkpoint|stopping|handoff|batch|timed|supervisor|loop)\b/i,
  product:
    /\b(Sira|World 1|Makkah|portal|portail|Hira|Khadijah|Waraqah|Dar al-Arqam|MVP|hub|player|joueur|hasanat|journal|reward|badge)\b/i,
  model:
    /\b(model|canonical|entity|game state|state machine|progression|quest|proof|preuve|calm|clarity|clart[eé]|checkpoint|inventory|objective|reward|journal)\b/i,
  source:
    /\b(source|spec|design doc|production pack|asset manifest|implementation contract|portal doc|sensitivity guardrail|API|sync)\b/i,
  ai: /\b(AI|agent|draft|recommendation|finding|summary|tool|prompt|LLM|inference|confidence)\b/i,
  research:
    /\b(research|source[- ]mining|matrix|corpus|raw|compiled|finding|decision|open question)\b/i,
  workflow:
    /\b(issue|PR|ledger|checkmark|triage|decision ledger|open question|grill|GDD|PRD|prototype|milestone|slice)\b/i,
  proof:
    /\b(proof|oracle|benchmark|metric|test|verify|verification|false positive|Browser|Playwright|canvas|Three\.js|screenshot|visual|glyph|mobile)\b/i,
  sensitivity:
    /\b(sensitive|sensitivity|sacr[eé]|Prophet|Proph[eè]te|Jibril|R[eé]v[eé]lation|calligraphy|calligraphie|verse|verset|SAW|ﷺ|paix et salut)\b/i,
  gameplay:
    /\b(gameplay|mini-game|mini-jeu|verb|verbe|phase|failure|reset|HUD|VFX|SFX|interaction|touch|tablet|browser game|3D)\b/i,
};

function runGit(gitArgs, options = {}) {
  const result = spawnSync('git', gitArgs, {
    cwd: repoRoot,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
  if (result.status !== 0) {
    throw new Error(result.stderr || `git ${gitArgs.join(' ')} failed`);
  }
  return result.stdout.trimEnd();
}

function parseArgs() {
  const parsed = {
    statusOnly: false,
    dryRun: false,
    advance: false,
    includeWorkingTree: true,
    base: null,
    target: null,
    plan: null,
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--status' || arg === 'status') parsed.statusOnly = true;
    else if (arg === '--dry-run' || arg === 'preview') parsed.dryRun = true;
    else if (arg === '--advance' || arg === 'advance') parsed.advance = true;
    else if (arg === '--no-working-tree') parsed.includeWorkingTree = false;
    else if (arg === '--base') parsed.base = args[++i];
    else if (arg === '--target') parsed.target = args[++i];
    else if (arg === '--plan') parsed.plan = args[++i];
    else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return parsed;
}

function readStatus() {
  if (!fs.existsSync(statusPath)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(statusPath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(`${filePath}.tmp`, `${JSON.stringify(value, null, 2)}\n`);
  fs.renameSync(`${filePath}.tmp`, filePath);
}

function rel(filePath) {
  return path.relative(repoRoot, filePath).replaceAll(path.sep, '/');
}

function isRelevantFile(file) {
  if (!file) return false;
  if (excludedPathPrefixes.some((prefix) => file.startsWith(prefix))) {
    return false;
  }
  const ext = path.extname(file);
  if (!trackedExts.has(ext) && file !== 'VISION.md') {
    return false;
  }
  return (
    exactInputFiles.has(file) ||
    inputPathPrefixes.some((prefix) => file.startsWith(prefix)) ||
    (!file.includes('/') && ['.md', '.mdx', '.mdc'].includes(ext))
  );
}

function pathspecArgs() {
  return ['--', ...sourcePathspecs];
}

function parseNameStatus(text, source) {
  if (!text.trim()) return [];
  return text.split('\n').flatMap((line) => {
    const parts = line.split('\t');
    const status = parts[0] ?? '';
    const file = parts[2] ?? parts[1] ?? '';
    if (!isRelevantFile(file)) return [];
    return [{ source, status, file }];
  });
}

function parseUntrackedFiles(text, source) {
  if (!text.trim()) return [];
  return text.split('\n').flatMap((file) => {
    if (!isRelevantFile(file)) return [];
    return [{ source, status: '??', file }];
  });
}

function categoryHits(text) {
  const hits = [];
  for (const [name, pattern] of Object.entries(patterns)) {
    if (pattern.test(text)) hits.push(name);
  }
  return hits;
}

function parseAddedLines(diffText, source) {
  const rows = [];
  let file = '';
  let newLine = 0;

  for (const line of diffText.split('\n')) {
    if (line.startsWith('+++ b/')) {
      file = line.slice('+++ b/'.length);
      continue;
    }
    if (line.startsWith('+++ /dev/null')) {
      file = '';
      continue;
    }
    const hunk = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(line);
    if (hunk) {
      newLine = Number(hunk[1]);
      continue;
    }
    if (!file || !isRelevantFile(file)) continue;
    if (line.startsWith('+') && !line.startsWith('+++')) {
      const text = line.slice(1).trim();
      const hits = categoryHits(text);
      if (hits.length > 0) {
        rows.push({
          source,
          categories: hits.join(','),
          file,
          line: newLine,
          text: text.replace(/\s+/g, ' ').slice(0, 500),
        });
      }
      newLine += 1;
    } else if (!line.startsWith('-') && !line.startsWith('\\')) {
      newLine += 1;
    }
  }

  return rows;
}

function parseFileLines(files, source) {
  const rows = [];

  for (const file of files) {
    const absolutePath = path.join(repoRoot, file.file);

    if (!fs.existsSync(absolutePath)) continue;

    const lines = fs.readFileSync(absolutePath, 'utf8').split(/\r?\n/);

    for (let index = 0; index < lines.length; index += 1) {
      const text = lines[index].trim();
      const hits = categoryHits(text);

      if (hits.length === 0) continue;

      rows.push({
        source,
        categories: hits.join(','),
        file: file.file,
        line: index + 1,
        text: text.replace(/\s+/g, ' ').slice(0, 500),
      });
    }
  }

  return rows;
}

function shortSha(sha) {
  return sha ? sha.slice(0, 7) : '';
}

function makeRunDir(base, target) {
  const date = new Date().toISOString().slice(0, 10);
  return path.join(
    syncDir,
    'runs',
    `${date}-${shortSha(base)}-to-${shortSha(target)}`
  );
}

function writeTsv(filePath, header, rows) {
  const escapeTsv = (value) =>
    String(value ?? '')
      .replace(/\t/g, ' ')
      .replace(/\r?\n/g, ' ');
  const text = [
    header.join('\t'),
    ...rows.map((row) => header.map((key) => escapeTsv(row[key])).join('\t')),
  ].join('\n');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${text}\n`);
}

function summarizeCounts(rows, key) {
  const counts = new Map();
  for (const row of rows) {
    for (const value of String(row[key] ?? '')
      .split(',')
      .filter(Boolean)) {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
  }
  return [...counts.entries()].sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
}

function main() {
  const options = parseArgs();
  const status = readStatus();
  const target = options.target ?? runGit(['rev-parse', 'HEAD']);
  const base =
    options.base ??
    status.lastSyncedCommit ??
    runGit(['rev-list', '--max-parents=0', 'HEAD']);

  const committedNameStatus = runGit([
    'diff',
    '--name-status',
    '-M',
    base,
    target,
    ...pathspecArgs(),
  ]);
  const committedFiles = parseNameStatus(committedNameStatus, 'committed');
  const committedDiff = runGit([
    'diff',
    '--unified=0',
    '--no-ext-diff',
    base,
    target,
    ...pathspecArgs(),
  ]);
  const committedCandidates = parseAddedLines(committedDiff, 'committed');

  let workingFiles = [];
  let workingCandidates = [];
  if (options.includeWorkingTree && target === runGit(['rev-parse', 'HEAD'])) {
    const workingNameStatus = runGit([
      'diff',
      '--name-status',
      '-M',
      target,
      ...pathspecArgs(),
    ]);
    workingFiles = parseNameStatus(workingNameStatus, 'working-tree');
    const workingDiff = runGit([
      'diff',
      '--unified=0',
      '--no-ext-diff',
      target,
      ...pathspecArgs(),
    ]);
    workingCandidates = parseAddedLines(workingDiff, 'working-tree');
    const untracked = parseUntrackedFiles(
      runGit(['ls-files', '--others', '--exclude-standard', ...pathspecArgs()]),
      'working-tree'
    );
    workingFiles = [...workingFiles, ...untracked];
    workingCandidates = [
      ...workingCandidates,
      ...parseFileLines(untracked, 'working-tree'),
    ];
  }

  const changedFiles = [...committedFiles, ...workingFiles];
  const candidateLines = [...committedCandidates, ...workingCandidates];

  const statusSummary = {
    statusPath: rel(statusPath),
    base,
    target,
    committedChangedFiles: committedFiles.length,
    committedCandidateLines: committedCandidates.length,
    workingTreeChangedFiles: workingFiles.length,
    workingTreeCandidateLines: workingCandidates.length,
    lastRunDir: status.lastRunDir ?? null,
    pendingRunDir: status.pendingRunDir ?? null,
  };

  if (options.statusOnly) {
    process.stdout.write(`${JSON.stringify(statusSummary, null, 2)}\n`);
    return;
  }

  const runDir = makeRunDir(base, target);
  fs.mkdirSync(runDir, { recursive: true });

  writeTsv(
    path.join(runDir, 'changed-files.tsv'),
    ['source', 'status', 'file'],
    changedFiles
  );
  writeTsv(
    path.join(runDir, 'candidate-lines.tsv'),
    ['source', 'categories', 'file', 'line', 'text'],
    candidateLines
  );

  const categoryCounts = summarizeCounts(candidateLines, 'categories');
  const summary = [
    '# Vision Sync Summary',
    '',
    `- Base: \`${base}\``,
    `- Target: \`${target}\``,
    `- Committed changed files: ${committedFiles.length}`,
    `- Committed candidate lines: ${committedCandidates.length}`,
    `- Working-tree changed files: ${workingFiles.length}`,
    `- Working-tree candidate lines: ${workingCandidates.length}`,
    `- Dry run: ${options.dryRun ? 'yes' : 'no'}`,
    `- Advanced baseline: ${options.advance ? 'requested' : 'no'}`,
    '',
    '## Candidate Categories',
    '',
    '| Category | Lines |',
    '| --- | ---: |',
    ...categoryCounts.map(([name, count]) => `| ${name} | ${count} |`),
    '',
    '## Next',
    '',
    '- Read `candidate-lines.tsv` and the owning changed files.',
    '- Cluster candidates into captured, reaffirmed, rejected, run-specific, owner-routed, or deferred-with-question.',
    '- Patch root `VISION.md` only for reusable latest-state doctrine.',
    '- Advance `lastSyncedCommit` only after the committed range is fully accounted for.',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(runDir, 'summary.md'), summary);

  const runJson = {
    ...statusSummary,
    runDir: rel(runDir),
    candidateCategoryCounts: Object.fromEntries(categoryCounts),
    generatedAt: new Date().toISOString(),
    plan: options.plan ?? null,
  };
  writeJson(path.join(runDir, 'run.json'), runJson);

  if (options.advance) {
    if (!options.plan) {
      throw new Error('--advance requires --plan <docs/plans/...>');
    }
    const nextStatus = {
      schemaVersion: 1,
      initializedAt: status.initializedAt ?? new Date().toISOString(),
      lastSyncedCommit: target,
      lastSyncedAt: new Date().toISOString(),
      lastTargetCommit: target,
      lastRunDir: rel(runDir),
      pendingRunDir: workingCandidates.length > 0 ? rel(runDir) : null,
      lastPlan: options.plan,
      notes: [
        'lastSyncedCommit accounts for committed inputs only.',
        'Working-tree overlay is visible in run artifacts but not baselined until committed.',
      ],
    };
    writeJson(statusPath, nextStatus);
  }

  process.stdout.write(
    `${JSON.stringify({ ...runJson, advanced: options.advance }, null, 2)}\n`
  );
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
