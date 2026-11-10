import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';

interface GlowingMilestoneProps {
  frame: number;
  startFrame: number;
  numeral: string;
  label?: string;
  sublabel?: string;
  glowColor?: string;
  accentColor?: string;
  fontSize?: number;
  style?: React.CSSProperties;
}

export const GlowingMilestone: React.FC<GlowingMilestoneProps> = ({
  frame,
  startFrame,
  numeral,
  label,
  sublabel,
  glowColor = 'rgba(168, 85, 247, 0.5)',
  accentColor = '#FFFFFF',
  fontSize = 110,
  style = {},
}) => {
  const { fps } = useVideoConfig();

  if (frame < startFrame) {
    return null;
  }

  const anim = spring({
    frame: frame - startFrame,
    fps,
    config: {
      damping: 12,
      stiffness: 140,
    },
  });

  const scale = interpolate(anim, [0, 1], [0.85, 1]);
  const opacity = interpolate(anim, [0, 1], [0, 1]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center',
        fontFamily: "'Inter', system-ui, sans-serif",
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: '15px',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#94A3B8',
            marginBottom: '8px',
          }}
        >
          {label}
        </div>
      )}

      <div
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: 900,
          color: accentColor,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          textShadow: `
            0 0 12px rgba(255, 255, 255, 0.9),
            0 0 30px ${glowColor},
            0 0 70px ${glowColor}
          `,
        }}
      >
        {numeral}
      </div>

      {sublabel && (
        <div
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#CBD5E1',
            letterSpacing: '0.04em',
            marginTop: '12px',
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
};
