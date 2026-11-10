import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface NewspaperCutoutProps {
  publication?: string;
  headline?: string;
  subheadline?: string;
  highlightText?: string;
  articleSnippet?: string;
  date?: string;
  stampText?: string;
  tapePosition?: 'top-left' | 'top-right' | 'both';
  rotation?: number;
  width?: number;
  startFrame?: number;
}

export const NewspaperCutout: React.FC<NewspaperCutoutProps> = ({
  publication = 'THE FINANCIAL TIMES',
  headline = 'NVIDIA CHIEF JENSEN HUANG ADMITS AFFAIR WITH SINGAPORE EXECUTIVE',
  subheadline = 'Classified memo details relationship with Alice Huang amid intense scrutiny over AI chip flows to China',
  highlightText = 'unfaithful in 40-year marriage',
  articleSnippet = 'SANTA CLARA — In an extraordinary company-wide disclosure, Nvidia CEO Jensen Huang apologized to staff and his family, admitting to an extramarital relationship with Alice Huang, an executive at Singapore-based cloud provider Megaspeed. U.S. intelligence officials have raised concerns over whether the relationship exposed America’s most sensitive semiconductor technology to foreign intelligence assets.',
  date = 'NOVEMBER 10, 2024',
  stampText = 'CONFIDENTIAL EXHIBIT',
  tapePosition = 'both',
  rotation = -1.2,
  width = 960, // Much larger for full-screen impact!
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - startFrame);

  // Entrance spring
  const enterSpring = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Highlighter sweep progression
  const highlightProgress = interpolate(relFrame, [12, 28], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Stamp drop spring
  const stampSpring = spring({
    frame: Math.max(0, relFrame - 22),
    fps,
    config: { damping: 12, stiffness: 200, mass: 0.8 },
  });

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        transform: `translateY(${(1 - enterSpring) * 35}px) rotate(${rotation}deg) scale(${0.94 + enterSpring * 0.06})`,
        opacity: enterSpring,
        filter: 'drop-shadow(0 24px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35))',
      }}
    >
      {/* Scotch Tape Marks */}
      {(tapePosition === 'top-left' || tapePosition === 'both') && (
        <div
          style={{
            position: 'absolute',
            top: '-16px',
            left: '48px',
            width: '90px',
            height: '32px',
            backgroundColor: 'rgba(255, 255, 230, 0.6)',
            transform: 'rotate(-7deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
            zIndex: 20,
            backdropFilter: 'blur(3px)',
          }}
        />
      )}
      {(tapePosition === 'top-right' || tapePosition === 'both') && (
        <div
          style={{
            position: 'absolute',
            top: '-16px',
            right: '48px',
            width: '90px',
            height: '32px',
            backgroundColor: 'rgba(255, 255, 230, 0.6)',
            transform: 'rotate(6deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
            zIndex: 20,
            backdropFilter: 'blur(3px)',
          }}
        />
      )}

      {/* Main Newspaper Paper Body */}
      <div
        style={{
          backgroundColor: '#F8F4EA',
          color: '#1A1814',
          padding: '36px 42px',
          boxSizing: 'border-box',
          clipPath:
            'polygon(0% 1%, 3% 0%, 15% 0.8%, 35% 0%, 55% 1%, 75% 0.1%, 95% 1%, 100% 0%, 99% 18%, 100% 36%, 99.2% 55%, 100% 75%, 98.8% 92%, 100% 100%, 82% 99.2%, 60% 100%, 40% 99%, 18% 100%, 0% 99%, 0.8% 80%, 0% 55%, 1% 30%, 0% 12%)',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(215, 195, 160, 0.35) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(200, 180, 140, 0.35) 0%, transparent 60%)
          `,
          position: 'relative',
        }}
      >
        {/* Masthead */}
        <div
          style={{
            borderBottom: '3px solid #1A1814',
            paddingBottom: '12px',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontSize: '38px',
              fontWeight: 900,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0F172A',
            }}
          >
            {publication}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1.5px solid rgba(0,0,0,0.3)',
              paddingTop: '6px',
              marginTop: '6px',
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: 800,
              color: '#475569',
            }}
          >
            <span>VOL. CLXXIV NO. 60,112</span>
            <span>{date}</span>
            <span>INTERNATIONAL EDITION · GLOBAL EXCLUSIVE</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '32px',
            fontWeight: 900,
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
            color: '#0F172A',
          }}
        >
          {headline}
        </div>

        {/* Subdeck */}
        {subheadline && (
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '18px',
              fontWeight: 600,
              fontStyle: 'italic',
              color: '#334155',
              lineHeight: 1.4,
              marginBottom: '18px',
              paddingBottom: '12px',
              borderBottom: '1.5px solid rgba(0,0,0,0.18)',
            }}
          >
            {subheadline}
          </div>
        )}

        {/* Article Body with Highlighter */}
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#1E293B',
            textAlign: 'justify',
            position: 'relative',
          }}
        >
          {articleSnippet}

          {/* Yellow Chisel Highlighter Stroke */}
          {highlightText && (
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                marginTop: '14px',
                padding: '4px 8px',
                fontWeight: 900,
                fontSize: '20px',
                color: '#000000',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: `${highlightProgress}%`,
                  backgroundColor: 'rgba(255, 230, 0, 0.78)',
                  mixBlendMode: 'multiply',
                  zIndex: -1,
                  borderRadius: '3px',
                  boxShadow: '0 0 10px rgba(255, 230, 0, 0.5)',
                }}
              />
              KEY EVIDENCE: "{highlightText}"
            </div>
          )}
        </div>

        {/* Red Archival Stamp */}
        {stampText && (
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '28px',
              transform: `scale(${interpolate(stampSpring, [0, 1], [2.2, 1])}) rotate(-12deg)`,
              opacity: stampSpring,
              border: '4px solid #DC2626',
              borderRadius: '6px',
              padding: '6px 20px',
              color: '#DC2626',
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize: '16px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(254, 226, 226, 0.65)',
              boxShadow: '0 6px 16px rgba(220, 38, 38, 0.3)',
              pointerEvents: 'none',
            }}
          >
            {stampText}
          </div>
        )}
      </div>
    </div>
  );
};
