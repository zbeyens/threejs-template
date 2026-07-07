# {{TITLE}}

Objective:
TODO: Write the short autoclosure objective, under 240 characters. Put the full
closure contract below.

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Closure source:
- type: pending
- prompt / link: pending
- target kind: pending
- target ref / surface: pending
- base / comparison: pending
- PR/range diff artifacts: pending
- current tree scope: pending
- completion threshold summary: pending

First checkpoint:
- Before implementation or broad exploration, copy every explicit prompt
  requirement into this plan as checkable rows: target, scope, non-goals, stop
  conditions, deliverables, final handoff sections, verification surfaces, and
  success criteria.
- Do not continue into closure work until this extraction is complete or marked
  N/A with reason.

Completion threshold:
- TODO: Define the exact autoclosure clean state.
- Clean is legal only when there are zero accepted actionable review findings,
  required focused proof after the last patch is green or N/A with reason,
  architecture/docs/model/runtime/generated-output rows are closed,
  review-attention and residual-risk rows are filled, and
  `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}`
  passes.
- For risky agent-rule, model-contract, runtime-contract, data-contract, or
  broad refactor diffs, require two consecutive clean closure passes after the
  last patch.

Verification surface:
- TODO: Name the source audits, focused tests, Browser/Chrome/Computer proof,
  docs/build checks, generated-output sync, `autoreview`, and optional
  `architecture-cleanup` proof that prove closure.

Constraints:
- Closure target is already-landed/current-tree/branch work; do not expand into
  broad product/research work unless a row routes to `grill-with-vision` or a
  named owner skill.
- Do not create or use git worktrees, detached sibling checkouts, throwaway
  clones of this repo, or branch switching for autoclosure.
- Patch safe findings; route model/runtime/product/data-contract forks to
  `grill-with-vision` or the named owner skill.
- Commit and push complete closure fixes per repo policy.
- Open PRs, merge, release, deploy, or mutate external systems only when
  explicitly authorized.
- Do not call stale, speculative, or out-of-scope review findings accepted.
- Do not leave dirty speculative half-patches.

Boundaries:
- Source of truth: pending
- Allowed edit scope: pending
- Target diff/tree scope: pending
- PR/range artifact scope: pending
- Browser surfaces: pending
- App/model/runtime/API surfaces: pending
- Workflow/external-service surfaces: pending
- Agent/skill surfaces: pending
- Docs/generated-output surfaces: pending
- Non-goals: pending

Blocked condition:
- TODO: Name the authority, taste gap, unavailable proof surface, unsafe
  model/runtime fork, missing source, repeated blocker, or external
  credential/device/service that stops autonomous closure.

Closure state:
- target_kind: pending
- target_ref: pending
- base_ref: pending
- loop_count: 0
- last_patch_loop: pending
- consecutive_clean_passes: 0
- clean_required_passes: pending
- current_pass: checkpoint-zero
- current_pass_status: in_progress
- next_pass: target-map
- goal_status: active

Current verdict:
- verdict: pending
- confidence: pending
- next owner: autoclosure
- clean / patch / reject / route call: pending
- reason: pending

Completion rule:
- Do not call `update_goal(status: complete)` while any required checklist item
  remains unchecked. If an item does not apply, check it and add
  `N/A: <reason>`.
- Do not call `update_goal(status: complete)` until every completion threshold
  above is satisfied, final handoff evidence is recorded, and
  `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}`
  passes.

Start Gates:
| Gate | Applies | Evidence |
|------|---------|----------|
| Prompt requirements captured before work | pending | pending |
| `autoclosure` source rule read | pending | pending |
| `vision` / root `VISION.md` read | pending | pending |
| `.agents/AGENTS.md` routing read | pending | pending |
| Active goal checked or created | pending | pending |
| Target kind resolved | pending | pending |
| Base/comparison resolved or marked N/A | pending | pending |
| PR/range diff captured when target is not current checkout | pending | pending |
| Output budget strategy recorded | pending | pending |
| Public authority boundary recorded | pending | pending |
| Browser proof decision recorded | pending | pending |
| App/model/runtime proof decision recorded | pending | pending |
| Agent/rule/generated-output sync decision recorded | pending | pending |

