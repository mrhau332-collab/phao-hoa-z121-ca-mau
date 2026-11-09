"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { VideoModal } from "@/components/VideoModal";
import { Product } from "@/types";
import { Film, Play, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function ShowcasePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.category === selectedFilter);

  const filters = [
    { id: "all", label: "Tất Cả Màn Trình Diễn" },
    { id: "gian-phun-vien", label: "Giàn Phun Viên (Đa Sắc)" },
    { id: "gian-phun-hoa", label: "Giàn Phun Hoa (Bung Tán)" },
    { id: "hop-qua-tet", label: "Bộ Hộp Quà Tết VIP" },
    { id: "thac-nuoc-bac", label: "Thác Nước Bạc (Sân Khấu)" },
    { id: "ong-phun-cam-tay", label: "Cây Hoa Lửa (Cầm Tay)" },
    { id: "khac", label: "Cánh Hoa Xoay Nghệ Thuật" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-3">
          <Film className="h-3.5 w-3.5" />
          <span>Thư Viện Video Thực Tế — Pháo Hoa Chú Bộ Đội Cà Mau</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
          Xem Hiệu Ứng Bắn <span className="gold-shimmer-text">Pháo Hoa Z121</span> Thực Tế
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
          Tuyển tập video ghi hình thực tế từng dòng pháo hoa dân dụng Z121 Bộ Quốc Phòng tại điểm bán Cà Mau. Giúp bà con quan sát độ cao, góc bung tán hoa và màu sắc rực rỡ trước khi chọn mua. Tư vấn: Chú Bộ Đội (0917.335.233).
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFilter(f.id)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                selectedFilter === f.id
                  ? "bg-gold text-night-950 shadow-gold-glow"
                  : "bg-night-900 text-slate-300 border border-white/10 hover:border-gold/30 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl bg-night-900 border border-gold/15 overflow-hidden shadow-xl hover:border-gold/50 hover:shadow-gold-glow transition-all duration-300 flex flex-col"
          >
            {/* Thumbnail Box */}
            <div
              className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setIsVideoModalOpen(true);
              }}
            >
              <Image
                src={product.media.thumbnail}
                alt={`Màn trình diễn ${product.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-night-950 shadow-xl group-hover:scale-115 group-hover:bg-gold-light transition-all">
                  <Play className="h-6 w-6 fill-night-950 ml-0.5" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3">
                {product.media.videoType === "actual" ? (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-950/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/40">
                    <ShieldCheck className="h-3 w-3" />
                    Hiệu ứng thực tế Z121
                  </span>
                ) : (
                  <span className="rounded-full bg-night-950/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-amber-400 border border-amber-500/30">
                    Video minh họa
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-0.5 text-[11px] font-mono text-white">
                {product.specs.duration}
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {product.effects.description}
                </p>

                <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                  <span>Tầm cao: <strong className="text-white">{product.specs.heightRange}</strong></span>
                  <span>•</span>
                  <span>Khoảng cách an toàn: <strong className="text-emerald-400">{product.specs.safeDistance}</strong></span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="font-sans text-base font-black text-amber-300 tabular-nums tracking-tight">
                  xxxxxx đ
                </span>

                <Link
                  href={`/san-pham/${product.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-gold"
                >
                  <span>Xem chi tiết & đặt mua</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        product={selectedProduct}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
