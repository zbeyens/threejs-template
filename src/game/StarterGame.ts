import * as THREE from 'three';
import { InputController } from '../core/InputController';
import { Loop } from '../core/Loop';
import { createRenderer, resizeRenderer } from '../core/Renderer';

export type RenderQuality = 'performance' | 'balanced' | 'quality';

const RENDER_QUALITY: Record<RenderQuality, { maxDpr: number; exposure: number }> = {
  performance: { maxDpr: 1, exposure: 1 },
  balanced: { maxDpr: 1.35, exposure: 1.05 },
  quality: { maxDpr: 1.75, exposure: 1.08 },
};

type Collectible = {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;
  collected: boolean;
  phase: number;
  baseY: number;
};

export class StarterGame {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(48, 1, 0.1, 120);
  private readonly input: InputController;
  private readonly loop = new Loop(
    (delta, elapsed) => this.update(delta, elapsed),
    () => this.render(),
  );

  private readonly moveInput = new THREE.Vector2();
  private readonly targetVelocity = new THREE.Vector3();
  private readonly velocity = new THREE.Vector3();
  private readonly cameraTarget = new THREE.Vector3();
  private readonly cameraPosition = new THREE.Vector3();
  private readonly player = new THREE.Group();
  private readonly collectibles: Collectible[] = [];
  private readonly scoreElement = document.querySelector<HTMLElement>('#score-value');
  private readonly objectiveElement = document.querySelector<HTMLElement>('#objective-value');
  private readonly toastBox = document.querySelector<HTMLElement>('#toast-box');

  private frame = 0;
  private score = 0;
  private maxDpr = RENDER_QUALITY.balanced.maxDpr;
  private quality: RenderQuality = 'balanced';
  private toastTimer = 0;

  constructor(canvas: HTMLCanvasElement) {
    const stick = document.querySelector<HTMLElement>('#touch-stick');
    const knob = document.querySelector<HTMLElement>('#touch-knob');

    if (!stick || !knob) {
      throw new Error('Missing touch controls.');
    }

    this.renderer = createRenderer(canvas);
    this.input = new InputController(stick, knob);
    this.setupScene();
    this.updateScoreText();
    this.updateDiagnostics();
  }

  start(): void {
    this.loop.start();
  }

  setRenderQuality(quality: RenderQuality): void {
    this.quality = quality;
    const settings = RENDER_QUALITY[quality];
    this.maxDpr = settings.maxDpr;
    this.renderer.toneMappingExposure = settings.exposure;
  }

