/// <reference types="vite/client" />

interface ThreeGameDiagnostics {
  frame: number;
  quality: string;
  player: {
    position: { x: number; y: number; z: number };
    speed: number;
  };
  score: {
    collected: number;
    total: number;
  };
}

interface Window {
  __THREE_GAME_DIAGNOSTICS__?: ThreeGameDiagnostics;
}
