import React from 'react';
import { Img, interpolate, staticFile } from 'remotion';

interface KenBurnsPhotoProps {
  src: string;
  frame: number;
  durationInFrames: number;
  startScale?: number;
  endScale?: number;
  startX?: number;
  endX?: number;
  startY?: number;
  endY?: number;
  borderStyle?: 'polaroid' | 'matte' | 'clean' | 'torn';
  sourceTag?: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  filter?: string;
  style?: React.CSSProperties;
}

export const KenBurnsPhoto: React.FC<KenBurnsPhotoProps> = ({
  src,
  frame,
  durationInFrames,
  startScale = 1.0,
  endScale = 1.12,
  startX = 0,
  endX = -25,
  startY = 0,
  endY = -15,
  borderStyle = 'matte',
  sourceTag,
  caption,
  width = 680,
  height = 500,
  filter,
  style = {},
}) => {
  const scale = interpolate(
    frame,
    [0, durationInFrames],
    [startScale, endScale],
    { extrapolateRight: 'clamp' }
  );

  const x = interpolate(frame, [0, durationInFrames], [startX, endX], {
    extrapolateRight: 'clamp',
  });

  const y = interpolate(frame, [0, durationInFrames], [startY, endY], {
    extrapolateRight: 'clamp',
  });

  // Calculate container border & shadow styles
  let containerStyle: React.CSSProperties = {
    position: 'relative',
    width,
    height,
    overflow: 'hidden',
    ...style,
  };

  if (borderStyle === 'matte') {
    containerStyle = {
      ...containerStyle,
      padding: '12px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.45)',
    };
  } else if (borderStyle === 'polaroid') {
    containerStyle = {
      ...containerStyle,
      padding: '14px 14px 48px 14px',
      backgroundColor: '#FCFCF9',
      borderRadius: '4px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
    };
  } else if (borderStyle === 'torn') {
    containerStyle = {
      ...containerStyle,
      padding: '10px',
      backgroundColor: '#FAF7F0',
      clipPath:
        'polygon(0% 1%, 5% 0%, 15% 2%, 28% 0%, 42% 1.5%, 55% 0%, 70% 1.8%, 85% 0.5%, 98% 0%, 100% 12%, 99% 25%, 100% 40%, 98% 58%, 100% 72%, 99% 88%, 100% 100%, 85% 99%, 72% 100%, 58% 98.5%, 44% 100%, 28% 99%, 14% 100%, 2% 99%, 0% 86%, 1.2% 70%, 0% 55%, 1% 38%, 0% 20%)',
      boxShadow: '0 18px 36px rgba(0, 0, 0, 0.3)',
    };
  }

  return (
    <div style={containerStyle}>
      {/* Image frame with zoom/pan */}
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: borderStyle === 'matte' ? '4px' : '0px',
          position: 'relative',
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${scale}) translate(${x}px, ${y}px)`,
            filter: filter || 'contrast(1.08) brightness(0.96)',
          }}
        />
      </div>

      {/* Source Tag Badge */}
      {sourceTag && (
        <div
          style={{
            position: 'absolute',
            bottom: borderStyle === 'polaroid' ? '14px' : '22px',
            left: '24px',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
            color: '#E2E8F0',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          {sourceTag}
        </div>
      )}

      {/* Polaroid Caption */}
      {caption && borderStyle === 'polaroid' && (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            right: '16px',
            textAlign: 'center',
            color: '#1C1917',
            fontFamily: "'Newsreader', 'Georgia', serif",
            fontStyle: 'italic',
            fontSize: '15px',
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
