import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  useVideoConfig,
} from 'remotion';
import { PaperBackground } from '../components/PaperBackground';
import { NewspaperCutout } from '../components/NewspaperCutout';
import { ExplainerTwoNumbers } from '../components/explainers/ExplainerTwoNumbers';
import { ExplainerSourceCallout } from '../components/explainers/ExplainerSourceCallout';
import { DocumentaryHighlightText } from '../components/DocumentaryHighlightText';

export const Act2GPURevolution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase timings for Act 2 (Total: 1,283 frames / 42.76s)
  // Phase 1 (f0 - f480 / 0-16s): The AI Compute Engine & GPU Monopoly
  // Phase 2 (f460 - f860 / 16-28.6s): Explainer Two Numbers Compared (88% vs 12%)
  // Phase 3 (f840 - f1283 / 28.6-42.76s): China's Silicon Race & National Security Stakes
  const isPhase1 = frame < 480;
  const isPhase2 = frame >= 460 && frame < 860;
  const isPhase3 = frame >= 840;

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground enableJitter={false} gridOpacity={0.08}>
        {/* ======================================================== */}
        {/* PHASE 1: THE AI COMPUTE ENGINE (f0 - f480)              */}
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: 1650, // Full width utilization!
                gap: 32,
              }}
            >
              <div
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFE600',
                  padding: '8px 22px',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  fontSize: '16px',
                  fontWeight: 900,
                  letterSpacing: '0.18em',
                }}
              >
                THE ARCHITECTURE OF MODERN AI
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
                Why Jensen Huang Is No Ordinary CEO.
              </div>

              {/* Direct On-Screen Narrative with Yellow Highlighter */}
              <DocumentaryHighlightText
                prefix="Nvidia does not just produce computer chips. Its graphic processing units (GPUs) and CUDA software stack form the physical engine powering"
                highlightedText="ChatGPT, Google Gemini, Anthropic Claude,"
                suffix="and every critical AI supercomputer on Earth."
                startFrame={20}
                highlightDuration={20}
                fontSize={28}
                style={{ maxWidth: 1450, lineHeight: 1.6 }}
              />

              {/* Silicon Cards Row - Warm Archival Styling */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 32,
                  width: '100%',
                  marginTop: 18,
                }}
              >
                {[
                  { name: 'NVIDIA H100 / H200', role: 'Frontier LLM Training Silicon', spec: '80B Transistors · TSMC 4N Process' },
                  { name: 'BLACKWELL B200', role: 'Next-Gen Generative AI Engine', spec: '208B Transistors · 20 PFLOPS Compute' },
                  { name: 'CUDA ECOSYSTEM', role: 'Proprietary Software Lock-in', spec: '5M+ Global AI Developers Worldwide' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2.5px solid rgba(40, 30, 20, 0.15)',
                      borderRadius: '16px',
                      padding: '32px 28px',
                      textAlign: 'left',
                      boxShadow: '0 16px 36px rgba(40, 30, 20, 0.08)',
                    }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: '22px', fontWeight: 900, color: '#059669' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '18px', color: '#0F172A', fontWeight: 800, marginTop: '8px' }}>
                      {item.role}
                    </div>
                    <div style={{ fontSize: '15px', color: '#64748B', fontFamily: 'monospace', marginTop: '10px' }}>
                      {item.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 2: EXPLAINER TWO NUMBERS COMPARED (f460 - f860)   */}
        {/* ======================================================== */}
        {isPhase2 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [460, 485, 835, 860], [0, 1, 1, 0]),
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '16px',
                    fontWeight: 900,
                    color: '#CA8A04',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  EXPLAINER MOTION: TWO NUMBERS COMPARED
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '52px',
                    fontWeight: 900,
                    color: '#0F172A',
                  }}
                >
                  The Asymmetric Chokepoint on AI Power
                </div>
              </div>

              {/* Explainer #1: Giant Two Numbers Compared (Warm Paper Re-skinned) */}
              <ExplainerTwoNumbers
                label1="NVIDIA GLOBAL AI SILICON SHARE"
                value1={88}
                suffix1="%"
                sub1="Monopolizes all frontier LLM training clusters, supercomputing datacenters, and enterprise AI worldwide."
                label2="ALL RIVALS COMBINED"
                value2={12}
                suffix2="%"
                sub2="AMD Instinct, Intel Gaudi, Google Cloud TPU, Amazon Trainium & Chinese domestic ASICs."
                comparisonBadge="7.3X COMPUTE SUPREMACY OVER ALL GLOBAL COMPETITION"
                startFrame={480}
              />
            </div>
          </AbsoluteFill>
        )}

        {/* ======================================================== */}
        {/* PHASE 3: CHINA'S SILICON RACE & NATIONAL SECURITY (f840 - f1283) */}
        {/* ======================================================== */}
        {isPhase3 && (
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 80px',
              opacity: interpolate(frame, [840, 865, 1260, 1283], [0, 1, 1, 1]),
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
                publication="THE WALL STREET JOURNAL"
                headline="CHINA ACCELERATES DOMESTIC AI CHIP RACE AMID STRICT U.S. EXPORT BANS"
                subheadline="Beijing targets Nvidia's architectural secrets as Washington tightens compute sanctions"
                highlightText="technology is America's ultimate superpower"
                articleSnippet="WASHINGTON — Facing sweeping U.S. export controls barring access to Nvidia’s leading H100 and Blackwell chips, Chinese state-backed entities have intensified clandestine efforts to secure advanced architecture secrets and high-performance silicon through overseas intermediaries."
                date="SPECIAL REPORT"
                stampText="GEOPOLITICAL THREAT"
                rotation={1.2}
                width={980}
                startFrame={850}
              />

              {/* National Security Context with Yellow Highlighter */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                  style={{
                    backgroundColor: '#DC2626',
                    color: '#FFFFFF',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    alignSelf: 'flex-start',
                    fontFamily: 'monospace',
                    fontSize: '15px',
                    fontWeight: 900,
                    letterSpacing: '0.16em',
                  }}
                >
                  HIGH-LEVEL INTELLIGENCE CONCERN
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '46px',
                    fontWeight: 900,
                    lineHeight: 1.18,
                    color: '#0F172A',
                  }}
                >
                  Why The CEO's Circle Matters To Washington
                </div>

                {/* Direct On-Screen Narrative with Yellow Highlighter */}
                <DocumentaryHighlightText
                  prefix="Because technological supremacy is America's ultimate buffer, who Jensen Huang meets and speaks with is"
                  highlightedText="treated by counterintelligence as a high-stakes vulnerability."
                  suffix=""
                  startFrame={860}
                  highlightDuration={18}
                  fontSize={25}
                  style={{ textAlign: 'left', lineHeight: 1.55 }}
                />

                <ExplainerSourceCallout
                  publication="BLOOMBERG INVESTIGATION"
                  headline="US officials examine supply chain evasion through Southeast Asian data hubs"
                  date="NOVEMBER 2024"
                  startFrame={890}
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
