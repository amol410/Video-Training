import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface StampProps {
  text: string;
  subtext?: string;
  startFrame: number;
  rotation?: number; // e.g. -12.4deg
  color?: string; // crimson #be123c or red #dc2626
  scaleTarget?: number;
  shape?: 'box' | 'round';
  style?: React.CSSProperties;
}

export const Stamp: React.FC<StampProps> = ({
  text,
  subtext,
  startFrame,
  rotation = -12.4,
  color = '#BE123C',
  scaleTarget = 1,
  shape = 'box',
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  if (frame < startFrame) {
    return null;
  }

  const relativeFrame = frame - startFrame;

  // Violent slam spring physics: heavy drop, tiny overshoot
  const slamSpring = spring({
    frame: relativeFrame,
    fps,
    config: {
      damping: 14,
      stiffness: 220,
      mass: 0.8,
    },
  });

  const scale = interpolate(slamSpring, [0, 1], [2.6 * scaleTarget, scaleTarget]);
  const opacity = interpolate(relativeFrame, [0, 2], [0, 0.95], {
    extrapolateRight: 'clamp',
  });

  // Ink distress opacity variation
  const inkJitter = Math.sin(frame * 0.8) * 0.04;
  const finalOpacity = Math.min(1, Math.max(0.85, opacity + inkJitter));

  if (shape === 'round') {
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 170,
          borderRadius: '50%',
          border: `5px double ${color}`,
          color,
          transform: `rotate(${rotation}deg) scale(${scale})`,
          opacity: finalOpacity,
          fontFamily: '"Courier New", Courier, monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          padding: 12,
          textAlign: 'center',
          userSelect: 'none',
          boxShadow: `inset 0 0 12px ${color}33`,
          ...style,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 800, borderBottom: `1.5px solid ${color}`, width: '80%', paddingBottom: 4 }}>
          {text}
        </div>
        {subtext && (
          <div style={{ fontSize: 11, fontWeight: 700, marginTop: 4 }}>
            {subtext}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'inline-block',
        border: `4px solid ${color}`,
        color,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity: finalOpacity,
        fontFamily: '"Impact", "Arial Black", -apple-system, sans-serif',
        fontSize: 32,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        padding: '8px 24px',
        borderRadius: 4,
        outline: `2px dashed ${color}`,
        outlineOffset: 3,
        userSelect: 'none',
        boxShadow: `0 4px 18px rgba(190, 18, 60, 0.25)`,
        ...style,
      }}
    >
      <div>{text}</div>
      {subtext && (
        <div
          style={{
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.2em',
            marginTop: 2,
            textAlign: 'center',
            borderTop: `1px solid ${color}`,
            paddingTop: 3,
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};
