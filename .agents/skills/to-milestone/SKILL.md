---
description: Draft high-level, pivotable Sira milestone maps from VISION and current docs before implementation-ready GDDs.
argument-hint: '[milestone area | vision context | current roadmap]'
disable-model-invocation: true
name: to-milestone
metadata:
  skiller:
    source: .agents/rules/to-milestone.mdc
---

# To Milestone

Handle $ARGUMENTS.

Create or update high-level milestone maps. This sits above `to-gdd`: it gives
the product/gameplay picture, then `to-gdd` writes the implementation-ready GDD
for the next playable chunk.

Milestone maps are not final GDDs, issue parents, or approval gates. They are
pivotable planning artifacts.

## Output

Write milestone maps under:

```txt
docs/milestones/YYYY-MM-DD-<slug>-milestone-map.md
```

GitHub publication is not default. Only mirror there when the user explicitly
asks.

## Source Order

1. `VISION.md`.
2. Existing milestone maps.
3. Current `docs/gdds/**`.
4. `docs/world1/**`.
5. Portal-specific docs such as `docs/gdds/2026-07-07-portal-01-hira.md`.
7. Current source/tests only when needed to tell shipped from aspirational.

Inventory docs by filename/category first. Deep-read only the sources that can
change order, scope, sensitivity, or proof.

## Milestone Map Shape

Each map should contain:

- milestone thesis;
- why it matters now;
- current shipped/proven inputs;
- target player/product story;
- required gameplay, world, UI/HUD, state/progression, content, asset, proof,
  and sensitivity surfaces;
- draft GDD ladder;
- what should not become separate GDDs;
- expected browser/gameplay proof;
- open pivots and triggers;
- explicit non-goals;
- next recommended `to-gdd`.

Keep it strategic enough to pivot. Do not write issue-level acceptance criteria
or file checklists here.

## Draft GDD Ladder

Each milestone map carries a maintained ladder of draft GDDs:

- one row per draft;
- outcome in 1-2 lines;
- lane: `design-first`, `gameplay-first`, `systems-first`, or `mixed`;
- source doc refs;
- pivot trigger;
- status: `queued`, `drafting`, `active`, `done`, `cut`, or `blocked`.

Bundle sibling surfaces that share the same player outcome or proof boundary.
Do not create one GDD per tiny UI/control/test/refactor.

## Template

```md
# <Milestone Name> Milestone Map

Status: Draft map for planning, not implementation GDD.
Date:
Owner:

## Thesis

## Why Now

## Current Inputs

| Input | Status | Evidence | Impact |
|---|---|---|---|

## Target Player Story

## Required Surfaces

| Surface | Must move by milestone | Evidence/proof expected |
|---|---|---|
| Gameplay | | |
| World / level design | | |
| UI / HUD | | |
| Progression / rewards | | |
| Content / sensitivity | | |
| Assets / VFX / SFX | | |
| Tests / browser proof | | |

## Draft GDD Ladder

| Order | Draft GDD | Outcome | Lane | Docs refs | Pivot trigger | Status |
|---|---|---|---|---|---|---|

## Do Not Split Into Separate GDDs

## Product-Review-Worthy Issue Bar

## Open Pivots

## Next Recommended `to-gdd`

## Non-Goals

## Done Means
```

## Done

- A repo milestone map exists under `docs/milestones/`.
- It names thesis, current inputs, required surfaces, draft GDD ladder,
  non-splits, pivots, and next `to-gdd`.
- It is source-backed from `VISION.md` and current docs.
- It stays high-level and does not become a GDD or issue list.
- Active goal plan passes `check-complete.mjs` when applicable.
