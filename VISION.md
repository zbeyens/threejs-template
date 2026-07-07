# Three.js Template Vision

This repo is a public starter for building browser games with Vite, React,
Three.js, strict TypeScript, Playwright proof, and agent-native workflow.

## Product Doctrine

- The first screen is the playable starter scene, not a landing page.
- The starter must stay generic: no fixed story world, content policy, economy,
  monetization model, or asset pipeline until a real game asks for it.
- Every game built from this template should start with a clear verb, visible
  feedback, responsive camera/framing, keyboard controls, touch controls, and
  fast reset paths.
- Gameplay text stays short during action. Longer explanation belongs in docs,
  menus, journals, debriefs, or design artifacts.
- The template should be easy to delete from: sample systems are teaching
  scaffolds, not permanent architecture.

## Design Doctrine

- Three.js scenes must be nonblank, framed, responsive, and interactive across
  desktop and mobile when feasible.
- Game feel matters: actions should produce layered feedback, eased motion,
  readable state changes, and a return to rest.
- UI should be quiet, readable, and touch-safe. Avoid fake future buttons, WIP
  labels, and oversized explanatory panels inside gameplay.
- Use real browser proof for visual/gameplay decisions; screenshots alone do
  not prove interaction.
- Add visual assets only when they teach the game or prove the pipeline. Do not
  bloat the starter with decorative assets.

## Runtime Doctrine

- Use `npm` scripts.
- Main commands:
  - `npm run build`
  - `npm test`
  - `npm run verify:visual`
  - `npm run inspect:canvas`
  - `npm run dev -- --port <port>`
- Browser proof should check console errors, page errors, canvas visibility,
  canvas variance/nonblank state, responsive layout, and interaction.
- Keep generated artifacts, reports, screenshots, build output, and local env
  files out of commits unless the user explicitly asks otherwise.
- Blender MCP is optional local tooling for asset workflows; ordinary build/test
  proof must not depend on Blender.

## Agent Workflow Doctrine

- `.agents/AGENTS.md` and `.agents/rules/*.mdc` are the editable source of
  truth for agent instructions.
- Run `npx skiller@latest apply` after agent-rule edits.
- `docs/plans/templates/**` are reusable plan templates.
- Active runtime plans live directly under `docs/plans/` and should not be
  copied between games.
- Goal-backed work should record evidence, not confidence theater.

## Source Order

1. Latest user instruction and active goal plan.
2. `VISION.md`.
3. `README.md`.
4. `AGENTS.md` and `.agents/AGENTS.md`.
5. Current source and tests.
6. Current docs/GDDs when a game-specific plan exists.

## Proof Doctrine

- Code changes normally prove with `npm run build` and focused tests.
- Gameplay/canvas changes need Playwright or Browser proof when feasible.
- Agent-workflow changes need `npx skiller@latest apply`, generated mirror
  audit, and stale project-term audit.
- Public template changes need a secret audit before push.