  dispose(): void {
    this.loop.stop();
    this.input.dispose();
    this.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) material.dispose();
    });
    this.renderer.dispose();
  }

  private setupScene(): void {
    this.scene.background = new THREE.Color(0x88b8ff);
    this.scene.fog = new THREE.Fog(0x88b8ff, 28, 65);
    this.camera.position.set(0, 7.2, 9);

    const hemi = new THREE.HemisphereLight(0xeef7ff, 0x314226, 2.1);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff1c7, 4.8);
    sun.position.set(8, 14, 7);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    this.scene.add(sun);

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(34, 96),
      new THREE.MeshStandardMaterial({
        color: 0x4d8d61,
        roughness: 0.86,
        metalness: 0.02,
      }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    const grid = new THREE.GridHelper(64, 32, 0xd9eeb8, 0x74a46a);
    grid.position.y = 0.012;
    this.scene.add(grid);

    this.createPlayer();
    this.createCollectibles();
  }

  private createPlayer(): void {
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.32, 0.74, 6, 12),
      new THREE.MeshStandardMaterial({ color: 0x1d6fd8, roughness: 0.48, metalness: 0.08 }),
    );
    body.position.y = 0.76;
    body.castShadow = true;

    const marker = new THREE.Mesh(
      new THREE.ConeGeometry(0.24, 0.46, 16),
      new THREE.MeshStandardMaterial({ color: 0xffc857, roughness: 0.4 }),
    );
    marker.position.set(0, 1.42, -0.06);
    marker.rotation.x = Math.PI / 2;
    marker.castShadow = true;

    this.player.add(body, marker);
    this.player.position.set(0, 0, 4);
    this.scene.add(this.player);
  }

  private createCollectibles(): void {
    const positions: Array<[number, number]> = [
      [-5, -4],
      [0, -6],
      [5, -3],
      [-3, 3],
      [4, 4],
    ];

    positions.forEach(([x, z], index) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.72, 0.72, 0.72),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(index / positions.length, 0.72, 0.58),
          roughness: 0.34,
          metalness: 0.1,
          emissive: new THREE.Color(0x111111),
        }),
      );
      mesh.position.set(x, 0.72, z);
      mesh.castShadow = true;
      this.scene.add(mesh);
      this.collectibles.push({ mesh, collected: false, phase: index * 0.71, baseY: mesh.position.y });
    });
  }

  private update(delta: number, elapsed: number): void {
    this.frame += 1;
    this.toastTimer = Math.max(0, this.toastTimer - delta);
    if (this.toastTimer === 0 && this.toastBox) this.toastBox.textContent = '';

    this.input.readMovement(this.moveInput);
    const speed = this.input.isRunHeld() ? 6.1 : 3.8;
    this.targetVelocity.set(this.moveInput.x, 0, this.moveInput.y).multiplyScalar(speed);
    this.velocity.lerp(this.targetVelocity, 1 - Math.exp(-12 * delta));

    this.player.position.addScaledVector(this.velocity, delta);
    this.player.position.x = THREE.MathUtils.clamp(this.player.position.x, -14, 14);
    this.player.position.z = THREE.MathUtils.clamp(this.player.position.z, -14, 14);

    if (this.velocity.lengthSq() > 0.01) {
      this.player.rotation.y = Math.atan2(this.velocity.x, this.velocity.z);
    }

    for (const item of this.collectibles) {
      if (item.collected) continue;
      item.mesh.rotation.y += delta * 1.8;
      item.mesh.position.y = item.baseY + Math.sin(elapsed * 2.2 + item.phase) * 0.12;
      if (item.mesh.position.distanceTo(this.player.position) < 0.95) {
        item.collected = true;
        item.mesh.visible = false;
        this.score += 1;
        this.showToast(this.score === this.collectibles.length ? 'All signals collected.' : 'Signal collected.');
        this.updateScoreText();
      }
    }

    this.cameraPosition.set(this.player.position.x, 7.2, this.player.position.z + 9);
    this.camera.position.lerp(this.cameraPosition, 1 - Math.exp(-5 * delta));
    this.cameraTarget.set(this.player.position.x, 0.75, this.player.position.z);
    this.camera.lookAt(this.cameraTarget);
    this.updateDiagnostics();
  }

  private render(): void {
    resizeRenderer(this.renderer, this.camera, this.maxDpr);
    this.renderer.render(this.scene, this.camera);
  }

  private updateScoreText(): void {
    if (this.scoreElement) {
      this.scoreElement.textContent = `${this.score} / ${this.collectibles.length}`;
    }
    if (this.objectiveElement && this.score === this.collectibles.length) {
      this.objectiveElement.textContent = 'Prototype loop complete';
    }
  }

  private showToast(message: string): void {
    if (!this.toastBox) return;
    this.toastBox.textContent = message;
    this.toastTimer = 1.6;
  }

  private updateDiagnostics(): void {
    window.__THREE_GAME_DIAGNOSTICS__ = {
      frame: this.frame,
      quality: this.quality,
      player: {
        position: {
          x: this.player.position.x,
          y: this.player.position.y,
          z: this.player.position.z,
        },
        speed: this.velocity.length(),
      },
      score: {
        collected: this.score,
        total: this.collectibles.length,
      },
    };
  }
}
