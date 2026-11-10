import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import { ExplainerStepper } from './ExplainerStepper';
import { ExplainerTwoNumbers } from './ExplainerTwoNumbers';
import { ExplainerSourceCallout } from './ExplainerSourceCallout';
import { ExplainerRiskRadar } from './ExplainerRiskRadar';
import { PaperBackground } from '../PaperBackground';

export const ExplainerShowcase: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <PaperBackground gridOpacity={0.07} vignetteOpacity={0.18} />

      {/* Part 1: ExplainerTwoNumbers (f0 - f120) */}
      <Sequence from={0} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ExplainerTwoNumbers
            startFrame={0}
            value1={88}
            value2={12}
            comparisonBadge="7.3X COMPUTE ADVANTAGE"
          />
          <ExplainerSourceCallout
            publication="THE WALL STREET JOURNAL"
            headline="Nvidia commands estimated 88% of AI data center accelerator market"
            date="SEPTEMBER 2024"
            position="bottom-right"
            startFrame={25}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Part 2: ExplainerStepper (f120 - f240) */}
      <Sequence from={120} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ExplainerStepper
            startFrame={0}
            eyebrow="INVESTIGATION TIMELINE // CONGRESSIONAL RECORD"
          />
          <ExplainerSourceCallout
            publication="FINANCIAL TIMES"
            headline="US weighs blacklist for Megaspeed over Nvidia chip flows"
            date="NOVEMBER 2024"
            position="top-right"
            startFrame={20}
          />
        </AbsoluteFill>
      </Sequence>

      {/* Part 3: ExplainerRiskRadar (f240 - f360) */}
      <Sequence from={240} durationInFrames={120}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ExplainerRiskRadar
            startFrame={0}
            threatLevel="CRITICAL"
            score={94}
            title="NATIONAL SECURITY THREAT ASSESSMENT"
            subtitle="U.S. AI Silicon Hegemony & Export Control Evasion Risk"
          />
          <ExplainerSourceCallout
            publication="REUTERS INVESTIGATES"
            headline="Senate committee examines Singapore AI cloud conduit to China"
            date="DECEMBER 2024"
            position="bottom-left"
            startFrame={15}
          />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
