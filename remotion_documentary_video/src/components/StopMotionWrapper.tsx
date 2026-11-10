import React from 'react';
import { useCurrentFrame } from 'remotion';

interface StopMotionWrapperProps {
  children: React.ReactNode;
  fpsStep?: number; // default 3 = 10fps at 30fps
  intensity?: number; // max displacement in pixels, default 1.5px
  rotationIntensity?: number; // max angle in degrees, default 0.4deg
  seed?: number;
  style?: React.CSSProperties;
  className?: string;
}

export const StopMotionWrapper: React.FC<StopMotionWrapperProps> = ({
  children,
  fpsStep = 3,
  intensity = 1.5,
  rotationIntensity = 0.4,
  seed = 42,
  style,
  className,
}) => {
  const frame = useCurrentFrame();

  // Quantize time to 10fps
  const quantizedStep = Math.floor(frame / fpsStep);

  // Deterministic micro-displacements
  const dx = Math.sin(quantizedStep * 37.19 + seed * 13.7) * intensity;
  const dy = Math.cos(quantizedStep * 29.83 + seed * 19.3) * intensity;
  const dRot = Math.sin(quantizedStep * 23.41 + seed * 7.1) * rotationIntensity;

  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `${style?.transform || ''} translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0px) rotate(${dRot.toFixed(2)}deg)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
