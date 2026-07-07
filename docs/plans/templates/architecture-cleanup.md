# {{TITLE}}

Objective:
TODO: Write the short architecture-cleanup objective, under 240 characters.

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Cleanup source:
- type: pending
- id / link: pending
- title: pending
- requested surface: pending
- cleanup intent: pending
- acceptance criteria: pending

First checkpoint:
- Before implementation or broad exploration, copy every explicit prompt
  requirement into this plan as checkable checkpoints: scope, non-goals,
  timing/duration, stop conditions, deliverables, final handoff sections,
  verification surface, and success criteria.
- Do not continue into implementation until this extraction is complete or
  explicitly marked N/A with reason.

Timed checkpoint:
- requested duration: pending
- semantics: pending
- initial confidence / cleanliness score: pending
- improvement loop: pending
- final score / loop closure: pending

Completion threshold:
- TODO: Define the exact cleanup done state.
- Architecture-cleanup closure is legal only when source map, deslop inventory,
  candidate matrix, agent-navigation score, packet ledger, proof evidence,
  changed list, and final handoff are complete or explicitly N/A, and
  `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}`
  passes.

Verification surface:
- TODO: Name the source audit, focused proof, lint/typecheck/test, Browser /
  Chrome / Computer proof, generated-output sync, or artifact proving the
  threshold.

Constraints:
- Do not split files because they are large.
- Prefer delete, merge, inline, or simplify over extraction when that improves
  comprehension.
- Do not change product UX, model/runtime/API contracts, data contracts,
  external service contracts, or behavior under a cleanup packet.
- Focused proof comes before broad proof.
- No dirty speculative work at handoff: keep, revert, or quarantine.

Boundaries:
- Source of truth: pending
- Allowed edit scope: pending
- Product/model/runtime boundary: pending
- Source-adapter/scoring/workflow boundary: pending
- Browser surface: pending
- Observability surface: pending
- Non-goals: pending

Output budget strategy:
- pending

Blocked condition:
- pending

Cleanup state:
- task_type: architecture-cleanup
- task_complexity: pending
- current_phase: intake
- current_phase_status: in_progress
- next_phase: source map
- goal_status: active

Current verdict:
- verdict: pending
- cleanliness confidence: pending
- next owner: architecture-cleanup
- keep / revert / quarantine call: pending
- reason: pending

Completion rule:
- Do not call `update_goal(status: complete)` while any required checklist item
  remains unchecked. If an item does not apply, check it and add `N/A: <reason>`.
- Do not call `update_goal(status: complete)` until every completion threshold
  above is satisfied, final evidence is recorded, and
  `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}`
  passes.

Start Gates:
| Gate | Applies | Evidence |
|------|---------|----------|
| Prompt requirements captured before work | pending | pending |
| Timed checkpoint parsed | pending | pending |
| `architecture-cleanup` loaded | pending | pending |
| Active goal checked or created | pending | pending |
| Source of truth read before analysis | pending | pending |
| VISION fit gate read | pending | pending |
| Product/model/runtime boundary selected | pending | pending |
| Cleanup surface selected | pending | pending |
| Non-goals recorded | pending | pending |
| Output budget strategy recorded | pending | pending |
| Implementation authority decided | pending | pending |
| Proof strategy selected | pending | pending |

Work Checklist:
- [ ] First checkpoint complete: every explicit prompt requirement, scope
      boundary, timing constraint, stop condition, deliverable, final handoff
      section, verification surface, and success criterion is copied into this
      plan as checkable checkpoints before implementation.
- [ ] Source map records largest files, owner files, model/runtime boundaries,
      tests, docs, and proof owners for the surface.
- [ ] Deslop inventory records wrappers, pass-through modules, duplicate
      helpers, vague names, stale compatibility, orphan tests, stale source
      oracles, swallowed errors, and over-split files.
- [ ] Candidate matrix ranks at least five candidates unless the prompt names a
      smaller surface.
- [ ] Every candidate has a decision: delete, merge, inline, simplify, split,
      keep, defer, reject, or plan.
