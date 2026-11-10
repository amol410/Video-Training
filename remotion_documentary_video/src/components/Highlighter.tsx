import React from 'react';
import { interpolate, useCurrentFrame, Easing } from 'remotion';

interface HighlighterProps {
  children: React.ReactNode;
  startFrame: number;
  durationInFrames?: number; // 13 frames for power2.out wipe
  color?: string; // Canary yellow #FFE600
  heightPercent?: number; // default 70% of text height
  style?: React.CSSProperties;
}

export const Highlighter: React.FC<HighlighterProps> = ({
  children,
  startFrame,
  durationInFrames = 13,
  color = '#FFE600',
  heightPercent = 75,
  style,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 102],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.quad), // Matches 13-frame power2.out
    }
  );

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {/* Background Marker Stroke */}
      <span
        style={{
          position: 'absolute',
          left: -4,
          bottom: '12%',
          height: `${heightPercent}%`,
          width: `${progress}%`,
          backgroundColor: color,
          opacity: 0.88,
          mixBlendMode: 'multiply',
          zIndex: 0,
          borderRadius: 3,
          transform: 'skewX(-6deg)',
          pointerEvents: 'none',
          boxShadow: '0 0 6px rgba(255, 230, 0, 0.4)',
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
};
