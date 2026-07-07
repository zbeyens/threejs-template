---
description: Turn settled Sira context, design docs, milestone maps, or gameplay plans into implementation-ready Game Design Documents (GDDs) under docs/gdds.
argument-hint: '[conversation context | design doc | source doc | plan path]'
disable-model-invocation: true
name: to-gdd
metadata:
  skiller:
    source: .agents/rules/to-gdd.mdc
---

# To GDD

Handle $ARGUMENTS.

Synthesize settled context into an implementation-ready Game Design Document.
Sira ships GDDs, not generic PRDs: the artifact describes what the player does,
how it feels, and how it teaches the Sira, not a feature list. Do not interview
the user when source docs already answer the question. If a required gameplay,
sensitivity, or product decision is still unresolved, stop and route to
`grill-with-vision`, `design`, or `to-milestone` with the smallest missing
decision.

## Source Order

1. Latest user request and active goal plan.
2. `VISION.md`.
3. Existing milestone maps under `docs/milestones/**`.
4. User-named docs/plans/specs.
5. `docs/world1/**` (World 1 reference and systems docs).
6. Portal-specific GDDs under `docs/gdds/**`; for Hira, `docs/gdds/2026-07-07-portal-01-hira.md`.
8. Current source/tests only when the GDD depends on implemented behavior.

## Scope Ambition

Default to GDDs that produce a coherent playable outcome, not one tiny code
crumb. A good Sira GDD should move at least one visible gameplay surface:

- a portal flow or phase;
- a hub/portal progression behavior;
- a reward/journal loop;
- a sensitivity-safe narrative/gameplay sequence;
- a browser/canvas proofable system improvement.

If the work is only a guard, tiny refactor, copy tweak, test variation, or
source audit, route to `task`, `architecture-cleanup`, or `autoclosure` instead
of pretending it needs a GDD.

If the milestone picture is missing or stale, route to `to-milestone` first.

## GDD Location

Create or update:

```txt
docs/gdds/YYYY-MM-DD-<slug>.md
```

External publication is not default. Publish to GitHub only when the user
explicitly asks.

## Design Lock

Every GDD that touches gameplay/UI includes `## Design Lock`:

- source docs read;
- shipped/implemented UI or gameplay inventory, if any;
- target player action and learning outcome;
- 3-phase portal structure when relevant;
- each real mechanic specified with Input/System/Feedback/Parameters/Rationale;
- game-feel tiers (small/medium/large) for the mechanics that need feedback;
- sensitivity boundaries;
- browser/canvas proof expected;
- fidelity rule: implementation wires this design and does not redesign it
  unless a real regression or new user decision is recorded.

If no UI/gameplay surface is touched, write `N/A: no UI/gameplay surface`.

## GDD Template

```md
# <Title> GDD

## Milestone Context

- Active milestone map:
- Milestone movement:
- Why this is the next playable/product chunk:
- Why this is not smaller:

## Pitch

One sentence: what the player does, and why acting teaches this moment better
than a paragraph.

## Experience Pillars

- 3-4 named, one-sentence promises the whole surface must serve. Cut anything
  that serves none.

## Player Objective & Learning Outcome

- In-world objective:
- Gameplay verb (the one verb):
- Sira learned indirectly:

## Design Lock

- Player action:
- Learning outcome:
- Source docs:
- Sensitivity boundaries:
- Existing implementation:
- Target state:
- Browser/canvas proof:

## Core Loop

- Micro (~30 s verb loop):
- Portal (3 phases: learn -> variation/pressure -> moment fort final):
- Meta (reward, journal, hasanat/rank, return to hub):

## Mechanics

For each mechanic, no vague words without numbers. Flag unproven values with
`[PLAYTEST: value — what to validate]`:

- Mechanic:
  - Input:
  - System:
  - Feedback:
  - Parameters:
  - Rationale (+ sensitivity note):

## Obstacles & Failure

- Dangers:
- Non-punitive fail/calm/reset condition:

## Moment Fort Final

- The peak beat, sensitivity-safe (no sacred spectacle, no staged Revelation).

## Reward & Journal

- Reward:
- Short journal entry after victory:
- Clean return to hub:

## Game Feel

- Feedback tiers mapped to events (small/medium/large):
- Easing, anticipation/follow-through, and return-to-rest notes:
- Scene transitions (no hard cuts):
- Accessibility toggles (reduce-motion, reduce-flashing):
- Polish-after-playable and dignity-on-the-sacred notes:

## NPCs & Short Dialogue

- Fictional witnesses / anonymous NPCs:
- Short barks:

## Assets / VFX / SFX

- 3D assets:
- VFX / SFX:
- Generation prompts, when useful:

## Non-Goals

- Out-of-scope behavior.

## Implementation Notes

- Durable decisions already made.
- Expected ownership boundaries.
- Interfaces or contracts in behavioral language.

## Testing And Proof

- Build/typecheck:
- Focused tests:
- Browser/canvas proof:
- Sensitivity/glyph proof:

## Issue Slicing Guidance

- Vertical slice candidates.
- Dependencies.
- HITL decisions, if any.

## MVP vs Premium

- MVP buildable fast:
- Premium later:

## Open Questions

- None, or exact blocking question.
```

## Review Gates

Before closeout:

- source docs and `VISION.md` were read;
- GDD is current-state prose, not changelog prose;
- scope is implementation-ready;
- every real mechanic carries Input/System/Feedback/Parameters/Rationale;
- game feel is proportional (tiered) and returns to rest;
- sensitivity boundaries are explicit;
- proof boundary is named;
- GDD does not contain fake future UI, quiz-first gameplay, sacred spectacle, or
  stale source-file checklists;
- scoped autoreview or self-review findings are fixed/recorded;
- active goal plan passes `check-complete.mjs` when applicable.

## Handoff

Report the GDD path, source docs used, whether a milestone map was updated or
needed, proof boundaries, and next recommended `to-issues` or `task` owner.
