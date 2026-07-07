# {{TITLE}}

Objective:
TODO: Write milestone-map objective.

Flow mode:
one-shot execution

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Linked plans:
- None.

Milestone source:
- target map path: TODO
- source docs: TODO
- external mirror: TODO or N/A

Completion threshold:
- Milestone map exists under `docs/milestones/`.
- Map has thesis, current inputs, target story, required surfaces, draft GDD ladder, non-splits, pivots, next `to-gdd`, and non-goals.
- `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` passes.

Verification surface:
- `VISION.md` and Three.js template docs source audit.
- Map self-review/autoreview.

Constraints:
- Keep map strategic and pivotable; do not write GDD or issue bodies here.
- Do not publish externally unless requested.

Boundaries:
- Allowed edit scope: milestone map, active plan, `VISION.md` if doctrine changes.
- Non-goals: implementation and issue publication.

Output budget strategy:
- TODO.

Blocked condition:
- TODO.

Start Gates:
| Gate | Applies | Evidence |
|---|---|---|
| Requirements captured | pending | pending |
| `VISION.md` read | pending | pending |
| Current docs inventoried | pending | pending |
| Existing milestone maps checked | pending | pending |
| Target map path selected | pending | pending |

Work Checklist:
- [ ] Thesis and why-now are source-backed.
- [ ] Current inputs are inventoried.
- [ ] Required surfaces include gameplay, world, UI/HUD, progression, content/sensitivity, assets, and proof.
- [ ] Draft GDD ladder has outcome, lane, docs refs, pivot trigger, and status.
- [ ] Non-splits and next `to-gdd` are explicit.
- [ ] External mirror is N/A or requested/proven.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|---|---|---|---|
| Milestone map artifact | yes | Create/update `docs/milestones/*.md` | pending |
| Source-backed map audit | yes | Verify claims against docs | pending |
| External mirror | pending | Publish/read back only if requested | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Phase / pass table:
| Phase | Status | Evidence | Next |
|---|---|---|---|
| Intake | in_progress | plan created | map writing |
| Map writing | pending | | review |
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
| Where am I going? | Map writing and review |
| What is the goal? | TODO |
| What learned? | See Findings |
| What done? | See Timeline |

Timeline:
- Plan created.

Open risks:
- Pending.
