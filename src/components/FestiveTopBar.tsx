"use client";

import React from "react";
import { PhoneCall, ShieldCheck, Sparkles, MapPin, Clock } from "lucide-react";
import { storeInfo } from "@/data/storeInfo";

export function FestiveTopBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-[#4A030C] via-[#7B0817] to-[#4A030C] border-b border-amber-500/40 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-1 sm:px-0">
        
        {/* Left: Spring Greeting & Identification */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-bold text-amber-300">
            <span>🏮</span>
            <span className="uppercase tracking-wider">Xuân 2026</span>
          </span>
          <span className="text-amber-400/50">•</span>
          <span className="hidden sm:inline text-amber-100 font-medium">
            Điểm Bán Pháo Hoa Z121 Cà Mau — Pháo Hoa Chú Bộ Đội (Bộ Quốc Phòng)
          </span>
          <span className="sm:hidden text-amber-100 font-medium truncate max-w-[200px]">
            Điểm Bán Z121 Cà Mau • Chú Bộ Đội
          </span>
        </div>

        {/* Right: Operational Reassurance & Quick Hotline */}
        <div className="flex items-center gap-2 sm:gap-4 text-slate-200 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-amber-200/90">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>100% Hợp pháp NĐ 137</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-amber-200/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>07:00 - 22:00</span>
          </div>

          <a
            href={`tel:${storeInfo.hotline}`}
            className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-full border border-amber-400/30 text-[10px] sm:text-xs"
          >
            <PhoneCall className="h-3 w-3 text-amber-400" />
            <span className="font-mono">{storeInfo.hotlineDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
