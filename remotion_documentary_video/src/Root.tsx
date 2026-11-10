import React from 'react';
import { Composition, Audio, staticFile } from 'remotion';
import { MainVideo } from './MainVideo';
import { Act1Origin } from './scenes/Act1Origin';
import { Act2GPURevolution } from './scenes/Act2GPURevolution';
import { Act3Geopolitics } from './scenes/Act3Geopolitics';
import { Act4AIEpoch } from './scenes/Act4AIEpoch';
import {
  ExplainerShowcase,
  ExplainerStepper,
  ExplainerTwoNumbers,
  ExplainerRiskRadar,
  ExplainerSourceCallout,
} from './components/explainers';
import {
  FPS,
  WIDTH,
  HEIGHT,
  TOTAL_DURATION_FRAMES,
  ACT_TIMINGS,
} from './constants';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Master 4-Act Documentary Feature (5,250 Frames / 175.00 Seconds) */}
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_DURATION_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Standalone Act 1: The Silicon Origin & Denny's Genesis */}
      <Composition
        id="Act1-Origin"
        component={() => (
          <>
            <Audio src={staticFile(ACT_TIMINGS[0].audioSrc)} volume={1} />
            <Act1Origin />
          </>
        )}
        durationInFrames={ACT_TIMINGS[0].durationInFrames}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Standalone Act 2: Accelerated Computing & GPU Revolution */}
      <Composition
        id="Act2-GPURevolution"
        component={() => (
          <>
            <Audio src={staticFile(ACT_TIMINGS[1].audioSrc)} volume={1} />
            <Act2GPURevolution />
          </>
        )}
        durationInFrames={ACT_TIMINGS[1].durationInFrames}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Standalone Act 3: Geopolitical Supply Chain & China AI Epoch */}
      <Composition
        id="Act3-Geopolitics"
        component={() => (
          <>
            <Audio src={staticFile(ACT_TIMINGS[2].audioSrc)} volume={1} />
            <Act3Geopolitics />
          </>
        )}
        durationInFrames={ACT_TIMINGS[2].durationInFrames}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Standalone Act 4: The Trillion-Dollar Climax & AI Factory */}
      <Composition
        id="Act4-AIEpoch"
        component={() => (
          <>
            <Audio src={staticFile(ACT_TIMINGS[3].audioSrc)} volume={1} />
            <Act4AIEpoch />
          </>
        )}
        durationInFrames={ACT_TIMINGS[3].durationInFrames}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Explainer 1: Stepper Timeline Progression */}
      <Composition
        id="Explainer-Stepper"
        component={() => (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#F6F2E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ExplainerStepper />
          </div>
        )}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Explainer 2: Two Numbers Compared (Split-Screen Metric & Odometer) */}
      <Composition
        id="Explainer-TwoNumbers"
        component={() => (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#F6F2E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ExplainerTwoNumbers />
          </div>
        )}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Explainer 3: Verified Source Callout Pill */}
      <Composition
        id="Explainer-SourceCallout"
        component={() => (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#060810', position: 'relative' }}>
            <ExplainerSourceCallout position="top-right" />
            <ExplainerSourceCallout
              publication="THE NEW YORK TIMES"
              headline="Nvidia AI chips routed through Singapore cloud servers, intelligence memo claims"
              date="DECEMBER 2024"
              position="bottom-left"
              startFrame={15}
            />
          </div>
        )}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Explainer 4: Risk Radar & Threat Dial Gauge */}
      <Composition
        id="Explainer-RiskRadar"
        component={() => (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#F6F2E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ExplainerRiskRadar />
          </div>
        )}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Master Explainer Showcase Reel */}
      <Composition
        id="Explainer-Showcase"
        component={ExplainerShowcase}
        durationInFrames={360}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
