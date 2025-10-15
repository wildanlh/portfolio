'use client';
import React from 'react';

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  backgroundOpacity?: number;
  blur?: number;
  borderColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 🌙 GlassSurface — versi dark-theme khusus untuk portfolio navbar
 * Responsive, ringan, dan tampil elegan di latar gelap.
 */
const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = '100%',
  height = 'auto',
  borderRadius = 50,
  backgroundOpacity = 0.15,
  blur = 12,
  borderColor = 'rgba(255, 255, 255, 0.15)',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative flex items-center justify-between overflow-hidden transition-all duration-300 ${className}`}
      style={{
        width,
        height,
        borderRadius,
        padding: '0.5rem 1rem',
        backdropFilter: `blur(${blur}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
        background: `rgba(15, 15, 25, ${backgroundOpacity})`, // 🌙 lebih dark
        border: `1px solid ${borderColor}`,
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.03)`,
        ...style,
      }}
    >
      {/* Efek cahaya lembut */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 rounded-[inherit] pointer-events-none" />

      {/* Konten utama */}
      <div className="relative z-10 flex items-center justify-between w-full px-5">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
