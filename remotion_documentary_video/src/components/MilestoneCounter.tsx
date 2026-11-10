import React from 'react';
import { interpolate, useCurrentFrame, Easing } from 'remotion';

interface MilestoneCounterProps {
  startVal?: number;
  endVal?: number;
  prefix?: string;
  suffix?: string;
  startFrame: number;
  durationInFrames: number;
  label?: string;
  sourceAttribution?: string;
  glowColor?: string;
  textColor?: string;
  style?: React.CSSProperties;
}

export const MilestoneCounter: React.FC<MilestoneCounterProps> = ({
  startVal = 0,
  endVal = 3000000000000,
  prefix = '$',
  suffix = '',
  startFrame,
  durationInFrames,
  label = 'HISTORIC MARKET CAPITALIZATION',
  sourceAttribution = 'BLOOMBERG FINANCIAL MARKETS • JUNE 2024',
  glowColor = 'rgba(74, 222, 128, 0.75)',
  textColor = '#4ADE80',
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
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  const currentValue = Math.round(startVal + (endVal - startVal) * progress);

  const formatNumber = (num: number) => {
    if (num >= 1000000000000) {
      const trillions = (num / 1000000000000).toFixed(2);
      return `${prefix}${trillions} TRILLION${suffix}`;
    }
    if (num >= 1000000000) {
      const billions = (num / 1000000000).toFixed(1);
      return `${prefix}${billions} BILLION${suffix}`;
    }
    return `${prefix}${num.toLocaleString()}${suffix}`;
  };

  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#94A3B8',
            marginBottom: 8,
          }}
        >
          {label}
        </div>
      )}

      {/* Massive Glowing Number */}
      <div
        style={{
          fontSize: 110,
          fontWeight: 900,
          lineHeight: 0.95,
          color: textColor,
          letterSpacing: '-0.02em',
          textShadow: `0 0 25px ${glowColor}, 0 0 60px ${glowColor}`,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {formatNumber(currentValue)}
      </div>

      {sourceAttribution && (
        <div
          style={{
            marginTop: 18,
            display: 'inline-block',
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '5px 14px',
            borderRadius: 4,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: '#CBD5E1',
            textTransform: 'uppercase',
          }}
        >
          {sourceAttribution}
        </div>
      )}
    </div>
  );
};
