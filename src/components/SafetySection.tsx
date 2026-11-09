import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export function SafetySection() {
  return (
    <section className="py-28 bg-night-950 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Double-Bezel Outer Shell with Corporate Gold Border */}
        <div className="p-2 sm:p-3 rounded-[2.5rem] bg-white/[0.03] corporate-gold-border shadow-2xl">
          {/* Inner Core */}
          <div className="rounded-[calc(2.5rem-0.625rem)] bg-night-900/95 p-8 sm:p-12 shadow-inner-glow relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Col (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-vermilion/15 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-vermilion border border-vermilion/30">
                  <ShieldAlert className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>Quy Tắc Sống Còn</span>
                </div>

                <h2 className="font-sans text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  <span className="gold-shimmer-text">Chèn Gạch Cố Định Chân Giàn:</span> Thao Tác Bắt Buộc
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Khi giàn pháo phóng viên sáng lên độ cao 25-35m, lực phản chấn cơ học từ ống phóng có thể làm giàn bị nghiêng hoặc lật đổ nếu đặt trên nền không bằng phẳng hoặc không chèn giữ.
                </p>

                <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>
                      <strong className="text-white font-bold">BẮT BUỘC CHÈN GẠCH:</strong> Dùng gạch đặc hoặc vật nặng chèn chặt 4 phía xung quanh chân giàn pháo; đặt trên mặt xi măng phẳng cứng hoặc nền sân rộng.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>
                      <strong className="text-white font-bold">KHOẢNG CÁCH 10M:</strong> Đứng cách xa tối thiểu 10 mét sau khi ngòi bắt cháy. Kiểm tra khoảng không phía trên không vướng dây điện hoặc tán cây.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-200">
                    <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>
                      <strong className="text-white font-bold">TUYỆT ĐỐI KHÔNG:</strong> Không cầm tay giàn pháo khi đốt. Không cúi mặt ngó vào miệng ống phóng trong bất kỳ tình huống nào.
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/an-toan-phap-ly"
                    className="group inline-flex items-center gap-3 rounded-full bg-white/[0.04] hover:bg-gold hover:text-night-950 px-6 py-3 text-xs font-bold text-slate-200 border border-white/10 hover:border-gold transition-all duration-300"
                  >
                    <span>Xem cẩm nang an toàn PCCC chi tiết</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Col (5 Cols): Technical Recovery Box */}
              <div className="lg:col-span-5 rounded-[1.75rem] bg-night-950/80 p-6 border border-white/10 space-y-5 text-xs font-light">
                <h3 className="font-sans text-base font-bold text-white border-b border-white/10 pb-3">
                  Xử Lý Sự Cố Kỹ Thuật (Pháo Xịt)
                </h3>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-gold font-mono uppercase tracking-wider block mb-1">
                      1. Khi pháo không phóng hoặc ngắt quãng:
                    </strong>
                    <p className="text-slate-400">
                      TUYỆT ĐỐI KHÔNG TIẾN LẠI GẦN TRONG VÒNG 15 PHÚT. Giữ khoảng cách và quan sát từ xa để đề phòng ngòi âm ỉ cháy chậm.
                    </p>
                  </div>

                  <div>
                    <strong className="text-gold font-mono uppercase tracking-wider block mb-1">
                      2. Tiêu hủy an toàn bằng nước:
                    </strong>
                    <p className="text-slate-400">
                      Sau 15 phút, dùng xô nước đổ ngập toàn bộ giàn pháo và ngâm trong 1 giờ để làm mất hoàn toàn hoạt tính hóa chất trước khi đem bỏ rác thải an toàn.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
