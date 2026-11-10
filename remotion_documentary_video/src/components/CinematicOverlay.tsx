import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

interface CinematicOverlayProps {
  showProgress?: boolean;
  progressColor?: string;
  letterboxHeight?: number; // 0 for full bleed 16:9
  showFrameLines?: boolean;
}

export const CinematicOverlay: React.FC<CinematicOverlayProps> = ({
  showProgress = true,
  progressColor = '#FFE600',
  letterboxHeight = 0,
  showFrameLines = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progressPercent = Math.min(100, (frame / durationInFrames) * 100);

  return (
    <AbsoluteFill style={{ pointerEvents: 'none', zIndex: 900 }}>
      {/* Top Progress Bar */}
      {showProgress && (
        <div
          style={{
            position: 'absolute',
            top: letterboxHeight,
            left: 0,
            width: `${progressPercent}%`,
            height: '3px',
            backgroundColor: progressColor,
            boxShadow: `0 0 10px ${progressColor}`,
            zIndex: 910,
          }}
        />
      )}

      {/* Top and Bottom 1px Editorial Rules */}
      {showFrameLines && (
        <>
          <div
            style={{
              position: 'absolute',
              top: letterboxHeight + 24,
              left: 48,
              right: 48,
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              zIndex: 905,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: letterboxHeight + 24,
              left: 48,
              right: 48,
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              zIndex: 905,
            }}
          />
        </>
      )}

      {/* Optional Cinematic Letterbox Bars */}
      {letterboxHeight > 0 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: letterboxHeight,
              backgroundColor: '#000000',
              zIndex: 920,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: letterboxHeight,
              backgroundColor: '#000000',
              zIndex: 920,
            }}
          />
        </>
      )}
    </AbsoluteFill>
  );
};
