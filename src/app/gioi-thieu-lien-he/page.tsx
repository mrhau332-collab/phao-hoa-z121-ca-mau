import React from "react";
import Link from "next/link";
import Image from "next/image";
import { storeInfo } from "@/data/storeInfo";
import {
  Sparkles,
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Mail,
  MessageCircle,
  FileBadge,
  CheckCircle2,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Giới Thiệu — Pháo Hoa Chú Bộ Đội Cà Mau • Điểm Bán Pháo Hoa Z121 Cà Mau",
  description:
    "Pháo hoa chú Bộ đội Cà Mau — Điểm Bán Pháo Hoa Z121 Cà Mau chính ngạch Nhà máy Hóa chất 21 (Bộ Quốc Phòng). Chú Bộ Đội trực tiếp phụ trách, hotline: 0917.335.233.",
};

export default function AboutContactPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Điểm Bán Pháo Hoa Z121 Cà Mau • Bộ Quốc Phòng</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          <span className="gold-shimmer-text">PHÁO HOA CHÚ BỘ ĐỘI CÀ MAU</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
          Địa chỉ tin cậy của bà con tỉnh Cà Mau và các tỉnh Tây Nam Bộ khi chọn mua pháo hoa dân dụng không tiếng nổ hợp pháp của Nhà máy Hóa chất 21 (Z121) — Bộ Quốc Phòng.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Store Story & Commitments */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl bg-night-900 border border-amber-500/30 p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="font-serif text-xl font-bold text-white">
              Cam Kết Của Chú Bộ Đội
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Mỗi dịp Tết đến xuân về, nhu cầu mua pháo hoa sum vầy tăng cao, dễ gặp phải hàng giả, hàng nhái hoặc giá bị đẩy lên quá mức. Chúng tôi duy trì điểm bán chính thống tại Cà Mau để bà con luôn yên tâm:
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3 rounded-xl bg-night-950 p-3.5 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">100% Pháo hoa chính hãng Nhà máy Z121</strong>
                  <span className="text-slate-400">
                    Sản phẩm nguyên đai, nguyên kiện, nguyên tem bảo vệ và tem mã QR chống giả của Nhà máy Hóa chất 21.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-night-950 p-3.5 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Bán đúng giá xuất xưởng niêm yết</strong>
                  <span className="text-slate-400">
                    Bảo đảm giá bình ổn, không độn giá cận Tết, kèm hóa đơn xuất kho rõ ràng.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-night-950 p-3.5 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Hướng dẫn an toàn PCCC tận tình</strong>
                  <span className="text-slate-400">
                    Chú Bộ Đội trực tiếp hướng dẫn kỹ thuật chèn gạch cố định chân giàn, khoảng cách an toàn tối thiểu 10m.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Store Photo */}
          <div className="rounded-2xl bg-night-900/80 border border-white/10 p-4 space-y-3">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Ảnh Chụp Thực Tế Tại Điểm Bán Cà Mau
            </div>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/products/gian-phun-vien-d16x25-hand.jpg"
                alt="Cửa hàng giới thiệu sản phẩm pháo hoa Z121 tại Cà Mau"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[11px] text-slate-400 italic">
              Băng rôn cửa hàng: "CỬA HÀNG GIỚI THIỆU VÀ BÁN SẢN PHẨM - ĐỊA ĐIỂM KINH DOANH SỐ 03 - CÀ MAU"
            </p>
          </div>
        </div>

        {/* Right Col: Contact Cards & Direct Hotline */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-night-900 border border-amber-500/30 p-6 space-y-5 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Thông Tin Liên Hệ</span>
              <span className="text-xs text-amber-400 font-mono">03 - Cà Mau</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Địa chỉ điểm bán:</span>
                  <strong className="text-white text-sm">{storeInfo.address}</strong>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Giờ mở cửa:</span>
                  <strong className="text-white">{storeInfo.workingHours}</strong>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Người phụ trách & Hotline:</span>
                  <div className="text-amber-400 font-bold text-base font-mono">
                    Chú Bộ Đội: {storeInfo.hotlineDisplay}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Kênh Zalo tư vấn:</span>
                  <span className="text-white font-mono font-bold">{storeInfo.zaloPhone}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <a
                href={`tel:${storeInfo.hotline}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/50 hover:from-red-600 hover:to-amber-500 transition-all"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Gọi Chú Bộ Đội ({storeInfo.hotlineDisplay})</span>
              </a>

              <a
                href={storeInfo.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0068FF] hover:bg-[#0054cc] py-3 text-sm font-bold text-white transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Nhắn Tin Zalo Trực Tiếp</span>
              </a>
            </div>
          </div>

          {/* Area map & Delivery Scope */}
          <div className="rounded-2xl bg-night-950 border border-white/10 p-5 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <MapPin className="h-4 w-4" />
              <span>Phạm Vi Phục Vụ Tại Cà Mau</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {storeInfo.serviceArea}. Hỗ trợ tư vấn phương thức giao nhận an toàn, chuẩn quy định phòng chống cháy nổ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
