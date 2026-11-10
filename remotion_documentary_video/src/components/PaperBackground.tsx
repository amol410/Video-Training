import React from 'react';
import { AbsoluteFill } from 'remotion';

interface PaperBackgroundProps {
  enableJitter?: boolean;
  gridOpacity?: number;
  vignetteOpacity?: number;
  children?: React.ReactNode;
}

export const PaperBackground: React.FC<PaperBackgroundProps> = ({
  enableJitter = false,
  gridOpacity = 0.08,
  vignetteOpacity = 0.25,
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F6F2E9',
        overflow: 'hidden',
      }}
    >
      {/* Archival Grid Overlay */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(60, 50, 40, ${gridOpacity}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(60, 50, 40, ${gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Warm Paper Texture Noise Simulation */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(220, 205, 180, 0.3) 100%)`,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* Archival Edge Vignette */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at center, transparent 55%, rgba(40, 30, 20, ${vignetteOpacity}) 100%)`,
          pointerEvents: 'none',
        }}
      />

      {children}
    </AbsoluteFill>
  );
};
