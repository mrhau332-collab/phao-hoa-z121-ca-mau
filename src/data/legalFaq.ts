export interface LegalItem {
  id: string;
  question: string;
  answer: string;
  category: 'phap-ly' | 'an-toan' | 'nhan-biet-tem';
}

export const legalItems: LegalItem[] = [
  {
    id: "legal-1",
    category: "phap-ly",
    question: "Pháo hoa Z121 có được phép đốt công khai tại nhà không?",
    answer:
      "CÓ. Căn cứ theo Điều 17 Nghị định 137/2020/NĐ-CP và Nghị định 56/2023/NĐ-CP của Chính phủ, cơ quan, tổ chức, cá nhân có năng lực hành vi dân sự đầy đủ (từ đủ 18 tuổi) được phép sử dụng pháo hoa dân dụng không gây tiếng nổ do Nhà máy Z121 sản xuất trong các dịp: Lễ, Tết, Sinh nhật, Cưới hỏi, Hội nghị, Khai trương, Ngày kỷ niệm và các hoạt động văn hóa nghệ thuật.",
  },
  {
    id: "legal-2",
    category: "phap-ly",
    question: "Làm thế nào để phân biệt 'Pháo hoa' hợp pháp và 'Pháo hoa nổ' bị cấm?",
    answer:
      "Pháp luật phân định rõ:\n1. Pháo hoa hợp pháp (sản phẩm Z121 bán dân dụng): Khi phát hỏa chỉ tạo ra hiệu ứng ánh sáng, màu sắc lộng lẫy và âm thanh rít êm tai đặc trưng, TUYỆT ĐỐI KHÔNG GÂY RA TIẾNG NỔ.\n2. Pháo hoa nổ và Pháo nổ: Gây ra tiếng nổ đanh chát (như pháo dàn Trung Quốc, pháo cối lậu), bị nghiêm cấm cá nhân tự ý mua bán, tàng trữ, sử dụng; hành vi vi phạm có thể bị truy cứu trách nhiệm hình sự.",
  },
  {
    id: "legal-3",
    category: "nhan-biet-tem",
    question: "Cách kiểm tra tem chống hàng giả và quét mã QR chính hãng Z121?",
    answer:
      "Mỗi hộp giàn pháo Z121 xuất xưởng đều có:\n- Tem bảo đảm có logo và nhận diện của Nhà máy Z121 – Công ty TNHH MTV Hóa chất 21.\n- Mã QR Code duy nhất phủ cào hoặc in sắc nét. Khách hàng dùng camera điện thoại hoặc ứng dụng Zalo quét mã QR để kiểm tra thông tin xuất xưởng, lô sản xuất, ngày đóng gói và điểm phân phối hợp pháp.\n- Bao bì in sắc nét, hướng dẫn sử dụng tiếng Việt chi tiết, không bị móp méo hay có dấu hiệu cạy mở dán lại.",
  },
  {
    id: "legal-4",
    category: "an-toan",
    question: "Quy tắc an toàn sống còn khi kích hoạt giàn pháo hoa Z121 là gì?",
    answer:
      "1. Chọn vị trí: Đặt trên mặt phẳng nằm ngang, cứng vững, thoáng đãng, không có vật cản bên trên (dây điện, cành cây, mái hiên).\n2. Cố định giàn: DÙNG GẠCH HOẶC VẬT NẶNG CHÈN CHẶT 4 XUNG QUANH CHÂN GIÀN để chống lật/đổ khi pháo phóng phản lực lên trời.\n3. Khoảng cách: Châm ngòi bằng mồi lửa dài (hương/nhang hoặc bật lửa khò), sau khi ngòi bắt cháy lập tức lùi xa tối thiểu 10 mét.\n4. Tuyệt đối không cúi mặt hoặc đưa bộ phận cơ thể lên phía trên miệng ống phóng.",
  },
  {
    id: "legal-5",
    category: "an-toan",
    question: "Cách bảo quản và xử lý trong trường hợp pháo không cháy hết?",
    answer:
      "Bảo quản pháo nơi khô ráo, thoáng mát, xa nguồn nhiệt, tia lửa điện và tầm tay trẻ em. Trường hợp châm ngòi nhưng giàn không phóng hoặc phóng ngắt quãng, TUYỆT ĐỐI KHÔNG LẠI GẦN NGAY. Đợi ít nhất 15 phút, sau đó dùng gáo nước đổ ngập giàn để làm mất tác dụng hóa chất trước khi xử lý tiêu hủy an toàn.",
  },
];
