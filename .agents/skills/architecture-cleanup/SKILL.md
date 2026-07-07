---
description: Clean Sira code shape and agent navigation with source-backed delete/merge/inline/split decisions.
argument-hint: '[surface | folder | plan path | cleanup target]'
disable-model-invocation: true
name: architecture-cleanup
metadata:
  skiller:
    source: .agents/rules/architecture-cleanup.mdc
---

# Architecture Cleanup

Use when the task is about code shape, simplicity, ownership, deslop,
over-splitting, stale compatibility, or agent navigation cost.

## Rules

- Read `VISION.md`, relevant docs, and nearby source before editing.
- Prefer fewer clearer owners over new abstraction.
- Delete stale compatibility only when behavior is proven unused or the user
  requested a hard cut.
- Keep gameplay logic, rendering, state/progression, HUD, and test seams easy
  to find.
- Do not move broad code just for aesthetics; tie every move to a concrete
  complexity or proof improvement.
- For Three.js/game code, preserve performance expectations and test seams.

## Proof

Choose proof by touched surface:

- `npm run build`;
- focused tests;
- browser/canvas proof for visible gameplay changes;
- source audit showing stale symbols removed;
- `VISION.md`/docs update when reusable ownership doctrine changes.

## Handoff

Report what was merged, deleted, renamed, or left alone, with verification and
residual risk.
