"use client";

import React from "react";

interface TabItem {
  id: string;
  label: string;
  count?: number;
}

interface SlidingTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function SlidingTabs({ tabs, activeTab, onChange, className = "" }: SlidingTabsProps) {
  return (
    <div
      className={`inline-flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-inner-glow relative ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`relative z-10 px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-tight transition-all duration-300 active:scale-[0.98] ${
              isActive
                ? "text-night-950 font-bold shadow-gold-glow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {/* Smooth Indicator Pill Background */}
            {isActive && (
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold via-gold-light to-amber-300 shadow-gold-glow animate-in fade-in zoom-in-95 duration-200" />
            )}
            <span className="flex items-center gap-1.5">
              <span>{tab.label}</span>
              {typeof tab.count === "number" && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-night-950/20 text-night-950 font-bold" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
