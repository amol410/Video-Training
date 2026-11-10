import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface VolumetricRaysProps {
  color?: string;
  speedDegPerSec?: number; // default 4 deg/sec
  rayCount?: number;
  opacity?: number;
}

export const VolumetricRays: React.FC<VolumetricRaysProps> = ({
  color = '#a855f7',
  speedDegPerSec = 4,
  rayCount = 12,
  opacity = 0.45,
}) => {
  const frame = useCurrentFrame();
  const rotation = (frame / 30) * speedDegPerSec;

  const rays = Array.from({ length: rayCount });

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center center',
          opacity,
        }}
      >
        <svg viewBox="0 0 1000 1000" width="100%" height="100%">
          <defs>
            <radialGradient id="rayFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={color} stopOpacity="0.8" />
              <stop offset="50%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          </defs>

          {rays.map((_, i) => {
            const angle = (i * 360) / rayCount;
            return (
              <g key={i} transform={`rotate(${angle} 500 500)`}>
                <polygon
                  points="500,500 460,0 540,0"
                  fill="url(#rayFade)"
                  style={{ mixBlendMode: 'screen' }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </AbsoluteFill>
  );
};
