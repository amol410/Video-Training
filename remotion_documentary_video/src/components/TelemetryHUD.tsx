import React from 'react';
import { interpolate, useCurrentFrame, Easing } from 'remotion';

interface TelemetryHUDProps {
  startFrame?: number;
  durationInFrames?: number;
  curveColor?: string;
  glowColor?: string;
  width?: number;
  height?: number;
  tickerText?: string;
  tickerDelta?: string;
  metrics?: { label: string; value: string }[];
  style?: React.CSSProperties;
}

export const TelemetryHUD: React.FC<TelemetryHUDProps> = ({
  startFrame = 0,
  durationInFrames = 90,
  curveColor = '#22c55e',
  glowColor = 'rgba(34, 197, 94, 0.75)',
  width = 720,
  height = 320,
  tickerText = 'NVDA ACCELERATED COMPUTE',
  tickerDelta = '▲ +3,420%',
  metrics = [
    { label: 'CUDA CORES', value: '16,384' },
    { label: 'NVLINK INTERCONNECT', value: '900 GB/s' },
    { label: 'FP8 COMPUTE', value: '4.0 PETAFLOPS' },
  ],
  style,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = Math.max(0, frame - startFrame);

  // Self-drawing progress
  const drawProgress = interpolate(
    relativeFrame,
    [0, durationInFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  // Curve coordinates (exponential acceleration curve)
  const pathD = `M 20 280 C 140 280, 240 270, 340 230 C 440 190, 520 120, 680 40`;
  const pathLength = 800; // estimated SVG length
  const dashOffset = (1 - drawProgress) * pathLength;

  // Pulse effect
  const pulse = Math.sin(frame * 0.15) * 0.15 + 0.85;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: 'rgba(8, 12, 18, 0.85)',
        border: '1px solid rgba(34, 197, 94, 0.35)',
        borderRadius: 8,
        padding: '16px 20px',
        boxShadow: `0 16px 40px rgba(0, 0, 0, 0.6), inset 0 0 24px rgba(34, 197, 94, 0.08)`,
        backdropFilter: 'blur(8px)',
        fontFamily: "'SF Mono', Monaco, Menlo, Consolas, monospace",
        ...style,
      }}
    >
      {/* HUD Header Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(34, 197, 94, 0.25)',
          paddingBottom: 8,
          marginBottom: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: curveColor,
              boxShadow: `0 0 10px ${curveColor}`,
              opacity: pulse,
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#F8FAFC',
              textTransform: 'uppercase',
            }}
          >
            {tickerText}
          </span>
        </div>

        {/* Ticker Pill */}
        <div
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.18)',
            border: `1px solid ${curveColor}`,
            color: curveColor,
            fontSize: 12,
            fontWeight: 800,
            padding: '3px 10px',
            borderRadius: 4,
            letterSpacing: '0.08em',
            boxShadow: `0 0 12px ${glowColor}`,
          }}
        >
          {tickerDelta}
        </div>
      </div>

      {/* SVG Self-Drawing Telemetry Curve */}
      <div style={{ position: 'relative', width: '100%', height: 180 }}>
        {/* Background Grid Rules */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 700 300"
          style={{ overflow: 'visible' }}
        >
          <line
            x1="20"
            y1="80"
            x2="680"
            y2="80"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 4"
          />
          <line
            x1="20"
            y1="160"
            x2="680"
            y2="160"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 4"
          />
          <line
            x1="20"
            y1="240"
            x2="680"
            y2="240"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 4"
          />

          {/* Area Gradient Fill */}
          <defs>
            <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={curveColor} stopOpacity="0.25" />
              <stop offset="100%" stopColor={curveColor} stopOpacity="0.0" />
            </linearGradient>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Glowing Plot Line */}
          <path
            d={pathD}
            fill="none"
            stroke={curveColor}
            strokeWidth="3.5"
            strokeDasharray={pathLength}
            strokeDashoffset={dashOffset}
            filter="url(#neon-glow)"
          />

          {/* Leading Marker Dot */}
          {drawProgress > 0.05 && (
            <circle
              cx={interpolate(drawProgress, [0, 1], [20, 680])}
              cy={interpolate(drawProgress, [0, 0.5, 1], [280, 230, 40])}
              r="5"
              fill="#FFFFFF"
              stroke={curveColor}
              strokeWidth="2.5"
              filter="drop-shadow(0 0 8px #22c55e)"
            />
          )}
        </svg>
      </div>

      {/* Metrics Footer */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
          gap: 12,
          marginTop: 8,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 10,
        }}
      >
        {metrics.map((m, idx) => (
          <div key={idx} style={{ textAlign: 'left' }}>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#94A3B8',
                marginBottom: 2,
              }}
            >
              {m.label}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: '#22c55e',
                letterSpacing: '0.04em',
                textShadow: '0 0 8px rgba(34, 197, 94, 0.4)',
              }}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
