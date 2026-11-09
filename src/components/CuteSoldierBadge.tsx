"use client";

import React from "react";

interface CuteSoldierProps {
  className?: string;
  size?: number;
  withSalute?: boolean;
  withStickerBorder?: boolean;
}

export function CuteSoldierBadge({
  className = "",
  size = 48,
  withSalute = true,
  withStickerBorder = true,
}: CuteSoldierProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="helmetGrad" x1="20" y1="10" x2="100" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A853D" />
            <stop offset="50%" stopColor="#2E6323" />
            <stop offset="100%" stopColor="#1B4214" />
          </linearGradient>

          <linearGradient id="helmetBrim" x1="10" y1="45" x2="110" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3E7532" />
            <stop offset="100%" stopColor="#1B4013" />
          </linearGradient>

          <linearGradient id="skinGrad" x1="30" y1="40" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE0C2" />
            <stop offset="100%" stopColor="#F5BF93" />
          </linearGradient>

          <linearGradient id="uniformGrad" x1="20" y1="80" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3E7532" />
            <stop offset="100%" stopColor="#224D1A" />
          </linearGradient>

          <filter id="stickerShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Sticker White Outer Contour Outline (if enabled) */}
        {withStickerBorder && (
          <g filter="url(#stickerShadow)">
            <ellipse cx="60" cy="52" rx="44" ry="40" fill="#FFFFFF" />
            <rect x="24" y="80" width="72" height="34" rx="14" fill="#FFFFFF" />
            {withSalute && <circle cx="98" cy="46" r="14" fill="#FFFFFF" />}
          </g>
        )}

        {/* Body / Military Uniform */}
        <path
          d="M 28 88 C 28 80, 42 78, 60 78 C 78 78, 92 80, 92 88 L 94 114 C 94 116, 26 116, 26 114 Z"
          fill="url(#uniformGrad)"
        />

        {/* White Inner Shirt Collar */}
        <polygon points="54,78 60,86 66,78 60,76" fill="#FFFFFF" />

        {/* Red Military Lapel Tabs (Ve Áo Quân Hàm Đỏ Sao Vàng) */}
        {/* Left Lapel Tab */}
        <polygon points="40,80 50,81 48,93 38,91" fill="#DC2626" stroke="#FDE047" strokeWidth="0.8" />
        <polygon points="44,84 45,86 47,86 45.5,87.5 46,89.5 44,88.5 42,89.5 42.5,87.5 41,86 43,86" fill="#FDE047" />

        {/* Right Lapel Tab */}
        <polygon points="80,80 70,81 72,93 82,91" fill="#DC2626" stroke="#FDE047" strokeWidth="0.8" />
        <polygon points="76,84 77,86 79,86 77.5,87.5 78,89.5 76,88.5 74,89.5 74.5,87.5 73,86 75,86" fill="#FDE047" />

        {/* Cute Chubby Face */}
        <ellipse cx="60" cy="62" rx="27" ry="24" fill="url(#skinGrad)" />

        {/* Cute Ears */}
        <circle cx="33" cy="62" r="5.5" fill="#F5BF93" />
        <circle cx="87" cy="62" r="5.5" fill="#F5BF93" />

        {/* Rosy Blush Cheeks */}
        <ellipse cx="44" cy="68" rx="5" ry="3.5" fill="#FB7185" opacity="0.6" />
        <ellipse cx="76" cy="68" rx="5" ry="3.5" fill="#FB7185" opacity="0.6" />

        {/* Sparkly Cheerful Eyes */}
        {/* Left Eye */}
        <ellipse cx="48" cy="58" rx="4" ry="5.5" fill="#18181B" />
        <circle cx="46.5" cy="56" r="1.8" fill="#FFFFFF" />
        <circle cx="49.5" cy="60" r="0.9" fill="#FFFFFF" />

        {/* Right Eye */}
        <ellipse cx="72" cy="58" rx="4" ry="5.5" fill="#18181B" />
        <circle cx="70.5" cy="56" r="1.8" fill="#FFFFFF" />
        <circle cx="73.5" cy="60" r="0.9" fill="#FFFFFF" />

        {/* Friendly Eyebrows */}
        <path d="M 43 51 Q 48 48 53 51" stroke="#4B270C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 67 51 Q 72 48 77 51" stroke="#4B270C" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Cute Little Smile */}
        <path
          d="M 53 66 Q 60 74 67 66"
          fill="#BE123C"
          stroke="#9F1239"
          strokeWidth="1.2"
        />
        <path d="M 56 68 Q 60 71 64 68" fill="#F43F5E" />

        {/* Cute Tiny Nose */}
        <circle cx="60" cy="62" r="1.2" fill="#E08B57" />

        {/* ============================================================ */}
        {/* ICONIC VIETNAMESE ARMY PITH HELMET (MŨ CỐI CHÚ BỘ ĐỘI)       */}
        {/* ============================================================ */}
        {/* Helmet Crown Dome */}
        <path
          d="M 24 45 C 24 16, 96 16, 96 45 C 84 48, 36 48, 24 45 Z"
          fill="url(#helmetGrad)"
          stroke="#1B4214"
          strokeWidth="1.5"
        />

        {/* Helmet Top Center Crease / Highlight Curve */}
        <path
          d="M 60 18 Q 60 36 60 44"
          stroke="#68A55A"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Helmet Brim / Vành Mũ Cối */}
        <ellipse
          cx="60"
          cy="45"
          rx="41"
          ry="9"
          fill="url(#helmetBrim)"
          stroke="#1B4013"
          strokeWidth="1.5"
        />

        {/* Helmet Leather Strap / Dây Mũ */}
        <path
          d="M 23 45 Q 60 52 97 45"
          stroke="#78350F"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="25" cy="45" r="2" fill="#FDE047" stroke="#92400E" strokeWidth="0.8" />
        <circle cx="95" cy="45" r="2" fill="#FDE047" stroke="#92400E" strokeWidth="0.8" />

        {/* Huy Hiệu Quân Đội Đỏ - Ngôi Sao Vàng Năm Cánh (Red Star Badge) */}
        <circle cx="60" cy="32" r="8" fill="#DC2626" stroke="#FDE047" strokeWidth="1.2" />
        <circle cx="60" cy="32" r="6.8" fill="none" stroke="#FBBF24" strokeWidth="0.5" strokeDasharray="1 1" />
        {/* Yellow Star in Badge */}
        <polygon
          points="60,25.5 62,30 66.5,30.3 63,33.5 64.2,38 60,35.5 55.8,38 57,33.5 53.5,30.3 58,30"
          fill="#FDE047"
          stroke="#D97706"
          strokeWidth="0.4"
        />

        {/* Cute Saluting Hand (Bàn Tay Chào Chú Bộ Đội) */}
        {withSalute && (
          <g className="animate-bounce [animation-duration:2.5s]">
            {/* Green sleeve cuff */}
            <rect x="85" y="44" width="10" height="8" rx="3" fill="#2E6323" stroke="#1B4214" strokeWidth="1" transform="rotate(30 85 44)" />
            {/* Cute hand saluting at brim of helmet */}
            <circle cx="98" cy="45" r="7" fill="url(#skinGrad)" stroke="#E08B57" strokeWidth="1" />
            <ellipse cx="94" cy="43" rx="3.5" ry="2" fill="#FED7AA" transform="rotate(-20 94 43)" />
            <ellipse cx="96" cy="41" rx="3.5" ry="2" fill="#FED7AA" transform="rotate(-20 96 41)" />
            <ellipse cx="98" cy="40" rx="3.5" ry="2" fill="#FED7AA" transform="rotate(-20 98 40)" />
          </g>
        )}
      </svg>
    </div>
  );
}
