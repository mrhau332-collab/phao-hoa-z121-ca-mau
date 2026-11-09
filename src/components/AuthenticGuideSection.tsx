import React from "react";
import { QrCode, ShieldCheck, AlertCircle, FileSearch, ShieldAlert } from "lucide-react";

export function AuthenticGuideSection() {
  return (
    <section className="py-28 bg-night-950 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 Cols): The 3 Pillars of Authenticity */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-gold">
                <ShieldCheck className="h-3 w-3" strokeWidth={1.5} />
                <span>Tiêu Chuẩn Nhận Diện</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Nhận Biết <span className="gold-shimmer-text">Pháo Hoa Z121</span> Chính Hãng
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
                Cảnh giác trước các đối tượng rao bán pháo nổ lậu giả mạo nhãn mác Z121 trên không gian mạng. 3 dấu hiệu sau đây giúp bạn thẩm tra tính nguyên bản của sản phẩm:
              </p>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all duration-300">
                <div className="rounded-[calc(1.75rem-0.375rem)] bg-night-900/90 p-5 shadow-inner-glow flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 mt-0.5">
                    <QrCode className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-white">1. Quét Mã QR Truy Xuất Nguồn Gốc</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Mỗi hộp giàn pháo đều có mã QR Code độc bản. Khi quét bằng camera điện thoại hoặc Zalo, hệ thống trả về thông tin lô sản xuất, ngày đóng gói và đơn vị sản xuất Nhà máy Hóa chất 21.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all duration-300">
                <div className="rounded-[calc(1.75rem-0.375rem)] bg-night-900/90 p-5 shadow-inner-glow flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mt-0.5">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-white">2. Tem Niêm Phong Nhà Máy Hóa Chất 21</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Hộp nguyên vẹn tem dán niêm phong, không có vết rạch hoặc bóc dán lại. Tên đơn vị in rõ: <em className="text-amber-200">Công ty TNHH MTV Hóa chất 21 – Tổng cục Công nghiệp Quốc phòng</em>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all duration-300">
                <div className="rounded-[calc(1.75rem-0.375rem)] bg-night-900/90 p-5 shadow-inner-glow flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 mt-0.5">
                    <FileSearch className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-white">3. Hướng Dẫn Sử Dụng & Giấy Tờ Hợp Lệ</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Bao bì in tiếng Việt sắc nét, đầy đủ thông số kỹ thuật, hạn sử dụng 24 tháng và hóa đơn hợp lệ từ điểm bán được cấp phép.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Legal Warning Card */}
          <div className="lg:col-span-5">
            <div className="p-2 rounded-[2.5rem] bg-white/[0.03] border border-vermilion/30 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-night-900/95 p-6 sm:p-8 shadow-inner-glow space-y-6">
                
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-vermilion/15 text-vermilion border border-vermilion/30">
                    <ShieldAlert className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-white">Cảnh Báo Pháp Lý</h3>
                    <p className="text-[11px] font-mono text-slate-400">Điều 318 Bộ luật Hình sự</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-light">
                  <div className="rounded-2xl bg-vermilion/10 p-4 border border-vermilion/30 space-y-1">
                    <span className="font-bold text-vermilion block">Nghiêm cấm pháo hoa nổ:</span>
                    <p className="text-slate-200">
                      Cá nhân tự ý mua bán, tàng trữ các loại pháo nổ đanh chát (pháo dàn nổ, pháo cối nhập lậu) là hành vi vi phạm pháp luật nghiêm trọng, có thể bị phạt tù.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gold/10 p-4 border border-gold/30 space-y-1">
                    <span className="font-bold text-gold block">Không mua bán chợ đen:</span>
                    <p className="text-slate-200">
                      Tuyệt đối không giao dịch với các cá nhân rao bán pháo hoa Z121 trôi nổi trên mạng xã hội không có địa chỉ điểm bán và điều kiện PCCC.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/5 space-y-1">
                    <span className="font-bold text-white block">Cam kết an toàn tuyệt đối:</span>
                    <p className="text-slate-400">
                      100% sản phẩm do chúng tôi hỗ trợ tiếp nhận tư vấn đều là pháo hoa không tiếng nổ xuất xưởng từ Nhà máy Z121.
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
