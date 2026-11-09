import React from "react";
import { Search, Send, FileCheck, PackageCheck } from "lucide-react";

export function HowToBuySection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Khám Phá & Chọn Giàn Pháo",
      description:
        "Quan sát video hiệu ứng thực tế, so sánh tầm cao 25-35m và thời lượng cháy 45-60s phù hợp với không gian sân vườn hoặc sảnh tiệc của bạn.",
    },
    {
      step: "02",
      icon: Send,
      title: "Gửi Yêu Cầu Đặt Hàng",
      description:
        "Thêm các sản phẩm vào giỏ và điền thông tin liên hệ. Cam kết từ đủ 18 tuổi và có đầy đủ năng lực hành vi dân sự theo quy định Nghị định 137.",
    },
    {
      step: "03",
      icon: FileCheck,
      title: "Chú Bộ Đội Xác Nhận Đơn Hàng",
      description:
        "Chú Bộ Đội (Hotline/Zalo: 0917.335.233) sẽ trực tiếp gọi điện hoặc nhắn Zalo kiểm tra số lượng, xác minh độ tuổi 18+ và hẹn thời gian giao nhận an toàn.",
    },
    {
      step: "04",
      icon: PackageCheck,
      title: "Nhận Hàng & Quét Mã QR",
      description:
        "Nhận sản phẩm nguyên vẹn tem bảo đảm Nhà máy Z121, quét mã QR truy xuất xuất xưởng trước khi kích hoạt theo quy tắc chèn gạch cố định.",
    },
  ];

  return (
    <section className="py-28 bg-night-950 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-950/60 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <span>Quy Trình Mua Hàng Hợp Pháp</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight">
            4 Bước Đặt Mua <span className="gold-shimmer-text">Pháo Hoa Z121</span> Tại Cà Mau
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Quy trình mua bán pháo hoa không tiếng nổ rõ ràng, đúng quy định Nghị định 137 của Chính phủ, đảm bảo bà con nhận đúng hàng thật Bộ Quốc Phòng.
          </p>
        </div>

        {/* Double-Bezel Step Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group p-1.5 rounded-[2rem] bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-gold/40 transition-all duration-500 ease-spring"
              >
                <div className="rounded-[calc(2rem-0.375rem)] bg-night-900/90 p-6 shadow-inner-glow h-full flex flex-col justify-between space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-gold border border-white/10 group-hover:scale-110 group-hover:border-gold/40 transition-all duration-300">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-400">
                      {item.step}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-gold">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    <span>Tuân thủ Nghị định 137</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
