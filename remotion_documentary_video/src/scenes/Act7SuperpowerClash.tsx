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

export const Act7SuperpowerClash: React.FC = () => {
  const frame = useCurrentFrame();

  // Phases of Act 7 (Total: 836 frames / 27.88s synced to 7china.wav)
  // Phase 1 (f0 - f420 / 0-14.0s): Geopolitical Crossroads & Tech Diplomacy
  // Phase 2 (f400 - f836 / 13.3-27.88s): The Grand Finale & Silicon Hegemony Verdict
  const isPhase1 = frame < 420;
  const isPhase2 = frame >= 400;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: GEOPOLITICAL CROSSROADS (f0 - f420)            */}
        {/* ======================================================== */}
        {isPhase1 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [0, 20, 390, 420], [0, 1, 1, 0]),
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
                publication="THE WASHINGTON POST"
                headline="THE NEW GEOPOLITICAL FRONT: SILICON CHIPS, CELEBRITY CEOS, AND NATIONAL SOVEREIGNTY"
                subheadline="How private indiscretion became entangled with the defining superpower rivalry of our time"
                highlightText="intersection of tech titans and geopolitical warfare"
                articleSnippet="WASHINGTON — The fallout from Santa Clara to Capitol Hill signals an irreversible shift in international statecraft. Semiconductor executives now operate under the same intense counterintelligence scrutiny once reserved for defense ministers and nuclear scientists."
                date="HISTORICAL ANALYSIS"
                stampText="GLOBAL IMPACT"
                rotation={1.0}
                width={980}
                startFrame={20}
              />

              {/* Narrative Analysis with Direct On-Screen Highlighter */}
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
                  HISTORICAL CROSSROADS
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
                  Silicon Valley in the Shadow of Empire
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter */}
                <DocumentaryHighlightText
                  prefix="This unprecedented political storm demonstrates how the race for artificial intelligence has thrust the tech sector into"
                  highlightedText="the high-stakes theater of 21st-century international statecraft."
                  suffix=""
                  startFrame={25}
                  highlightDuration={22}
                  fontSize={25}
                  style={{ textAlign: 'left', lineHeight: 1.55 }}
                />

                <ExplainerSourceCallout
                  publication="FOREIGN AFFAIRS"
                  headline="The silicon chokepoint: Why semiconductor CEOs hold geopolitical leverage"
                  date="SPECIAL ESSAY"
                  startFrame={50}
                  position="bottom-right"
                />
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: THE GRAND FINALE (f400 - f836)                  */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [400, 425, 810, 836], [0, 1, 1, 1]),
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: 1680,
                gap: 36,
              }}
            >
              <div
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFE600',
                  border: '2px solid rgba(255, 230, 0, 0.4)',
                  padding: '10px 28px',
                  borderRadius: '9999px',
                  fontFamily: 'monospace',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                THE FINAL VERDICT // DOCUMENTARY CONCLUSION
              </div>

              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '66px',
                  fontWeight: 900,
                  lineHeight: 1.12,
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                }}
              >
                Technology Is the Ultimate Superpower.
              </div>

              {/* Direct On-Screen Narrative with Yellow Highlighter */}
              <DocumentaryHighlightText
                prefix="What began as an internal corporate apology has permanently rewritten the rules of modern power: in the race for artificial intelligence,"
                highlightedText="the boundary between private vulnerability and technological supremacy"
                suffix="has vanished forever."
                startFrame={420}
                highlightDuration={24}
                fontSize={30}
                style={{ maxWidth: 1450, lineHeight: 1.6 }}
              />

              {/* Dual Archival Summary Badges */}
              <div
                style={{
                  display: 'flex',
                  gap: 48,
                  marginTop: 18,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '3px solid #059669',
                    borderRadius: '16px',
                    padding: '24px 44px',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#059669', fontWeight: 900, letterSpacing: '0.14em' }}>
                    HISTORICAL RECORD
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: '#0F172A', fontWeight: 900, marginTop: '6px' }}>
                    NVIDIA BOARD INQUIRY CONCLUDED
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '3px solid #DC2626',
                    borderRadius: '16px',
                    padding: '24px 44px',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#DC2626', fontWeight: 900, letterSpacing: '0.14em' }}>
                    GEOPOLITICAL RACE
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: '#0F172A', fontWeight: 900, marginTop: '6px' }}>
                    THE AI SUPREMACY WAR ESCALATES
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
