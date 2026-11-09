"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ShieldCheck,
  ShoppingBag,
  Info,
} from "lucide-react";

export function MacroInspectModal() {
  const { macroInspectProduct, closeMacroInspect, addItem, openCart } = useCart();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  if (!macroInspectProduct) return null;

  const photos = macroInspectProduct.media.gallery.length > 0
    ? macroInspectProduct.media.gallery
    : [macroInspectProduct.media.thumbnail];

  const currentPhoto = photos[selectedPhotoIndex] || macroInspectProduct.media.thumbnail;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={closeMacroInspect}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] overflow-hidden rounded-3xl bg-[#071329] border border-amber-400/50 flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-night-950">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <ZoomIn className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-amber-300">
                  {macroInspectProduct.sku}
                </span>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Ảnh thật cửa hàng Cà Mau
                </span>
              </div>
              <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                {macroInspectProduct.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isZoomed
                  ? "bg-amber-400 text-night-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
              <span className="hidden sm:inline">{isZoomed ? "Thu nhỏ" : "Phóng to 2.2x"}</span>
            </button>
            <button
              type="button"
              onClick={closeMacroInspect}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[440px] bg-black flex items-center justify-center overflow-hidden">
          <div
            className={`relative w-full h-full min-h-[350px] sm:min-h-[440px] cursor-${isZoomed ? "zoom-out" : "zoom-in"}`}
            onClick={() => setIsZoomed(!isZoomed)}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={currentPhoto}
              alt={macroInspectProduct.name}
              fill
              className="object-contain transition-transform duration-150"
              style={
                isZoomed
                  ? {
                      transform: "scale(2.2)",
                      transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                    }
                  : undefined
              }
            />
          </div>

          {/* Prompt / hint */}
          <div className="absolute bottom-3 left-3 bg-night-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5 pointer-events-none">
            <Info className="h-3.5 w-3.5 text-amber-400" />
            <span>{isZoomed ? "Rê chuột để soi các góc cạnh tem và bao bì" : "Nhấp vào ảnh để kích hoạt kính lúp 2.2x"}</span>
          </div>
        </div>

        {/* Thumbnails Gallery Strip */}
        {photos.length > 1 && (
          <div className="p-3 bg-night-950/90 border-t border-white/10 flex items-center gap-2 overflow-x-auto">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedPhotoIndex(idx);
                  setIsZoomed(false);
                }}
                className={`relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  selectedPhotoIndex === idx
                    ? "border-amber-400 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={photo} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Footer info & CTA */}
        <div className="p-4 bg-[#050B14] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-300">
            <span className="font-semibold text-white">Xác thực sản phẩm: </span>
            Bao bì thực tế do điểm bán Cà Mau chụp, thể hiện rõ quy cách đóng gói và chữ in của Nhà máy Hóa chất 21.
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="font-sans text-lg font-black text-amber-300 tabular-nums tracking-tight">
              xxxxxx đ
            </div>
            <button
              type="button"
              onClick={() => {
                addItem(macroInspectProduct, 1);
                closeMacroInspect();
                openCart();
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-night-950 font-bold px-4 py-2 text-xs transition-all active:scale-95 shadow"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Thêm vào yêu cầu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
