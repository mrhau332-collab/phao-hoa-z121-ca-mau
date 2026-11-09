"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ProductCategory } from "@/types";
import { CuteSoldierBadge } from "@/components/CuteSoldierBadge";
import {
  ShieldCheck,
  QrCode,
  Tag,
  Truck,
  Sparkles,
  Flame,
  Gift,
  Waves,
  Wand2,
  Disc,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface HeroSectionProps {
  onOpenFeaturedVideo?: () => void;
}

export function HeroSection({ onOpenFeaturedVideo }: HeroSectionProps) {
  const { selectedCategory, setSelectedCategory } = useCart();

  // 7 Categories matching the master mockup
  const categoryPills: { id: ProductCategory; label: string; icon: React.ReactNode }[] = [
    {
      id: "all",
      label: "Tất cả sản phẩm",
      icon: <Sparkles className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
    {
      id: "gian-phun-vien",
      label: "Giàn Phun Viên",
      icon: <Sparkles className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
    {
      id: "gian-phun-hoa",
      label: "Giàn Phun Hoa",
      icon: <Flame className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
    {
      id: "thac-nuoc-bac",
      label: "Thác Nước Bạc",
      icon: <Waves className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
    {
      id: "ong-phun-cam-tay",
      label: "Cầm Tay",
      icon: <Wand2 className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
    {
      id: "khac",
      label: "Cánh Hoa Xoay",
      icon: <Disc className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
    {
      id: "hop-qua-tet",
      label: "Hộp Quà Tết",
      icon: <Gift className="h-3.5 w-3.5 xl:h-4 xl:w-4" />,
    },
  ];

  return (
    <section className="relative w-full bg-[#050B14] overflow-hidden">
      {/* ============================================================ */}
      {/* 1. HERO BANNER STAGE (DESKTOP)                               */}
      {/* ============================================================ */}
      <div className="hidden sm:block relative w-full aspect-[1672/941] max-h-[780px]">
        {/* Banner Image with complete pedestal, 3 boxes, fireworks & water */}
        <img
          src="/mediakit/01_banner_2026_camau_tet_hero_AI.webp"
          alt="Pháo hoa Z121 Cà Mau - Điểm bán chính hãng"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
          decoding="sync"
        />

        {/* Hanging "Chúc Mừng Năm Mới" Scroll on Left (Desktop) */}
        <div className="absolute top-6 lg:top-10 left-6 lg:left-12 z-10 flex flex-col items-center pointer-events-none">
          {/* Top Hanging Ring */}
          <div className="h-2.5 w-2.5 rounded-full border-2 border-[#FDE047] mb-0.5" />
          <div className="h-3 w-[2px] bg-[#FDE047] mb-0.5" />

          {/* Red Lantern */}
          <div className="relative h-12 w-10 lg:h-14 lg:w-12 rounded-full bg-gradient-to-b from-[#DC2626] to-[#991B1B] border-2 border-[#FDE047] shadow-[0_0_15px_rgba(220,38,38,0.7)] flex items-center justify-center mb-1.5">
            <div className="h-full w-3.5 border-x border-[#FDE047]/50 rounded-full" />
            <div className="absolute -bottom-1.5 h-1.5 w-5 bg-[#B45309] rounded-sm" />
          </div>

          {/* Hanging Red Scroll with Gold Calligraphy */}
          <div className="relative w-12 lg:w-14 rounded-lg bg-gradient-to-b from-[#B91C1C] via-[#991B1B] to-[#7F1D1D] border-2 border-[#FDE047] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 px-1 text-center">
            {/* Scroll Wooden Rods */}
            <div className="absolute -top-1.5 inset-x-0 h-2 bg-[#F59E0B] rounded-full shadow" />
            <div className="absolute -bottom-1.5 inset-x-0 h-2 bg-[#F59E0B] rounded-full shadow" />

            <div className="font-serif font-black text-[#FDE68A] text-xs lg:text-sm tracking-widest leading-loose uppercase writing-vertical [text-shadow:0_2px_4px_rgba(0,0,0,0.9)]">
              Chúc<br />Mừng<br />Năm<br />Mới
            </div>

            {/* Gold Tassel */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              <div className="h-3.5 w-2.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-b-md" />
            </div>
          </div>
        </div>

        {/* Center Headline & Military Badge Overlay (Positioned in Sky) */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-9 inset-x-0 z-20 flex flex-col items-center text-center px-4 pointer-events-none">
          {/* Line 1: Brand Header Tag với Icon Chú Bộ Đội Chibi Dễ Thương & Chữ "CHÚ BỘ ĐỘI" màu xanh */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-black/85 border-2 border-[#FDE047] shadow-[0_0_30px_rgba(253,224,71,0.65)] backdrop-blur-md mb-1 sm:mb-1.5 transition-all">
            <CuteSoldierBadge size={36} withSalute={true} />
            <div className="flex items-center gap-1.5 font-sans font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
              <span className="text-white">PHÁO HOA</span>
              <span className="text-[#4ADE80] drop-shadow-[0_0_14px_rgba(74,222,128,0.95)] [text-shadow:_0_0_14px_#22c55e]">
                CHÚ BỘ ĐỘI
              </span>
              <span className="text-[#FDE047]">CÀ MAU</span>
            </div>
            <span className="text-[#FDE047] text-xs sm:text-sm animate-pulse">★</span>
          </div>

          {/* Line 2: Chữ "PHÁO HOA Z121" Đẳng Cấp, Hoàng Gia, Sáng Rực 24K, Vừa Vặn Tuyệt Đối */}
          <h1 className="font-sans font-black tracking-tight sm:tracking-normal uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3B0] via-30% to-[#FBBF24] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(253,224,71,0.6)] my-1 sm:my-1.5 leading-none select-none flex items-center justify-center gap-2 sm:gap-3">
            <span>PHÁO HOA</span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FDE047] to-[#F59E0B] drop-shadow-[0_0_20px_rgba(253,224,71,0.8)]">
              Z121
            </span>
          </h1>

          {/* Line 3: Slogan sang trọng có hoa thị vàng */}
          <div className="flex items-center gap-2 sm:gap-3 font-sans font-black text-[11px] sm:text-xs md:text-sm lg:text-base tracking-[0.25em] text-[#FEF3C7] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mt-0.5 sm:mt-1">
            <span>CHÍNH HÃNG</span>
            <span className="text-[#FDE047] animate-pulse">✦</span>
            <span>AN TOÀN</span>
            <span className="text-[#FDE047] animate-pulse">✦</span>
            <span>HỢP PHÁP</span>
          </div>

          {/* Line 4: Red Ribbon Badge "ĐIỂM BÁN TẠI CÀ MAU" với icon MapPin */}
          <div className="mt-2 lg:mt-3 inline-flex items-center justify-center">
            <div className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#991B1B] via-[#DC2626] to-[#991B1B] border-2 border-[#FDE047] shadow-[0_4px_25px_rgba(220,38,38,0.75)]">
              <MapPin className="h-4 w-4 text-[#FDE047] shrink-0" />
              <span className="font-sans font-black text-xs sm:text-sm md:text-base text-white uppercase tracking-wider [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
                ĐIỂM BÁN TẠI CÀ MAU
              </span>
            </div>
          </div>
        </div>

        {/* Cute Soldier Floating Mascot Sticker (Desktop Bottom-Left) */}
        <div className="hidden xl:flex absolute bottom-6 left-6 z-20 items-center gap-3 p-2.5 pr-4 rounded-2xl bg-black/85 backdrop-blur-md border border-[#22C55E]/60 shadow-[0_0_25px_rgba(34,197,94,0.35)] pointer-events-auto">
          <CuteSoldierBadge size={52} withSalute={true} />
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 text-[#22C55E] font-black text-xs uppercase tracking-wider">
              <span>Chú Bộ Đội Cà Mau</span>
              <span className="text-amber-400">★</span>
            </div>
            <span className="text-white text-[11px] font-medium">Tư vấn tận tâm • 100% Chính hãng</span>
            <a
              href="tel:0917335233"
              className="text-amber-300 hover:text-white font-mono font-bold text-xs mt-0.5 transition-colors flex items-center gap-1"
            >
              <span>Hotline/Zalo: 0917.335.233</span>
            </a>
          </div>
        </div>

        {/* Right Glass Card (Desktop only, 4 Trust Points matching mockup) */}
        <div className="hidden lg:block absolute top-6 lg:top-10 right-3 xl:right-6 z-20 pointer-events-auto">
          <div className="w-52 xl:w-56 rounded-2xl bg-[#070D18]/90 backdrop-blur-md border border-[#FDE047]/50 p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.85)] space-y-2.5">
            
            {/* Item 1 */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#FDE047]/15 border border-[#FDE047]/40 flex items-center justify-center text-[#FDE047] shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="text-left text-xs leading-tight">
                <div className="text-white font-bold">Hàng chính hãng</div>
                <div className="text-slate-300 text-[11px]">Nhà máy Z121</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#FDE047]/15 border border-[#FDE047]/40 flex items-center justify-center text-[#FDE047] shrink-0">
                <QrCode className="h-4 w-4" />
              </div>
              <div className="text-left text-xs leading-tight">
                <div className="text-white font-bold">Có tem QR</div>
                <div className="text-slate-300 text-[11px]">chống giả</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#FDE047]/15 border border-[#FDE047]/40 flex items-center justify-center text-[#FDE047] shrink-0">
                <Tag className="h-4 w-4" />
              </div>
              <div className="text-left text-xs leading-tight">
                <div className="text-white font-bold">Giá niêm yết</div>
                <div className="text-slate-300 text-[11px]">minh bạch</div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#FDE047]/15 border border-[#FDE047]/40 flex items-center justify-center text-[#FDE047] shrink-0">
                <Truck className="h-4 w-4" />
              </div>
              <div className="text-left text-xs leading-tight">
                <div className="text-white font-bold">Giao tận nơi</div>
                <div className="text-slate-300 text-[11px]">toàn Cà Mau</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 2. HERO BANNER STAGE (MOBILE ONLY - EXACT MOCKUP MATCH)      */}
      {/* ============================================================ */}
      <div className="sm:hidden relative w-full aspect-[750/630]">
        <img
          src="/mediakit/05_mobile_hero_cam_xanh_qua_tet.webp"
          alt="Pháo hoa Z121 Cà Mau Mobile"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />

        {/* Small Hanging Lantern on Left (Mobile) */}
        <div className="absolute top-2 left-2.5 z-20 flex flex-col items-center pointer-events-none">
          <div className="h-1 w-1 rounded-full border border-[#FDE047] mb-0.5" />
          <div className="h-1.5 w-[1px] bg-[#FDE047]" />
          <div className="relative h-6 w-5 rounded-full bg-gradient-to-b from-[#DC2626] to-[#991B1B] border border-[#FDE047] shadow-[0_0_8px_rgba(220,38,38,0.7)] flex items-center justify-center">
            <div className="h-full w-1.5 border-x border-[#FDE047]/50 rounded-full" />
          </div>
          <div className="h-1.5 w-1 bg-[#F59E0B] rounded-b-sm" />
        </div>

        {/* Mobile Heading Overlay (Centered in Sky) */}
        <div className="absolute top-1.5 inset-x-0 z-20 flex flex-col items-center text-center px-2 pointer-events-none">
          {/* Mobile Brand Tag với Icon Chú Bộ Đội Chibi & Chữ "CHÚ BỘ ĐỘI" xanh */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/85 border border-[#FDE047] shadow-[0_0_14px_rgba(253,224,71,0.6)] backdrop-blur-xs mb-0.5">
            <CuteSoldierBadge size={24} withSalute={true} />
            <div className="flex items-center gap-1 font-sans font-black text-[9.5px] tracking-wide uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
              <span className="text-white">PHÁO HOA</span>
              <span className="text-[#4ADE80] drop-shadow-[0_0_8px_rgba(74,222,128,0.95)]">
                CHÚ BỘ ĐỘI
              </span>
              <span className="text-[#FDE047]">CÀ MAU</span>
            </div>
            <span className="text-[#FDE047] text-[8px] animate-pulse">★</span>
          </div>

          {/* Mobile Main Title: PHÁO HOA Z121 Đẳng Cấp Hoàng Gia */}
          <h1 className="font-sans font-black tracking-tight uppercase text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FFF3B0] via-30% to-[#FBBF24] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] drop-shadow-[0_0_15px_rgba(253,224,71,0.5)] my-0.5 leading-none select-none flex items-center justify-center gap-1.5">
            <span>PHÁO HOA</span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FDE047] to-[#F59E0B] drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]">
              Z121
            </span>
          </h1>

          <div className="flex items-center gap-1 font-sans font-black text-[7.5px] tracking-widest text-[#FEF3C7] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] mt-0.5">
            <span>CHÍNH HÃNG</span>
            <span className="text-[#FDE047]">✦</span>
            <span>AN TOÀN</span>
            <span className="text-[#FDE047]">✦</span>
            <span>HỢP PHÁP</span>
          </div>

          <div className="mt-1 inline-flex items-center justify-center">
            <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#991B1B] via-[#DC2626] to-[#991B1B] border border-[#FDE047] shadow-sm">
              <MapPin className="h-2.5 w-2.5 text-[#FDE047]" />
              <span className="font-sans font-black text-[8px] text-white uppercase tracking-wider">
                ĐIỂM BÁN TẠI CÀ MAU
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Indicator Dots (under the pedestal) */}
        <div className="absolute bottom-1.5 inset-x-0 z-20 flex justify-center items-center gap-1 pointer-events-none">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626] ring-1 ring-white/50" />
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="h-1 w-1 rounded-full bg-white/40" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. CATEGORY PILLS BAR (DESKTOP ONLY MATCHING MOCKUP)         */}
      {/* ============================================================ */}
      <div className="hidden sm:block w-full bg-[#140205] border-y border-amber-500/20 py-2.5 px-3 sm:px-6">
        <div className="max-w-[1440px] mx-auto overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 xl:gap-3 min-w-max">
            {categoryPills.map((pill) => {
              const isActive = selectedCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setSelectedCategory(pill.id)}
                  className={`inline-flex items-center gap-2 px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white shadow-lg shadow-red-950/60 border border-[#FDE047]/60 scale-[1.02]"
                      : "bg-[#1A0307]/90 hover:bg-[#2A060C] text-amber-100/90 hover:text-white border border-amber-900/40 hover:border-amber-500/50"
                  }`}
                >
                  <span className={isActive ? "text-[#FDE047]" : "text-[#FDE047]/80"}>
                    {pill.icon}
                  </span>
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
