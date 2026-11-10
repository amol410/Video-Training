import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Easing,
} from 'remotion';
import { PaperBackground } from '../components/PaperBackground';
import { NewspaperCutout } from '../components/NewspaperCutout';
import { ExplainerRiskRadar } from '../components/explainers/ExplainerRiskRadar';
import { ExplainerSourceCallout } from '../components/explainers/ExplainerSourceCallout';
import { DocumentaryHighlightText } from '../components/DocumentaryHighlightText';

export const Act4AIEpoch: React.FC = () => {
  const frame = useCurrentFrame();

  // Phases of Act 4 (Total: 1,313 frames / 43.76s synced to 4china.wav)
  // Phase 1 (f0 - f480 / 0-16s): The Ultimate Question: Did State Secrets Leak?
  // Phase 2 (f460 - f920 / 16-30.6s): Explainer Threat Radar & Semiconductor Blueprints
  // Phase 3 (f900 - f1313 / 30.6-43.76s): From Marital Remorse to Global Superpower Clash
  const isPhase1 = frame < 480;
  const isPhase2 = frame >= 460 && frame < 920;
  const isPhase3 = frame >= 900;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: DID SECRETS LEAK? (f0 - f480)                  */}
        {/* ======================================================== */}
        {isPhase1 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [0, 20, 450, 480], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '760px 1fr',
                gap: 64,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1780,
              }}
            >
              {/* Classified Dossier Card with Archival Paper Styling */}
              <div
                style={{
                  backgroundColor: '#FFFDF8',
                  border: '2.5px solid rgba(220, 38, 38, 0.45)',
                  borderRadius: '18px',
                  padding: '44px 48px',
                  boxShadow: '0 28px 60px rgba(60, 40, 20, 0.14), 0 4px 16px rgba(60, 40, 20, 0.08)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '2px solid rgba(220, 38, 38, 0.25)',
                    paddingBottom: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '15px',
                      color: '#DC2626',
                      fontWeight: 900,
                      letterSpacing: '0.14em',
                    }}
                  >
                    TOP SECRET // U.S. EXPORT OVERSIGHT
                  </span>
                  <span
                    style={{
                      backgroundColor: 'rgba(220, 38, 38, 0.12)',
                      color: '#DC2626',
                      border: '1.5px solid rgba(220, 38, 38, 0.35)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 800,
                      fontFamily: 'monospace',
                    }}
                  >
                    CASE #NV-2024-EX
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "'Newsreader', 'Georgia', serif",
                    fontSize: '23px',
                    lineHeight: 1.65,
                    color: '#1E293B',
                    fontStyle: 'italic',
                  }}
                >
                  "Subject Jensen Huang maintains unilateral visibility over confidential Next-Gen GPU architecture roadmap, foundry allocations at TSMC, and algorithmic evasion parameters designed to comply with or circumvent Department of Commerce export thresholds."
                </div>

                {/* Authentic Documentary Yellow Chisel Highlighter Sweep */}
                <div style={{ marginTop: '24px' }}>
                  <span
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      fontFamily: 'monospace',
                      fontSize: '16px',
                      fontWeight: 900,
                      color: '#0F172A',
                      padding: '4px 12px',
                      letterSpacing: '0.04em',
                      zIndex: 1,
                    }}
                  >
                    CRITICAL FOUNDRY TELEMETRY // RESTRICTED ACCESS
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${interpolate(frame - 25, [0, 18], [0, 100], {
                          extrapolateLeft: 'clamp',
                          extrapolateRight: 'clamp',
                          easing: Easing.bezier(0.16, 1, 0.3, 1),
                        })}%`,
                        backgroundColor: '#FFE600',
                        opacity: 0.95,
                        zIndex: -1,
                        borderRadius: '3px',
                        transform: 'skew(-3deg)',
                        boxShadow: '0 2px 10px rgba(255, 230, 0, 0.45)',
                      }}
                    />
                  </span>
                </div>

                {/* Classified Archive Stamp */}
                <div
                  style={{
                    marginTop: '24px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      color: '#991B1B',
                      fontWeight: 800,
                      border: '1.5px solid #DC2626',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transform: 'rotate(-1.5deg)',
                    }}
                  >
                    RESTRICTED DISCLOSURE // SEC. 301
                  </span>
                </div>
              </div>

              {/* Strategic Stakes Context with On-Screen Highlight Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#FEE2E2',
                    border: '1.5px solid #F87171',
                    color: '#DC2626',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    fontWeight: 900,
                    letterSpacing: '0.14em',
                  }}
                >
                  THE MULTI-TRILLION DOLLAR QUESTION
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '56px',
                    fontWeight: 900,
                    lineHeight: 1.12,
                    color: '#0F172A',
                  }}
                >
                  Did America's Silicon Crown Jewels Leak?
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter Sweep */}
                <DocumentaryHighlightText
                  prefix="While no formal espionage indictment has been presented, intelligence analysts underscore that in the race for artificial intelligence,"
                  highlightedText="even marginal insights into chip yield and packaging bottlenecks"
                  suffix="provide Beijing an invaluable strategic roadmap."
                  startFrame={30}
                  highlightDuration={22}
                  fontSize={25}
                  style={{ textAlign: 'left', lineHeight: 1.6 }}
                />

                {/* High-Impact Stat Badges */}
                <div style={{ display: 'flex', gap: 18, marginTop: 4 }}>
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid rgba(40, 30, 20, 0.2)',
                      borderRadius: '10px',
                      padding: '14px 24px',
                      boxShadow: '0 4px 14px rgba(60, 40, 20, 0.06)',
                    }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
                      TSMC FOUNDRY INTEL
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#DC2626', fontWeight: 900 }}>
                      HIGHLY SENSITIVE
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid rgba(40, 30, 20, 0.2)',
                      borderRadius: '10px',
                      padding: '14px 24px',
                      boxShadow: '0 4px 14px rgba(60, 40, 20, 0.06)',
                    }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
                      EXPORT SANCTIONS
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#0F172A', fontWeight: 900 }}>
                      STRICTLY ENFORCED
                    </div>
                  </div>
                </div>

                {/* Explainer #3: Source Callout */}
                <ExplainerSourceCallout
                  publication="U.S. HOUSE SELECT COMMITTEE"
                  headline="Lawmakers evaluate semiconductor loophole protections"
                  date="OVERSIGHT MEMO"
                  startFrame={40}
                  position="bottom-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: EXPLAINER RISK RADAR (f460 - f920)             */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [460, 485, 895, 920], [0, 1, 1, 0]),
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, width: '100%', maxWidth: 1680 }}>
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
                  EXPLAINER MOTION: KINETIC THREAT RADAR
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '56px',
                    fontWeight: 900,
                    color: '#0F172A',
                    lineHeight: 1.12,
                  }}
                >
                  National Security Threat Assessment
                </div>
              </div>

              {/* Explainer #4: Risk Radar Component (1150px Width) */}
              <ExplainerRiskRadar
                threatLevel="CRITICAL"
                score={94}
                title="AI SILICON SUPREMACY DEFCON MONITOR"
                subtitle="High-risk vulnerability detected across Singapore cloud leasing conduits"
                startFrame={480}
              />
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 3: SUPERPOWER RECKONING (f900 - f1313)            */}
        {/* ======================================================== */}
        {isPhase3 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [900, 925, 1290, 1313], [0, 1, 1, 1]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '960px 1fr',
                gap: 64,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1780,
              }}
            >
              {/* Newspaper Cutout - Full Impact 960px */}
              <NewspaperCutout
                publication="THE WALL STREET JOURNAL"
                headline="CONGRESS WEIGHS SANCTION EXPANSIONS OVER NVIDIA CLOUD CONDUITS IN ASIA"
                subheadline="Washington shifts from private scandal to securing global AI supremacy"
                highlightText="national security question of AI hegemony"
                articleSnippet="WASHINGTON — Lawmakers on Capitol Hill have accelerated bipartisan hearings into overseas semiconductor leasing agreements, arguing that Jensen Huang’s personal affair has laid bare systemic vulnerabilities in how America safeguards its technological hegemony against strategic adversaries."
                date="CONGRESSIONAL OVERSIGHT"
                stampText="FINAL VERDICT"
                rotation={-1.0}
                width={960}
                startFrame={915}
              />

              {/* Conclusion Text with Direct On-Screen Highlighter */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#DC2626',
                    color: '#FFFFFF',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    fontWeight: 900,
                    letterSpacing: '0.14em',
                  }}
                >
                  THE FINAL RECKONING
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
                  Beyond Personal Betrayal: The Global AI War
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter */}
                <DocumentaryHighlightText
                  prefix="What started as an internal apology letter to employees has permanently altered the intersection of"
                  highlightedText="corporate governance, Silicon Valley celebrity, and 21st-century statecraft."
                  suffix=""
                  startFrame={930}
                  highlightDuration={20}
                  fontSize={26}
                  style={{ textAlign: 'left', lineHeight: 1.6 }}
                />

                {/* Oversight Status Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(40, 30, 20, 0.2)',
                    borderRadius: '14px',
                    padding: '24px 30px',
                    boxShadow: '0 10px 28px rgba(60, 40, 20, 0.08)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: '10px',
                    }}
                  >
                    <span style={{ fontSize: '26px' }}>⚖️</span>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        fontWeight: 900,
                        color: '#DC2626',
                        letterSpacing: '0.1em',
                      }}
                    >
                      CONGRESSIONAL SCRUTINY · INDEPENDENT INQUIRY ACTIVE
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Newsreader', 'Georgia', serif",
                      fontSize: '18px',
                      color: '#1E293B',
                      lineHeight: 1.55,
                      fontStyle: 'italic',
                    }}
                  >
                    "The affair has irrevocably shifted Nvidia from a Silicon Valley darling into the crosshairs of geopolitical rivalry, forever linking Jensen Huang's legacy to America's race for artificial intelligence hegemony."
                  </div>
                </div>
              </div>
            </div>
          </AbsoluteFill>
        )}
      </PaperBackground>
    </AbsoluteFill>
  );
};
