---
description: Create a local visual concept map for a Sira GDD when it helps implementation or review.
argument-hint: '[GDD path | plan path]'
disable-model-invocation: true
name: gdd-image
metadata:
  skiller:
    source: .agents/rules/gdd-image.mdc
---

# GDD Image

Use this only when a GDD or plan would benefit from a compact visual map. This
skill is optional support for `auto full` or GDD intake; it is not required for
every GDD.

## Output

Store generated assets under:

```txt
docs/gdds/assets/<gdd-slug>/
```

Recommended files:

- `<gdd-slug>-concept-map.png`
- `<gdd-slug>-concept-map.md` with the source outline and alt text

Do not upload externally unless the user explicitly asks.

## Map Shape

Prefer a simple one-screen map:

- Current state;
- Gap;
- Next playable outcome;
- Player impact;
- Proof surface;
- Out-of-scope footer when useful.

For gameplay GDDs, show player flow and proof boundaries rather than internal
implementation file paths.

## Rules

- Do not block issue slicing or implementation on this asset unless the user
  explicitly requires it.
- Do not invent product facts; use the GDD and source docs.
- Keep sensitive content indirect and respectful.
- Include alt text.
- Link the local asset from the GDD only after the file exists.

## Done

- Local image and source/alt-text artifact exist, or N/A is recorded.
- GDD link is updated when the asset exists.
- Active goal plan records evidence when governed by `autogoal`.
