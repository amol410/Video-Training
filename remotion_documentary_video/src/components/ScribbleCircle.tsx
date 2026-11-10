import React from 'react';
import {
  useCurrentFrame,
  interpolate,
  Easing,
  Audio,
  Sequence,
  staticFile,
} from 'remotion';

export interface ScribbleCircleProps {
  children: React.ReactNode;
  /**
   * The frame within the parent scene when the pen starts drawing the circle.
   */
  startFrame: number;
  /**
   * Duration in frames to draw the complete hand-drawn circle. Default 24 frames (~0.8s).
   */
  durationInFrames?: number;
  /**
   * Color of the felt-tip pen. Default '#FFE600' (canary yellow) or '#DC2626' (crimson).
   */
  color?: string;
  /**
   * Stroke width of the pen line. Default 4px.
   */
  strokeWidth?: number;
  /**
   * Whether to play the authentic pen scratch sound effect (pen.wav). Default true.
   */
  playAudio?: boolean;
  /**
   * Volume of pen.wav (0.0 to 1.0). Default 0.35 (subtle, non-intrusive).
   */
  audioVolume?: number;
  /**
   * Slight organic tilt angle in degrees. Default -1.5deg.
   */
  rotation?: number;
  /**
   * Horizontal padding around the word in pixels. Default 8px.
   */
  paddingX?: number;
  /**
   * Vertical padding around the word in pixels. Default 4px.
   */
  paddingY?: number;
  /**
   * Fine-tune horizontal position of the SVG circle in pixels. Default 0.
   */
  offsetX?: number;
  /**
   * Fine-tune vertical position of the SVG circle in pixels. Default 0.
   */
  offsetY?: number;
  /**
   * Optional custom styling on the outer span container.
   */
  style?: React.CSSProperties;
}

/**
 * Hand-Drawn Scribble Circle Component (Adapted from Effect 39 in Motion Design Guide).
 * 
 * Draws an organic, imperfect hand-drawn ellipse around a single word or number
 * with authentic line-drawing animation and real pen-on-paper sound (pen.wav).
 * 
 * 100% deterministic, seek-safe, and does NOT alter or stretch scene durations.
 */
export const ScribbleCircle: React.FC<ScribbleCircleProps> = ({
  children,
  startFrame,
  durationInFrames = 24,
  color = '#FFE600',
  strokeWidth = 4,
  playAudio = true,
  audioVolume = 0.35,
  rotation = -1.5,
  paddingX = 8,
  paddingY = 4,
  offsetX = 0,
  offsetY = 0,
  style,
}) => {
  const frame = useCurrentFrame();

  // Draw progress: 1 (completely hidden) -> 0 (fully drawn)
  const strokeProgress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.35, 0.1, 0.25, 1),
    }
  );

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: `${paddingY}px ${paddingX}px`,
        margin: `-${paddingY}px 0`,
        verticalAlign: 'baseline',
        ...style,
      }}
    >
      {/* Target Word / Content */}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>

      {/* Hand-Drawn SVG Scribble Circle Overlay */}
      <svg
        viewBox="0 0 200 70"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          left: -paddingX - 6 + offsetX,
          top: -paddingY - 4 + offsetY,
          width: `calc(100% + ${paddingX * 2 + 12}px)`,
          height: `calc(100% + ${paddingY * 2 + 8}px)`,
          overflow: 'visible',
          pointerEvents: 'none',
          transform: `rotate(${rotation}deg)`,
          zIndex: 2,
        }}
      >
        <path
          pathLength={1}
          d="M20 36 C10 14 70 4 120 6 C175 8 196 28 182 46 C168 64 90 68 40 58 C14 52 8 34 30 20"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: strokeProgress,
            filter: `drop-shadow(0 2px 4px ${
              color === '#FFE600' || color === '#FFD84D'
                ? 'rgba(202, 138, 4, 0.4)'
                : 'rgba(220, 38, 38, 0.35)'
            })`,
          }}
        />
      </svg>

      {/* Synchronized Pen Scratch Foley Audio */}
      {playAudio && (
        <Sequence from={startFrame} durationInFrames={Math.max(durationInFrames, 28)}>
          <Audio src={staticFile('assets/pen.wav')} volume={audioVolume} />
        </Sequence>
      )}
    </span>
  );
};
