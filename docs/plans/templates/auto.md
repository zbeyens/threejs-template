# {{TITLE}}

Objective:
TODO: Short auto objective.

Flow mode:
TODO: sweep, clean, full, design, milestone, gdd, issues, or timed modifier.

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Linked plans:
- None.

Auto parameters:
- feature/source: TODO
- mode: TODO
- route alias: TODO or N/A
- owner skill: TODO
- duration/deadline: TODO or N/A
- stop policy: TODO
- completion summary: TODO

Task source:
- type: TODO
- prompt/link: TODO
- acceptance criteria: TODO
- explicit non-goals: TODO

Completion threshold:
- TODO: Define exact route-specific done state.
- For `full`, every safe downstream owner is complete, blocked, or waived.
- For terminal routes, the requested artifact exists and proof/review gates are closed.
- `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` passes.

Verification surface:
- TODO: source audits, build/tests/browser/canvas proof, docs audit, agent mirror audit, autoreview.

Constraints:
- Follow `VISION.md` and Three.js template source docs.
- Do not publish externally unless requested.
- Do not stop early in timed mode while safe useful work remains.

Boundaries:
- Source of truth: TODO
- Allowed edit scope: TODO
- Runtime/browser surfaces: TODO
- Docs/planning surfaces: TODO
- Agent/skill surfaces: TODO
- External surfaces: TODO or N/A
- Non-goals: TODO

Output budget strategy:
- TODO: Scope broad reads, exclude generated/noisy paths, cap large output.

Blocked condition:
- TODO: Missing decision, source, access, proof, or tool that stops autonomous work.

Start Gates:
| Gate | Applies | Evidence |
|------|---------|----------|
| Requirements captured | pending | pending |
| Active goal checked or created | pending | pending |
| `VISION.md` read | pending | pending |
| Three.js template docs read | pending | pending |
| Mode/route selected | pending | pending |
| Owner skill selected | pending | pending |
| Proof strategy selected | pending | pending |
| Timed checkpoint parsed | pending | pending |

Work Checklist:
- [ ] Auto parameters are filled.
- [ ] Delegated decisions are recorded.
- [ ] Required owner skill ran or N/A is recorded.
- [ ] Route-specific artifact/work is complete or blocked.
- [ ] Build/tests/browser/canvas/docs/agent proofs are recorded as applicable.
- [ ] `VISION.md` update/reaffirmation is recorded.
- [ ] Review/autoreview is complete.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|------|---------|-----------------|----------|
| Route threshold | pending | Prove route-specific done state | pending |
| Delegated decisions | pending | Record owner, reason, output, proof | pending |
| Build/tests | pending | Run relevant commands or N/A | pending |
| Browser/canvas proof | pending | Prove visible/gameplay surfaces or N/A | pending |
| Docs/source audit | pending | Verify source-backed claims | pending |
| Agent mirror audit | pending | Run `npx skiller@latest apply` for agent changes or N/A | pending |
| Autoreview | pending | Review final diff/output | pending |
| Timed checkpoint | pending | Complete duration loop or N/A | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Delegated decisions:
| Decision | Owner | Reason | Evidence | Result |
|---|---|---|---|---|

Phase / pass table:
| Phase | Status | Evidence | Next |
|---|---|---|---|
| Intake | in_progress | plan created | owner route |
| Owner route | pending | | verification |
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
| Where am I going? | Owner route, verification, closeout |
| What is the goal? | TODO |
| What learned? | See Findings |
| What done? | See Timeline |

Timeline:
- Plan created.

Open risks:
- Pending.
