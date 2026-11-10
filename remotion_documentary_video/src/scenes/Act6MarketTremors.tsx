import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from 'remotion';
import { PaperBackground } from '../components/PaperBackground';
import { ExplainerTwoNumbers } from '../components/explainers/ExplainerTwoNumbers';
import { ExplainerSourceCallout } from '../components/explainers/ExplainerSourceCallout';
import { DocumentaryHighlightText } from '../components/DocumentaryHighlightText';

export const Act6MarketTremors: React.FC = () => {
  const frame = useCurrentFrame();

  // Phases of Act 6 (Total: 871 frames / 29.04s synced to 6china.wav)
  // Phase 1 (f0 - f430 / 0-14.3s): Loyalty Pledged & Regulatory Cooperation
  // Phase 2 (f410 - f871 / 13.6-29.04s): Wall Street Tremors & Stock Volatility
  const isPhase1 = frame < 430;
  const isPhase2 = frame >= 410;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: LOYALTY PLEDGED (f0 - f430)                    */}
        {/* ======================================================== */}
        {isPhase1 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [0, 20, 400, 430], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '840px 1fr',
                gap: 64,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1800,
              }}
            >
              {/* Classified Executive Fidelity Brief */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2.5px solid rgba(40, 30, 20, 0.2)',
                  borderRadius: '16px',
                  padding: '42px 46px',
                  boxShadow: '0 24px 50px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '2px solid rgba(220, 38, 38, 0.25)',
                    paddingBottom: '16px',
                    marginBottom: '22px',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '14px', color: '#DC2626', fontWeight: 900, letterSpacing: '0.12em' }}>
                    EXECUTIVE OVERSIGHT // FIDELITY AUDIT
                  </span>
                  <span style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 800, fontFamily: 'monospace' }}>
                    SEC & COMMERCE PROBE
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "'Newsreader', 'Georgia', serif",
                    fontSize: '24px',
                    lineHeight: 1.6,
                    color: '#1E293B',
                    fontStyle: 'italic',
                  }}
                >
                  "Subject explicitly reaffirmed unconditional cooperation with federal authorities, stating that corporate governance will uphold the law—a defensive measure necessitated by questions challenging executive loyalty."
                </div>

                <div style={{ display: 'flex', gap: 16, marginTop: '26px' }}>
                  <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '8px', padding: '12px 20px', flex: 1 }}>
                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
                      COOPERATION STATUS
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '18px', color: '#059669', fontWeight: 900 }}>
                      100% UNCONDITIONAL
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '8px', padding: '12px 20px', flex: 1 }}>
                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
                      LEGAL COMPLIANCE
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '18px', color: '#DC2626', fontWeight: 900 }}>
                      UNDER SCRUTINY
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrative Analysis with Yellow Highlighter */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#0F172A',
                    color: '#FFE600',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '15px',
                    fontWeight: 900,
                    letterSpacing: '0.16em',
                  }}
                >
                  STATECRAFT & CORPORATE LAW
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '52px',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: '#0F172A',
                  }}
                >
                  When Executive Loyalty Faces Washington's Gaze
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter */}
                <DocumentaryHighlightText
                  prefix="Huang stated he would fully cooperate with all inquiries to protect both company and country—"
                  highlightedText="a pledge forced by sudden doubts regarding executive loyalty"
                  suffix="amid strict national security export regulations."
                  startFrame={25}
                  highlightDuration={20}
                  fontSize={25}
                  style={{ textAlign: 'left', lineHeight: 1.55 }}
                />

                <ExplainerSourceCallout
                  publication="BLOOMBERG LAW"
                  headline="Securities and export regulators assess governance disclosures at Nvidia"
                  date="REGULATORY DESK"
                  startFrame={50}
                  position="bottom-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: WALL STREET TREMORS (f410 - f871)              */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [410, 435, 845, 871], [0, 1, 1, 1]),
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, width: '100%', maxWidth: 1680 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '15px',
                    fontWeight: 900,
                    color: '#DC2626',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  EXPLAINER MOTION: WALL STREET IMPACT
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '56px',
                    fontWeight: 900,
                    color: '#0F172A',
                  }}
                >
                  Investor Anxiety: Stock Stability in the Crosshairs
                </div>
              </div>

              {/* Direct On-Screen Narrative with Yellow Highlighter */}
              <DocumentaryHighlightText
                prefix="When controversy strikes the world's most valuable semiconductor titan, investor panic is inevitable. Wall Street now watches nervously as"
                highlightedText="the duration of federal inquiries and leadership stability"
                suffix="test the resilience of Nvidia's market dominance."
                startFrame={430}
                highlightDuration={22}
                fontSize={26}
                style={{ maxWidth: 1480, textAlign: 'center', lineHeight: 1.6 }}
              />

              {/* Explainer: Two Numbers Re-skinned for Market Impact */}
              <ExplainerTwoNumbers
                label1="NVIDIA GLOBAL ENTERPRISE CAP"
                value1={3.5}
                suffix1="T"
                sub1="Trillion-dollar valuation hinging on uninterrupted global AI compute leadership."
                label2="WALL STREET UNCERTAINTY FACTOR"
                value2={100}
                suffix2="%"
                sub2="Full regulatory transparency and leadership continuity demanded by institutional investors."
                comparisonBadge="MARKETS MONITOR EXTENDED DURATION OF FEDERAL & BOARD REVIEWS"
                startFrame={450}
              />
            </div>
          </AbsoluteFill>
        )}
      </PaperBackground>
    </AbsoluteFill>
  );
};
