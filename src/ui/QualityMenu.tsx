import { useState } from 'react';
import type { RenderQuality } from '../game/StarterGame';

type QualityMenuProps = {
  initialQuality: RenderQuality;
  onSetQuality: (quality: RenderQuality) => void;
};

const OPTIONS: Array<{ id: RenderQuality; label: string }> = [
  { id: 'performance', label: 'Performance' },
  { id: 'balanced', label: 'Balanced' },
  { id: 'quality', label: 'Quality' },
];

export function QualityMenu({ initialQuality, onSetQuality }: QualityMenuProps) {
  const [quality, setQuality] = useState<RenderQuality>(initialQuality);

  return (
    <aside className="quality-menu" aria-label="Render quality">
      <div className="quality-menu__label">Render</div>
      <div className="quality-menu__buttons">
        {OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            className={option.id === quality ? 'is-active' : ''}
            onClick={() => {
              setQuality(option.id);
              onSetQuality(option.id);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
