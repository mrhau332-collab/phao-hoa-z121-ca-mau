import React from "react";
import Link from "next/link";
import { legalItems } from "@/data/legalFaq";
import {
  BookOpenCheck,
  ShieldAlert,
  QrCode,
  FileText,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "An Toàn & Pháp Lý — Hướng Dẫn Sử Dụng Pháo Hoa Z121",
  description:
    "Cẩm nang pháp lý Nghị định 137/2020/NĐ-CP, quy chuẩn phân biệt pháo hoa không tiếng nổ, cách quét mã QR kiểm tra tem chống hàng giả Z121 và quy tắc an toàn PCCC bắt buộc.",
};

export default function SafetyLegalPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
          <BookOpenCheck className="h-3.5 w-3.5" />
          <span>Tuân Thủ Pháp Luật & Bảo Vệ An Toàn</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Cẩm Nang Pháp Lý &amp; <span className="gold-shimmer-text">An Toàn Pháo Hoa Z121</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-slate-300">
          Mọi thông tin tại trang này đều được trích dẫn và đối chiếu trực tiếp từ các văn bản quy phạm pháp luật hiện hành của Nhà nước và hướng dẫn chính thức từ Nhà máy Hóa chất 21.
        </p>
      </div>

      {/* 1. Phân Biệt Pháo Hoa Hợp Pháp & Pháo Bị Cấm */}
      <section className="rounded-3xl bg-night-900 border border-gold/30 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <FileText className="h-6 w-6 text-gold" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            1. Căn Cứ Nghị Định 137/2020/NĐ-CP Về Quản Lý & Sử Dụng Pháo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
          {/* Legal Fireworks */}
          <div className="rounded-2xl bg-emerald-950/40 border border-emerald-500/30 p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>PHÁO HOA HỢP PHÁP (DÂN SỰ ĐƯỢC PHÉP DÙNG)</span>
            </div>
            <p className="text-slate-200">
              Là sản phẩm tạo ra hiệu ứng âm thanh rít nhẹ, ánh sáng lộng lẫy và màu sắc trong không gian, <strong>TUYỆT ĐỐI KHÔNG GÂY RA TIẾNG NỔ</strong>.
            </p>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
              <li>Do Nhà máy Z121 thuộc Bộ Quốc Phòng độc quyền sản xuất.</li>
              <li>Công dân từ đủ 18 tuổi có năng lực hành vi dân sự đầy đủ được phép sử dụng.</li>
              <li>Được phép sử dụng trong: Tết, sinh nhật, cưới hỏi, hội nghị, khai trương, lễ kỷ niệm...</li>
            </ul>
          </div>

          {/* Illegal Fireworks */}
          <div className="rounded-2xl bg-vermilion/10 border border-vermilion/40 p-5 space-y-3">
            <div className="flex items-center gap-2 text-vermilion font-bold text-sm">
              <XCircle className="h-5 w-5" />
              <span>PHÁO HOA NỔ & PHÁO NỔ (NGHIÊM CẤM TỰ Ý DÙNG)</span>
            </div>
            <p className="text-slate-200">
              Các loại pháo gây ra tiếng nổ đanh chát (pháo nổ, pháo dàn nổ tầm thấp/cao, pháo cối lậu từ biên giới).
            </p>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
              <li>Cá nhân, tổ chức không có thẩm quyền TUYỆT ĐỐI BỊ CẤM mua bán, tàng trữ, vận chuyển, sử dụng.</li>
              <li>Hành vi vi phạm sẽ bị xử phạt vi phạm hành chính nặng hoặc truy cứu trách nhiệm hình sự theo Điều 318 Bộ luật Hình sự.</li>
            </ul>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 italic">
          * Tham khảo văn bản gốc tại: Cơ sở dữ liệu Quốc gia về Văn bản Pháp luật (vbpl.vn)
        </div>
      </section>

      {/* 2. Hướng Dẫn Quét Mã QR & Tem Chống Hàng Giả */}
      <section className="rounded-3xl bg-night-900 border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <QrCode className="h-6 w-6 text-blue-400" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            2. Quy Trình 3 Bước Quét Tem QR Chống Hàng Giả
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="rounded-xl bg-night-950 p-4 border border-white/5 space-y-2">
            <div className="font-bold text-gold text-sm">Bước 1: Kiểm Tra Tem Niêm Phong</div>
            <p className="leading-relaxed">
              Mỗi hộp giàn pháo Z121 đều có tem bảo hành và tem niêm phong còn nguyên vẹn. Không nhận hộp có dấu hiệu cạy rách hoặc dán đè tem khác.
            </p>
          </div>

          <div className="rounded-xl bg-night-950 p-4 border border-white/5 space-y-2">
            <div className="font-bold text-gold text-sm">Bước 2: Quét Mã QR Bằng Điện Thoại</div>
            <p className="leading-relaxed">
              Mở camera iPhone hoặc ứng dụng Zalo trên bất kỳ dòng điện thoại nào, hướng ống kính vào mã QR in trên thân sản phẩm.
            </p>
          </div>

          <div className="rounded-xl bg-night-950 p-4 border border-white/5 space-y-2">
            <div className="font-bold text-gold text-sm">Bước 3: Đối Soát Thông Tin Xuất Xưởng</div>
            <p className="leading-relaxed">
              Hệ thống trả về thông tin: Tên sản phẩm, Lô sản xuất, Ngày đóng gói, Đơn vị sản xuất (Nhà máy Hóa chất 21). Nếu thông tin khớp 100% là hàng chuẩn.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Quy Tắc An Toàn Sống Còn & Chèn Gạch */}
      <section className="rounded-3xl bg-night-900 border border-vermilion/40 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <ShieldAlert className="h-6 w-6 text-vermilion" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            3. Hướng Dẫn An Toàn PCCC Khi Bắn Pháo Hoa Dân Dụng
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-200 leading-relaxed">
          <div className="rounded-xl bg-night-950 p-4 border border-white/10 space-y-2">
            <h3 className="font-bold text-gold text-sm">A. Thao Tác Cố Định Chân Giàn (Quan Trọng Nhất)</h3>
            <p>
              Khi bắn, lực phản chấn đẩy viên pháo lên cao 25-30m rất lớn. Do đó, <strong>bắt buộc phải chèn chặt 4 góc xung quanh chân giàn bằng gạch đặc, đá tảng hoặc bao cát</strong>. Đặt giàn trên bề mặt phẳng, chắc chắn (sân gạch, đường bê tông, bãi đất bằng phẳng).
            </p>
          </div>

          <div className="rounded-xl bg-night-950 p-4 border border-white/10 space-y-2">
            <h3 className="font-bold text-gold text-sm">B. Khoảng Cách An Toàn & Không Gian Bắn</h3>
            <p>
              - Kiểm tra khoảng không gian phía trên: Tuyệt đối không bắn dưới mái hiên, ban công thấp, tán cây rậm rạp hoặc gần đường dây tải điện.<br />
              - Khoảng cách quan sát: Người xem phải đứng cách xa tối thiểu <strong>10 mét</strong> đối với giàn phun viên, giàn phun hoa.<br />
              - Châm ngòi: Dùng que hương (nhang) hoặc mồi lửa dài, đứng nghiêng người, không chồm mặt qua miệng giàn pháo.
            </p>
          </div>

          <div className="rounded-xl bg-night-950 p-4 border border-white/10 space-y-2">
            <h3 className="font-bold text-gold text-sm">C. Quy Trình Xử Lý Sự Cố Kỹ Thuật (Pháo Xịt)</h3>
            <p>
              Nếu châm ngòi nhưng pháo không cháy hoặc đang bắn bị ngắt quãng:<br />
              - <strong>TUYỆT ĐỐI KHÔNG TIẾN LẠI GẦN TRONG VÒNG 15 PHÚT.</strong><br />
              - Sau 15 phút, dùng xô nước đổ ngập toàn bộ giàn pháo để ngâm nước tối thiểu 1 giờ, làm vô hiệu hóa hoàn toàn hóa chất trước khi đem tiêu hủy an toàn.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Các Câu Hỏi Thường Gặp (FAQ) */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Câu Hỏi Thường Gặp Về Pháp Lý Pháo Hoa
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Giải đáp các thắc mắc phổ biến của người tiêu dùng
          </p>
        </div>

        <div className="space-y-3">
          {legalItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-night-900 border border-white/10 p-5 space-y-2 text-xs"
            >
              <h3 className="font-serif text-sm font-bold text-gold">
                Q: {item.question}
              </h3>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Box */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950/60 to-night-900 border border-amber-500/40 p-6 text-center space-y-3">
        <h3 className="font-serif text-lg font-bold text-white">
          Cần Tư Vấn Pháp Lý & An Toàn PCCC Trực Tiếp?
        </h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
          Bà con tại Cà Mau có thắc mắc về Nghị định 137, cách bảo quản hoặc quy chuẩn chèn gạch cố định khi bắn pháo? Liên hệ trực tiếp Chú Bộ Đội để được hướng dẫn chi tiết.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="tel:0917335233"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-2.5 text-xs font-bold text-night-950 transition-all font-mono"
          >
            <span>Gọi Chú Bộ Đội: 0917.335.233</span>
          </a>
          <a
            href="https://zalo.me/0917335233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0068FF] hover:bg-[#0054cc] px-5 py-2.5 text-xs font-bold text-white transition-all"
          >
            <span>Nhắn Tin Zalo</span>
          </a>
        </div>
      </div>

      {/* Bottom CTA to Products */}
      <div className="text-center pt-2">
        <Link
          href="/san-pham"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 px-6 py-3 text-xs font-bold text-white hover:from-red-600 hover:to-amber-500 shadow-lg shadow-red-950/50 transition-all"
        >
          <span>Xem Danh Mục Sản Phẩm Pháo Hoa Hợp Pháp</span>
        </Link>
      </div>
    </div>
  );
}
