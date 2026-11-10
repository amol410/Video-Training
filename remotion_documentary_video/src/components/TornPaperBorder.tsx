import React from 'react';
import { Img, staticFile } from 'remotion';

interface TornPaperCardProps {
  src: string;
  width?: number;
  height?: number;
  rotate?: number;
  scale?: number;
  tape?: boolean;
  tapePosition?: 'top-left' | 'top-right' | 'top-center';
  pin?: boolean;
  pinColor?: string;
  caption?: string;
  style?: React.CSSProperties;
}

export const TornPaperCard: React.FC<TornPaperCardProps> = ({
  src,
  width = 600,
  height = 420,
  rotate = -2,
  scale = 1,
  tape = true,
  tapePosition = 'top-center',
  pin = false,
  pinColor = '#DC2626',
  caption,
  style,
}) => {
  // Ragged torn paper polygon clip-path
  const tornClipPath = `polygon(
    0% 2%, 3% 0%, 8% 2%, 14% 1%, 22% 3%, 31% 0%, 42% 2%, 50% 1%,
    62% 3%, 73% 0%, 84% 2%, 93% 1%, 98% 3%, 100% 2%,
    99% 12%, 100% 25%, 98% 38%, 100% 52%, 99% 68%, 100% 82%, 98% 95%, 100% 100%,
    94% 98%, 85% 100%, 72% 98%, 61% 100%, 49% 99%, 36% 100%, 24% 98%, 12% 100%, 2% 98%, 0% 99%,
    1% 85%, 0% 70%, 2% 55%, 0% 40%, 1% 26%, 0% 12%
  )`;

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        transform: `rotate(${rotate}deg) scale(${scale})`,
        filter: 'drop-shadow(0 0 0 6px #FFFFFF) drop-shadow(4px 14px 28px rgba(35, 25, 15, 0.45))',
        ...style,
      }}
    >
      {/* Translucent Washi Tape Strip */}
      {tape && (
        <div
          style={{
            position: 'absolute',
            top: -16,
            left:
              tapePosition === 'top-left'
                ? '12%'
                : tapePosition === 'top-right'
                ? '70%'
                : '42%',
            width: 110,
            height: 28,
            backgroundColor: 'rgba(250, 240, 215, 0.78)',
            border: '1px dashed rgba(180, 160, 120, 0.65)',
            transform: 'rotate(-4deg)',
            backdropFilter: 'blur(2px)',
            zIndex: 10,
            boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
          }}
        />
      )}

      {/* Archival Red Push-Pin */}
      {pin && (
        <div
          style={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.4))',
          }}
        >
          <svg width="24" height="30" viewBox="0 0 24 30">
            <ellipse cx="12" cy="7" rx="9" ry="5" fill={pinColor} />
            <path d="M 6 7 L 12 28 L 18 7 Z" fill="#991B1B" />
            <circle cx="12" cy="6" r="3" fill="#FFFFFF" opacity="0.6" />
          </svg>
        </div>
      )}

      {/* Clipped Paper Photo Container */}
      <div
        style={{
          width,
          height,
          clipPath: tornClipPath,
          backgroundColor: '#EDE3D1',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Subtle photo grain and warm sepia tone */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(245, 230, 200, 0.12) 0%, rgba(60, 40, 20, 0.25) 100%)',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Archival Typewriter Caption Strip */}
      {caption && (
        <div
          style={{
            marginTop: 8,
            background: '#F9F5EC',
            border: '1px solid #D5C9B5',
            padding: '6px 14px',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#2A241C',
            textTransform: 'uppercase',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transform: 'rotate(0.5deg)',
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
