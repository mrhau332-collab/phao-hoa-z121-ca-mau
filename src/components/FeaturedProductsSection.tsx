"use client";

import React, { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SlidingTabs } from "./SlidingTabs";
import { Product, ProductOccasion } from "@/types";
import { Sparkles, ArrowRight } from "lucide-react";

interface FeaturedProductsSectionProps {
  onOpenVideo: (product: Product) => void;
}

export function FeaturedProductsSection({ onOpenVideo }: FeaturedProductsSectionProps) {
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");

  const occasions = [
    { id: "all", label: "Toàn Bộ", count: products.length },
    { id: "tet", label: "Tết & Giao Thừa", count: 7 },
    { id: "dam-cuoi", label: "Tiệc Cưới & Hỷ Sự", count: 4 },
    { id: "khai-truong", label: "Khai Trương", count: 5 },
    { id: "sinh-nhat", label: "Kỷ Niệm", count: 3 },
  ];

  const filteredProducts =
    selectedOccasion === "all"
      ? products
      : products.filter((p) => p.occasions.includes(selectedOccasion as ProductOccasion));

  return (
    <section id="kham-pha" className="py-24 sm:py-28 bg-night-950 relative border-t border-amber-500/20 scroll-mt-24 overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="pointer-events-none absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pháo Hoa Chú Bộ Đội Cà Mau • Điểm Bán Z121 Chính Ngạch</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Bộ Sưu Tập <span className="gold-shimmer-text">Pháo Hoa Z121</span> Bộ Quốc Phòng
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              100% pháo hoa không tiếng nổ chính ngạch Nhà máy Hóa chất 21. Hình ảnh sản phẩm thật sắc nét, nguyên tem bảo vệ và mã QR chống giả, giá bán xuất xưởng niêm yết rõ ràng.
            </p>
          </div>

          {/* Smooth Sliding Pill Tabs Switcher */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <SlidingTabs
              tabs={occasions}
              activeTab={selectedOccasion}
              onChange={setSelectedOccasion}
            />
          </div>
        </div>

        {/* Fluid Asymmetrical Bento Grid with Entry Motion */}
        <div
          key={selectedOccasion}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-3 duration-500"
        >
          {filteredProducts.map((product, index) => {
            const isFeaturedSpan = index === 0 && filteredProducts.length >= 3;
            return (
              <ProductCard
                key={product.id}
                product={product}
                onOpenVideo={onOpenVideo}
                featuredSpanning={isFeaturedSpan}
              />
            );
          })}
        </div>

        {/* Bottom Catalog Discovery Link */}
        <div className="mt-16 text-center">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] px-8 py-4 text-xs font-bold text-slate-200 border border-white/10 hover:border-gold/50 transition-all duration-300 group shadow-sm active:scale-[0.98]"
          >
            <span>Khám Phá Tất Cả Danh Mục Z121</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
