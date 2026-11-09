import React from "react";
import Link from "next/link";
import { storeInfo } from "@/data/storeInfo";
import {
  Sparkles,
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  FileText,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-night-950 border-t border-amber-500/30 text-slate-400 text-xs font-light relative">
      {/* Luxury Gold & Red Festive Divider Line at Top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 via-50% to-transparent" />

      {/* Top Banner: 3 Trust Anchors */}
      <div className="border-b border-white/5 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-950/20 via-night-900/40 to-night-950">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-1 rounded-2xl bg-white/[0.02] border border-white/5 shimmer-hover">
            <div className="rounded-xl bg-night-900/80 p-5 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-white text-sm">Chính Hãng Z121 BQP</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Tem QR quét kiểm tra xuất xưởng từ Nhà máy Hóa chất 21</p>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-2xl bg-white/[0.02] border border-white/5 shimmer-hover">
            <div className="rounded-xl bg-night-900/80 p-5 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <FileText className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-white text-sm">Nghị Định 137/2020/NĐ-CP</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Pháo hoa không tiếng nổ, công dân đủ 18 tuổi sử dụng hợp pháp</p>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-2xl bg-white/[0.02] border border-white/5 shimmer-hover">
            <div className="rounded-xl bg-night-900/80 p-5 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-400 border border-red-500/30">
                <PhoneCall className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-white text-sm">Chú Bộ Đội Tư Vấn 24/7</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">Hotline/Zalo: 0917.335.233 — Hướng dẫn sử dụng và giao nhận</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-sans text-xl font-black text-white tracking-tight uppercase">
                {storeInfo.storeName}
              </span>
              <div className="text-xs text-amber-400 font-bold mt-0.5">
                Điểm Bán Pháo Hoa Z121 Cà Mau • Nhà máy Hóa chất 21 (Bộ Quốc Phòng)
              </div>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              {storeInfo.brandTagline}
            </p>

            <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/10 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">{storeInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-slate-200">{storeInfo.workingHours}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1 border-t border-white/5">
                <a
                  href={`tel:${storeInfo.hotline}`}
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-amber-400 transition-colors"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span>Chú Bộ Đội: {storeInfo.hotlineDisplay}</span>
                </a>
                <a
                  href={storeInfo.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat Zalo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Danh Mục Sản Phẩm Z121
            </h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <Link href="/san-pham" className="hover:text-amber-400 transition-colors">
                  Giàn Phun Viên D16x25 (Quốc Dân)
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-amber-400 transition-colors">
                  Giàn Phun Viên Nhấp Nháy D16x25
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-amber-400 transition-colors">
                  Giàn Phun Hoa D16 (25 & 36 Ống)
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-amber-400 transition-colors">
                  Bộ Hộp Quà Tết 50 & 75 Z121
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-amber-400 transition-colors">
                  Thác Nước Bạc Sân Khấu 2M
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="hover:text-amber-400 transition-colors">
                  Cây Hoa Lửa Cầm Tay (Pháo Bông Que)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Safety (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Lưu Ý An Toàn PCCC Bắt Buộc
            </h4>
            <div className="rounded-xl bg-red-950/40 border border-red-500/30 p-4 space-y-2 text-xs text-slate-300 leading-relaxed">
              <p>
                ⚠️ <strong>Quy tắc chèn gạch:</strong> Luôn chèn chặt 4 phía chân giàn pháo bằng gạch đặc trên mặt phẳng cứng trước khi châm ngòi để chống đổ lật.
              </p>
              <p>
                ⚠️ <strong>Khoảng cách an toàn 10m:</strong> Đứng cách xa tối thiểu 10 mét sau khi kích hoạt. Tuyệt đối không cúi đầu nhìn vào miệng ống phóng.
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 rounded-xl bg-white/[0.02] border border-white/5 p-4 text-[11px] leading-relaxed text-slate-400">
          <p className="font-bold text-amber-400 uppercase tracking-wider mb-1 font-mono">
            TUYÊN BỐ PHÁP LÝ & MIỄN TRỪ TRÁCH NHIỆM:
          </p>
          <p>
            {storeInfo.legalDisclaimer}
          </p>
          <p className="mt-1 text-slate-400">
            Sản phẩm do Công ty TNHH MTV Hóa chất 21 (Tổng cục Công nghiệp Quốc phòng) sản xuất. Website là cổng thông tin tiêu dùng và hỗ trợ tiếp nhận nhu cầu đặt hàng chính ngạch cho bà con Cà Mau.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} {storeInfo.storeName} — Phụ trách: Chú Bộ Đội ({storeInfo.hotlineDisplay}).
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/trinh-dien" className="hover:text-amber-400 transition-colors text-amber-300 font-medium">
              Xem video hiệu ứng bắn
            </Link>
            <span>•</span>
            <Link href="/an-toan-phap-ly" className="hover:text-amber-400 transition-colors">
              Chính sách an toàn & PCCC
            </Link>
            <span>•</span>
            <Link href="/gioi-thieu-lien-he" className="hover:text-amber-400 transition-colors">
              Thông tin điểm bán Cà Mau
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
