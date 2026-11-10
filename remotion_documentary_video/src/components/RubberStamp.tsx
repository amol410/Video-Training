import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';

interface RubberStampProps {
  frame: number;
  startFrame: number;
  text: string;
  subtext?: string;
  angle?: number; // default -12.4 deg
  color?: string;
  scale?: number;
  style?: React.CSSProperties;
}

export const RubberStamp: React.FC<RubberStampProps> = ({
  frame,
  startFrame,
  text,
  subtext,
  angle = -12.4,
  color = '#E53935',
  scale: baseScale = 1,
  style = {},
}) => {
  const { fps } = useVideoConfig();

  if (frame < startFrame) {
    return null;
  }

  // Slam physics: high impact spring with overshoot bounce
  const impactProgress = spring({
    frame: frame - startFrame,
    fps,
    config: {
      damping: 10,
      mass: 0.7,
      stiffness: 220,
    },
  });

  const scale = interpolate(
    impactProgress,
    [0, 1],
    [2.4 * baseScale, 1.0 * baseScale]
  );
  const opacity = interpolate(impactProgress, [0, 0.4, 1], [0, 0.9, 0.95]);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 24px',
        border: `3px double ${color}`,
        borderRadius: '6px',
        color: color,
        transform: `rotate(${angle}deg) scale(${scale})`,
        opacity,
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '0.22em',
        boxShadow: `inset 0 0 0 1px ${color}`,
        textShadow: `0 0 1px ${color}`,
        ...style,
      }}
    >
      <div style={{ fontSize: 28, lineHeight: 1 }}>{text}</div>
      {subtext && (
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.3em',
            marginTop: 4,
            opacity: 0.85,
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};
