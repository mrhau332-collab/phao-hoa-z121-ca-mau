"use client";

import React, { useEffect, useRef } from "react";
import { X, ShieldCheck, Sparkles, Volume2 } from "lucide-react";
import { Product } from "@/types";

interface VideoModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ product, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const isLocalMp4 = product.media.videoUrl?.endsWith(".mp4") || product.media.videoUrl?.startsWith("/videos/");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Outer Hardware Frame (Double-Bezel) */}
      <div
        className="relative w-full max-w-4xl p-2 rounded-[2.5rem] bg-white/[0.04] border border-gold/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-[calc(2.5rem-0.5rem)] bg-night-950 overflow-hidden shadow-inner-glow border border-white/5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-night-900/90">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 id="video-modal-title" className="text-base sm:text-lg font-sans font-bold text-white">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Video ghi hình thực tế chính hãng Z121
                  </span>
                  {product.media.videoSourceTitle && (
                    <span className="text-slate-400 hidden sm:inline">
                      • Nguồn: {product.media.videoSourceTitle}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng video"
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {isLocalMp4 ? (
              <video
                ref={videoRef}
                src={product.media.videoUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              >
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            ) : product.media.videoUrl ? (
              <iframe
                src={`${product.media.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={`Video thực tế ${product.name}`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="text-xs text-slate-400">Chưa có video cho sản phẩm này</div>
            )}
          </div>

          {/* Footer Telemetry Specs */}
          <div className="p-5 bg-night-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-6 text-slate-200">
              <div>
                <span className="text-amber-300/80">Tầm phóng: </span>
                <strong className="text-white font-bold">{product.specs.heightRange}</strong>
              </div>
              <div>
                <span className="text-amber-300/80">Thời lượng: </span>
                <strong className="text-white font-bold">{product.specs.duration}</strong>
              </div>
              <div>
                <span className="text-amber-300/80">Khoảng cách an toàn: </span>
                <strong className="text-emerald-400 font-bold">{product.specs.safeDistance}</strong>
              </div>
            </div>

            <div className="font-sans text-base font-black text-amber-300 tabular-nums tracking-tight">
              xxxxxx đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
