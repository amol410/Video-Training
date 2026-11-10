import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

interface DarkGridBackgroundProps {
  glowColor?: string;
  gridColor?: string;
  gridSize?: number;
  children?: React.ReactNode;
}

export const DarkGridBackground: React.FC<DarkGridBackgroundProps> = ({
  glowColor = 'rgba(56, 189, 248, 0.12)',
  gridColor = 'rgba(148, 163, 184, 0.08)',
  gridSize = 50,
  children,
}) => {
  const frame = useCurrentFrame();

  // Subtle slow grid pulse and drift
  const gridOffsetY = (frame * 0.25) % gridSize;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#08080a',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Coordinate Grid */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: `0px ${gridOffsetY}px`,
        }}
      />

      {/* Atmospheric Radial Glow Center */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 45%, ${glowColor} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Deep Obsidian Edge Vignette */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 45%, rgba(4, 6, 12, 0.9) 100%)`,
          pointerEvents: 'none',
        }}
      />

      {children}
    </AbsoluteFill>
  );
};
