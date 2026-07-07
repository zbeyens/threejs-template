# Three.js Game Template

A compact browser-game starter copied from a production Vite/React/Three.js setup and stripped back to reusable parts.

## What Is Included

- Vite + TypeScript with strict compiler settings.
- Three.js renderer, resize handling, fixed game loop, keyboard movement, and touch joystick input.
- React overlay controls for render quality.
- Playwright desktop/mobile canvas tests that verify a nonblank canvas, player movement, and clean browser errors.
- A canvas inspection script that writes screenshots and JSON reports under `artifacts/canvas-inspection`.

## Start

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:5188](http://127.0.0.1:5188).

## Verify

```bash
npm run build
npm test
npm run inspect:canvas
```

`npm test` starts its own Vite server on port `5187` so it does not collide with your dev server.

## Edit Points

- `src/game/StarterGame.ts` owns the scene, player movement, collectibles, diagnostics, and render quality.
- `src/core/Renderer.ts` owns Three.js renderer defaults.
- `src/core/InputController.ts` maps keyboard and touch joystick input to a movement vector.
- `src/ui/QualityMenu.tsx` is the React HUD overlay.
- `tests/visual.spec.ts` is the browser proof that the starter is rendering and interactive.

No assets are required for the starter scene. Add models, textures, audio, or level data when the game actually needs them.
