import React from 'react';
import { interpolate, Easing } from 'remotion';

interface RedactionBarProps {
  frame: number;
  startFrame: number;
  durationInFrames?: number; // default 9 frames per spec
  color?: string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const RedactionBar: React.FC<RedactionBarProps> = ({
  frame,
  startFrame,
  durationInFrames = 9,
  color = '#111111',
  height = '100%',
  width = '100%',
  style = {},
  children,
}) => {
  const progress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.4, 0, 0.2, 1),
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
      {children}
      {/* Blackout Censor Bar */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: width,
          height: height,
          backgroundColor: color,
          borderRadius: '2px',
          transform: `scaleX(${progress})`,
          transformOrigin: 'left center',
          zIndex: 10,
        }}
      />
    </span>
  );
};
