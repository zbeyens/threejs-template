# {{TITLE}}

Objective:
TODO: Write issue-slicing objective.

Flow mode:
one-shot execution

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Linked plans:
- None.

Issue source:
- source artifact: TODO
- destination: TODO: local `docs/issues/*.md` or GitHub if requested
- milestone map: TODO or N/A

Completion threshold:
- Source artifact is read.
- Reviewable vertical slices are written with acceptance criteria, proof boundaries, non-goals, and AFK/HITL classification.
- GitHub publication/read-back is complete only when requested.
- `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` passes.

Verification surface:
- Source audit.
- Consolidation review.
- Optional GitHub read-back.

Constraints:
- Do not publish externally unless requested.
- Do not create tiny guard/test/proof crumbs as standalone slices without a hard reason.

Boundaries:
- Allowed edit scope: issue artifact, active plan, GDD/milestone only when repair is required.
- Non-goals: implementation unless explicitly requested.

Output budget strategy:
- TODO.

Blocked condition:
- TODO.

Start Gates:
| Gate | Applies | Evidence |
|---|---|---|
| Requirements captured | pending | pending |
| Source artifact read | pending | pending |
| Readiness triage | pending | pending |
| Destination selected | pending | pending |
| Sensitivity requirements carried forward | pending | pending |

Work Checklist:
- [ ] Source is classified as ready or routed back.
- [ ] Every kept slice is vertical and reviewable.
- [ ] Acceptance criteria are observable.
- [ ] Proof boundary is named.
- [ ] AFK/HITL/prefactor classification is recorded.
- [ ] Anti-oversplit consolidation is recorded.
- [ ] GitHub publication is N/A or read back.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|---|---|---|---|
| Issue artifact | yes | Create/update local issue breakdown | pending |
| Consolidation review | yes | Merge tiny/duplicate slices or justify | pending |
| GitHub sync | pending | Publish/read back only if requested | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Phase / pass table:
| Phase | Status | Evidence | Next |
|---|---|---|---|
| Intake | in_progress | plan created | slicing |
| Slicing | pending | | review |
| Review | pending | | closeout |
| Closeout | pending | | final response |

Findings:
- None yet.

Decisions and tradeoffs:
- None yet.

Verification evidence:
- Pending.

Reboot status:
| Question | Answer |
|---|---|
| Where am I? | Intake |
| Where am I going? | Slicing and review |
| What is the goal? | TODO |
| What learned? | See Findings |
| What done? | See Timeline |

Timeline:
- Plan created.

Open risks:
- Pending.
