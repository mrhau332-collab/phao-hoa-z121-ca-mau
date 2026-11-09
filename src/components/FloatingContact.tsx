"use client";

import React from "react";
import { storeInfo } from "@/data/storeInfo";
import { PhoneCall, MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE STICKY DUAL ACTION PILLS (EXACT AS SHOWN IN MOCKUP)   */}
      {/* ============================================================ */}
      <div className="sm:hidden fixed bottom-[52px] inset-x-0 z-40 px-3 py-2 bg-gradient-to-t from-black via-black/85 to-transparent flex items-center gap-2 pointer-events-auto">
        {/* Left Blue Button: Đặt hàng qua Zalo */}
        <a
          href={storeInfo.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#0068FF] hover:bg-[#0054cc] text-white py-2.5 px-2 shadow-xl font-bold text-xs active:scale-95 transition-all"
        >
          <span className="font-black text-xs bg-white text-[#0068FF] px-1 rounded-sm leading-none py-0.5">
            Zalo
          </span>
          <span>Đặt hàng qua Zalo</span>
        </a>

        {/* Right Red Button: Gọi ngay 0917.335.233 */}
        <a
          href={`tel:${storeInfo.hotline}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white py-2.5 px-2 shadow-xl font-bold text-xs active:scale-95 transition-all"
        >
          <PhoneCall className="h-3.5 w-3.5 shrink-0" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] text-amber-200">Gọi ngay</span>
            <span className="font-mono text-[11px] font-black">{storeInfo.hotlineDisplay}</span>
          </div>
        </a>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP FLOATING PILLS (BOTTOM RIGHT)                        */}
      {/* ============================================================ */}
      <aside
        aria-label="Kênh liên hệ nhanh"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5 pointer-events-auto"
      >
        {/* Zalo Button */}
        <a
          href={storeInfo.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-[#0068FF] hover:bg-[#0054cc] text-white py-2.5 px-4 shadow-2xl border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
          title="Chat Zalo với Chú Bộ Đội"
        >
          <span className="font-black text-xs bg-white text-[#0068FF] px-1 rounded leading-none py-0.5">
            Zalo
          </span>
          <span className="text-xs font-bold tracking-tight">
            Đặt hàng qua Zalo
          </span>
        </a>

        {/* Phone Call Hotline Button with Ping */}
        <a
          href={`tel:${storeInfo.hotline}`}
          className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-red-600 hover:to-red-800 text-white py-2 px-4 shadow-2xl border border-[#FDE047]/40 transition-all duration-200 hover:scale-105 active:scale-95"
          title="Gọi điện trực tiếp cho Chú Bộ Đội"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDE047] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FDE047]" />
          </span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <PhoneCall className="h-3.5 w-3.5" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10px] text-amber-200 font-bold">Gọi ngay</span>
            <span className="text-xs font-mono font-black mt-0.5">{storeInfo.hotlineDisplay}</span>
          </div>
        </a>
      </aside>
    </>
  );
}
