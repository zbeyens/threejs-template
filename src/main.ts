import './styles.css';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { StarterGame, type RenderQuality } from './game/StarterGame';
import { QualityMenu } from './ui/QualityMenu';

const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas');
const menuRootElement = document.querySelector<HTMLElement>('#menu-root');

if (!canvas) {
  throw new Error('Missing #game-canvas element.');
}

if (!menuRootElement) {
  throw new Error('Missing #menu-root element.');
}

const game = new StarterGame(canvas);
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 760;
const initialQuality: RenderQuality = isTouchDevice ? 'performance' : 'balanced';
const menuRoot = createRoot(menuRootElement);

game.setRenderQuality(initialQuality);
game.start();

menuRoot.render(
  createElement(QualityMenu, {
    initialQuality,
    onSetQuality: (quality) => game.setRenderQuality(quality),
  }),
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    menuRoot.unmount();
    game.dispose();
  });
}
