"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { TiltCard } from "./TiltCard";
import {
  Play,
  ShoppingBag,
  Check,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Heart,
  Scale,
  ZoomIn,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenVideo?: (product: Product) => void;
  featuredSpanning?: boolean;
}

export function ProductCard({ product, onOpenVideo, featuredSpanning }: ProductCardProps) {
  const {
    addItem,
    toggleFavorite,
    isFavorite,
    toggleCompare,
    isComparing,
    openMacroInspect,
  } = useCart();
  const [added, setAdded] = useState(false);

  const isFav = isFavorite(product.id);
  const isComp = isComparing(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <TiltCard
      maxTilt={6}
      perspective={1200}
      scale={1.01}
      className={`h-full ${featuredSpanning ? "md:col-span-2" : ""}`}
    >
      {/* Outer Hardware Shell */}
      <div className="h-full p-1.5 sm:p-2 rounded-[2rem] bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-400/40 shadow-xl hover:shadow-[0_12px_40px_rgba(212,175,55,0.2)] transition-all duration-300 shimmer-hover">
        {/* Inner Core Container */}
        <div className="relative h-full flex flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-night-900/95 p-4 sm:p-5 shadow-inner-glow overflow-hidden">
          
          {/* Top Media Frame with 3D Depth */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] bg-night-950 group">
            <img
              src={product.media.thumbnail}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="sync"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/25 to-transparent" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
              {product.verifiedRealPhoto && (
                <span className="rounded-full bg-red-700/90 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-black text-white uppercase tracking-wider shadow-sm">
                  Ảnh thật
                </span>
              )}
              {product.media.badge && (
                <span className="rounded-full bg-amber-600/90 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow-sm">
                  {product.media.badge}
                </span>
              )}
              <span className="rounded-full bg-night-950/85 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono font-medium text-amber-300 border border-amber-400/30">
                {product.sku}
              </span>
            </div>

            {/* Top Right Action Pills: Compare & Favorite */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleCompare(product.id);
                }}
                className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
                  isComp
                    ? "bg-amber-400 text-night-950 font-bold"
                    : "bg-night-950/80 text-slate-300 hover:text-white border border-white/10"
                }`}
                title={isComp ? "Đang trong danh sách so sánh" : "Thêm vào so sánh"}
              >
                <Scale className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
                className={`p-1.5 rounded-full backdrop-blur-md transition-colors ${
                  isFav
                    ? "bg-red-600 text-white"
                    : "bg-night-950/80 text-slate-300 hover:text-red-400 border border-white/10"
                }`}
                title={isFav ? "Bỏ yêu thích" : "Lưu vào yêu thích"}
              >
                <Heart className={`h-3.5 w-3.5 ${isFav ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Bottom Right: Macro 2.2x Inspection Trigger */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openMacroInspect(product);
              }}
              className="absolute bottom-10 right-3 z-10 flex items-center gap-1 rounded-full bg-night-950/80 hover:bg-black px-2.5 py-1 text-[10px] font-bold text-amber-300 border border-amber-400/30 shadow transition-transform active:scale-95"
            >
              <ZoomIn className="h-3 w-3" />
              <span>Soi 2.2x</span>
            </button>

            {/* Floating Play Trigger */}
            {onOpenVideo ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenVideo(product);
                }}
                aria-label={`Xem video hiệu ứng ${product.name}`}
                className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/90 text-night-950 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-amber-300"
              >
                <Play className="h-5 w-5 fill-night-950 ml-0.5" />
              </button>
            ) : (
              <Link
                href={`/san-pham/${product.slug}`}
                aria-label={`Xem chi tiết ${product.name}`}
                className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/90 text-night-950 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-amber-300"
              >
                <Play className="h-5 w-5 fill-night-950 ml-0.5" />
              </Link>
            )}

            {/* Telemetry Overlay */}
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="h-3 w-3 text-amber-400" strokeWidth={1.5} />
                {product.specs.duration}
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                Chính hãng Z121
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="pt-4 flex flex-col flex-1 justify-between space-y-4">
            <div>
              <div className="flex items-start justify-between gap-2">
                <Link href={`/san-pham/${product.slug}`} className="hover:text-amber-400 transition-colors">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <Link
                  href={`/san-pham/${product.slug}`}
                  className="text-slate-400 hover:text-amber-400 shrink-0 p-1"
                  aria-label={`Xem chi tiết ${product.name}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                {product.tagline}
              </p>

              {/* Spec Chips */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-200 bg-night-950/90 rounded-xl p-2.5 border border-white/10">
                <div>
                  <span className="text-amber-300/80 font-medium">Tầm phóng: </span>
                  <span className="font-bold text-white block sm:inline">{product.specs.heightRange}</span>
                </div>
                <div>
                  <span className="text-amber-300/80 font-medium">Quy cách: </span>
                  <span className="font-bold text-white block sm:inline">
                    {product.specs.shotCount ? `${product.specs.shotCount} Ống` : "Dây / Gói"}
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Action Button */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Giá tham khảo
                </span>
                <div className="font-sans text-lg sm:text-xl font-black text-amber-400 tabular-nums tracking-tight">
                  xxxxxx đ
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex items-center gap-1.5 rounded-xl py-2 px-3 text-xs sm:text-sm font-bold transition-all duration-300 active:scale-[0.98] shadow-sm ${
                  added
                    ? "bg-emerald-500 text-white"
                    : "bg-amber-400 hover:bg-amber-300 text-night-950"
                }`}
              >
                <span>{added ? "Đã Chọn" : "Chọn Mua"}</span>
                <div className={`flex h-4 w-4 items-center justify-center rounded-full transition-transform ${
                  added ? "bg-white/20 text-white" : "bg-night-950/20 text-night-950"
                }`}>
                  {added ? (
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  ) : (
                    <ShoppingBag className="h-3 w-3" strokeWidth={2} />
                  )}
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </TiltCard>
  );
}
