"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ZoomIn, RotateCcw, Sparkles, CheckCircle2 } from "lucide-react";

interface ProductStudioStageProps {
  imageSrc: string;
  productName: string;
  badge?: string;
}

export function ProductStudioStage({
  imageSrc,
  productName,
  badge = "Ảnh chụp thực tế",
}: ProductStudioStageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-night-900 via-night-950 to-black p-6 sm:p-10 border border-white/10 shadow-2xl">
      {/* 3D Top Lighting Cone */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[450px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.22),transparent_70%)] blur-2xl" />
      
      {/* Studio Floor Grid Lines (Perspective 3D) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_75%)]" />

      {/* Header Controls */}
      <div className="relative z-10 flex items-center justify-between mb-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-medium">{badge}</span>
        </div>

        <button
          type="button"
          onClick={() => setIsZoomed(!isZoomed)}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all ${
            isZoomed
              ? "bg-gold text-night-950 font-bold shadow-gold-glow"
              : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10"
          }`}
        >
          <ZoomIn className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>{isZoomed ? "Thu nhỏ (1x)" : "Soi chi tiết (2x)"}</span>
        </button>
      </div>

      {/* Main 3D Floating Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isZoomed && setMousePos({ x: 50, y: 50 })}
        className="relative aspect-[4/3] w-full flex items-center justify-center cursor-crosshair group overflow-hidden rounded-[2rem]"
      >
        {/* The Product Image Layer */}
        <div
          className="relative h-full w-full transition-transform duration-300 ease-out"
          style={
            isZoomed
              ? {
                  transform: "scale(2.2)",
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                }
              : {
                  transform: "scale(1)",
                }
          }
        >
          <Image
            src={imageSrc}
            alt={productName}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] transition-all duration-500"
          />
        </div>

        {/* 3D Glass Pedestal Ellipse underneath */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-gradient-to-r from-transparent via-gold/15 to-transparent blur-md" />
        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 w-1/2 h-2 rounded-full bg-white/20 blur-[2px]" />
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-3">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-gold" />
          Rê chuột để soi tem niêm phong & mã QR chống giả
        </span>
        <span className="hidden sm:inline text-slate-500">Chính hãng Z121 - BQP</span>
      </div>
    </div>
  );
}
