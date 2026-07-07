---
description: Test-driven development and testing policy for Sira. Use for TDD, behavior coverage, Playwright tests, visual/canvas checks, flaky tests, and deciding proof boundaries.
argument-hint: '[test target | behavior | bug | proof question]'
disable-model-invocation: true
name: tdd
metadata:
  skiller:
    source: .agents/rules/tdd.mdc
---

# TDD

Use TDD when a behavior boundary is clear enough to test before or alongside
implementation. Do not add brittle tests just to satisfy ceremony.

## Preferred Boundaries

| Surface | Preferred proof |
|---|---|
| Pure logic/state machine | Unit or focused integration test |
| Portal flow | Playwright seam or focused gameplay test |
| Three.js/canvas rendering | Visual/canvas inspection plus targeted test seam |
| HUD/text interaction | Playwright/browser proof |
| Sensitive glyph/copy | Browser screenshot or explicit rendering check |
| Agent workflow | Script/source audit plus generated mirror check |

## Commands

- `npm run build`
- `npm test`
- `npm run verify:visual`
- `npm run inspect:canvas`

Run the narrowest useful command during iteration; run broader checks before
handoff when the change should ship.

## Red/Green

For bugs or behavior changes, prefer one failing repro first, then make it pass.
If no honest automated repro is feasible, record the manual/browser proof that
plays that role.

## Test Quality

- Tests should prove player-visible behavior or stable seams.
- Avoid tests that only pin implementation trivia.
- Keep sensitivity and no-sacred-depiction constraints explicit when relevant.
- Do not weaken a test to make a change pass; update it only when the product
  behavior intentionally changed and the source docs support that.
