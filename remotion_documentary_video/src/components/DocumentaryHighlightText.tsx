import React, { useMemo } from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion';
import {
  TRANSCRIPT_ALIGNMENT,
  SubtitleSegment,
  ActTranscript,
} from '../data/transcriptAlignment';

export type HighlightVariant =
  | 'onscreen'
  | 'editorial-banner'
  | 'card'
  | 'minimal'
  | 'quote';

export type HighlightPosition = 'bottom' | 'center' | 'top' | 'inline';

export interface DocumentaryHighlightTextProps {
  // --- Backwards-compatible simple API (Act1, Act2, Act3) ---
  prefix?: string;
  highlightedText?: string;
  suffix?: string;
  highlightDuration?: number;
  highlightColor?: string;
  color?: string;

  // --- Advanced Documentary Narrative API ---
  text?: string;
  highlight?: string | string[];
  kicker?: string;
  act?: 'act1' | 'act2' | 'act3' | 'act4' | 1 | 2 | 3 | 4;
  frame?: number;
  variant?: HighlightVariant;
  position?: HighlightPosition;
  startFrame?: number;
  wipeDelay?: number;
  durationInFrames?: number;
  markerColor?: string;
  fontSize?: number | string;
  maxWidth?: number | string;
  showKicker?: boolean;
  showTimestamp?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Splits text into highlighted vs regular chunks based on matching phrases.
 * Robust against multiple phrases, ellipses (...), commas, and casing discrepancies.
 */
function parseTextWithHighlights(
  fullText: string,
  rawHighlight?: string | string[]
): Array<{ text: string; isHighlighted: boolean; phraseIndex: number }> {
  if (!rawHighlight || !fullText) {
    return [{ text: fullText, isHighlighted: false, phraseIndex: -1 }];
  }

  // Extract clean target phrases
  const rawPhrases: string[] = Array.isArray(rawHighlight)
    ? rawHighlight
    : rawHighlight.split(/\s*(?:\.\.\.|\||;)\s*/);

  const cleanPhrases = rawPhrases
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  if (cleanPhrases.length === 0) {
    return [{ text: fullText, isHighlighted: false, phraseIndex: -1 }];
  }

  interface MatchInterval {
    start: number;
    end: number;
    phraseIndex: number;
  }

  const intervals: MatchInterval[] = [];
  const lowerText = fullText.toLowerCase();

  cleanPhrases.forEach((phrase, phraseIdx) => {
    const lowerPhrase = phrase.toLowerCase();
    let searchStart = 0;
    let found = false;

    // 1. Exact phrase match
    while (searchStart < lowerText.length) {
      const idx = lowerText.indexOf(lowerPhrase, searchStart);
      if (idx === -1) break;
      intervals.push({
        start: idx,
        end: idx + phrase.length,
        phraseIndex: phraseIdx,
      });
      searchStart = idx + phrase.length;
      found = true;
    }

    // 2. Fallback: match major constituent keywords (>3 chars)
    if (!found && phrase.includes(' ')) {
      const words = phrase.split(/[\s,–—"“”]+/).filter((w) => w.length > 3);
      words.forEach((word) => {
        const lowerWord = word.toLowerCase();
        let wStart = 0;
        while (wStart < lowerText.length) {
          const idx = lowerText.indexOf(lowerWord, wStart);
          if (idx === -1) break;
          intervals.push({
            start: idx,
            end: idx + word.length,
            phraseIndex: phraseIdx,
          });
          wStart = idx + word.length;
        }
      });
    }
  });

  if (intervals.length === 0) {
    return [{ text: fullText, isHighlighted: false, phraseIndex: -1 }];
  }

  // Sort intervals by start index
  intervals.sort((a, b) => a.start - b.start);

  // Merge overlapping intervals
  const merged: MatchInterval[] = [];
  for (const interval of intervals) {
    if (merged.length === 0) {
      merged.push({ ...interval });
    } else {
      const last = merged[merged.length - 1];
      if (interval.start <= last.end) {
        last.end = Math.max(last.end, interval.end);
      } else {
        merged.push({ ...interval });
      }
    }
  }

  // Build segmented output
  const chunks: Array<{ text: string; isHighlighted: boolean; phraseIndex: number }> = [];
  let cursor = 0;
  for (const m of merged) {
    if (m.start > cursor) {
      chunks.push({
        text: fullText.substring(cursor, m.start),
        isHighlighted: false,
        phraseIndex: -1,
      });
    }
    chunks.push({
      text: fullText.substring(m.start, m.end),
      isHighlighted: true,
      phraseIndex: m.phraseIndex,
    });
    cursor = m.end;
  }
  if (cursor < fullText.length) {
    chunks.push({
      text: fullText.substring(cursor),
      isHighlighted: false,
      phraseIndex: -1,
    });
  }

  return chunks;
}

/**
 * Reusable standalone yellow highlighter marker wipe component.
 */
export const HighlighterWipe: React.FC<{
  children: React.ReactNode;
  frame: number;
  startFrame: number;
  durationInFrames?: number;
  color?: string;
  slantDeg?: number;
  heightPercent?: number;
  style?: React.CSSProperties;
}> = ({
  children,
  frame,
  startFrame,
  durationInFrames = 14,
  color = '#FFE600',
  slantDeg = -3.5,
  heightPercent = 84,
  style,
}) => {
  // Snappy power2.out / fast-out documentary wipe curve
  const progress = interpolate(
    frame - startFrame,
    [0, durationInFrames],
    [0, 100],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        ...style,
      }}
    >
      {/* Background Yellow Marker Stroke with physical chisel slant */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-4px',
          right: '-4px',
          bottom: '6%',
          height: `${heightPercent}%`,
          backgroundColor: color,
          opacity: 0.90,
          mixBlendMode: 'multiply',
          borderRadius: '3px',
          transform: `skewX(${slantDeg}deg) rotate(-0.3deg)`,
          transformOrigin: 'left center',
          clipPath: `inset(0 ${Math.max(0, 100 - progress)}% 0 0)`,
          zIndex: 0,
          pointerEvents: 'none',
          boxShadow: '0 0 10px rgba(255, 230, 0, 0.45)',
        }}
      />
      {/* Foreground Crisp Typography */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          color: '#0F172A',
          fontWeight: 800,
        }}
      >
        {children}
      </span>
    </span>
  );
};

