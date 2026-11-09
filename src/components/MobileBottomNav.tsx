"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  const isHome = pathname === "/";
  const isProducts = pathname === "/san-pham";

  return (
    <nav
      aria-label="Thanh điều hướng di động"
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#070D18]/95 backdrop-blur-lg border-t border-white/10 px-3 py-1.5 flex items-center justify-around shadow-2xl"
    >
      {/* 1. Trang chủ */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
          isHome
            ? "bg-[#DC2626] text-white font-bold shadow-md shadow-red-950/50"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <Home className="h-4 w-4" />
        <span className="text-[10px] mt-0.5">Trang chủ</span>
      </Link>

      {/* 2. Sản phẩm */}
      <Link
        href="/san-pham"
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
          isProducts
            ? "bg-[#DC2626] text-white font-bold shadow-md shadow-red-950/50"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <Sparkles className="h-4 w-4" />
        <span className="text-[10px] mt-0.5">Sản phẩm</span>
      </Link>

      {/* 3. Giỏ hàng */}
      <button
        type="button"
        onClick={openCart}
        className="relative flex flex-col items-center justify-center py-1 px-3 text-slate-400 hover:text-white transition-all"
      >
        <div className="relative">
          <ShoppingBag className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 text-[8px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>
        <span className="text-[10px] mt-0.5">Giỏ hàng</span>
      </button>

      {/* 4. Khác */}
      <Link
        href="/an-toan-phap-ly"
        className="flex flex-col items-center justify-center py-1 px-3 text-slate-400 hover:text-white transition-all"
      >
        <Menu className="h-4 w-4" />
        <span className="text-[10px] mt-0.5">Khác</span>
      </Link>
    </nav>
  );
}
