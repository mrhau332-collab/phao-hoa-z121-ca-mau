"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { storeInfo } from "@/data/storeInfo";
import {
  Sparkles,
  ShoppingBag,
  Check,
  Flame,
  ArrowRight,
  PhoneCall,
  Gift,
  Heart,
  Star,
} from "lucide-react";

export function TetComboSection() {
  const { addItem, openCart } = useCart();
  const [addedComboId, setAddedComboId] = useState<string | null>(null);

  const combos = [
    {
      id: "combo-sum-vay",
      name: "Combo Tết Sum Vầy",
      tagline: "Ấm cúng đêm giao thừa – Dành cho gia đình 4-6 người",
      badge: "Bà Con Chọn Nhiều Nhất",
      badgeColor: "bg-red-600 text-white",
      borderGlow: "border-amber-400/50 hover:border-amber-400",
      totalPrice: 580000,
      originalPrice: 650000,
      saving: "Tiết kiệm 70.000 đ",
      items: [
        { name: "1x Giàn Phun Viên D16x25", note: "Viên sáng đa sắc quốc dân", productId: "z121-pv25" },
        { name: "1x Giàn Phun Viên Nhấp Nháy D16x25", note: "Bụi chớp lấp lánh huyền ảo", productId: "z121-pvnn25" },
        { name: "TẶNG: 1x Gói Cây Hoa Lửa (10 Que)", note: "Cho các cháu chụp ảnh đón Tết", productId: "z121-chl" },
      ],
      description: "Phù hợp sân nhà vừa phải, hai giàn pháo thay nhau phát hỏa tạo không khí rộn rã lúc đón năm mới, các cháu nhỏ có que hoa lửa lách tách check-in ấm áp.",
      highlight: "Tặng kèm que pháo bông que",
    },
    {
      id: "combo-dai-cat",
      name: "Combo Đón Xuân Đại Cát",
      tagline: "Mãn nhãn đa tầng – Đỉnh cao ánh sáng đêm 30 Tết",
      badge: "Combo Rực Rỡ Nhất",
      badgeColor: "bg-gradient-to-r from-amber-500 to-red-600 text-white",
      borderGlow: "border-amber-400 shadow-xl shadow-red-950/40",
      totalPrice: 990000,
      originalPrice: 1100000,
      saving: "Tiết kiệm 110.000 đ",
      featured: true,
      items: [
        { name: "1x Giàn Phun Viên D16x36 (36 Ống)", note: "Màn bắn dày đặc 60 giây", productId: "z121-pv36" },
        { name: "1x Giàn Phun Hoa D16x25 (25 Ống)", note: "Bung đóa hoa mẫu đơn rực sáng", productId: "z121-ph25" },
        { name: "1x Thác Nước Bạc 2M Sân Khấu", note: "Dải lụa bạc lung linh rủ xuống", productId: "z121-tnb2m" },
      ],
      description: "Kết hợp hoàn mỹ giữa giàn bắn cao vút tầng không và bức tường thác nước bạc tuôn trào lộng lẫy. Tạo điểm nhấn khó quên cho toàn bộ xóm giềng cùng chiêm ngưỡng.",
      highlight: "Có cả Giàn Phun Hoa & Thác Bạc",
    },
    {
      id: "combo-thinh-vuong",
      name: "Combo Khai Xuân Thịnh Vượng VIP",
      tagline: "Đại cát đại lợi – Quà biếu thượng hạng cho đối tác & gia tộc",
      badge: "Đẳng Cấp Thượng Hạng",
      badgeColor: "bg-amber-400 text-night-950 font-black",
      borderGlow: "border-amber-300/60 hover:border-amber-300",
      totalPrice: 1680000,
      originalPrice: 1900000,
      saving: "Tiết kiệm 220.000 đ",
      items: [
        { name: "1x Bộ Hộp Quà Tết 75 VIP Z121", note: "Quai xách vàng đại cát biếu Tết", productId: "z121-hq75" },
        { name: "1x Giàn Phun Hoa D16x36 (36 Ống)", note: "Biển hoa ánh sáng quy mô lớn", productId: "z121-ph36" },
        { name: "1x Giàn Phun Viên D16x36 (36 Ống)", note: "36 ống dồn dập rực sáng", productId: "z121-pv36" },
      ],
      description: "Lựa chọn hàng đầu để làm quà biếu trang trọng gửi tặng người thân, thông gia, đối tác kinh doanh hoặc gia đình có khuôn viên biệt thự rộng đón Tết hoành tráng.",
      highlight: "Hộp Quà 75 VIP + 2 Giàn 36 Ống Lớn",
    },
  ];

  const handleSelectCombo = (combo: typeof combos[0]) => {
    // Add all products in the combo to cart
    combo.items.forEach((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (product) {
        addItem(product, 1);
      }
    });

    setAddedComboId(combo.id);
    setTimeout(() => {
      setAddedComboId(null);
      openCart();
    }, 800);
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-night-950 via-[#160608] to-night-950 border-t border-amber-500/20 relative overflow-hidden">
      {/* Tết Festive Background Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Decorative Golden Blossom Glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Authentic Tết Atmosphere */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-12">
          {/* Tết Red Ribbon Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-red-900/80 border border-amber-400/60 px-4 py-1.5 shadow-md">
            <span className="text-amber-300">🌸</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-200">
              Xuân Ất Tỵ 2026 — Đón Tết Rực Rỡ Đoàn Viên
            </span>
            <span className="text-amber-300">🌸</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Gợi Ý <span className="gold-shimmer-text">Combo Pháo Tết</span> Trọn Gói
          </h2>
          
          <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            Chú Bộ Đội đã chọn sẵn các tổ hợp pháo hoa đẹp nhất, vừa túi tiền để bà con Cà Mau đón giao thừa trọn vẹn mà không mất công đắn đo chọn từng loại.
          </p>

          {/* Quick Hotline Reassurance */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/10">
            <PhoneCall className="h-3.5 w-3.5 text-amber-400" />
            <span>Tư vấn chọn combo nhanh: <strong className="text-white">Chú Bộ Đội — 0917.335.233</strong></span>
          </div>
        </div>

        {/* 3 Festive Combo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {combos.map((combo) => {
            const isAdded = addedComboId === combo.id;
            return (
              <div
                key={combo.id}
                className={`relative rounded-3xl bg-gradient-to-b from-[#24080B] to-[#120406] p-1.5 border transition-all duration-300 flex flex-col justify-between shimmer-hover ${
                  combo.borderGlow
                } ${combo.featured ? "ring-2 ring-amber-400/50 lg:-translate-y-2 featured-glow" : "hover:-translate-y-1"}`}
              >
                {/* Top Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${combo.badgeColor}`}
                  >
                    ★ {combo.badge}
                  </span>
                </div>

                {/* Inner Card Container */}
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-gradient-to-b from-night-900/95 to-night-950/95 p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Card Header */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-2xl font-black text-white">
                        {combo.name}
                      </h3>
                      <span className="text-xl">🎆</span>
                    </div>

                    <p className="text-xs sm:text-sm text-amber-200/90 leading-snug font-medium">
                      {combo.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="pt-2 pb-3 border-y border-white/10">
                      <div className="flex items-baseline gap-3">
                        <span className="font-sans text-3xl sm:text-4xl font-black text-amber-400 tabular-nums tracking-tight">
                          xxxxxx đ
                        </span>
                      </div>
                      <div className="inline-block mt-1.5 rounded-md bg-red-950/80 border border-red-700/50 px-2.5 py-0.5 text-[11px] font-bold text-red-300">
                        {combo.saving}
                      </div>
                    </div>
                  </div>

                  {/* List of Included Items */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Gift className="h-3.5 w-3.5 text-amber-400" />
                      <span>Các sản phẩm trong combo:</span>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {combo.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 rounded-xl bg-white/[0.03] p-2.5 border border-white/5"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mt-0.5">
                            ✓
                          </span>
                          <div>
                            <strong className="text-white block font-semibold">{item.name}</strong>
                            <span className="text-xs text-slate-300 font-light">{item.note}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-slate-300 leading-relaxed font-light italic pt-1">
                      "{combo.description}"
                    </p>
                  </div>

                  {/* 1-Click Select Combo Button with Button-in-Button Architecture */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleSelectCombo(combo)}
                      className={`group w-full flex items-center justify-between rounded-full py-2 pl-5 pr-2 text-sm font-bold transition-all shadow-lg duration-300 active:scale-[0.98] ${
                        isAdded
                          ? "bg-emerald-500 text-white shadow-emerald-900/40"
                          : combo.featured
                          ? "bg-gradient-to-r from-red-600 via-amber-500 to-amber-400 hover:from-red-500 hover:to-amber-300 text-night-950 font-black shadow-amber-950/50"
                          : "bg-amber-400 hover:bg-amber-300 text-night-950"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <span>Đã Thêm Cả Combo Vào Giỏ!</span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                            <Check className="h-4 w-4" />
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4" />
                            <span>Chọn Cả Combo Này</span>
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-night-950/20 text-night-950 group-hover:translate-x-0.5 transition-transform">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </>
                      )}
                    </button>

                    <a
                      href={`tel:${storeInfo.hotline}`}
                      className="block text-center text-xs text-amber-300/80 hover:text-amber-200 py-1 transition-colors"
                    >
                      Gọi Chú Bộ Đội để giữ combo: <strong className="font-mono text-white">{storeInfo.hotlineDisplay}</strong>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Traditional Tết Wish Banner */}
        <div className="mt-14 rounded-2xl lacquer-sheen border border-amber-400/50 p-5 sm:p-6 text-center shadow-2xl relative overflow-hidden corporate-gold-border">
          <div className="relative z-10">
            <p className="font-serif text-base sm:text-xl font-bold text-amber-200 tracking-wide drop-shadow-md">
              🧧 VẠN SỰ NHƯ Ý — ĐÓN TẾT AN KHANG — PHÁO HOA CHÍNH HÃNG BỘ QUỐC PHÒNG 🧧
            </p>
            <p className="text-xs sm:text-sm text-slate-100 mt-1 font-medium">
              Giao hàng đúng hẹn cho bà con trước đêm 30 Tết. Cam kết hàng thật 100%, có tem QR xác thực nguồn gốc.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
