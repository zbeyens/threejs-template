---
description: Run a bounded review of a Sira code, docs, design, or agent-workflow diff before closeout.
argument-hint: '[diff | plan path | review target]'
disable-model-invocation: true
name: autoreview
metadata:
  skiller:
    source: .agents/rules/autoreview.mdc
---

# Autoreview

Use this as a final bounded review gate for non-trivial changes. Lead with
bugs, regressions, missing proof, sensitivity risks, and acceptance gaps.

## Review Priorities

1. User request and active goal plan.
2. Functional correctness.
3. Sensitivity guardrails.
4. Browser/canvas/gameplay proof.
5. Tests/build/checks.
6. Design consistency with `VISION.md` and source docs.
7. Agent workflow/source mirror parity when `.agents/**`, `.claude/**`, or
   `.codex/**` changed.

## Sira-Specific Findings

Flag as high severity when a change:

- represents a sacred figure or stages Revelation directly;
- turns a portal into a quiz/text wrapper against the source docs;
- leaves a Three.js canvas blank, badly framed, or unverified after scene work;
- introduces long in-action text, tiny touch targets, or fake future UI;
- skips proof for changed gameplay/HUD/browser behavior;
- edits generated skill mirrors while source rules exist.

## Output

Findings first, ordered by severity, with file/line references when possible.
Then open questions, then a short verification gap summary. If no issues are
found, say so and name residual risk.

## Closeout

For accepted findings, fix or record why they are rejected. Rerun relevant
proof after meaningful fixes.
