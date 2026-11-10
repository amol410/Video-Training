import React from 'react';
import { useCurrentFrame } from 'remotion';

interface GodRaysProps {
  color1?: string;
  color2?: string;
  speedDegPerSec?: number; // 4 deg/sec per Buffett Scene 13
  opacity?: number;
  beamCount?: number;
  size?: number;
  style?: React.CSSProperties;
}

export const GodRays: React.FC<GodRaysProps> = ({
  color1 = 'rgba(251, 191, 36, 0.22)', // warm amber
  color2 = 'transparent',
  speedDegPerSec = 4, // 4 deg/sec formula
  opacity = 0.85,
  beamCount = 24,
  size = 1800,
  style,
}) => {
  const frame = useCurrentFrame();

  // 4 deg/sec at 30fps
  const rotationDeg = frame * (speedDegPerSec / 30);

  // Generate conic gradient stops
  const anglePerBeam = 360 / beamCount;
  const stops: string[] = [];
  for (let i = 0; i < beamCount; i++) {
    const start = i * anglePerBeam;
    const mid = start + anglePerBeam * 0.5;
    const end = (i + 1) * anglePerBeam;
    stops.push(`${color1} ${start.toFixed(1)}deg ${mid.toFixed(1)}deg`);
    stops.push(`${color2} ${mid.toFixed(1)}deg ${end.toFixed(1)}deg`);
  }

  const conicString = `conic-gradient(from 0deg at 50% 50%, ${stops.join(', ')})`;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: size,
        height: size,
        transform: `translate(-50%, -50%) rotate(${rotationDeg.toFixed(2)}deg)`,
        background: conicString,
        opacity,
        pointerEvents: 'none',
        borderRadius: '50%',
        maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0.5) 45%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0.5) 45%, transparent 70%)',
        ...style,
      }}
    />
  );
};
