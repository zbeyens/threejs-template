# Three.js Game Template

A compact Vite, React, TypeScript, and Three.js browser-game starter with a
generic agent production pipeline.

## Runtime

Included:

- strict TypeScript and Vite;
- a playable Three.js starter scene;
- keyboard and touch controls;
- React quality controls;
- desktop/mobile Playwright canvas proof;
- screenshot and diagnostics output from `inspect:canvas`.

```bash
npm install
npm run dev
npm run build
npm test
npm run inspect:canvas
```

The current starter runtime stays deliberately small. It ships no story, game
genre, visual style, asset family, world builder, or production game content.

## Main Edit Points

- `src/game/StarterGame.ts`: scene, player movement, collectibles, diagnostics.
- `src/core/Renderer.ts`: renderer defaults.
- `src/core/InputController.ts`: keyboard and touch input.
- `src/ui/QualityMenu.tsx`: React overlay.
- `tests/visual.spec.ts`: desktop/mobile rendering and interaction proof.

## Agent Production Pipeline

The generic game flow is:

```text
game-design -> [game-visual] -> game-build -> game-polish
```

Use `game-full` when a request spans the whole flow. Gameplay/runtime changes
load `gameblocks`; 3D assets route through `game-3d-asset-pipeline`; authored
3D uses BlenderMCP when required; `world-builder` bootstraps a dev-only
builder/catalog harness when a project first needs one.

The template has no default art direction. Each game's GDD owns its reference
pixels, target images, scorecard, camera/state, exclusions, and proof.

Asset routing:

- Tripo: model generation, texturing, stylization, conversion, download only.
- Mixamo through Browser: biped autorig and animation.
- BlenderMCP or another GDD-approved owner: non-biped rigging/animation and
  authored 3D work.
- Shared runtime factories: procedural assets.

## Agent Setup

- `.agents/AGENTS.md` and `.agents/rules/*.mdc` are source truth.
- `.agents/skills/**` contains generated local mirrors and vendored skills.
- `.claude/**`, `.codex/**`, and `.mcp.json` carry agent/MCP configuration.
- `AGENTS.md` and `CLAUDE.md` are generated mirrors.
- `skills-lock.json` tracks only external `diagnosing-bugs` and `grilling`.

After changing agent sources:

```bash
npx skiller@latest apply
```

Then audit generated mirrors, stale skill references, secrets, and copied cache
files before publishing.
