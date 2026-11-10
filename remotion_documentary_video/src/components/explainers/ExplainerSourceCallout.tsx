import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';

export interface ExplainerSourceCalloutProps {
  publication?: string;
  headline?: string;
  date?: string;
  verified?: boolean;
  startFrame?: number;
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
}

export const ExplainerSourceCallout: React.FC<ExplainerSourceCalloutProps> = ({
  publication = 'FINANCIAL TIMES',
  headline = 'US weighs blacklist for Megaspeed over Nvidia chip flows',
  date = 'NOVEMBER 2024',
  verified = true,
  startFrame = 0,
  position = 'top-right',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - startFrame);

  const entrance = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const positionStyles: Record<string, React.CSSProperties> = {
    'top-right': { top: '80px', right: '80px' },
    'bottom-right': { bottom: '100px', right: '80px' },
    'bottom-left': { bottom: '100px', left: '80px' },
    'top-left': { top: '80px', left: '80px' },
  };

  return (
    <div
      style={{
        position: 'absolute',
        ...positionStyles[position],
        transform: `translateY(${(1 - entrance) * -16}px) scale(${0.92 + entrance * 0.08})`,
        opacity: entrance,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        padding: '20px 28px',
        maxWidth: '520px', // Bigger width!
        boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
        zIndex: 500,
      }}
    >
      {/* Header with Verified Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '15px',
              fontWeight: 900,
              color: '#38BDF8',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            {publication}
          </span>
          {verified && (
            <span
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.25)',
                color: '#10B981',
                border: '1.5px solid rgba(16, 185, 129, 0.5)',
                borderRadius: '6px',
                padding: '3px 8px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.1em',
              }}
            >
              ✓ VERIFIED SOURCE
            </span>
          )}
        </div>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            fontWeight: 700,
            color: '#94A3B8',
          }}
        >
          {date}
        </span>
      </div>

      {/* Headline Text */}
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '19px', // Much larger and clearer!
          fontWeight: 700,
          color: '#F8FAFC',
          lineHeight: 1.4,
          fontStyle: 'italic',
        }}
      >
        "{headline}"
      </div>
    </div>
  );
};
