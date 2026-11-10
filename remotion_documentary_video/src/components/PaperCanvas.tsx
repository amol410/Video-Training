import React from 'react';
import { AbsoluteFill } from 'remotion';

interface PaperCanvasProps {
  variant?: 'cream' | 'aged' | 'blueprint' | 'darkGrid';
  showGrid?: boolean;
  children?: React.ReactNode;
  opacity?: number;
}

export const PaperCanvas: React.FC<PaperCanvasProps> = ({
  variant = 'cream',
  showGrid = true,
  children,
  opacity = 1,
}) => {
  const backgrounds = {
    cream: 'radial-gradient(circle at 50% 50%, #FAF6EE 0%, #F3EDE0 60%, #E6DCC8 100%)',
    aged: 'radial-gradient(circle at 45% 45%, #F4E8D0 0%, #EAD8B8 55%, #D4BE98 100%)',
    blueprint: 'radial-gradient(circle at 50% 50%, #152238 0%, #0c1626 70%, #060b14 100%)',
    darkGrid: 'radial-gradient(circle at 50% 50%, #0f131a 0%, #08080a 75%, #030406 100%)',
  };

  const gridColors = {
    cream: 'rgba(160, 145, 125, 0.18)',
    aged: 'rgba(130, 105, 80, 0.22)',
    blueprint: 'rgba(56, 189, 248, 0.15)',
    darkGrid: 'rgba(34, 197, 94, 0.12)',
  };

  const isDark = variant === 'blueprint' || variant === 'darkGrid';

  return (
    <AbsoluteFill
      style={{
        background: backgrounds[variant],
        overflow: 'hidden',
        opacity,
      }}
    >
      {/* Embedded SVG Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="paper-noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0"
              result="coloredNoise"
            />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Grid Overlay */}
      {showGrid && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, ${gridColors[variant]} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridColors[variant]} 1px, transparent 1px)
            `,
            backgroundSize: isDark ? '40px 40px' : '50px 50px',
            opacity: 0.8,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Persistent Tactile Noise Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isDark ? 0.08 : 0.14,
          mixBlendMode: isDark ? 'screen' : 'multiply',
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)`,
        }}
      />

      {/* Vintage Aged Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: isDark
            ? 'inset 0 0 160px rgba(0, 0, 0, 0.85)'
            : 'inset 0 0 140px rgba(80, 60, 35, 0.35)',
          pointerEvents: 'none',
        }}
      />

      {children}
    </AbsoluteFill>
  );
};
