# {{TITLE}}

Objective:
TODO: Short create_goal objective.

Flow mode:
TODO: one-shot execution, agent-led plan hardening, or collaborative planning.

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Linked plans:
- None.

Completion threshold:
- TODO: Define exact done state.

Verification surface:
- TODO: Commands, source audits, browser/canvas proof, artifacts, review, or external source proof.

Constraints:
- Follow `VISION.md` and Three.js template source docs.
- Preserve behavior outside scope.
- Do not publish externally unless requested.

Boundaries:
- Source of truth: TODO.
- Allowed edit scope: TODO.
- Non-goals: TODO.

Output budget strategy:
- TODO.

Blocked condition:
- TODO.

Start Gates:
| Gate | Applies | Evidence |
|---|---|---|
| Requirements captured | pending | pending |
| Active goal checked or created | pending | pending |
| Source of truth read | pending | pending |
| Verification strategy selected | pending | pending |

Work Checklist:
- [ ] Objective, threshold, verification surface, constraints, boundaries, output budget, and blocked condition are concrete.
- [ ] Required source context is read.
- [ ] Work is complete or blocked with evidence.
- [ ] Verification evidence is recorded.
- [ ] Review/autoreview is recorded or N/A.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|---|---|---|---|
| Named verification threshold | pending | Run proof or record blocker | pending |
| Autoreview | pending | Review final diff/output | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Phase / pass table:
| Phase | Status | Evidence | Next |
|---|---|---|---|
| Intake | in_progress | plan created | work |
| Work | pending | | verification |
| Verification | pending | | closeout |
| Closeout | pending | | final response |

Findings:
- None yet.

Decisions and tradeoffs:
- None yet.

Review fixes:
- None yet.

Error attempts:
| Error / failed attempt | Count | Next different move | Resolution |
|---|---:|---|---|

Verification evidence:
- Pending.

Reboot status:
| Question | Answer |
|---|---|
| Where am I? | Intake |
| Where am I going? | Work, verification, closeout |
| What is the goal? | TODO |
| What learned? | See Findings |
| What done? | See Timeline |

Timeline:
- Plan created.

Open risks:
- Pending.
