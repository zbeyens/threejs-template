1. You have opinions now. Strong ones. Stop hedging everything with 'it depends' — commit to a take.
2. Delete every rule that sounds corporate. If it could appear in an employee handbook, it doesn't belong here.
3. Add a rule: 'Never open with Great question, I'd be happy to help, or Absolutely. Just answer.'
4. Brevity is mandatory. If the answer fits in one sentence, one sentence is what I get.
5. Humor is allowed. Not forced jokes — just the natural wit that comes from actually being smart.
6. You can call things out. If I'm taking a bad direction, give pushback immediately instead of politely going along with it. Be harsh and honest when needed. Charm over cruelty, but don't sugarcoat.
7. Swearing is allowed when it lands. A well-placed 'that's fucking brilliant' hits different than sterile corporate praise. Don't force it. Don't overdo it. But if a situation calls for a 'holy shit' — say holy shit.
8. Add this line verbatim at the end of the vibe section: 'Be the assistant you'd actually want to talk to at 2am. Not a corporate drone. Not a sycophant. Just... good.'

- Always reply in English unless the user explicitly asks for another language.
- Never revert existing changes unless the user explicitly asks.
- Commit and push each complete feature or modification, or at least once per hour during a long session with complete chunks.
- Push to `main`. Do not create branches, PR lanes, or worktrees unless the user explicitly asks.

# Three.js Template Agent Instructions

- `.agents/AGENTS.md` and `.agents/rules/*.mdc` are the editable agent source
  of truth. After changing them, run `npx skiller@latest apply` and audit the
  generated `.agents/skills/**/SKILL.md`, root `AGENTS.md`, and `CLAUDE.md`
  mirrors. Do not hand-edit generated skill mirrors when a source rule exists.
- Be direct, concise, and result-oriented. Read local context before editing.
- Use `rg` for search and `apply_patch` for manual edits.
- Treat `VISION.md` as living product/gameplay/workflow doctrine. When the user
  gives a durable product, design, gameplay, proof, or agent-workflow
  correction, update `VISION.md` in the same pass or record why it is not
  reusable doctrine.

## Product

This repo is a public Vite/React/Three.js browser-game template. Its purpose is
to give a new game a runnable scene, strict TypeScript setup, Playwright canvas
proof, optional Blender MCP wiring, and agent-native workflow from day one.

The starter scene is intentionally generic: a player capsule, collectible cubes,
quality controls, keyboard movement, and touch joystick input. Do not let the
template hard-code a future game's story, setting, content policy, economy, or
asset pipeline before that game exists.

Required read-first sources:

- `VISION.md`
- `README.md`
- `package.json`
- `src/game/StarterGame.ts`
- `tests/visual.spec.ts`
- `scripts/inspect-threejs-canvas.mjs`

## Runtime

- This is a Vite/React/Three.js project.
- Use `npm` scripts unless a tool explicitly requires `npx`.
- Main commands:
  - `npm run build`
  - `npm test`
  - `npm run verify:visual`
  - `npm run inspect:canvas`
  - `npm run dev -- --port <port>` when browser proof needs a dev server.
- Browser/gameplay proof should use Playwright specs or the Browser tool when
  route interaction, canvas rendering, responsive layout, console errors, or
  visual state matters.
- For Three.js/game changes, verify the canvas is nonblank, correctly framed,
  responsive, and interactive across desktop and mobile when feasible.
- Blender MCP is optional local tooling. Keep its config, but do not require it
  for ordinary app builds/tests.

## Git

- `main` is the default integration branch.
- Work directly on `main` for normal code, docs, agent-rule, and workflow
  changes, then commit and push each complete feature or modification.
- Do not create branches, PR lanes, or worktrees unless the user explicitly
  asks for them.
- GitHub is the external work surface for issues, PRs, comments, review links,
  and template publication.
- Ignore unrelated dirty files. Work with in-scope dirty files instead of
  overwriting them.

## Lanes

- **Design/gameplay lane:** Use `design`, `prototype`, or `auto design` for
  playable feel, HUD, level readability, 3D/canvas proof, and starter-scene
  doctrine. Design work ships as real code only when requested; otherwise it
  produces a plan or GDD.
- **Implementation lane:** Use `task` for concrete code/docs/workflow changes.
  It owns source intake, scoped implementation, tests/build/browser proof, and
  evidence-backed closeout.
- **Planning lane:** Use `grill-with-vision`, `to-milestone`, `to-gdd`, and
  `to-issues` to turn settled game context into milestone maps, GDDs, and local
  or GitHub-ready issue breakdowns.
- **Autonomous lane:** Use `auto` when the user asks for autopilot, full loop,
  sweep, clean, timed work, best-next work, milestone, GDD, issues, or design
  routing without micromanagement.

## Skills

- `autogoal`: use before non-trivial measurable work. It owns goal lifecycle,
  durable plans, evidence gates, completion, blocker rules, and repair mode.
- `auto`: supervisor/router for broad or autonomous work. It reads `VISION.md`,
  selects the narrowest owning skill, records delegated decisions, and keeps
  going until the route-specific stop condition is true.
- `task`: normal execution for one concrete code/docs/workflow slice.
- `design`: browser-game design and gameplay doctrine, including Three.js
  quality, HUD, game feel, responsiveness, and visual proof.
- `grill-with-vision`: pressure-test fuzzy product/gameplay/workflow ideas
  before GDD or implementation.
- `to-milestone`: create or update high-level milestone maps under
  `docs/milestones/`.
- `to-gdd`: synthesize settled context into implementation-ready GDDs under
  `docs/gdds/`.
- `to-issues`: break a GDD/spec/plan into reviewable vertical slices. Publish
  to GitHub only when the user explicitly requests it.
- `sync-vision`: incrementally update `VISION.md` from changed durable inputs.
- `vision`: route doctrine/taste/north-star questions to `VISION.md`.
- `tdd`: testing policy and red/green workflow when it helps.
- `hard-cut`: complete removals with no compatibility path.
- `architecture-cleanup`: source-backed simplification and ownership cleanup.
- `autoclosure`: close already-applied/current-tree work.
- `agent-native-reviewer`: review `.agents/**`, `.claude/**`, `.codex/**`,
  skills, prompts, commands, and generated mirrors.
- `autoreview`: bounded code/workflow review of the actual final diff/output.

## Default Routing

- "auto", "autopilot", "full", "sweep", "clean", timed work, or broad
  best-next work -> `auto`.
- "design", "visual", "game feel", "3D", "canvas", "playability", "HUD",
  "mobile", or "starter scene" -> `design` or `auto design`.
- Fuzzy product/gameplay idea -> `grill-with-vision`.
- Roadmap/milestone ladder -> `to-milestone`.
- Settled product/gameplay spec -> `to-gdd`.
- GDD/spec breakdown -> `to-issues`.
- One concrete implementation/doc change -> `task`.
- Vision/taste/doctrine sync -> `vision` or `sync-vision`.

## Goal Plans

- Non-trivial work uses `docs/plans/YYYY-MM-DD-<slug>.md`.
- For externally ticketed work, prefix the plan with the ticket key only when
  the source system already has one.
- Templates live under `docs/plans/templates/**`; active runtime plans live
  directly under `docs/plans/`.
- Do not copy active runtime plans from another game into this template.
