---
description: Three.js template autonomous supervisor and skill router. Use when the user asks for auto, autopilot, full loop, sweep, clean, timed work, milestone, GDD, issues, design review, or best-next work across vision, design, task, planning, tests, review, docs, and agent workflow.
argument-hint: <feature | spec path | plan path | surface/path | current tree> [sweep|clean|full|design|milestone|gdd|issues|timed <duration>|<hours>]
disable-model-invocation: true
name: auto
metadata:
  skiller:
    source: .agents/rules/auto.mdc
---

# Auto

Handle $ARGUMENTS.

`auto` is the template supervisor. It reads source doctrine, chooses the next
owner skill, records the decision, verifies the packet, and keeps going only
while the requested route still has safe runnable work.

It does not replace specialist skills:

- gameplay/design judgment -> `design`
- fuzzy product/gameplay thinking -> `grill-with-vision`
- roadmap/milestone map -> `to-milestone`
- GDD -> `to-gdd`
- issue breakdown -> `to-issues`
- implementation -> `task`
- goal lifecycle -> `autogoal`
- current-tree closeout -> `autoclosure`
- source simplification -> `architecture-cleanup`
- generated agent/workflow review -> `agent-native-reviewer`

## Source Order

1. Latest user request and active goal plan.
2. `VISION.md`.
3. `AGENTS.md` and `.agents/AGENTS.md`.
4. `README.md`.
5. Current source/tests when implementation or design proof depends on them.
6. Current docs/GDDs when the user has created game-specific planning artifacts.
7. GitHub only when the user explicitly asks for an external issue, PR,
   comment, attachment, or review link.

## Modes

- `sweep`: find and execute the best safe repo-improvement lanes across code,
  docs, tests, design, and agent workflow. Do not create new GDDs or external
  GitHub issues by default.
- `clean`: close current dirty tree or already-applied work only.
- `full`: keep routing through the full local cascade until the requested
  outcome is implemented/proven or honestly blocked:

  ```txt
  fuzzy idea -> grill/design/source proof -> GDD -> issues -> task -> checks/browser proof -> review -> docs/vision closeout
  ```

- `design`: review and improve implemented design/gameplay surfaces. It is not
  a GDD route unless the user also asks for GDD output.
- `milestone`: create/update a milestone map and stop.
- `gdd` (alias `prd`): create/update a GDD and stop.
- `issues`: break a GDD/spec/plan into issue slices and stop.
- `timed`: duration modifier. Treat durations as minimum active work unless
  the user explicitly says hard stop, max, cap, or timebox.

## Autogoal Dependency

Use `autogoal` before non-trivial auto work.

- Generic auto runs: `docs/plans/templates/auto.md`.
- Terminal milestone route: `docs/plans/templates/milestone.md`.
- Terminal GDD route: `docs/plans/templates/gdd.md`.
- Terminal issues route: `docs/plans/templates/issues.md`.
- Add packs by touched surface: `docs`, `agent-native`, `browser`,
  `package-api`, `design`, `grill`, `to-gdd`, `to-issues`, `release`.

Goal handle shape:

```txt
Auto <route>; done when <route-specific threshold>; plan docs/plans/<path>.md.
```

## Route Selection

- User says `auto milestone`, roadmap, launch plan, or "what should we build
  next at a high level" -> `to-milestone`.
- User says `auto gdd` (or `auto prd`), settled spec, or needs implementation-ready product
  scope -> `to-gdd`. If the milestone picture is absent or stale, run
  `to-milestone` first.
- User says `auto issues`, `fast`, or gives a GDD/spec needing slices ->
  `to-issues`.
- User says `auto design`, visual/gameplay review, starter scene, 3D, canvas,
  mobile, playability, or HUD -> `design`.
- User gives a concrete implementation slice -> `task`.
- User says current tree, post-merge, already applied, clean up, or "did we
  miss anything" -> `autoclosure` or `sweep`, based on whether the work is
  already applied.
- User says deslop, simplify, source shape, over-split, too much abstraction ->
  `architecture-cleanup`.
- User says vision/taste/doctrine/sync -> `vision` or `sync-vision`.

When in doubt, read enough source to classify, record the decision, and choose
the narrowest owner that can actually close the request.

## Full Mode Contract

`full` means downstream work is part of the request unless blocked or waived.
Do not stop after writing a plan, GDD, or issue list if safe implementation
work remains and the user asked for `full`.

Before issue or task work in `full`:

1. Resolve the latest relevant GDD/spec/plan from the prompt, recent plans,
   `docs/gdds/**`, and milestone maps.
2. Repair bounded inconsistencies in that source before slicing.
3. If no usable source exists, route to `to-gdd` rather than inventing issues.
4. If product/design intent is still fuzzy, route to `grill-with-vision` or
   `design`.

Closure requires:

- route-specific artifact created or updated;
- required implementation/proof packets complete, blocked, or waived;
- relevant checks/browser proof recorded;
- `VISION.md` updated or reaffirmed for reusable doctrine;
- delegated decisions recorded;
- active goal plan passes `check-complete.mjs`.

## Proof Defaults

- Code changes: `npm run build` plus focused tests when relevant.
- Gameplay/canvas changes: Playwright or Browser proof when feasible; verify
  nonblank canvas, framing, interaction, console errors, and responsive text.
- Docs/planning changes: source-backed claims, no stale TODO/pending rows, and
  active plan check.
- Agent workflow changes: `npx skiller@latest apply` plus generated mirror
  audit and stale project-term audit.

## Design Route Contract

Design route compares implemented surfaces against:

- `VISION.md`;
- `README.md`;
- current source/tests;
- current browser/canvas behavior.

Do not add fake future features, disabled showcase UI, WIP labels, quiz-first
flows, or long explanatory text as gameplay. If a design needs data or mechanics
that do not exist, record the contract in the GDD or plan instead of faking it.

## Planning Artifact Policy

- Milestone maps live in `docs/milestones/*.md`.
- GDDs live in `docs/gdds/*.md`.
- Issue breakdowns may live under `docs/issues/*.md` or be published to GitHub
  only when explicitly requested.
- Plan artifacts and screenshots live under `docs/plans/artifacts/<plan-slug>/`.
- Do not copy active runtime plans from another game as template state.

## Handoff

Final auto handoff should name:

- route/mode;
- owner skills used;
- artifacts changed;
- implementation/proof completed;
- checks run;
- `VISION.md` update/reaffirmation;
- remaining blockers or next owner.
