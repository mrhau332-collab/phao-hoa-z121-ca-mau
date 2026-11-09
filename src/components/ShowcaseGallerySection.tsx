"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Product } from "@/types";
import { SlidingTabs } from "./SlidingTabs";
import { TiltCard } from "./TiltCard";
import { Play, ShieldCheck, Film } from "lucide-react";

interface ShowcaseGallerySectionProps {
  onOpenVideo: (product: Product) => void;
}

export function ShowcaseGallerySection({ onOpenVideo }: ShowcaseGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories = [
    { id: "all", label: "Tất Cả Hiệu Ứng", count: products.length },
    { id: "gian-phun-vien", label: "Giàn Phun Viên", count: 3 },
    { id: "gian-phun-hoa", label: "Giàn Phun Hoa", count: 2 },
    { id: "hop-qua-tet", label: "Bộ Quà Tết VIP", count: 2 },
    { id: "thac-nuoc-bac", label: "Thác Nước Bạc", count: 1 },
    { id: "ong-phun-cam-tay", label: "Cầm Tay", count: 1 },
  ];

  return (
    <section className="py-28 bg-night-950 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <Film className="h-3.5 w-3.5" />
              <span>Pháo Hoa Chú Bộ Đội Cà Mau • Thư Viện Ghi Hình Thực Tế</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Xem Video <span className="gold-shimmer-text">Bắn Pháo Hoa Z121</span> Thực Tế
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Xem trước độ cao bắn, hiệu ứng bung xòe sắc hoa và tiếng rít đẩy êm tai không tiếng nổ của từng loại pháo Z121 để bà con an tâm lựa chọn cho đêm giao thừa.
            </p>
          </div>

          {/* Sliding Tabs Bar */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <SlidingTabs
              tabs={categories}
              activeTab={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Gallery Grid with 3D Tilt */}
        <div
          key={activeCategory}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-3 duration-500"
        >
          {filteredProducts.map((product) => (
            <TiltCard
              key={product.id}
              maxTilt={7}
              perspective={1100}
              scale={1.015}
              className="h-full"
              onClick={() => onOpenVideo(product)}
            >
              <div className="group cursor-pointer p-1.5 sm:p-2 rounded-[2rem] bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-400/40 shadow-xl transition-all duration-500 ease-spring h-full flex flex-col justify-between shimmer-hover">
                <div className="rounded-[calc(2rem-0.375rem)] bg-night-900/90 p-4 shadow-inner-glow overflow-hidden h-full flex flex-col justify-between">
                  
                  {/* Video Frame */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] bg-black">
                    <Image
                      src={product.media.thumbnail}
                      alt={`Hiệu ứng ${product.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    {/* Play Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-night-950 shadow-2xl group-hover:scale-110 group-hover:bg-gold-light transition-all duration-300">
                        <Play className="h-6 w-6 fill-night-950 ml-1" />
                      </div>
                    </div>

                    {/* Video Type Chip */}
                    <div className="absolute top-3 left-3">
                      {product.media.videoType === "actual" ? (
                        <span className="flex items-center gap-1 rounded-full bg-emerald-950/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/40 font-mono">
                          <ShieldCheck className="h-3 w-3" strokeWidth={1.5} />
                          Hiệu ứng thực tế
                        </span>
                      ) : (
                        <span className="rounded-full bg-night-950/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-amber-400 border border-amber-500/30">
                          Video minh họa
                        </span>
                      )}
                    </div>

                    {/* Duration Chip */}
                    <div className="absolute bottom-3 right-3 rounded-full bg-black/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white">
                      {product.specs.duration}
                    </div>
                  </div>

                  {/* Card Telemetry */}
                  <div className="pt-4 space-y-3">
                    <div>
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                        {product.effects.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">
                        Độ cao: <strong className="text-white">{product.specs.heightRange}</strong>
                      </span>
                      <span className="font-sans font-black text-amber-300 tabular-nums tracking-tight">
                        xxxxxx đ
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
