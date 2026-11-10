import React from 'react';
import { interpolate, Easing } from 'remotion';

interface StockTelemetryHUDProps {
  frame: number;
  startFrame: number;
  durationInFrames?: number;
  symbol: string;
  price: string;
  change: string;
  benchmark?: string;
  width?: number;
  height?: number;
  accentColor?: string;
  style?: React.CSSProperties;
}

export const StockTelemetryHUD: React.FC<StockTelemetryHUDProps> = ({
  frame,
  startFrame,
  durationInFrames = 45,
  symbol,
  price,
  change,
  benchmark = 'NASDAQ · COMP',
  width = 540,
  height = 240,
  accentColor = '#22c55e',
  style = {},
}) => {
  const drawProgress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  const pathLength = 600;
  const strokeDashoffset = pathLength * (1 - drawProgress);

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: 'rgba(10, 14, 23, 0.88)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '12px',
        padding: '20px 24px',
        color: '#FFFFFF',
        fontFamily: "'Inter', system-ui, sans-serif",
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...style,
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#94A3B8',
              textTransform: 'uppercase',
            }}
          >
            {benchmark}
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginTop: '2px',
            }}
          >
            {symbol}
          </div>
        </div>

        {/* Real-time Ticker Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            border: `1px solid ${accentColor}`,
            padding: '6px 14px',
            borderRadius: '9999px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            {price}
          </div>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: accentColor,
            }}
          >
            {change}
          </div>
        </div>
      </div>

      {/* SVG Chart Line */}
      <div style={{ width: '100%', height: '110px', position: 'relative' }}>
        <svg
          viewBox="0 0 500 100"
          width="100%"
          height="100%"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.35" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0.0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines */}
          <line
            x1="0"
            y1="25"
            x2="500"
            y2="25"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 4"
          />
          <line
            x1="0"
            y1="60"
            x2="500"
            y2="60"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 4"
          />

          {/* Glowing Area Fill */}
          <path
            d="M 10 90 Q 90 85 170 70 T 320 40 T 490 12 L 490 95 L 10 95 Z"
            fill="url(#chartGradient)"
            opacity={drawProgress}
          />

          {/* Self-drawing Line */}
          <path
            d="M 10 90 Q 90 85 170 70 T 320 40 T 490 12"
            fill="none"
            stroke={accentColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            filter="url(#glow)"
          />

          {/* Current Point Dot */}
          {drawProgress > 0.95 && (
            <circle
              cx="490"
              cy="12"
              r="5"
              fill="#FFFFFF"
              stroke={accentColor}
              strokeWidth="2.5"
            />
          )}
        </svg>
      </div>

      {/* Terminal Footer Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          fontWeight: 600,
          color: '#64748B',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '8px',
        }}
      >
        <span>1993 · FOUNDING</span>
        <span>1999 · RIVA TNT</span>
        <span>2006 · CUDA</span>
        <span>2024 · BLACKWELL</span>
      </div>
    </div>
  );
};
