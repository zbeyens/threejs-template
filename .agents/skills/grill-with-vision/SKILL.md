---
description: Pressure-test a Sira product, gameplay, design, sensitivity, content, or workflow idea against VISION and docs before GDD, issues, prototype, or implementation.
argument-hint: '[idea, plan, transcript, source docs, or open decision]'
disable-model-invocation: true
name: grill-with-vision
metadata:
  skiller:
    source: .agents/rules/grill-with-vision.mdc
---

# Grill With Vision

Handle $ARGUMENTS.

Use this when intent is still fuzzy. The output is a sharper decision, not a
GDD or implementation unless the user asks for that next step.

## Read First

1. Active goal plan, when one exists.
2. `VISION.md`.
3. User-named artifacts.
4. Relevant Sira docs: `docs/world1/**`, `docs/plans/**`, `docs/gdds/**`,
   and `docs/milestones/**`.
5. Current source only when it can answer the decision.

## Pressure Lenses

- What does the player do?
- What does the action teach?
- Is the portal a real mini-game or a quiz/text wrapper?
- Which sensitivity boundary could be crossed?
- What is the smallest proof that would make the decision real?
- Does the idea belong in vision, milestone, GDD, issue, task, or backlog?

## Interview Loop

Ask one focused question at a time only when source docs cannot decide. For
each question:

1. State the decision fork.
2. Give the recommended answer first.
3. Explain the tradeoff briefly.
4. Name what changes downstream if the answer differs.

Push back on vague words. Propose Sira-specific vocabulary when needed and
capture durable definitions in `VISION.md` or a source doc.

## Durable Notes

Update `VISION.md` when the session settles reusable product, gameplay,
design, sensitivity, proof, or workflow doctrine. Use
`docs/brainstorms/YYYY-MM-DD-<slug>.md` only for messy reasoning that is worth
keeping but not stable doctrine.

## Stop Boundary

Stop when the next useful move is `to-milestone`, `to-gdd`, `to-issues`,
`design`, `prototype`, or `task`. Hand off to that owner instead of continuing
to widen the grill.