Work Checklist:
- [ ] First checkpoint complete.
- [ ] Target map records changed files, untracked files, generated outputs,
      app routes, docs, tests, workflows, agent rules, model/scoring/source
      adapter touches, and browser surfaces in scope, or N/A with reason.
- [ ] No worktree/shadow-checkout proof is used.
- [ ] Coherence audit checks stale dirty fixes, fake aliases, docs/runtime
      mismatch, orphan tests, stale generated output, weak proof commands,
      swallowed errors, source/model/scoring drift, and product-boundary drift.
- [ ] Focused proof is run for each changed behavior/model/runtime/docs
      surface, or marked N/A with reason.
- [ ] `autoreview` target mode is selected from actual target state.
- [ ] Each accepted `autoreview` finding is fixed or rejected with source-backed
      reason.
- [ ] Affected proof is rerun after every accepted finding fix.
- [ ] `autoreview` is rerun after material fixes until zero accepted actionable
      findings remain.
- [ ] `architecture-cleanup` is invoked when review/coherence finds
      source-shape, deslop, over-split, fake-wrapper, or agent-navigation
      issues, or marked N/A with reason.
- [ ] Model/runtime/product/data-contract forks are routed to
      `grill-with-vision` or owner, not patched blindly.
- [ ] Generated outputs are synced when source owners require it, or marked N/A.
- [ ] Browser proof is run for browser-visible app/docs behavior, or marked N/A
      with reason.
- [ ] Agent-native review is run for `.agents/**`, skills, hooks, commands,
      prompts, or user-action tooling, or marked N/A with reason.
- [ ] Needs-your-attention list is ranked and capped at five items.
- [ ] Stopping checkpoints are queued or marked none.
- [ ] No dirty speculative half-patch remains: every packet is kept, reverted,
      quarantined, or routed.
- [ ] Clean pass count satisfies the required clean pass count.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|------|---------|-----------------|----------|
| Named verification threshold | pending | Run the proof commands/artifacts named in this plan | pending |
| Workspace authority proof | pending | Record cwd/tool for every proof command | pending |
| Target map closure | pending | Record target files/surfaces and comparison basis | pending |
| No worktree closure | pending | Confirm no `git worktree`, detached sibling checkout, throwaway same-repo clone, or branch switch was used for closure proof | pending |
| Coherence audit closure | pending | Close stale fixes/docs/model/runtime/orphan/generated/boundary rows | pending |
| Focused proof after last patch | pending | Run focused proof or record N/A with reason | pending |
| Browser proof | pending | Capture Browser/Chrome/Computer route proof or record N/A/blocker | pending |
| App/model/runtime proof | pending | Run focused test/type/source audit or record N/A | pending |
| Docs/generated-output proof | pending | Run docs/generated-output/source audit or record N/A | pending |
| Agent/rule/generated sync | pending | Run `bun install` and mirror audit when `.agents/rules/**` changed, otherwise N/A | pending |
| Architecture cleanup | pending | Invoke `architecture-cleanup` for source-shape findings or record N/A | pending |
| Findings ledger closure | pending | Every accepted/rejected/routed finding has evidence | pending |
| Clean pass count | pending | Record consecutive clean passes after the last patch | pending |
| Changed list / review attention / stopping checkpoints | pending | Fill final handoff ledgers from current evidence | pending |
| Agent-native review | pending | Load `agent-native-reviewer` for agent/tooling changes or record N/A | pending |
| Autoreview | pending | Load `autoreview`, run selected target mode, fix/reject accepted findings, rerun after material fixes until clean | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Verification evidence:
- Pending.

Final handoff:
- Closure target and comparison: pending
- Loop count and clean pass result: pending
- Changed list: pending
- Accepted findings fixed: pending
- Findings rejected/routed: pending
- Commands: pending
- Review attention: pending
- Residual risks: pending
- Next owner: pending

Open risks:
- Pending.
