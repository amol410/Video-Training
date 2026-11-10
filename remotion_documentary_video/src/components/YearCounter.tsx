import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface YearCounterProps {
  startYear: number;
  endYear: number;
  startFrame: number;
  durationInFrames: number;
  label?: string;
  sublabel?: string;
  theme?: 'vintage' | 'tech';
  style?: React.CSSProperties;
}

export const YearCounter: React.FC<YearCounterProps> = ({
  startYear,
  endYear,
  startFrame,
  durationInFrames,
  label = 'FOUNDING MILESTONE',
  sublabel = "DENNY'S BOOTH #4 • SAN JOSE, CA",
  theme = 'vintage',
  style,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Stepped year odometer
  const currentYear = Math.round(startYear + (endYear - startYear) * progress);

  const isVintage = theme === 'vintage';

  return (
    <div
      style={{
        display: 'inline-block',
        backgroundColor: isVintage ? '#F9F5EC' : '#0B0F17',
        border: isVintage ? '2px solid #3A3226' : '1px solid rgba(56, 189, 248, 0.4)',
        padding: '12px 28px',
        boxShadow: isVintage
          ? '0 6px 18px rgba(35, 25, 15, 0.25), inset 0 0 10px rgba(0,0,0,0.05)'
          : '0 8px 24px rgba(0,0,0,0.6), inset 0 0 12px rgba(56, 189, 248, 0.1)',
        fontFamily: isVintage
          ? '"Courier New", Courier, monospace'
          : "'SF Mono', Menlo, Consolas, monospace",
        textAlign: 'center',
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isVintage ? '#786954' : '#38BDF8',
            marginBottom: 4,
          }}
        >
          {label}
        </div>
      )}

      {/* Year Digits */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '0.06em',
          color: isVintage ? '#1C1917' : '#F8FAFC',
          fontVariantNumeric: 'tabular-nums',
          textShadow: isVintage ? '1px 1px 0px rgba(0,0,0,0.1)' : '0 0 16px rgba(56, 189, 248, 0.5)',
        }}
      >
        {currentYear}
      </div>

      {sublabel && (
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: isVintage ? '#92400E' : '#94A3B8',
            marginTop: 6,
            borderTop: isVintage ? '1px dashed #D5C9B5' : '1px solid rgba(255,255,255,0.1)',
            paddingTop: 5,
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
};
