# {{TITLE}}

Objective:
TODO: Short create_goal objective.

Flow mode:
one-shot execution

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Linked plans:
- None.

Task source:
- type: pending
- id / link: {{TASK_SOURCE_LINK}}
- title: pending
- acceptance criteria: pending
- readiness verdict: pending
- proof boundary: pending

Timed checkpoint:
- requested duration: pending
- semantics: pending
- initial confidence score: pending
- improvement loop: pending
- final score / loop closure: pending

Completion threshold:
- TODO: Define exact done state.
- Acceptance criteria are satisfied or explicitly narrowed.
- Required checks/proofs are recorded.
- Active goal plan passes `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}`.

Verification surface:
- TODO: Name build/tests/browser/canvas/docs/agent checks.

Constraints:
- Preserve behavior outside scope.
- Follow `VISION.md` and relevant Three.js template docs.
- Commit and push complete features or modifications per repo policy.
- Open PRs or publish externally only when requested.

Boundaries:
- Source of truth: TODO.
- Allowed edit scope: TODO.
- Browser/canvas surface: TODO.
- Sensitivity surface: TODO.
- GitHub sync: TODO or N/A.
- Non-goals: TODO.

Output budget strategy:
- TODO: Record scoped searches/reads and excluded noisy paths.

Blocked condition:
- TODO: Missing source, access, command, proof, or user decision that stops work.

Start Gates:
| Gate | Applies | Evidence |
|------|---------|----------|
| Prompt requirements captured | pending | pending |
| Active goal checked or created | pending | pending |
| Source of truth read | pending | pending |
| `VISION.md` read or N/A | pending | pending |
| Relevant Three.js template docs read | pending | pending |
| Readiness triaged | pending | pending |
| TDD/test decision | pending | pending |
| Browser/canvas proof decision | pending | pending |
| Sensitivity decision | pending | pending |
| Agent-native decision | pending | pending |

Work Checklist:
- [ ] Objective, threshold, verification, constraints, boundaries, and blocked condition are concrete.
- [ ] Task source and acceptance criteria are captured.
- [ ] Relevant source/docs and nearby code patterns are read.
- [ ] Implementation fixes the right ownership boundary or records why not.
- [ ] Verification evidence is recorded.
- [ ] Design/sensitivity proof is recorded or N/A with reason.
- [ ] Review/autoreview findings are fixed or recorded.
- [ ] `VISION.md` update/reaffirmation is recorded.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|------|---------|-----------------|----------|
| Named threshold | pending | Prove completion threshold | pending |
| Build/typecheck | pending | Run `npm run build` or N/A | pending |
| Focused tests | pending | Run focused tests or N/A | pending |
| Browser/canvas proof | pending | Prove visible/canvas behavior or N/A | pending |
| Sensitivity/glyph proof | pending | Verify or N/A | pending |
| Agent source validation | pending | Run `npx skiller@latest apply` for agent changes or N/A | pending |
| Autoreview | pending | Review final diff/output | pending |
| Timed checkpoint | pending | Complete duration loop or N/A | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Phase / pass table:
| Phase | Status | Evidence | Next |
|-------|--------|----------|------|
| Intake | in_progress | plan created | implementation |
| Implementation | pending | | verification |
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
|----------|--------|
| Where am I? | Intake |
| Where am I going? | Implementation, verification, closeout |
| What is the goal? | TODO |
| What learned? | See Findings |
| What done? | See Timeline |

Timeline:
- Plan created.

Open risks:
- Pending.
