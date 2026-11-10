import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';

export interface StepItem {
  number: string;
  title: string;
  description: string;
  date?: string;
  statusLabel?: string;
}

export interface ExplainerStepperProps {
  steps?: StepItem[];
  activeStep?: number;
  startFrame?: number;
  title?: string;
  eyebrow?: string;
}

export const ExplainerStepper: React.FC<ExplainerStepperProps> = ({
  steps = [
    {
      number: '01',
      date: 'OCTOBER 2024',
      title: 'The Sunday Staff Memo',
      description:
        'Jensen Huang admits 40-yr marital infidelity in official memo broadcast to all Nvidia employees worldwide.',
      statusLabel: 'MEMO BROADCAST',
    },
    {
      number: '02',
      date: 'NOVEMBER 2024',
      title: 'Singapore Cloud Pipeline',
      description:
        'Alice Huang & Megaspeed linked to multi-billion AI GPU procurement for potential routing to Chinese entities.',
      statusLabel: 'ROUTE IDENTIFIED',
    },
    {
      number: '03',
      date: 'CURRENT STAGE',
      title: 'National Security Probe',
      description:
        'U.S. Senate & Commerce Dept investigate trade loopholes, foreign intelligence links, and export leak risks.',
      statusLabel: 'ACTIVE INQUIRY',
    },
  ],
  activeStep,
  startFrame = 0,
  title,
  eyebrow = 'CHRONOLOGY OF ESCALATION: THE SILICON CONTROVERSY',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - startFrame);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1620px', // Massive full-screen width
        margin: '0 auto',
        backgroundColor: '#FAF6EE',
        border: '2.5px solid #D8CEBC',
        borderRadius: '24px',
        padding: '38px 46px',
        boxShadow: '0 24px 60px rgba(50, 35, 20, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: title ? '16px' : '28px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '18px',
            fontWeight: 900,
            color: '#CA8A04', // Warm documentary yellow accent
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              backgroundColor: '#CA8A04',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(202, 138, 4, 0.5)',
            }}
          />
          {eyebrow}
        </div>

        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '0.14em',
            color: '#64748B',
            backgroundColor: '#EDE5D4',
            border: '1.5px solid #D8CEBC',
            padding: '6px 14px',
            borderRadius: '6px',
            textTransform: 'uppercase',
          }}
        >
          DOC REF: SEC-2024-NVDA
        </div>
      </div>

      {title && (
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '34px',
            fontWeight: 900,
            color: '#0F172A',
            marginBottom: '26px',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>
      )}

      {/* Steps Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '30px',
          position: 'relative',
        }}
      >
        {/* Subtle Archival Connecting Line Behind Cards */}
        <div
          style={{
            position: 'absolute',
            top: '52px',
            left: '80px',
            right: '80px',
            height: '2px',
            borderTop: '2px dashed #D6C8AF',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {steps.map((step, idx) => {
          const stepSpring = spring({
            frame: Math.max(0, relFrame - idx * 9),
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          const isCurrentActive = activeStep !== undefined ? activeStep === idx : true;

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transform: `translateY(${(1 - stepSpring) * 22}px)`,
                opacity: stepSpring,
                backgroundColor: '#F1EAD9', // Warm archival card background
                border: isCurrentActive
                  ? '2px solid #D4C5AC'
                  : '1.5px solid #DDD1BD',
                borderRadius: '18px',
                padding: '32px 28px',
                position: 'relative',
                zIndex: 1,
                boxShadow:
                  '0 12px 28px rgba(60, 45, 30, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                boxSizing: 'border-box',
              }}
            >
              {/* Step Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '36px',
                      fontWeight: 900,
                      color: '#CA8A04', // Yellow accent
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#A16207',
                    }}
                  >
                    /03
                  </span>
                </div>

                {step.date && (
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#334155',
                      letterSpacing: '0.12em',
                      backgroundColor: '#E5DDCB',
                      border: '1px solid rgba(15, 23, 42, 0.08)',
                      padding: '5px 12px',
                      borderRadius: '6px',
                    }}
                  >
                    {step.date}
                  </span>
                )}
              </div>

              {/* Step Title */}
              <div
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '24px',
                  fontWeight: 900,
                  color: '#0F172A', // Dark charcoal text
                  marginTop: '6px',
                  lineHeight: 1.25,
                }}
              >
                {step.title}
              </div>

              {/* Step Description */}
              <div
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#334155', // High readability dark text
                  lineHeight: 1.55,
                  marginTop: '2px',
                  flexGrow: 1,
                }}
              >
                {step.description}
              </div>

              {/* Archival Status Footer */}
              <div
                style={{
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px dashed #D6C8AF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                }}
              >
                <span style={{ color: '#64748B', letterSpacing: '0.12em' }}>STATUS</span>
                <span
                  style={{
                    color: idx === 2 ? '#DC2626' : '#B45309',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                  }}
                >
                  {step.statusLabel || (idx === 0 ? 'MEMO BROADCAST' : idx === 1 ? 'ROUTE IDENTIFIED' : 'ACTIVE INQUIRY')}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Editorial Citation */}
      <div
        style={{
          marginTop: '26px',
          paddingTop: '16px',
          borderTop: '1.5px solid #E2D9C8',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: '#64748B',
          letterSpacing: '0.15em',
        }}
      >
        <span>DOCUMENTARY EVIDENCE // EXHIBIT 03: CORPORATE ADMISSION & REGULATORY CHRONOLOGY</span>
        <span>SOURCES: FT • REUTERS • WSJ • SEC FILINGS</span>
      </div>
    </div>
  );
};
