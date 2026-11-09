"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MapPin, PackageCheck, Award } from "lucide-react";

export function RealStoreGallerySection() {
  const photos = [
    {
      src: "/mediakit/06_dan_san_pham_tet_AI.webp",
      title: "Dàn Sản Phẩm Tết Z121 Trưng Bày",
      subtitle: "Trọn bộ: Hộp 100 • Hộp 75 • Hộp 50 • Phun Viên Cam & Xanh",
      tag: "Trưng Bày Tết Z121",
    },
    {
      src: "/mediakit/03_gian_phun_vien_cam_D16x25_tren_tay.jpg",
      title: "Giàn Phun Viên D16x25 Thực Tế",
      subtitle: "Bao bì cam nguyên niêm phong Z121 trên tay",
      tag: "Ảnh Thật Trên Tay",
    },
    {
      src: "/mediakit/08_thung_carton_lo_hang_thuc_te.jpg",
      title: "Kho Hàng Nguyên Kiện Z121",
      subtitle: "Thùng 24 giàn • Lô xuất xưởng Nhà máy Z121",
      tag: "Kho Sẵn Hàng Lớn",
    },
    {
      src: "/mediakit/10_ke_hang_hop_qua_50_75_100.jpg",
      title: "Kệ Trưng Bày Hộp Quà 50 - 75 - 100",
      subtitle: "Đầy đủ bộ hộp quà Tết vương giả tại điểm bán Cà Mau",
      tag: "Tại Điểm Bán Cà Mau",
    },
  ];

  return (
    <section className="py-28 bg-night-950 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Pháo Hoa Chú Bộ Đội Cà Mau • Nguồn Hàng Thực Tế</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Hình Ảnh Thật Tại <span className="gold-shimmer-text">Cửa Hàng & Kho Z121</span> Cà Mau
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            100% hình ảnh chụp trực tiếp tại Điểm Bán Pháo Hoa Z121 Cà Mau (Địa điểm kinh doanh số 03) và kho hàng nguyên đai nguyên kiện Nhà máy Hóa chất 21 (Z121) — Bộ Quốc Phòng. Chú Bộ Đội cam kết pháo thật, date mới, tem chuẩn.
          </p>
        </div>

        {/* 4 Hardware Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, index) => (
            <div
              key={index}
              className="group p-1.5 rounded-[2rem] bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-400/40 shadow-xl transition-all duration-500 ease-spring flex flex-col justify-between shimmer-hover"
            >
              <div className="rounded-[calc(2rem-0.375rem)] bg-night-900/90 p-4 shadow-inner-glow h-full flex flex-col justify-between space-y-4">
                
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-black">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="rounded-full bg-night-950/85 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-mono font-bold text-gold border border-gold/30">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-bold text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-light">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Verification Strip */}
        <div className="mt-12 rounded-[1.75rem] bg-white/[0.02] border border-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <PackageCheck className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} />
            <span>Hàng sẵn số lượng lớn tại kho • Đầy đủ chứng nhận QCVN 04:2021/BCA của Bộ Công An</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Award className="h-4 w-4" />
            <span>Phân Phối Chính Ngạch Z121</span>
          </div>
        </div>

      </div>
    </section>
  );
}