- [ ] Every candidate records an agent-navigation score: files-to-read,
      owners-touched, proof clarity, public/private clarity, and net effect.
- [ ] Anti-confetti rule applied: no split is accepted without durable owner,
      stable name, focused proof, and lower future navigation cost.
- [ ] Merge/delete/inline are considered as seriously as extraction.
- [ ] VISION fit is recorded; missing reusable taste routes to `vision` or
      `sync-vision`.
- [ ] Implementation packets are behavior-neutral, model/runtime-contract
      neutral, narrow, reversible, and have focused proof.
- [ ] Each implementation packet ends keep, revert, or quarantine.
- [ ] Source-owner oracle is added or repaired when ownership moves, or N/A
      reason is recorded.
- [ ] Focused proof is run before broad proof for changed code.
- [ ] Broad proof is run after multiple packets, import churn, or
      model/runtime boundary changes.
- [ ] Workspace authority recorded: every proof command names the cwd/tool that
      owns the analyzed or changed behavior.
- [ ] Output budget discipline recorded and followed: broad searches are
      scoped, capped, counted, or artifacted instead of streamed.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|------|---------|-----------------|----------|
| Named verification threshold | pending | Run the command, proof, source audit, or artifact check named in this plan | pending |
| Source map complete | pending | Record current owners, large files, model/runtime boundaries, tests, and proof owners | pending |
| Deslop inventory complete | pending | Record concrete stale/shallow/duplicated/over-split surfaces | pending |
| Candidate matrix complete | pending | Rank candidates with facts, action, owner, proof, and decision | pending |
| Agent-navigation score complete | pending | Record before/after or expected files-to-read / owner / proof clarity changes | pending |
| Anti-confetti gate | pending | Prove accepted splits reduce navigation cost or record no split accepted | pending |
| Delete / merge / inline gate | pending | Record considered simplifications and why accepted/rejected | pending |
| VISION fit gate | pending | Confirm fit to VISION.md or record sync-vision/stop decision | pending |
| Implementation packet gate | pending | For every code packet, record keep/revert/quarantine and focused proof | pending |
| Source-owner oracle gate | pending | Repair or add tests/oracles when ownership moves, or N/A | pending |
| Runtime/product behavior safety gate | pending | Prove no product behavior/model/runtime contract changed, or route to plan owner | pending |
| Browser proof | pending | Run Browser/Chrome/Computer proof when visible behavior changed, or N/A | pending |
| Final lint/check | pending | Run focused/broad lint/typecheck/test appropriate to touched files | pending |
| Output budget discipline | pending | Verify no unbounded high-volume output was streamed, or record recovery | pending |
| Timed checkpoint | pending | If duration was requested, keep improving until elapsed, then finish current packet cleanly; otherwise N/A | pending |
| Final handoff contract | pending | Fill changed list, cleanup counts, proof, needs-review, residual risks, and next owner | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Phase / pass table:
| Phase | Status | Evidence | Next |
|-------|--------|----------|------|
| Intake and source read | in_progress | created plan | source map |
| Source map | pending | | deslop inventory |
| Deslop inventory | pending | | candidate matrix |
| Candidate matrix | pending | | cleanup packets / owner routing |
| Cleanup packets / owner routing | pending | | verification |
| Verification | pending | | closeout |
| Closeout | pending | | final response |

Candidate matrix:
| Rank | Strength | Candidate | Files | Facts | Navigation score | Recommendation | Owner | Proof | Decision |
|------|----------|-----------|-------|-------|------------------|----------------|-------|-------|----------|
| pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |

Verification evidence:
- Pending.

Final handoff contract:
- Source roots inspected: pending
- Candidate count and top recommendation: pending
- Cleanup counts: pending
- Agent-navigation score changes: pending
- Packets applied with keep/revert/quarantine result: pending
- Proof commands/source audits: pending
- Rejected/deferred candidates: pending
- Needs-review list: pending
- Residual risks: pending
- Next owner and exact first command/file: pending

Open risks:
- Pending.
