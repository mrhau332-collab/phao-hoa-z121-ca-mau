"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { storeInfo } from "@/data/storeInfo";
import {
  ShieldCheck,
  Star,
  Truck,
  Headphones,
  Home,
  ChevronDown,
  Gift,
  Calendar,
  BookOpen,
  HelpCircle,
  Phone,
  Search,
  ShoppingCart,
  Menu,
  X,
  Scale,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, openCart, searchQuery, setSearchQuery } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const el = document.getElementById("san-pham-ban-chay");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/san-pham");
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050B14] text-white shadow-2xl border-b border-[#2A1016]">
      {/* ============================================================ */}
      {/* TẦNG 1: TOP BRAND BAR & 4 TRUST BADGES                       */}
      {/* ============================================================ */}
      <div className="border-b border-[#1A2333] bg-[#070D18] py-2 px-2.5 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Left Brand Identity: Z121 Logo + Brand Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink min-w-0 group">
            {/* Z121 emblem with star */}
            <div className="flex items-center">
              <span className="font-sans font-black italic text-xl sm:text-2xl tracking-tighter text-white flex items-center">
                <span className="relative">
                  Z121
                  <span className="absolute -top-1.5 right-0 text-red-500 text-xs sm:text-sm animate-pulse">
                    ★
                  </span>
                </span>
              </span>
            </div>

            <div className="h-7 w-[1px] bg-white/20 hidden sm:block" />

            {/* Brand Title - Nổi bật uy tín */}
            <div className="flex flex-col">
              <span className="text-[10px] text-white/90 font-bold sm:hidden leading-none">
                Pháo hoa
              </span>
              <div className="flex items-center gap-1.5 font-sans text-xs sm:text-base lg:text-lg font-black tracking-tight leading-tight">
                <span className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <span className="hidden sm:inline">Pháo hoa </span>chú Bộ đội
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FBBF24] to-[#F59E0B] font-black drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]">
                  Cà Mau
                </span>
              </div>
              <span className="hidden sm:block text-[10px] sm:text-[11px] text-[#FDE047]/90 font-semibold tracking-wide">
                Điểm Bán Pháo Hoa Z121 Chính Hãng
              </span>
            </div>
          </Link>

          {/* Right Trust Badges (4 Items Matching Mockup) */}
          <div className="hidden lg:flex items-center gap-6 text-xs text-slate-200">
            {/* Badge 1 */}
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#FBBF24] shrink-0" />
              <div className="flex flex-col leading-tight text-[11px]">
                <span className="text-white font-medium">Sản phẩm chính hãng</span>
                <span className="text-slate-400">Nhà máy Z121</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#FBBF24] shrink-0" />
              <div className="flex flex-col leading-tight text-[11px]">
                <span className="text-white font-medium">Giá niêm yết</span>
                <span className="text-slate-400">minh bạch</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-[#FBBF24] shrink-0" />
              <div className="flex flex-col leading-tight text-[11px]">
                <span className="text-white font-medium">Giao tận nơi</span>
                <span className="text-slate-400">toàn Cà Mau</span>
              </div>
            </div>

            {/* Badge 4: Hotline Call Center */}
            <a
              href={`tel:${storeInfo.hotline}`}
              className="flex items-center gap-2 text-[#FBBF24] hover:text-white transition-colors"
            >
              <Headphones className="h-4 w-4 text-[#FBBF24] shrink-0" />
              <div className="flex flex-col leading-tight text-[11px]">
                <span className="text-slate-300 font-medium">Tư vấn 24/7</span>
                <span className="text-[#FBBF24] font-mono font-black text-xs">
                  {storeInfo.hotlineDisplay}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <a
              href={`tel:${storeInfo.hotline}`}
              aria-label="Gọi điện thoại"
              className="p-1 rounded-full text-[#FBBF24] hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className="relative p-1 rounded-full text-white hover:bg-white/10"
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 text-[8px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở menu"
              className="p-1 rounded-md text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* TẦNG 2: NAVIGATION ROW WITH RED PILL & SEARCH & CART         */}
      {/* ============================================================ */}
      <div className="hidden lg:block bg-[#050B14]/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          
          {/* Main Navigation Links */}
          <nav className="flex items-center gap-1.5 xl:gap-3 text-xs font-semibold">
            {/* 1. Trang chủ (Active Red Capsule Button) */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white font-bold shadow-md shadow-red-950/40 hover:from-red-600 hover:to-red-800 transition-all"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Trang chủ</span>
            </Link>

            {/* 2. Sản phẩm dropdown */}
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <span>Sản phẩm</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </Link>

            {/* 3. Combo Tết */}
            <Link
              href="/#combo-tet-tron-goi"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <Gift className="h-3.5 w-3.5 text-[#FBBF24]" />
              <span>Combo Tết</span>
            </Link>

            {/* 4. Bảng giá */}
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <Calendar className="h-3.5 w-3.5 text-[#FBBF24]" />
              <span>Bảng giá</span>
            </Link>

            {/* 5. Pháp lý & An toàn */}
            <Link
              href="/an-toan-phap-ly"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#FBBF24]" />
              <span>Pháp lý & An toàn</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </Link>

            {/* 6. Hướng dẫn sử dụng */}
            <Link
              href="/an-toan-phap-ly#ke-gach"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#FBBF24]" />
              <span>Hướng dẫn sử dụng</span>
            </Link>

            {/* 7. FAQ */}
            <Link
              href="/gioi-thieu-lien-he#faq"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <HelpCircle className="h-3.5 w-3.5 text-[#FBBF24]" />
              <span>FAQ</span>
            </Link>

            {/* 8. Liên hệ */}
            <Link
              href="/gioi-thieu-lien-he"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-slate-200 hover:text-[#FBBF24] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#FBBF24]" />
              <span>Liên hệ</span>
            </Link>
          </nav>

          {/* Right Search Input & Cart Button */}
          <div className="flex items-center gap-3">
            {/* Search Pill Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-56 xl:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm sản phẩm, mã Z121..."
                className="w-full h-8 pl-9 pr-3 rounded-full bg-[#111827]/90 border border-white/15 focus:border-[#FBBF24] focus:outline-none text-[11px] text-white placeholder-slate-400 transition-all"
              />
            </form>

            {/* Cart Capsule Button */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className="relative flex items-center justify-center h-8 w-10 rounded-full bg-[#111827] border border-white/20 hover:border-[#FBBF24] text-white transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white shadow-sm">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE DROPDOWN DRAWER                                       */}
      {/* ============================================================ */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#070D18] px-4 py-4 space-y-3 animate-fade-in shadow-2xl">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm sản phẩm, mã Z121..."
              className="w-full h-9 pl-9 pr-3 rounded-full bg-[#111827] border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#FBBF24]"
            />
          </form>

          <nav className="flex flex-col space-y-1.5 text-xs font-semibold text-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg bg-red-700/80 text-white font-bold"
            >
              <Home className="h-4 w-4" />
              <span>Trang chủ</span>
            </Link>
            <Link
              href="/san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <Sparkles className="h-4 w-4 text-[#FBBF24]" />
              <span>Tất cả sản phẩm</span>
            </Link>
            <Link
              href="/#combo-tet-tron-goi"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <Gift className="h-4 w-4 text-[#FBBF24]" />
              <span>Combo Tết Trọn Gói</span>
            </Link>
            <Link
              href="/an-toan-phap-ly"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <Scale className="h-4 w-4 text-[#FBBF24]" />
              <span>Pháp lý & An toàn</span>
            </Link>
            <Link
              href="/gioi-thieu-lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-[#FBBF24]" />
              <span>Liên hệ & FAQ</span>
            </Link>
          </nav>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${storeInfo.hotline}`}
              className="flex items-center justify-center gap-2 py-2 rounded-xl bg-[#DC2626] text-white font-bold text-xs"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Gọi ngay {storeInfo.hotlineDisplay}</span>
            </a>
            <a
              href={storeInfo.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-xl bg-[#0068FF] text-white font-bold text-xs"
            >
              <span>Đặt hàng qua Zalo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
