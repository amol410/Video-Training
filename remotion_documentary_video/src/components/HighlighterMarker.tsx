import React from 'react';
import { interpolate, Easing } from 'remotion';

interface HighlighterMarkerProps {
  frame: number;
  startFrame: number;
  durationInFrames?: number; // default 13 frames per spec
  color?: string;
  height?: number | string;
  topOffset?: number;
  slantDeg?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const HighlighterMarker: React.FC<HighlighterMarkerProps> = ({
  frame,
  startFrame,
  durationInFrames = 13,
  color = '#FFE600',
  height = '112%',
  topOffset = -4,
  slantDeg = -1.6,
  children,
  style = {},
}) => {
  // 13-frame power2.out / aggressive launch wipe curve
  const progress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        ...style,
      }}
    >
      {/* Yellow Highlighter Stroke (behind text) */}
      <span
        style={{
          position: 'absolute',
          left: '-4px',
          right: '-4px',
          top: topOffset,
          height: height,
          backgroundColor: color,
          opacity: 0.88,
          borderRadius: '3px',
          transform: `skewX(${slantDeg}deg)`,
          transformOrigin: 'left center',
          clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Front Text */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        {children}
      </span>
    </span>
  );
};
