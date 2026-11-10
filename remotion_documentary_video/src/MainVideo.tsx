import React from 'react';
import { AbsoluteFill, Series, Audio, staticFile } from 'remotion';
import { ACT_TIMINGS } from './constants';
import { Act1Origin } from './scenes/Act1Origin';
import { Act2GPURevolution } from './scenes/Act2GPURevolution';
import { Act3Geopolitics } from './scenes/Act3Geopolitics';
import { Act4AIEpoch } from './scenes/Act4AIEpoch';

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#F6F2E9' }}>
      <Series>
        {/* ACT 1: THE SILICON ORIGIN (948 frames / 31.60s) */}
        <Series.Sequence durationInFrames={ACT_TIMINGS[0].durationInFrames}>
          <Audio src={staticFile(ACT_TIMINGS[0].audioSrc)} volume={1} />
          <Act1Origin />
        </Series.Sequence>

        {/* ACT 2: ACCELERATED COMPUTING (1283 frames / 42.76s) */}
        <Series.Sequence durationInFrames={ACT_TIMINGS[1].durationInFrames}>
          <Audio src={staticFile(ACT_TIMINGS[1].audioSrc)} volume={1} />
          <Act2GPURevolution />
        </Series.Sequence>

        {/* ACT 3: THE GEOPOLITICAL CHESSBOARD (1706 frames / 56.88s) */}
        <Series.Sequence durationInFrames={ACT_TIMINGS[2].durationInFrames}>
          <Audio src={staticFile(ACT_TIMINGS[2].audioSrc)} volume={1} />
          <Act3Geopolitics />
        </Series.Sequence>

        {/* ACT 4: THE TRILLION-DOLLAR EPOCH (1313 frames / 43.76s) */}
        <Series.Sequence durationInFrames={ACT_TIMINGS[3].durationInFrames}>
          <Audio src={staticFile(ACT_TIMINGS[3].audioSrc)} volume={1} />
          <Act4AIEpoch />
        </Series.Sequence>
      </Series>

    </AbsoluteFill>
  );
};
