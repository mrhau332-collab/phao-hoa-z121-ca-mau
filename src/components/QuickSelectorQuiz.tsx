"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function QuickSelectorQuiz() {
  const { setSelectedCategory } = useCart();
  const [occasion, setOccasion] = useState("tet");
  const [space, setSpace] = useState("ngoaitroi");
  const [budget, setBudget] = useState("all");
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleRecommend = () => {
    let result = "";
    if (budget === "500") {
      setSelectedCategory("gian-phun-vien");
      result = "Gợi ý cho bạn: Giàn Phun Viên D16x25 – Lựa chọn số 1 tối ưu cho sân ngoài trời.";
    } else if (budget === "above") {
      setSelectedCategory("hop-qua-tet");
      result = "Gợi ý cho bạn: Bộ Hộp Quà Tết 50 / 75 hoặc Combo Thịnh Vượng VIP – Đỉnh cao ánh sáng cho khuôn viên rộng.";
    } else {
      if (occasion === "cuoi") {
        setSelectedCategory("thac-nuoc-bac");
        result = "Gợi ý cho tiệc cưới: Thác Nước Bạc 2M kết hợp Giàn Phun Viên Nhấp Nháy lung linh lãng mạn.";
      } else if (occasion === "khaixuan") {
        setSelectedCategory("gian-phun-hoa");
        result = "Gợi ý khai xuân: Giàn Phun Hoa 25/36 ống – Tán hoa nở rực rỡ mang lại may mắn hồng phát.";
      } else {
        setSelectedCategory("gian-phun-vien");
        result = "Gợi ý sum vầy: Giàn Phun Viên 36 ống hoặc Combo Tết Sum Vầy đón giao thừa ấm áp.";
      }
    }

    setRecommendation(result);

    // Scroll to products
    const el = document.getElementById("san-pham");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="chon-nhanh" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="rounded-3xl bg-gradient-to-br from-[#0B1E3B]/90 via-[#071329] to-[#4A030C]/40 border border-amber-400/40 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles className="h-4 w-4" />
              <span>BỘ CHỌN SẢN PHẨM 30 GIÂY</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Chọn Loại Pháo Hoa Phù Hợp Nhu Cầu
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Chỉ với 3 lựa chọn đơn giản để hệ thống gợi ý sản phẩm tối ưu mà không cần am hiểu kỹ thuật.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-200/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Tự động tối ưu chi phí</span>
          </div>
        </div>

        {/* 3 Select Cells */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {/* Cell 1 */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
              01 · Dịp Sử Dụng
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full h-12 px-3.5 rounded-xl bg-night-900 border border-amber-500/30 text-xs sm:text-sm text-white font-medium focus:border-amber-400 focus:outline-none"
            >
              <option value="tet">Tết Nguyên Đán & Đêm Giao Thừa</option>
              <option value="cuoi">Tiệc Cưới & Hỷ Sự Lãng Mạn</option>
              <option value="khaixuan">Khai Xuân & Khai Trương Hồng Phát</option>
              <option value="sinhnhat">Sinh Nhật & Tiệc Kỷ Niệm Gia Đình</option>
            </select>
          </div>

          {/* Cell 2 */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
              02 · Không Gian Địa Điểm
            </label>
            <select
              value={space}
              onChange={(e) => setSpace(e.target.value)}
              className="w-full h-12 px-3.5 rounded-xl bg-night-900 border border-amber-500/30 text-xs sm:text-sm text-white font-medium focus:border-amber-400 focus:outline-none"
            >
              <option value="ngoaitroi">Sân Ngoài Trời Gia Đình (&gt; 10m khoảng trống)</option>
              <option value="rong">Khuôn Viên Rộng / Sân Vườn Biệt Thự</option>
              <option value="chua">Khu Đô Thị / Cần Tư Vấn Điểm Bắn An Toàn</option>
            </select>
          </div>

          {/* Cell 3 */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
              03 · Mức Ngân Sách
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full h-12 px-3.5 rounded-xl bg-night-900 border border-amber-500/30 text-xs sm:text-sm text-white font-medium focus:border-amber-400 focus:outline-none"
            >
              <option value="all">Tất Cả Mức Giá (Gợi ý cân bằng)</option>
              <option value="500">Gói Tiết Kiệm: Phù hợp sân nhỏ</option>
              <option value="mid">Gói Phổ Biến: Gia đình đón Tết</option>
              <option value="above">Gói Cao Cấp: Đại tiệc VIP</option>
            </select>
          </div>
        </div>

        {/* Action Button & Result */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            {recommendation ? (
              <span className="text-amber-300 font-semibold">{recommendation}</span>
            ) : (
              <span>Chọn các tiêu chí bên trên và nhấn &quot;Xem Gợi Ý Phù Hợp&quot;.</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleRecommend}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-500 hover:from-red-600 hover:to-amber-400 text-white font-bold px-6 py-3 text-xs sm:text-sm shadow-xl transition-all active:scale-95 shrink-0"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Xem Gợi Ý Phù Hợp Ngay</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
