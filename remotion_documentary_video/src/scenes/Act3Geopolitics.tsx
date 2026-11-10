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
import { ExplainerStepper } from '../components/explainers/ExplainerStepper';
import { ExplainerSourceCallout } from '../components/explainers/ExplainerSourceCallout';
import { DocumentaryHighlightText } from '../components/DocumentaryHighlightText';
import { ScribbleCircle } from '../components/ScribbleCircle';
import { ASSETS } from '../constants';

export const Act3Geopolitics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase timings for Act 3 (Total: 1,706 frames / 56.88s)
  // Phase 1 (f0 - f520 / 0-17.3s): The Sunday Disclosure & Company Memo
  // Phase 2 (f500 - f1080 / 17.3-36s): Alice Huang & Megaspeed Singapore (The User's Highlighted Screen!)
  // Phase 3 (f1060 - f1706 / 36-56.88s): Explainer Stepper & Congressional Inquiry
  const isPhase1 = frame < 520;
  const isPhase2 = frame >= 500 && frame < 1080;
  const isPhase3 = frame >= 1060;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: THE SUNDAY DISCLOSURE (f0 - f520)              */}
        {/* ======================================================== */}
        {isPhase1 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [0, 20, 490, 520], [0, 1, 1, 0]),
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
              {/* Giant Newspaper Cutout */}
              <NewspaperCutout
                publication="THE GUARDIAN"
                headline="NVIDIA BOARD LAUNCHES GOVERNANCE REVIEW AS JENSEN HUANG CONFESSES INFIDELITY"
                subheadline="Internal company memo discloses personal unfaithfulness after four decades of marriage"
                highlightText="A Message to Our Company"
                articleSnippet="SANTA CLARA — In an emotional internal broadcast to Nvidia staff, CEO Jensen Huang acknowledged engaging in an extramarital relationship, stating: 'I took actions that were wrong and there are no excuses.' The announcement immediately prompted the board to engage independent legal counsel."
                date="BREAKING EXCLUSIVE"
                stampText="EXHIBIT B: MEMO"
                rotation={-1.4}
                width={980}
                startFrame={20}
              />

              {/* Verified Memo Card with On-Screen Highlight */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#1E293B',
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
                  FULL INTERNAL TEXT EXCERPT
                </div>

                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(0,0,0,0.15)',
                    borderRadius: '16px',
                    padding: '36px 42px',
                    boxShadow: '0 20px 44px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '15px',
                      color: '#64748B',
                      marginBottom: '16px',
                      borderBottom: '1.5px solid #E2E8F0',
                      paddingBottom: '10px',
                    }}
                  >
                    FROM: Jensen Huang &lt;jensen@nvidia.com&gt; · TO: All Nvidia Worldwide
                  </div>
                  <div
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '24px',
                      fontStyle: 'italic',
                      lineHeight: 1.55,
                      color: '#1E293B',
                    }}
                  >
                    "I am deeply sorry to my family and to each of you. I breached the trust placed in me over 40 years... I accept complete responsibility without excuses."
                  </div>
                </div>

                <ExplainerSourceCallout
                  publication="THE NEW YORK TIMES"
                  headline="Jensen Huang memo reveals internal crisis at world's premier chip giant"
                  date="VERIFIED REPORT"
                  startFrame={60}
                  position="top-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: ALICE HUANG & MEGASPEED (f500 - f1080)         */}
        {/* Directly Addressing the User's Screenshot: FULL SCREEN!  */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '50px 70px',
              opacity: interpolate(frame, [500, 525, 1050, 1080], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '880px 1fr', // 880px massive photo gallery on left!
                gap: 60,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1820, // Full width coverage!
              }}
            >
              {/* Massive Archival Photos: Alice Huang & Megaspeed International */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '430px 430px', gap: 20 }}>
                  <KenBurnsPhoto
                    src={ASSETS.aliceHuang}
                    frame={frame - 500}
                    durationInFrames={580}
                    width={430}
                    height={540} // Giant portrait!
                    startScale={1.0}
                    endScale={1.06}
                    borderStyle="matte"
                    caption="Alice Huang (Huang Le)"
                    sourceTag="MEGASPEED EXECUTIVE"
                  />
                  <KenBurnsPhoto
                    src={ASSETS.megaspeed}
                    frame={frame - 500}
                    durationInFrames={580}
                    width={430}
                    height={540} // Giant photo!
                    startScale={1.0}
                    endScale={1.06}
                    borderStyle="matte"
                    caption="Megaspeed International"
                    sourceTag="SINGAPORE CLOUD HUB"
                  />
                </div>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderLeft: '5px solid #DC2626',
                    padding: '16px 24px',
                    borderRadius: '8px',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                    fontFamily: 'monospace',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: '#475569',
                  }}
                >
                  NOTE: Jensen Huang and Alice Huang share no family relation.
                </div>
              </div>

              {/* Full-Screen Geopolitical Allegations with Yellow Highlighter */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#DC2626',
                    color: '#FFFFFF',
                    padding: '8px 22px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    fontWeight: 900,
                    letterSpacing: '0.16em',
                  }}
                >
                  INTELLIGENCE SCRUTINY · SINGAPORE
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '52px', // Big bold headline!
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: '#0F172A',
                  }}
                >
                  The Megaspeed & MSS Allegations
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter & Red Scribble Circle */}
                <div
                  style={{
                    fontFamily: "'Newsreader', 'Georgia', serif",
                    fontSize: '25px',
                    lineHeight: 1.6,
                    color: '#1E293B',
                    textAlign: 'left',
                  }}
                >
                  Megaspeed, a Singapore cloud operator, became a multi-billion-dollar buyer of H100 clusters. U.S. intelligence questioned whether it served as{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: '-4px',
                        right: '-4px',
                        bottom: '4%',
                        height: '75%',
                        backgroundColor: '#FFE600',
                        opacity: 0.9,
                        mixBlendMode: 'multiply',
                        borderRadius: '3px',
                        transform: 'skewX(-6deg)',
                        clipPath: `inset(0 ${Math.max(
                          0,
                          100 -
                            interpolate(frame - 520, [0, 22], [0, 100], {
                              extrapolateLeft: 'clamp',
                              extrapolateRight: 'clamp',
                            })
                        )}% 0 0)`,
                        zIndex: 0,
                      }}
                    />
                    <span style={{ position: 'relative', zIndex: 1, color: '#0F172A', fontWeight: 800 }}>
                      a{' '}
                      <ScribbleCircle
                        startFrame={545}
                        color="#DC2626"
                        strokeWidth={4}
                        playAudio={true}
                        audioVolume={0.35}
                      >
                        conduit
                      </ScribbleCircle>{' '}
                      to bypass export bans
                    </span>
                  </span>{' '}
                  and route compute power toward Chinese state entities.
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(254, 226, 226, 0.9)',
                    border: '2px solid #DC2626',
                    borderRadius: '12px',
                    padding: '24px 28px',
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '18px',
                    color: '#991B1B',
                    lineHeight: 1.55,
                    boxShadow: '0 8px 24px rgba(220, 38, 38, 0.1)',
                  }}
                >
                  ⚠️ <strong>Espionage Claims vs. Smear Campaign:</strong> While U.S. intelligence memos alleged ties to China's Ministry of State Security (MSS), Nvidia’s board stated no trade secrets were compromised, and no formal criminal charges have been filed.
                </div>
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 3: EXPLAINER STEPPER (f1060 - f1706)              */}
        {/* ======================================================== */}
        {isPhase3 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [1060, 1085, 1680, 1706], [0, 1, 1, 1]),
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    fontWeight: 900,
                    color: '#DC2626',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  EXPLAINER MOTION: CHRONOLOGY OF ESCALATION
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '52px',
                    fontWeight: 900,
                    color: '#0F172A',
                  }}
                >
                  From Marital Crisis to Congressional Inquiry
                </div>
              </div>

              {/* Giant 1620px Full-Screen Stepper */}
              <ExplainerStepper
                steps={[
                  {
                    number: '01',
                    date: 'OCTOBER 2024',
                    title: 'The Sunday Staff Memo',
                    description: 'Jensen Huang admits personal unfaithfulness in official broadcast to all Nvidia employees.',
                  },
                  {
                    number: '02',
                    date: 'NOVEMBER 2024',
                    title: 'The Singapore Conduit',
                    description: 'Scrutiny deepens on Alice Huang & Megaspeed acquiring billions in export-controlled H100 GPUs.',
                  },
                  {
                    number: '03',
                    date: 'DECEMBER 2024',
                    title: 'Congressional Inquiries',
                    description: 'U.S. Senate & Commerce Dept evaluate trade blacklists, foreign intelligence links, and export leaks.',
                  },
                ]}
                startFrame={1080}
              />
            </div>
          </AbsoluteFill>
        )}
      </PaperBackground>
    </AbsoluteFill>
  );
};
