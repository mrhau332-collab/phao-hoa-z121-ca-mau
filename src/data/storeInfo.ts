import { StoreProfile } from "@/types";

export const storeInfo: StoreProfile = {
  storeName: process.env.NEXT_PUBLIC_STORE_NAME || "Pháo hoa chú Bộ đội Cà Mau",
  brandTagline: "Điểm Bán Pháo Hoa Z121 Cà Mau — Nhà máy Hóa chất 21 (Bộ Quốc Phòng)",
  ownerName: process.env.NEXT_PUBLIC_OWNER_NAME || "Chú Bộ Đội",
  hotline: process.env.NEXT_PUBLIC_HOTLINE || "0917335233",
  hotlineDisplay: process.env.NEXT_PUBLIC_HOTLINE_DISPLAY || "0917.335.233",
  zaloPhone: process.env.NEXT_PUBLIC_ZALO_PHONE || "0917335233",
  zaloUrl: process.env.NEXT_PUBLIC_ZALO_URL || "https://zalo.me/0917335233",
  address: process.env.NEXT_PUBLIC_STORE_ADDRESS || "Địa điểm kinh doanh số 03 — Cửa hàng giới thiệu & bán sản phẩm pháo hoa Z121, Cà Mau",
  serviceArea: process.env.NEXT_PUBLIC_SERVICE_AREA || "TP. Cà Mau và các huyện: Đầm Dơi, Cái Nước, Thới Bình, Trần Văn Thời, U Minh, Năm Căn, Ngọc Hiển, Phú Tân",
  workingHours: "07:00 - 22:00 (Mở cửa phục vụ bà con tất cả các ngày trong tuần & cao điểm dịp Tết)",
  email: process.env.NEXT_PUBLIC_STORE_EMAIL || "phaohoacamau.bqp@gmail.com",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "phaohoachubodoicamau.web.app",
  isAuthorizedAgent: true,
  authorizationInfo: "Điểm bán pháo hoa Z121 chính hãng tại Cà Mau do Chú Bộ Đội trực tiếp phụ trách tư vấn. Cam kết 100% pháo hoa hợp pháp theo Nghị định 137/2020/NĐ-CP, có tem QR chống giả và hóa đơn rõ ràng.",
  legalDisclaimer:
    "Lưu ý quan trọng: Toàn bộ sản phẩm được phân phối là pháo hoa dân dụng không tiếng nổ do Nhà máy Z121 (Công ty TNHH MTV Hóa chất 21 - Bộ Quốc Phòng) sản xuất hợp pháp theo Nghị định 137/2020/NĐ-CP và Nghị định 56/2023/NĐ-CP. Cửa hàng chỉ cung cấp cho khách hàng từ đủ 18 tuổi có năng lực hành vi dân sự đầy đủ.",
};
