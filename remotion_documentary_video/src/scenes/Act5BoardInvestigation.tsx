import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from 'remotion';
import { PaperBackground } from '../components/PaperBackground';
import { NewspaperCutout } from '../components/NewspaperCutout';
import { ExplainerSourceCallout } from '../components/explainers/ExplainerSourceCallout';
import { DocumentaryHighlightText } from '../components/DocumentaryHighlightText';
import { ScribbleCircle } from '../components/ScribbleCircle';

export const Act5BoardInvestigation: React.FC = () => {
  const frame = useCurrentFrame();

  // Phases of Act 5 (Total: 840 frames / 28.00s synced to 5china.wav)
  // Phase 1 (f0 - f380 / 0-12.6s): Independent Board Directors Inquiry & Foreign Espionage Targeting
  // Phase 2 (f360 - f840 / 12-28.00s): The Emotional Family Apology & Plea for Trust
  const isPhase1 = frame < 380;
  const isPhase2 = frame >= 360;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: INDEPENDENT DIRECTORS INQUIRY (f0 - f380)       */}
        {/* ======================================================== */}
        {isPhase1 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [0, 20, 350, 380], [0, 1, 1, 0]),
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
                publication="THE FINANCIAL TIMES"
                headline="NVIDIA BOARD OPENS INDEPENDENT PROBE INTO FOREIGN INTELLIGENCE TARGETING"
                subheadline="Special committee retains outside counsel as concerns grow over state-sponsored influence"
                highlightText="independent directors launch formal investigation"
                articleSnippet="SANTA CLARA — In a formal corporate directive, Nvidia's independent board members confirmed the retention of specialized external counsel to investigate whether CEO Jensen Huang was made the focus of a foreign intelligence cultivation attempt, evaluating enterprise integrity and trade compliance."
                date="SPECIAL INQUIRY"
                stampText="BOARD DIRECTIVE"
                rotation={-1.1}
                width={980}
                startFrame={20}
              />

              {/* Editorial Analysis with Direct On-Screen Highlighter */}
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
                  BOARD DIRECTORS · MANDATE ACTIVE
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
                  The Board Intervenes: Espionage or Smear?
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter */}
                <DocumentaryHighlightText
                  prefix="In response to mounting claims that the CEO may have been targeted by hostile intelligence assets, Nvidia's board confirmed that"
                  highlightedText="an independent directors' investigation is officially underway"
                  suffix="to safeguard proprietary technology."
                  startFrame={30}
                  highlightDuration={22}
                  fontSize={25}
                  style={{ textAlign: 'left', lineHeight: 1.55 }}
                />

                <ExplainerSourceCallout
                  publication="REUTERS EXCLUSIVE"
                  headline="Outside legal counsel initiates forensic review of executive communications"
                  date="BOARD DISCLOSURE"
                  startFrame={60}
                  position="bottom-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: THE EMOTIONAL FAMILY APOLOGY (f360 - f840)     */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [360, 385, 815, 840], [0, 1, 1, 1]),
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '880px 1fr',
                gap: 64,
                alignItems: 'center',
                width: '100%',
                maxWidth: 1800,
              }}
            >
              {/* Authentic Archival Confession Addendum Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2.5px solid rgba(220, 38, 38, 0.4)',
                  borderRadius: '16px',
                  padding: '40px 44px',
                  boxShadow: '0 24px 50px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1.5px solid #F1F5F9',
                    paddingBottom: '14px',
                    marginBottom: '20px',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '14px', color: '#DC2626', fontWeight: 900, letterSpacing: '0.12em' }}>
                    EXHIBIT 05-A // PERSONAL TRANSMISSION
                  </span>
                  <span style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', padding: '3px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 800, fontFamily: 'monospace' }}>
                    CONFESSION ADDENDUM
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '26px',
                    lineHeight: 1.6,
                    color: '#1E293B',
                  }}
                >
                  "To my wife and family, I love you deeply. I know an apology cannot erase what has happened, but I hope with time I can earn back your{' '}
                  <ScribbleCircle
                    startFrame={410}
                    color="#DC2626"
                    strokeWidth={4}
                    playAudio={true}
                    audioVolume={0.35}
                    rotation={-2}
                  >
                    trust.
                  </ScribbleCircle>"
                </div>

                <div
                  style={{
                    marginTop: '22px',
                    borderTop: '1.5px solid #F1F5F9',
                    paddingTop: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '14px', color: '#64748B', fontWeight: 800 }}>
                    — JENSEN HUANG, PRIVATE MEMORANDUM
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#991B1B', fontWeight: 900, border: '1px solid #DC2626', padding: '2px 8px', borderRadius: '3px' }}>
                    VERIFIED EXCERPT
                  </span>
                </div>
              </div>

              {/* Narrative Analysis */}
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
                    letterSpacing: '0.16em',
                  }}
                >
                  THE HUMAN DIMENSION
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
                  Can Time Restore Broken Trust?
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter */}
                <DocumentaryHighlightText
                  prefix="Beyond corporate governance and geopolitical chessboards lies the intimate reality: a leader acknowledging that"
                  highlightedText="an apology cannot undo the devastation caused"
                  suffix="to his 40-year marriage and family."
                  startFrame={380}
                  highlightDuration={20}
                  fontSize={25}
                  style={{ textAlign: 'left', lineHeight: 1.55 }}
                />

                <ExplainerSourceCallout
                  publication="THE WALL STREET JOURNAL"
                  headline="Family reconciliation and governance hurdles confront Nvidia chief"
                  date="SPECIAL REPORT"
                  startFrame={410}
                  position="bottom-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}
      </PaperBackground>
    </AbsoluteFill>
  );
};