/**
 * High-Impact Documentary Highlight Text Component
 * 
 * Replaces generic floating bottom subtitle pills with authentic on-screen
 * documentary typography and real-time yellow marker wipes over key phrases.
 */
export const DocumentaryHighlightText: React.FC<DocumentaryHighlightTextProps> = ({
  prefix,
  highlightedText,
  suffix,
  highlightDuration = 16,
  highlightColor,
  color = '#0F172A',

  text,
  highlight,
  kicker,
  act,
  frame: propFrame,
  variant,
  position,
  startFrame = 0,
  wipeDelay = 6,
  durationInFrames,
  markerColor = '#FFE600',
  fontSize,
  maxWidth = 1400,
  showKicker = true,
  showTimestamp = false,
  style = {},
  children,
}) => {
  const currentFrame = propFrame !== undefined ? propFrame : useCurrentFrame();
  const { fps } = useVideoConfig();

  // Resolved marker color & wipe duration across legacy/new props
  const effectiveMarkerColor = highlightColor ?? markerColor;
  const effectiveDuration = durationInFrames ?? highlightDuration;

  // 1. Resolve Act Transcript Data if `act` prop is passed
  const activeSegment: SubtitleSegment | null = useMemo(() => {
    if (!act) return null;
    const actKey =
      typeof act === 'number'
        ? (`act${act}` as keyof typeof TRANSCRIPT_ALIGNMENT)
        : act;
    const transcript: ActTranscript | undefined = TRANSCRIPT_ALIGNMENT[actKey];
    if (!transcript || !transcript.segments || transcript.segments.length === 0) {
      return null;
    }

    const match = transcript.segments.find(
      (s) => currentFrame >= s.startFrame && currentFrame < s.endFrame
    );
    if (match) return match;

    if (currentFrame < transcript.segments[0].startFrame) {
      return transcript.segments[0];
    }
    return transcript.segments[transcript.segments.length - 1];
  }, [act, currentFrame]);

  // 2. Check if we are running in legacy simple mode (prefix / highlightedText / suffix)
  const isSimpleMode = highlightedText !== undefined;

  // Resolve content fields
  const displayText =
    text ??
    activeSegment?.englishText ??
    (isSimpleMode ? '' : '');
  const displayKicker = kicker ?? activeSegment?.kicker;
  const displayHighlight =
    highlight ?? activeSegment?.highlightKeyword ?? '';

  // Determine segment start frame for wipe timing
  const segmentBaseFrame = activeSegment ? activeSegment.startFrame : startFrame;
  const wipeTriggerFrame = activeSegment
    ? segmentBaseFrame + wipeDelay
    : startFrame;

  // Entrance spring / fade
  const relFrame = Math.max(0, currentFrame - segmentBaseFrame);
  const enterSpring = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  // Timecode formatting helper
  const formattedTimecode = useMemo(() => {
    const totalSeconds = currentFrame / fps;
    const mins = Math.floor(totalSeconds / 60);
    const secs = (totalSeconds % 60).toFixed(1);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(4, '0')}`;
  }, [currentFrame, fps]);

  // Position styling
  const getPositionStyles = (): React.CSSProperties => {
    if (position === 'inline') {
      return { position: 'relative' };
    }
    if (position === 'top') {
      return {
        position: 'absolute',
        top: 48,
        left: 72,
        right: 72,
        zIndex: 90,
      };
    }
    if (position === 'center') {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 90,
        textAlign: 'center',
      };
    }
    if (position === 'bottom') {
      return {
        position: 'absolute',
        bottom: 44,
        left: 72,
        right: 72,
        zIndex: 90,
      };
    }
    // Default when position is not explicitly set: follow variant or relative flow
    return {};
  };

  const resolvedFontSize =
    fontSize ??
    (variant === 'quote'
      ? 36
      : variant === 'editorial-banner'
      ? 34
      : variant === 'card'
      ? 32
      : isSimpleMode
      ? 28
      : 36);

  // =========================================================================
  // SIMPLE MODE: (prefix + highlightedText + suffix)
  // Perfectly backwards-compatible with existing Act1Origin and Act2GPURevolution
  // with upgraded authentic chisel yellow highlighter sweep & rock-steady rendering!
  // =========================================================================
  if (isSimpleMode) {
    const progress = interpolate(
      relFrame,
      [2, 2 + effectiveDuration],
      [0, 100],
      {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }
    );

    return (
      <div
        style={{
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
          margin: '0 auto',
          transform: `translateY(${(1 - enterSpring) * 12}px)`,
          opacity: enterSpring,
          fontFamily: "'Newsreader', 'Georgia', serif",
          fontSize: `${resolvedFontSize}px`,
          lineHeight: 1.45,
          color,
          letterSpacing: '-0.01em',
          textAlign: 'center',
          ...getPositionStyles(),
          ...style,
        }}
      >
        {prefix && <span style={{ marginRight: '8px' }}>{prefix}</span>}

        {/* Highlighted text segment with chisel marker sweep */}
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
            fontWeight: 800,
            padding: '2px 8px',
            color: '#000000',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '4px',
              bottom: '2px',
              left: 0,
              width: `${progress}%`,
              backgroundColor: effectiveMarkerColor,
              zIndex: -1,
              borderRadius: '4px',
              transform: 'skewX(-4deg) rotate(-0.3deg)',
              mixBlendMode: 'multiply',
              boxShadow: '0 0 12px rgba(255, 230, 0, 0.45)',
            }}
          />
          {highlightedText}
        </span>

        {suffix && <span style={{ marginLeft: '8px' }}>{suffix}</span>}
        {children}
      </div>
    );
  }

  // =========================================================================
  // ADVANCED NARRATIVE DOCUMENTARY MODE (Multi-phrase or Act-aligned)
  // =========================================================================
  const chunks = useMemo(
    () => parseTextWithHighlights(displayText, displayHighlight),
    [displayText, displayHighlight]
  );

  const renderedTextContent = (
    <span
      style={{
        fontFamily: "'Newsreader', 'Georgia', 'Playfair Display', serif",
        fontSize: typeof resolvedFontSize === 'number' ? `${resolvedFontSize}px` : resolvedFontSize,
        fontWeight: 700,
        lineHeight: 1.38,
        color,
        letterSpacing: '-0.01em',
        display: 'inline',
      }}
    >
      {chunks.map((chunk, index) => {
        if (!chunk.isHighlighted) {
          return <span key={index}>{chunk.text}</span>;
        }
        return (
          <HighlighterWipe
            key={index}
            frame={currentFrame}
            startFrame={wipeTriggerFrame}
            durationInFrames={effectiveDuration}
            color={effectiveMarkerColor}
          >
            {chunk.text}
          </HighlighterWipe>
        );
      })}
    </span>
  );

  // Variant: 'quote'
  if (variant === 'quote') {
    return (
      <div
        style={{
          ...getPositionStyles(),
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
          margin: '0 auto',
          opacity: enterSpring,
          transform: `translateY(${(1 - enterSpring) * 12}px)`,
          ...style,
        }}
      >
        <div
          style={{
            position: 'relative',
            backgroundColor: 'rgba(255, 253, 248, 0.96)',
            borderLeft: '6px solid #DC2626',
            borderTop: '1.5px solid rgba(40, 30, 20, 0.16)',
            borderRight: '1.5px solid rgba(40, 30, 20, 0.16)',
            borderBottom: '1.5px solid rgba(40, 30, 20, 0.16)',
            borderRadius: '4px',
            padding: '24px 36px',
            boxShadow: '0 12px 32px rgba(40, 30, 20, 0.08)',
          }}
        >
          {showKicker && displayKicker && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  color: '#DC2626',
                  textTransform: 'uppercase',
                }}
              >
                [ VERBATIM RECORD ]
              </span>
              <span
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#64748B',
                }}
              >
                {displayKicker}
              </span>
            </div>
          )}
          <div style={{ position: 'relative' }}>{renderedTextContent}</div>
          {children}
        </div>
      </div>
    );
  }

  // Variant: 'editorial-banner'
  if (variant === 'editorial-banner') {
    return (
      <div
        style={{
          ...getPositionStyles(),
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
          margin: '0 auto',
          opacity: enterSpring,
          transform: `translateY(${(1 - enterSpring) * 12}px)`,
          ...style,
        }}
      >
        <div
          style={{
            position: 'relative',
            backgroundColor: 'rgba(255, 253, 248, 0.97)',
            border: '2px solid rgba(30, 20, 10, 0.22)',
            borderLeft: '6px solid #FFE600',
            borderRadius: '8px',
            padding: '18px 32px',
            boxShadow:
              '0 16px 36px rgba(30, 20, 10, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04)',
          }}
        >
          {(showKicker && displayKicker) || showTimestamp ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                borderBottom: '1px solid rgba(40, 30, 20, 0.12)',
                paddingBottom: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    backgroundColor: '#1E293B',
                    color: '#F8FAFC',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                  }}
                >
                  NARRATIVE
                </span>
                {displayKicker && (
                  <span
                    style={{
                      fontFamily: "'Newsreader', serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#0F172A',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {displayKicker}
                  </span>
                )}
              </div>

              {showTimestamp && (
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: 700,
                  }}
                >
                  TC: {formattedTimecode}
                </span>
              )}
            </div>
          ) : null}

          <div style={{ position: 'relative' }}>{renderedTextContent}</div>
          {children}
        </div>
      </div>
    );
  }

  // Variant: 'card'
  if (variant === 'card') {
    return (
      <div
        style={{
          ...getPositionStyles(),
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
          margin: '0 auto',
          opacity: enterSpring,
          transform: `translateY(${(1 - enterSpring) * 12}px)`,
          ...style,
        }}
      >
        <div
          style={{
            position: 'relative',
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(0, 0, 0, 0.18)',
            borderRadius: '12px',
            padding: '24px 36px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
          }}
        >
          {showKicker && displayKicker && (
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                fontWeight: 900,
                color: '#DC2626',
                letterSpacing: '0.12em',
                marginBottom: 10,
                textTransform: 'uppercase',
              }}
            >
              ▶ {displayKicker}
            </div>
          )}
          <div>{renderedTextContent}</div>
          {children}
        </div>
      </div>
    );
  }

  // Variant: 'minimal'
  if (variant === 'minimal') {
    return (
      <div
        style={{
          ...getPositionStyles(),
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
          opacity: enterSpring,
          ...style,
        }}
      >
        {renderedTextContent}
        {children}
      </div>
    );
  }

  // Default: 'onscreen' (Direct On-Canvas Documentary Placement)
  return (
    <div
      style={{
        ...getPositionStyles(),
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        margin: '0 auto',
        opacity: enterSpring,
        transform: `translateY(${(1 - enterSpring) * 12}px)`,
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: position === 'center' ? 'center' : 'flex-start',
          gap: 8,
          backgroundColor: 'rgba(255, 253, 247, 0.94)',
          backdropFilter: 'blur(4px)',
          borderTop: '2px solid rgba(40, 30, 20, 0.25)',
          borderBottom: '1px solid rgba(40, 30, 20, 0.18)',
          borderRadius: '4px',
          padding: '16px 28px',
          boxShadow: '0 8px 24px rgba(40, 30, 20, 0.08)',
        }}
      >
        {showKicker && displayKicker && (
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: 900,
              color: '#DC2626',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            [ {displayKicker} ]
          </span>
        )}

        <div style={{ position: 'relative', width: '100%' }}>
          {renderedTextContent}
        </div>
        {children}
      </div>
    </div>
  );
};
