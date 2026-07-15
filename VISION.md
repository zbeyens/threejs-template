# Three.js Template Vision

This repository is a public starter for browser games built with Vite, React,
TypeScript, Three.js, fast browser proof, and an agent-native production flow.

## Product Doctrine

- The first screen is playable, not a landing page.
- The starter locks no audience, genre, story, world, economy, camera, gameplay
  loop, content policy, or visual direction.
- Sample systems are disposable teaching scaffolds.
- A game starts with clear verbs, visible feedback, responsive framing,
  keyboard/touch controls, and fast deterministic reset or proof states.

## Design Doctrine

- Each game owns one GDD containing decisions, visual references, targets,
  constraints, assets, proof, waivers, and status.
- Reference pixels—not template taste—own visual direction.
- Generated targets must be buildable in the selected engine, camera, budget,
  and asset lanes.
- Real interaction and final pixels matter more than confidence, diagnostics, or
  screenshot-production success.

## Production Doctrine

- Use `game-design -> [game-visual] -> game-build -> game-polish`.
- Use `game-full` for requests spanning the complete flow.
- Use `gameblocks` for gameplay/runtime work.
- Route every 3D asset through `game-3d-asset-pipeline`.
- Tripo is generation-only. Mixamo owns biped autorig/animation. BlenderMCP or a
  GDD-approved creature owner handles non-biped rigs and authored animation.
- Bootstrap builder/catalog infrastructure only when a game needs it; do not
  burden the starter runtime with copied production content.

## Runtime Doctrine

- Use the repository's current npm scripts as owner truth.
- Verify canvas visibility, variance, framing, responsive layout, interaction,
  console errors, and page errors.
- Keep provider calls and generated assets in tooling flows, never client-side
  API paths.
- Keep local env files, credentials, generated reports, and caches out of
  commits.

## Agent Doctrine

- Edit `.agents/AGENTS.md` and `.agents/rules/*.mdc`, then run
  `npx skiller@latest apply`.
- Generated skill mirrors are evidence, not edit targets.
- Persist hard-won generic production lessons through `game-memory`.
- Do not import another game's assets, GDDs, proofs, product rules, or visual
  opinions.

## Proof Doctrine

- Logic and workflow changes use focused automated checks.
- Rendered changes require bounded browser proof.
- Visual acceptance requires opening the exact final capture at original
  resolution and recording `PASS` or `FIX` against the GDD.
- Agent-workflow changes require mirror regeneration, exact skill inventory,
  stale-term audit, and secret/cache audit.
