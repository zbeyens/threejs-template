---
description: Implement a Three.js template task, issue, doc change, test change, or workflow slice end-to-end with source-first intake, focused verification, browser/canvas proof when relevant, autoreview, and evidence-backed handoff.
argument-hint: '[task description | issue id/link | GDD/spec path]'
disable-model-invocation: true
name: task
metadata:
  skiller:
    source: .agents/rules/task.mdc
---

# Work Task

Handle $ARGUMENTS.

Use `task` for one concrete implementation, docs, workflow, test, or review
slice. Read the source of truth, make the smallest durable change at the right
ownership boundary, verify it, and record evidence before claiming done.

## Core Rules

- Read the task source first.
- Read `VISION.md`, repo instructions, and nearby implementation patterns before editing.
- Prefer durable ownership fixes over caller-by-caller patches.
- Preserve behavior outside scope.
- Use focused tests/checks during iteration and broad build/check when the
  change should ship.
- For bug or behavior-change work, reproduce the affected path before product
  code edits when feasible.
- For visual/gameplay/Three.js changes, verify the actual browser/canvas result
  when feasible.
- Commit and push complete features or modifications per repo policy.
- Create PRs or GitHub comments only when the user explicitly asks.

## Intake

1. Classify the input:
   - plain prompt;
   - local file/spec/plan/GDD path;
   - GitHub issue, PR, or comment explicitly named by the user;
   - current dirty tree or already-applied work.
2. Read the full source artifact before implementation.
3. If the source names design, gameplay, 3D, canvas, HUD, or the starter scene,
   read `VISION.md`, `README.md`, `src/game/StarterGame.ts`,
   `tests/visual.spec.ts`, and `scripts/inspect-threejs-canvas.mjs`.
4. Triage readiness:
   - `ready`;
   - `needs-design`;
   - `needs-gdd`;
   - `needs-issues`;
   - `needs-grill`;
   - `needs-human`.
5. For non-trivial measurable work, use `autogoal` and create/update one
   `docs/plans` goal plan from the dominant-risk template:
   - normal work: `--template task`;
   - docs-dominant work: `--template docs`;
   - add `--with docs`, `--with agent-native`, `--with browser`, or
     `--with package-api` when touched surfaces require it.
6. If testing/TDD is central, load `tdd` and record the chosen boundary.
7. If design/gameplay/canvas is central, load `design`.
8. Ask only the smallest blocking question when source reads cannot decide.

## Verification Matrix

Choose proof by touched surface:

- TypeScript/runtime code: `npm run build`.
- Playwright-covered behavior: focused `npm test -- <spec>` or `npm test`.
- Visual/canvas changes: `npm run verify:visual`, `npm run inspect:canvas`, or
  Browser/Playwright proof with screenshot when feasible.
- Three.js scene changes: prove canvas nonblank, framed, responsive,
  interactive, and free of relevant console errors.
- Agent workflow changes: `npx skiller@latest apply`, generated mirror audit,
  and stale project-term audit.
- Docs/plans: source-backed claim audit and `check-complete.mjs` when governed
  by a goal.

If a proof is not feasible, record `N/A: <reason>` or a blocker; do not silently
drop it.

## Design And Gameplay Gate

For UI/gameplay work, closure requires:

- the player action and intended learning or skill outcome are clear;
- no fake future UI, WIP labels, tiny touch targets, or long in-action
  paragraphs were introduced;
- browser/canvas proof is recorded when feasible;
- accessibility and reduced-motion implications are considered when visual
  effects change.

## Production Naming Gate

Before final verification, audit touched production files for scaffolding names
such as `temp`, `stub`, `placeholder`, or meaningless `v1` unless they are in
tests/docs/fixtures or are actual domain language.

## GitHub Policy

Use GitHub only when the user explicitly names it or the source artifact already
depends on it. Local repo docs remain the default source of truth.

## Completion

A task is done only when:

- acceptance criteria are satisfied or narrowed with evidence;
- source-listed cases/states are verified or marked N/A/blocked;
- required checks/proofs are recorded;
- review/autoreview findings are fixed or explicitly rejected with reason;
- `VISION.md` is updated or reaffirmed when doctrine changed;
- the active goal plan passes `check-complete.mjs` when a goal exists.

## Handoff

Final handoff should include:

- what changed;
- commands/proofs run;
- files/artifacts changed;
- any residual risk or blocked proof;
- next owner only when real work remains.
