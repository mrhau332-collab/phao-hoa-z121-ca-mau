"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [sheenPosition, setSheenPosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotX = (0.5 - y) * maxTilt * 2;
      const rotY = (x - 0.5) * maxTilt * 2;

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      setSheenPosition({
        x: Math.round(x * 100),
        y: Math.round(y * 100),
        opacity: 0.15,
      });
    },
    [maxTilt, perspective, scale]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setSheenPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic Specular 3D Sheen Highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: sheenPosition.opacity,
          background: `radial-gradient(circle 400px at ${sheenPosition.x}% ${sheenPosition.y}%, rgba(255, 255, 255, 0.18), transparent 75%)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
