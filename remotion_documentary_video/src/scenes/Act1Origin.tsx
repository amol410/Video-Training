import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  useVideoConfig,
} from 'remotion';
import { PaperBackground } from '../components/PaperBackground';
import { KenBurnsPhoto } from '../components/KenBurnsPhoto';
import { NewspaperCutout } from '../components/NewspaperCutout';
import { ExplainerSourceCallout } from '../components/explainers/ExplainerSourceCallout';
import { DocumentaryHighlightText } from '../components/DocumentaryHighlightText';
import { ASSETS } from '../constants';

export const Act1Origin: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase timings for Act 1 (Total: 948 frames / 31.6s)
  // Phase 1 (f0 - f340 / 0-11.3s): Global Rockstar CEO & World Stage
  // Phase 2 (f320 - f640 / 11.3-21.3s): The Bombshell Sunday Staff Memo
  // Phase 3 (f620 - f948 / 21.3-31.6s): Geopolitical Hook & National Security
  const isPhase1 = frame < 340;
  const isPhase2 = frame >= 320 && frame < 640;
  const isPhase3 = frame >= 620;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: THE GLOBAL ROCKSTAR CEO (f0 - f340)            */}
        {/* ======================================================== */}
        {isPhase1 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [0, 20, 310, 340], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '700px 1fr', // Giant image taking 45% of 1920 width!
                gap: 64,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1800, // True full-screen coverage!
              }}
            >
              {/* Massive Archival Photo of Jensen Huang */}
              <div style={{ position: 'relative' }}>
                <KenBurnsPhoto
                  src={ASSETS.jensen}
                  frame={frame}
                  durationInFrames={340}
                  width={700}
                  height={720}
                  startScale={1.0}
                  endScale={1.08}
                  borderStyle="matte"
                  caption="Jensen Huang · CEO & Co-Founder, NVIDIA"
                  sourceTag="GLOBAL SUMMIT ARCHIVE"
                />
              </div>

              {/* Huge Editorial Content with Documentary Highlighter */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div
                  style={{
                    backgroundColor: '#0F172A',
                    color: '#FFE600',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    fontWeight: 900,
                    letterSpacing: '0.16em',
                  }}
                >
                  THE WORLD'S MOST POWERFUL TECH LEADER
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    fontSize: '56px',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: '#0F172A',
                    letterSpacing: '-0.02em',
                  }}
                >
                  From Global Diplomat to Silicon Kingpin.
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter Sweep */}
                <DocumentaryHighlightText
                  prefix="Jensen Huang commanded world summits, meeting Prime Minister Modi, dominating the global stage with a"
                  highlightedText="$3.5 Trillion semiconductor monopoly"
                  suffix="that powers the entire artificial intelligence frontier."
                  startFrame={15}
                  highlightDuration={20}
                  fontSize={26}
                  style={{ textAlign: 'left', lineHeight: 1.6 }}
                />

                <div
                  style={{
                    display: 'flex',
                    gap: 36,
                    marginTop: 12,
                  }}
                >
                  <div
                    style={{
                      borderLeft: '5px solid #10B981',
                      paddingLeft: '24px',
                    }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: '44px', fontWeight: 900, color: '#0F172A' }}>
                      $3.5T+
                    </div>
                    <div style={{ fontSize: '16px', color: '#475569', fontWeight: 800, marginTop: '4px' }}>
                      PEAK MARKET CAP
                    </div>
                  </div>
                  <div
                    style={{
                      borderLeft: '5px solid #38BDF8',
                      paddingLeft: '24px',
                    }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: '44px', fontWeight: 900, color: '#0F172A' }}>
                      80%+
                    </div>
                    <div style={{ fontSize: '16px', color: '#475569', fontWeight: 800, marginTop: '4px' }}>
                      GLOBAL AI ACCELERATOR SHARE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: THE BOMBSHELL SUNDAY MEMO (f320 - f640)        */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [320, 345, 615, 640], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '980px 1fr', // Giant 980px Newspaper Cutout!
                gap: 64,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1800,
              }}
            >
              {/* Giant Authentic Newspaper Cutout */}
              <NewspaperCutout
                publication="THE FINANCIAL TIMES"
                headline="NVIDIA CEO JENSEN HUANG ADMITS INFIDELITY IN MEMO TO EMPLOYEES"
                subheadline="Bombastic Sunday internal memo stuns Silicon Valley as 40-year marriage breaks"
                highlightText="unfaithful in 40-year marriage"
                articleSnippet="In an unprecedented corporate memo titled 'A Message to Our Company,' Jensen Huang apologized to staff and his family, writing: 'I was unfaithful to my wife... there are no excuses.' The admission sent shockwaves through the global tech community, immediately triggering board oversight."
                date="SUNDAY DISCLOSURE"
                stampText="OFFICIAL CONFESSION"
                rotation={-1.2}
                width={980}
                startFrame={330}
              />

              {/* Narrative & Excerpt with Yellow Highlighter */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#DC2626',
                    color: '#FFFFFF',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    fontWeight: 900,
                    letterSpacing: '0.16em',
                  }}
                >
                  INTERNAL COMPANY MEMO · VERIFIED
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '48px',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: '#0F172A',
                  }}
                >
                  "A Message To Our Company"
                </div>

                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderLeft: '6px solid #DC2626',
                    borderRadius: '16px',
                    padding: '36px 40px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '25px',
                    lineHeight: 1.55,
                    color: '#1E293B',
                  }}
                >
                  "I apologize to my family and to all of you. I was unfaithful to my wife... I took actions that were wrong and there are no excuses for what I have done."
                  <div
                    style={{
                      fontStyle: 'normal',
                      fontFamily: 'monospace',
                      fontSize: '16px',
                      color: '#64748B',
                      marginTop: '16px',
                      fontWeight: 800,
                    }}
                  >
                    — JENSEN HUANG, INTERNAL MEMO TO NVIDIA WORKFORCE
                  </div>
                </div>

                <ExplainerSourceCallout
                  publication="FINANCIAL TIMES"
                  headline="Nvidia launches internal governance review following CEO memo"
                  date="VERIFIED REPORT"
                  startFrame={360}
                  position="top-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 3: THE GEOPOLITICAL HOOK (f620 - f948)            */}
        {/* ======================================================== */}
        {isPhase3 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [620, 645, 930, 948], [0, 1, 1, 1]),
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: 1550, // Full width coverage!
                gap: 32,
              }}
            >
              <div
                style={{
                  backgroundColor: '#0F172A',
                  color: '#EF4444',
                  border: '2px solid rgba(239, 68, 68, 0.5)',
                  padding: '10px 28px',
                  borderRadius: '9999px',
                  fontFamily: 'monospace',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                ⚠️ BEYOND A MARITAL SCANDAL
              </div>

              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '66px',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: '#0F172A',
                  letterSpacing: '-0.03em',
                }}
              >
                Did America's Most Sensitive AI Silicon Fall Under Beijing's Gaze?
              </div>

              {/* Direct On-Screen Narrative with Yellow Highlighter */}
              <DocumentaryHighlightText
                prefix="As federal investigators intervened, the controversy transformed from personal remorse into"
                highlightedText="the defining national security confrontation"
                suffix="for 21st-century technological supremacy."
                startFrame={640}
                highlightDuration={20}
                fontSize={30}
                style={{ maxWidth: 1350, lineHeight: 1.6 }}
              />

              <div
                style={{
                  display: 'flex',
                  gap: 48,
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '3px solid #DC2626',
                    borderRadius: '16px',
                    padding: '24px 44px',
                    fontFamily: 'monospace',
                    fontSize: '22px',
                    fontWeight: 900,
                    color: '#0F172A',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                  }}
                >
                  TARGET: <span style={{ color: '#DC2626' }}>NEXT-GEN GPU BLUEPRINTS</span>
                </div>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '3px solid #2563EB',
                    borderRadius: '16px',
                    padding: '24px 44px',
                    fontFamily: 'monospace',
                    fontSize: '22px',
                    fontWeight: 900,
                    color: '#0F172A',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                  }}
                >
                  STAKE: <span style={{ color: '#2563EB' }}>GLOBAL AI SUPREMACY</span>
                </div>
              </div>
            </div>
          </AbsoluteFill>
        )}
      </PaperBackground>
    </AbsoluteFill>
  );
};
