"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { storeInfo } from "@/data/storeInfo";
import {
  Gift,
  Flame,
  Play,
  RotateCw,
  Clock,
  Compass,
  ShoppingCart,
  Plus,
  Minus,
  BookOpen,
  Scale,
  HelpCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronRight as ChevronRightIcon,
  Sparkles,
} from "lucide-react";

interface MasterDashboardSectionProps {
  onOpenVideo: (product: Product) => void;
}

export function MasterDashboardSection({ onOpenVideo }: MasterDashboardSectionProps) {
  const { addItem, openCart, openMacroInspect } = useCart();

  // Quantities for center column cards
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({
    "z121-pv25": 1,
    "z121-pvnn25": 1,
    "z121-hq50": 1,
  });

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  // Combo Packages (Column 1 - Left)
  const comboList = [
    {
      id: "combo-sum-vay",
      name: "Combo Tết Sum Vầy",
      tag: "☆ Dành cho gia đình 4–6 người",
      price: 580000,
      saving: "Ưu đãi Tết",
      image: "/mediakit/01_packshot_phun_vien_D16x25_cam_AI.webp",
      productRef: products[0],
    },
    {
      id: "combo-dai-cat",
      name: "Combo Đón Xuân Đại Cát",
      tag: "☆ Giàn Phun Hoa + Thác Nước Bạc 2M",
      price: 990000,
      saving: "Ưu đãi Tết",
      image: "/mediakit/02_packshot_nhap_nhay_D16x25_xanh_AI.webp",
      productRef: products[2] || products[0],
    },
    {
      id: "combo-thinh-vuong",
      name: "Combo Thịnh Vượng VIP",
      tag: "☆ Trọn bộ Hộp quà 50, 75 & Giàn 25 ống",
      price: 1680000,
      saving: "Ưu đãi Tết",
      image: "/mediakit/06_dan_san_pham_tet_AI.webp",
      productRef: products[3] || products[0],
    },
  ];

  // Best Seller 3 Products (Column 2 - Center)
  // Replaced with the official real packaging packshots (Cam D16x25, Xanh Nhấp Nháy, Hộp Quà Tết 50)
  const bestSellerProducts = [
    {
      id: "z121-pv25",
      sku: "Z121 - PV25",
      name: "Giàn Phun Viên D16x25 (Cam)",
      price: 290000,
      duration: "~ 45 giây",
      height: "20 - 25 m",
      videoDuration: "00:45",
      image: "/mediakit/01_packshot_phun_vien_D16x25_cam_AI.webp",
      productRef: products[0],
    },
    {
      id: "z121-pvnn25",
      sku: "Z121 - PVNN25",
      name: "Giàn Phun Viên Nhấp Nháy (Xanh)",
      price: 290000,
      duration: "~ 45 giây",
      height: "20 - 25 m",
      videoDuration: "00:45",
      image: "/mediakit/02_packshot_nhap_nhay_D16x25_xanh_AI.webp",
      productRef: products[1] || products[0],
    },
    {
      id: "z121-hq50",
      sku: "Z121 - HQ50",
      name: "Bộ Hộp Quà Tết 50 Z121",
      price: 650000,
      duration: "Đa tầng liên hoàn",
      height: "20 - 30 m",
      videoDuration: "01:15",
      image: "/mediakit/03_packshot_hop_qua_tet_50_AI.webp",
      productRef: products[2] || products[0],
    },
  ];

  const handleAddProduct = (prod: Product, qty: number) => {
    addItem(prod, qty);
    openCart();
  };

  return (
    <section className="w-full bg-[#1A0307] py-6 sm:py-8 px-2 sm:px-4 lg:px-6">
      <div className="max-w-[1440px] mx-auto space-y-6">
        
        {/* ============================================================ */}
        {/* MOBILE ONLY: 4 QUICK ACCESS BUTTONS & SEQUENTIAL SECTIONS    */}
        {/* ============================================================ */}
        <div className="lg:hidden space-y-4">
          {/* 4 Quick Access Icons in White Card Row (Mobile Mockup) */}
          <div className="grid grid-cols-4 gap-1.5 bg-white rounded-2xl p-2.5 shadow-lg border border-amber-200/50">
            <Link href="/san-pham" className="flex flex-col items-center justify-center gap-1 text-center py-1">
              <div className="h-9 w-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 leading-tight">Sản phẩm</span>
            </Link>

            <Link href="#combo-tet-tron-goi" className="flex flex-col items-center justify-center gap-1 text-center py-1">
              <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Gift className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 leading-tight">Combo Tết</span>
            </Link>

            <Link href="/an-toan-phap-ly" className="flex flex-col items-center justify-center gap-1 text-center py-1">
              <div className="h-9 w-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Scale className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 leading-tight">Pháp lý</span>
            </Link>

            <Link href="/an-toan-phap-ly#ke-gach" className="flex flex-col items-center justify-center gap-1 text-center py-1">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 leading-tight">Hướng dẫn</span>
            </Link>
          </div>

          {/* Mobile Section 1: Combo Tết Nổi Bật */}
          <div className="rounded-2xl bg-gradient-to-b from-[#7F1D1D] to-[#450A0A] p-3 shadow-xl border border-amber-400/30">
            <div className="flex items-center justify-between pb-2 text-white">
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <span>🔥</span>
                <span>Combo Tết Nổi Bật</span>
              </div>
              <Link href="/#combo-tet-tron-goi" className="text-xs text-amber-300 font-semibold flex items-center">
                <span>Xem tất cả</span>
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Horizontal Combo Card */}
            <div
              onClick={() => handleAddProduct(comboList[0].productRef, 1)}
              className="flex items-center gap-3 bg-white rounded-xl p-2.5 shadow-md cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="relative h-16 w-20 rounded-lg overflow-hidden bg-slate-50 border border-slate-200 shrink-0">
                <img src={comboList[0].image} alt={comboList[0].name} className="w-full h-full object-contain p-1" loading="eager" decoding="sync" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">{comboList[0].name}</div>
                <div className="text-[10px] text-slate-500 truncate">{comboList[0].tag}</div>
                <div className="font-sans font-black text-sm text-[#DC2626] mt-0.5 tabular-nums tracking-tight">
                  xxxxxx đ
                </div>
              </div>
              <ChevronRightIcon className="h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Mobile Section 2: Sản phẩm bán chạy */}
          <div className="rounded-2xl bg-gradient-to-b from-[#7F1D1D] to-[#450A0A] p-3 shadow-xl border border-amber-400/30">
            <div className="flex items-center justify-between pb-2 text-white">
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <span>🛒</span>
                <span>Sản phẩm bán chạy</span>
              </div>
              <Link href="/san-pham" className="text-xs text-amber-300 font-semibold flex items-center">
                <span>Xem tất cả</span>
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Horizontal Product Cards Scroll */}
            <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
              {bestSellerProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleAddProduct(p.productRef, 1)}
                  className="w-36 shrink-0 bg-white rounded-xl p-2 shadow-md flex flex-col justify-between text-center cursor-pointer active:scale-95 transition-transform"
                >
                  <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-50 border border-slate-200 mb-1.5">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" loading="eager" decoding="sync" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-900 line-clamp-1">{p.name}</h4>
                    <div className="font-sans font-black text-xs text-[#DC2626] mt-0.5 tabular-nums tracking-tight">
                      xxxxxx đ
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP: 3-COLUMN MASTER DASHBOARD (EXACT 100% REPLICA)      */}
        {/* ============================================================ */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-stretch">
          
          {/* ---------------------------------------------------------- */}
          {/* CỘT 1: COMBO TẾT TRỌN GÓI (LEFT - 4 COLS)                  */}
          {/* ---------------------------------------------------------- */}
          <div
            id="combo-tet-tron-goi"
            className="col-span-4 rounded-3xl bg-gradient-to-b from-[#8B1E28] via-[#70161F] to-[#4A0D14] border-2 border-[#D97706]/40 p-3.5 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 px-1">
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-[#FDE047]" />
                <div>
                  <h3 className="font-sans font-black text-base lg:text-lg text-white leading-tight">
                    Combo Tết Trọn Gói
                  </h3>
                  <p className="text-[11px] text-[#FDE047] font-medium leading-none mt-0.5">
                    Tiết kiệm hơn – Rực rỡ đêm xuân
                  </p>
                </div>
              </div>

              <Link
                href="/san-pham"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#DC2626] hover:bg-red-700 text-white text-[11px] font-bold shadow transition-colors"
              >
                <span>Xem tất cả combo</span>
                <span>→</span>
              </Link>
            </div>

            {/* Inner White Container holding 3 Combo Cards */}
            <div className="rounded-2xl bg-[#FFFDF7] p-2.5 shadow-inner space-y-2.5 flex-1 flex flex-col justify-between">
              {comboList.map((combo) => (
                <div
                  key={combo.id}
                  className="relative rounded-xl border border-amber-200/80 bg-white p-2.5 shadow-sm hover:shadow-md transition-shadow flex gap-3 items-center group"
                >
                  {/* Saving Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="rounded-full bg-gradient-to-r from-[#EA580C] to-[#DC2626] px-2 py-0.5 text-[9px] font-black text-white shadow-sm">
                      {combo.saving}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative h-16 w-16 xl:h-18 xl:w-18 shrink-0 rounded-lg overflow-hidden bg-slate-50 border border-slate-200">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-contain p-1"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>

                  {/* Info & Button */}
                  <div className="flex-1 min-w-0 pr-16">
                    <h4 className="font-sans font-bold text-xs xl:text-sm text-slate-900 line-clamp-1">
                      {combo.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                      {combo.tag}
                    </p>
                    <div className="font-sans font-black text-sm xl:text-base text-[#DC2626] mt-0.5 tabular-nums tracking-tight">
                      xxxxxx đ
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => handleAddProduct(combo.productRef, 1)}
                    className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-[#DC2626] hover:bg-red-700 text-white text-[10px] font-bold px-2 py-1 shadow active:scale-95 transition-all"
                  >
                    <ShoppingCart className="h-3 w-3" />
                    <span>Đặt combo</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* CỘT 2: SẢN PHẨM BÁN CHẠY (CENTER - 5 COLS)                 */}
          {/* ---------------------------------------------------------- */}
          <div
            id="san-pham-ban-chay"
            className="col-span-5 rounded-3xl bg-gradient-to-b from-[#8B1E28] via-[#70161F] to-[#4A0D14] border-2 border-[#D97706]/40 p-3.5 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 px-1">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-[#FDE047]" />
                <h3 className="font-sans font-black text-base lg:text-lg text-white">
                  Sản phẩm bán chạy
                </h3>
              </div>

              <Link
                href="/san-pham"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#DC2626] hover:bg-red-700 text-white text-[11px] font-bold shadow transition-colors"
              >
                <span>Xem tất cả sản phẩm</span>
                <span>→</span>
              </Link>
            </div>

            {/* Inner White Container with Navigation Arrows & 3 Cards */}
            <div className="relative rounded-2xl bg-[#FFFDF7] p-2.5 shadow-inner flex-1 flex flex-col justify-between">
              
              {/* Navigation Arrows on sides */}
              <button
                type="button"
                aria-label="Sản phẩm trước"
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-white/90 border border-slate-300 text-slate-700 flex items-center justify-center shadow hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Sản phẩm kế tiếp"
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full bg-white/90 border border-slate-300 text-slate-700 flex items-center justify-center shadow hover:bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* 3 Product Cards Grid */}
              <div className="grid grid-cols-3 gap-2 px-4 py-1">
                {bestSellerProducts.map((p) => {
                  const qty = quantities[p.id] || 1;
                  return (
                    <div
                      key={p.id}
                      className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm flex flex-col justify-between text-left relative group hover:border-[#F59E0B] transition-colors"
                    >
                      {/* Top Right 360° Badge */}
                      <button
                        type="button"
                        onClick={() => openMacroInspect(p.productRef)}
                        title="Soi 360°"
                        className="absolute top-1.5 right-1.5 z-10 flex items-center gap-0.5 rounded-full bg-black/75 px-1.5 py-0.5 text-[8px] font-bold text-white hover:bg-black"
                      >
                        <RotateCw className="h-2.5 w-2.5" />
                        <span>360°</span>
                      </button>

                      {/* Product Packshot Image */}
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-contain p-1.5"
                          loading="eager"
                          decoding="sync"
                        />
                        {/* Video Duration Badge */}
                        <button
                          type="button"
                          onClick={() => onOpenVideo(p.productRef)}
                          className="absolute bottom-1 right-1 flex items-center gap-1 rounded bg-black/80 px-1.5 py-0.5 text-[8px] font-mono text-white hover:bg-red-600 transition-colors"
                        >
                          <Play className="h-2 w-2 fill-current" />
                          <span>{p.videoDuration}</span>
                        </button>
                      </div>

                      {/* Info */}
                      <div className="mt-2 space-y-1">
                        <span className="inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-mono font-bold text-slate-600">
                          {p.sku}
                        </span>
                        <h4 className="font-sans font-bold text-[11px] xl:text-xs text-slate-900 line-clamp-1 leading-snug">
                          {p.name}
                        </h4>

                        {/* Specs */}
                        <div className="text-[9px] text-slate-500 space-y-0.5">
                          <div className="flex items-center gap-1">
                            <Compass className="h-2.5 w-2.5 text-slate-400 shrink-0" />
                            <span>Độ cao {p.height}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-2.5 w-2.5 text-slate-400 shrink-0" />
                            <span>Thời lượng {p.duration}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="font-sans font-black text-xs xl:text-sm text-[#DC2626] pt-0.5 tabular-nums tracking-tight">
                          xxxxxx đ
                        </div>
                      </div>

                      {/* Stepper & Buy Button */}
                      <div className="mt-2 pt-1 border-t border-slate-100 flex items-center gap-1">
                        <div className="flex items-center rounded border border-slate-300 bg-slate-50 px-1 py-0.5 text-[10px]">
                          <button
                            type="button"
                            onClick={() => handleQtyChange(p.id, -1)}
                            className="px-0.5 text-slate-500 hover:text-black font-bold"
                          >
                            -
                          </button>
                          <span className="w-4 text-center font-mono font-bold text-slate-900">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQtyChange(p.id, 1)}
                            className="px-0.5 text-slate-500 hover:text-black font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleAddProduct(p.productRef, qty)}
                          className="flex-1 inline-flex items-center justify-center gap-0.5 rounded bg-[#DC2626] hover:bg-red-700 text-white text-[10px] font-bold py-1 shadow"
                        >
                          <ShoppingCart className="h-2.5 w-2.5" />
                          <span>Đặt mua</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dots Indicator matching mockup */}
              <div className="flex justify-center items-center gap-1.5 pt-1">
                <span className="h-1.5 w-4 rounded-full bg-[#DC2626]" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* CỘT 3: VIDEO THỰC TẾ & ACTION LINKS (RIGHT - 3 COLS)       */}
          {/* ---------------------------------------------------------- */}
          <div className="col-span-3 rounded-3xl bg-gradient-to-b from-[#8B1E28] via-[#70161F] to-[#4A0D14] border-2 border-[#D97706]/40 p-3.5 shadow-2xl flex flex-col justify-between space-y-2.5">
            
            {/* Top Video Player Card */}
            <div className="rounded-2xl bg-black/60 border border-[#FDE047]/30 p-2.5 shadow-md">
              <div className="flex items-center justify-between pb-1.5 text-white">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-[#FDE047]" />
                  <div>
                    <h4 className="font-sans font-black text-xs text-white leading-tight">
                      Xem video thực tế
                    </h4>
                    <p className="text-[10px] text-[#FDE047] leading-none">
                      Hiệu ứng bắn của sản phẩm
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Player Box */}
              <div
                onClick={() => onOpenVideo(products[0])}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-black cursor-pointer group mt-1"
              >
                <img
                  src="/mediakit/02_bg_dem_phao_hoa_camau_khong_san_pham_AI.webp"
                  alt="Video hiệu ứng Z121"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* Big Red/Gold Play Button */}
                <div className="absolute inset-0 m-auto h-11 w-11 rounded-full bg-[#DC2626] border-2 border-[#FDE047] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 fill-white text-white ml-0.5" />
                </div>

                {/* Duration */}
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-mono text-white">
                  04:26
                </div>
              </div>
            </div>

            {/* 3 Red Lacquer Navigation Cards matching Mockup */}
            <div className="space-y-2 flex-1 flex flex-col justify-around">
              {/* Card 1: Hướng dẫn an toàn */}
              <Link
                href="/an-toan-phap-ly#ke-gach"
                className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#DC2626]/90 to-[#991B1B]/90 hover:from-red-600 hover:to-red-800 border border-[#FDE047]/40 p-2.5 text-white shadow-md transition-all active:scale-[0.99]"
              >
                <div className="h-7 w-7 rounded-lg bg-black/30 flex items-center justify-center shrink-0 text-[#FDE047]">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="leading-tight text-left min-w-0 flex-1">
                  <div className="font-sans font-bold text-xs truncate">Hướng dẫn sử dụng an toàn</div>
                  <div className="text-[10px] text-amber-200/90 truncate">(Chèn gạch 4 góc, cự ly ≥ 10m)</div>
                </div>
              </Link>

              {/* Card 2: Quy định pháp lý */}
              <Link
                href="/an-toan-phap-ly"
                className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#DC2626]/90 to-[#991B1B]/90 hover:from-red-600 hover:to-red-800 border border-[#FDE047]/40 p-2.5 text-white shadow-md transition-all active:scale-[0.99]"
              >
                <div className="h-7 w-7 rounded-lg bg-black/30 flex items-center justify-center shrink-0 text-[#FDE047]">
                  <Scale className="h-4 w-4" />
                </div>
                <div className="leading-tight text-left min-w-0 flex-1">
                  <div className="font-sans font-bold text-xs truncate">Quy định pháp lý</div>
                  <div className="text-[10px] text-amber-200/90 truncate">NĐ 137/2020 & NĐ 56/2023</div>
                </div>
              </Link>

              {/* Card 3: Câu hỏi thường gặp */}
              <Link
                href="/gioi-thieu-lien-he#faq"
                className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#DC2626]/90 to-[#991B1B]/90 hover:from-red-600 hover:to-red-800 border border-[#FDE047]/40 p-2.5 text-white shadow-md transition-all active:scale-[0.99]"
              >
                <div className="h-7 w-7 rounded-lg bg-black/30 flex items-center justify-center shrink-0 text-[#FDE047]">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div className="leading-tight text-left min-w-0 flex-1">
                  <div className="font-sans font-bold text-xs truncate">Câu hỏi thường gặp (FAQ)</div>
                </div>
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM TRUST STRIP (RED WITH GOLD SILK RIBBON)            */}
      {/* ============================================================ */}
      <div className="w-full mt-6 bg-gradient-to-r from-[#7F1D1D] via-[#991B1B] to-[#7F1D1D] border-t-2 border-[#FDE047]/40 py-3 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-white">
          
          {/* Trust 1 */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#FDE047] shrink-0" />
            <div className="leading-tight text-[11px]">
              <span className="font-bold text-white block">100% Chính hãng</span>
              <span className="text-amber-200/90">Từ Nhà máy Z121</span>
            </div>
          </div>

          {/* Trust 2 */}
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-[#FDE047] shrink-0" />
            <div className="leading-tight text-[11px]">
              <span className="font-bold text-white block">Giao hàng nhanh</span>
              <span className="text-amber-200/90">Đến tất cả huyện Cà Mau</span>
            </div>
          </div>

          {/* Trust 3 */}
          <div className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-[#FDE047] shrink-0" />
            <div className="leading-tight text-[11px]">
              <span className="font-bold text-white block">Hỗ trợ đổi trả</span>
              <span className="text-amber-200/90">Theo quy định</span>
            </div>
          </div>

          {/* Trust 4 */}
          <a
            href={`tel:${storeInfo.hotline}`}
            className="flex items-center gap-2 hover:text-[#FDE047] transition-colors"
          >
            <Headphones className="h-5 w-5 text-[#FDE047] shrink-0" />
            <div className="leading-tight text-[11px]">
              <span className="font-bold text-white block">Tư vấn tận tâm</span>
              <span className="text-[#FDE047] font-mono font-bold">Hotline/Zalo: {storeInfo.hotlineDisplay}</span>
            </div>
          </a>

          {/* Trust 5 */}
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-[#FDE047] shrink-0" />
            <div className="leading-tight text-[11px]">
              <span className="font-bold text-white block">Hướng dẫn an toàn PCCC</span>
              <span className="text-amber-200/90">Sử dụng đúng cách – An toàn – Hiệu quả</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
