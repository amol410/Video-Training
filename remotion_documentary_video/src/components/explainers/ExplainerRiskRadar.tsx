import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export interface RiskSubFactor {
  label: string;
  value: number;
  status?: string;
}

export interface ExplainerRiskRadarProps {
  threatLevel?: 'MODERATE' | 'ELEVATED' | 'CRITICAL' | 'DEFCON 1' | string;
  score?: number; // 0 to 100
  title?: string;
  subtitle?: string;
  startFrame?: number;
  subFactors?: RiskSubFactor[];
}

export const ExplainerRiskRadar: React.FC<ExplainerRiskRadarProps> = ({
  threatLevel = 'CRITICAL',
  score = 94,
  title = 'NATIONAL SECURITY THREAT ASSESSMENT',
  subtitle = 'U.S. Artificial Intelligence Silicon Hegemony & Export Evasion Vulnerability',
  startFrame = 0,
  subFactors = [
    { label: 'Cloud Conduit Diversion', value: 96, status: 'SEVERE' },
    { label: 'Supply Chain Leakage', value: 91, status: 'CRITICAL' },
    { label: 'Export Control Evasion', value: 88, status: 'ELEVATED' },
  ],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - startFrame);

  const entrySpring = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const dialSpring = spring({
    frame: Math.max(0, relFrame - 6),
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Needle angle (-80deg to +68deg calibrated for 0..100)
  const needleAngle = interpolate(dialSpring, [0, 1], [-80, -80 + (score / 100) * 160]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1150px', // Full-screen commanding presence
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6EE 100%)',
        border: '2.5px solid rgba(220, 38, 38, 0.40)',
        borderRadius: '24px',
        padding: '38px 48px 34px',
        boxShadow:
          '0 24px 50px rgba(40, 30, 20, 0.10), 0 4px 16px rgba(40, 30, 20, 0.05), 0 0 0 1px rgba(220, 38, 38, 0.08)',
        transform: `translateY(${(1 - entrySpring) * 24}px) scale(${0.96 + entrySpring * 0.04})`,
        opacity: entrySpring,
      }}
    >
      {/* Editorial Title Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
          borderBottom: '1.5px solid rgba(40, 30, 20, 0.12)',
          paddingBottom: '20px',
        }}
      >
        <div style={{ flex: 1, paddingRight: '28px' }}>
          {/* Eyebrow / Classified Kicker */}
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: 800,
              color: '#DC2626',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                backgroundColor: '#DC2626',
                boxShadow: '0 0 8px rgba(220, 38, 38, 0.6)',
              }}
            />
            <span>INTELLIGENCE BRIEFING // DEFCON ASSESSMENT</span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: '32px',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '16px',
              color: '#475569',
              marginTop: '6px',
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Threat Level Badge */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '6px',
          }}
        >
          <div
            style={{
              backgroundColor: '#DC2626',
              color: '#FFFFFF',
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize: '18px',
              letterSpacing: '0.16em',
              padding: '8px 22px',
              borderRadius: '8px',
              boxShadow: '0 4px 14px rgba(220, 38, 38, 0.35)',
              textTransform: 'uppercase',
            }}
          >
            {threatLevel}
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: 700,
              color: '#64748B',
              letterSpacing: '0.1em',
            }}
          >
            EVAL: HIGH SENSITIVITY
          </div>
        </div>
      </div>

      {/* Dial Gauge Visual (Huge 520px SVG) */}
      <div
        style={{
          position: 'relative',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <svg width="520" height="260" viewBox="0 0 260 130">
          <defs>
            <linearGradient id="threat-paper-gauge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <filter id="needle-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(220, 38, 38, 0.3)" />
            </filter>
          </defs>

          {/* Calibrated Tick Marks along perimeter */}
          {[0, 20, 40, 60, 80, 100].map((tick) => {
            const angleRad = Math.PI * (1 - tick / 100);
            const r1 = 108;
            const r2 = 117;
            const x1 = 130 + r1 * Math.cos(angleRad);
            const y1 = 120 - r1 * Math.sin(angleRad);
            const x2 = 130 + r2 * Math.cos(angleRad);
            const y2 = 120 - r2 * Math.sin(angleRad);
            return (
              <line
                key={tick}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(15, 23, 42, 0.20)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}

          {/* Outer Unfilled Arc Track */}
          <path
            d="M 30 120 A 100 100 0 0 1 230 120"
            fill="none"
            stroke="rgba(15, 23, 42, 0.08)"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Active Crimson Threat Gradient Arc */}
          <path
            d="M 30 120 A 100 100 0 0 1 230 120"
            fill="none"
            stroke="url(#threat-paper-gauge)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="314.16"
            strokeDashoffset={314.16 * (1 - dialSpring * (score / 100))}
          />

          {/* Pivot Circle */}
          <circle
            cx="130"
            cy="120"
            r="13"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="3.5"
          />
          <circle cx="130" cy="120" r="5" fill="#DC2626" />

          {/* Needle */}
          <line
            x1="130"
            y1="120"
            x2="130"
            y2="34"
            stroke="#DC2626"
            strokeWidth="4.5"
            strokeLinecap="round"
            filter="url(#needle-shadow)"
            transform={`rotate(${needleAngle} 130 120)`}
          />
        </svg>

        {/* Center Score Readout */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '56px',
              fontWeight: 900,
              color: '#0F172A',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {Math.round(dialSpring * score)}
            <span
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#DC2626',
                marginLeft: '4px',
              }}
            >
              /100
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FCA5A5',
              borderRadius: '6px',
              padding: '3px 12px',
              marginTop: '6px',
            }}
          >
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 800,
                color: '#DC2626',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              DEFCON LEVEL 1 · CRITICAL SILICON BREACH
            </span>
          </div>
        </div>
      </div>

      {/* Sub-factor Breakdown Row */}
      {subFactors && subFactors.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${subFactors.length}, 1fr)`,
            gap: '16px',
            borderTop: '1.5px solid rgba(40, 30, 20, 0.10)',
            paddingTop: '20px',
          }}
        >
          {subFactors.map((factor, idx) => {
            const factorScore = Math.round(dialSpring * factor.value);
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.70)',
                  border: '1.5px solid rgba(40, 30, 20, 0.08)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#64748B',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {factor.label}
                  </span>
                  {factor.status && (
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        fontWeight: 900,
                        color: '#DC2626',
                        backgroundColor: '#FEE2E2',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {factor.status}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '4px',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '22px',
                      fontWeight: 900,
                      color: '#0F172A',
                    }}
                  >
                    {factorScore}%
                  </span>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      color: '#94A3B8',
                    }}
                  >
                    THREAT INDEX
                  </span>
                </div>

                {/* Progress Mini-Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(15, 23, 42, 0.08)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${(factorScore / 100) * 100}%`,
                      height: '100%',
                      backgroundColor: '#DC2626',
                      borderRadius: '9999px',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
