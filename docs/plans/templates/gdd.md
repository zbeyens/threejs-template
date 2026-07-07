# {{TITLE}}

Objective:
TODO: Write GDD objective.

Flow mode:
one-shot execution

Goal plan:
{{PLAN_PATH}}

Template:
{{TEMPLATE_PATH}}

Linked plans:
- None.

GDD source:
- source docs: TODO
- target GDD path: TODO
- milestone map: TODO or N/A
- design/gameplay surface: TODO
- sensitivity surface: TODO

Completion threshold:
- Repo GDD exists or is updated under `docs/gdds/`.
- GDD has problem, solution, design lock, requirements, non-goals, proof, issue slicing guidance, and open questions.
- Scope is implementation-ready or blocker is explicit.
- `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` passes.

Verification surface:
- Source-backed docs audit.
- Scoped GDD self-review/autoreview.
- Optional browser/canvas evidence when GDD claims implemented design.

Constraints:
- Follow `VISION.md`.
- Do not publish externally unless requested.
- Do not invent current implementation or source facts.

Boundaries:
- Allowed edit scope: GDD, milestone map if needed, active plan, `VISION.md` if doctrine changes.
- Non-goals: implementation unless explicitly requested.

Output budget strategy:
- TODO.

Blocked condition:
- TODO.

Start Gates:
| Gate | Applies | Evidence |
|---|---|---|
| Requirements captured | pending | pending |
| `VISION.md` read | pending | pending |
| Source docs read | pending | pending |
| Milestone map decision | pending | pending |
| Design/sensitivity decision | pending | pending |
| GDD path selected | pending | pending |

Work Checklist:
- [ ] Source docs and current implementation claims are audited.
- [ ] GDD scope is coherent and not a tiny task unless waived.
- [ ] `## Design Lock` is filled or N/A.
- [ ] Sensitivity boundaries are explicit.
- [ ] Testing/browser/canvas proof boundary is named.
- [ ] Issue slicing guidance is included.
- [ ] Open questions are none or blocking.
- [ ] `VISION.md` update/reaffirmation is recorded.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|---|---|---|---|
| GDD artifact | yes | Create/update `docs/gdds/*.md` | pending |
| Docs consistency | yes | Verify source-backed claims | pending |
| GDD review | yes | Self-review/autoreview final GDD | pending |
| GitHub publication | pending | Publish/read back only if requested | pending |
| Goal plan complete | yes | Run `node .agents/skills/autogoal/scripts/check-complete.mjs {{PLAN_PATH}}` | pending |

Phase / pass table:
| Phase | Status | Evidence | Next |
|---|---|---|---|
| Intake | in_progress | plan created | source audit |
| GDD writing | pending | | review |
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
| Where am I going? | GDD writing and review |
| What is the goal? | TODO |
| What learned? | See Findings |
| What done? | See Timeline |

Timeline:
- Plan created.

Open risks:
- Pending.
