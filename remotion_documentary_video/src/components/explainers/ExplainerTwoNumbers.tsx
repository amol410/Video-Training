import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export interface ExplainerTwoNumbersProps {
  category?: string;
  title?: string;
  label1?: string;
  value1?: number;
  suffix1?: string;
  sub1?: string;
  label2?: string;
  value2?: number;
  suffix2?: string;
  sub2?: string;
  comparisonBadge?: string;
  startFrame?: number;
}

export const ExplainerTwoNumbers: React.FC<ExplainerTwoNumbersProps> = ({
  label1 = 'NVIDIA GLOBAL AI SILICON SHARE',
  value1 = 88,
  suffix1 = '%',
  sub1 = 'Monopolizes all frontier LLM training clusters, supercomputing datacenters, and enterprise AI worldwide.',
  label2 = 'ALL RIVALS COMBINED',
  value2 = 12,
  suffix2 = '%',
  sub2 = 'AMD Instinct, Intel Gaudi, Google Cloud TPU, Amazon Trainium & Chinese domestic ASICs.',
  comparisonBadge = '7.3X COMPUTE SUPREMACY OVER ALL GLOBAL COMPETITION',
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - startFrame);

  // Spring animations for cards
  const leftSpring = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const rightSpring = spring({
    frame: Math.max(0, relFrame - 8),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const badgeSpring = spring({
    frame: Math.max(0, relFrame - 16),
    fps,
    config: { damping: 12, stiffness: 140 },
  });

  // Animated odometer counters
  const count1 = Math.round(interpolate(leftSpring, [0, 1], [0, value1]));
  const count2 = Math.round(interpolate(rightSpring, [0, 1], [0, value2]));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        width: '1600px', // True full-screen breadth!
        margin: '0 auto',
      }}
    >
      {/* Cards Row - Warm Archival Paper Theme */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '36px',
          width: '100%',
        }}
      >
        {/* Left Card - Dominant Metric (Crisp Archival Paper) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '3px solid #10B981',
            borderRadius: '24px',
            padding: '48px 44px',
            boxShadow: '0 24px 48px rgba(40, 30, 20, 0.12), 0 4px 12px rgba(16, 185, 129, 0.15)',
            transform: `translateY(${(1 - leftSpring) * 30}px) scale(${0.94 + leftSpring * 0.06})`,
            opacity: leftSpring,
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '18px',
              fontWeight: 900,
              letterSpacing: '0.16em',
              color: '#059669',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
              }}
            />
            {label1}
          </div>
          <div
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '130px',
              fontWeight: 900,
              color: '#0F172A',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: '18px',
            }}
          >
            {count1}
            <span style={{ fontSize: '72px', color: '#059669', marginLeft: '6px' }}>
              {suffix1}
            </span>
          </div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px',
              color: '#334155',
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            {sub1}
          </div>
        </div>

        {/* Right Card - Challenger Metric (Archival Paper) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '3px solid #EF4444',
            borderRadius: '24px',
            padding: '48px 44px',
            boxShadow: '0 24px 48px rgba(40, 30, 20, 0.12), 0 4px 12px rgba(239, 68, 68, 0.15)',
            transform: `translateY(${(1 - rightSpring) * 30}px) scale(${0.94 + rightSpring * 0.06})`,
            opacity: rightSpring,
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '18px',
              fontWeight: 900,
              letterSpacing: '0.16em',
              color: '#DC2626',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#EF4444',
                boxShadow: '0 0 10px rgba(239, 68, 68, 0.6)',
              }}
            />
            {label2}
          </div>
          <div
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '130px',
              fontWeight: 900,
              color: '#0F172A',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: '18px',
            }}
          >
            {count2}
            <span style={{ fontSize: '72px', color: '#DC2626', marginLeft: '6px' }}>
              {suffix2}
            </span>
          </div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px',
              color: '#334155',
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            {sub2}
          </div>
        </div>
      </div>

      {/* Comparison Ratio Badge - Archival Stamp Style */}
      {comparisonBadge && (
        <div
          style={{
            transform: `scale(${badgeSpring})`,
            opacity: badgeSpring,
            backgroundColor: '#0F172A',
            border: '2px solid #CA8A04',
            borderRadius: '9999px',
            padding: '16px 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 14px 36px rgba(0, 0, 0, 0.3)',
          }}
        >
          <span style={{ color: '#FFE600', fontSize: '24px' }}>⚡</span>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '20px',
              fontWeight: 900,
              letterSpacing: '0.18em',
              color: '#FFE600',
              textTransform: 'uppercase',
            }}
          >
            {comparisonBadge}
          </span>
        </div>
      )}
    </div>
  );
};
