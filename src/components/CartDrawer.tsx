"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { storeInfo } from "@/data/storeInfo";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldAlert,
  Send,
  CheckCircle2,
  Copy,
  PhoneCall,
  MessageCircle,
  MapPin,
  AlertTriangle,
} from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalAmount,
    totalItems,
  } = useCart();

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("TP. Cà Mau");
  const [specificAddress, setSpecificAddress] = useState("");
  const [preferredContact, setPreferredContact] = useState<"zalo" | "phone_call">("zalo");
  const [notes, setNotes] = useState("");
  const [isOver18Confirmed, setIsOver18Confirmed] = useState(false);
  const [hasReadSafety, setHasReadSafety] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<{
    code: string;
    textSummary: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const caMauDistricts = [
    "TP. Cà Mau",
    "Huyện Cái Nước",
    "Huyện Đầm Dơi",
    "Huyện Thới Bình",
    "Huyện Trần Văn Thời",
    "Huyện U Minh",
    "Huyện Năm Căn",
    "Huyện Ngọc Hiển",
    "Huyện Phú Tân",
  ];

  if (!isCartOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (items.length === 0) {
      setErrorMessage("Giỏ hàng của bạn đang trống.");
      return;
    }
    if (!fullName.trim()) {
      setErrorMessage("Vui lòng nhập họ và tên của bạn.");
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      setErrorMessage("Vui lòng nhập số điện thoại hợp lệ (10 số).");
      return;
    }
    if (!deliveryArea.trim()) {
      setErrorMessage("Vui lòng chọn hoặc nhập khu vực nhận hàng tại Cà Mau.");
      return;
    }
    if (!isOver18Confirmed) {
      setErrorMessage("Bạn bắt buộc phải xác nhận đủ 18 tuổi để gửi yêu cầu tư vấn mua pháo hoa.");
      return;
    }
    if (!hasReadSafety) {
      setErrorMessage("Vui lòng cam kết đã đọc và tuân thủ hướng dẫn an toàn PCCC.");
      return;
    }

    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderCode = `Z121-REQ-${Date.now().toString().slice(-4)}-${randomSuffix}`;

    const itemListText = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.product.name} (SL: ${i.quantity} x xxxxxx đ)`
      )
      .join("\n");

    const summary = `🎆 ĐƠN YÊU CẦU TƯ VẤN — PHÁO HOA CHÚ BỘ ĐỘI CÀ MAU (ĐIỂM BÁN Z121 BQP)
Mã yêu cầu: ${orderCode}
Người phụ trách: Chú Bộ Đội (Hotline/Zalo: 0917.335.233)
Khách hàng: ${fullName}
Số điện thoại: ${phone}
Khu vực nhận hàng: ${deliveryArea} ${specificAddress ? `(${specificAddress})` : ""}
Hình thức ưu tiên: ${preferredContact === "zalo" ? "Nhắn qua Zalo" : "Gọi điện thoại trực tiếp"}
Ghi chú: ${notes || "Không"}
Cam kết: Khách hàng tự khai đủ 18 tuổi & cam kết tuân thủ quy chuẩn an toàn PCCC khi sử dụng.

DANH SÁCH SẢN PHẨM:
${itemListText}

TỔNG TIỀN DỰ KIẾN: xxxxxx đ
(Ghi chú: Giá chính thức và số lượng tại điểm bán Cà Mau sẽ được Chú Bộ Đội xác nhận qua Zalo/Điện thoại)`;

    setTimeout(() => {
      setSubmittedOrder({
        code: orderCode,
        textSummary: summary,
      });
      setIsSubmitting(false);
      clearCart();
    }, 500);
  };

  const copyToClipboard = () => {
    if (!submittedOrder) return;
    navigator.clipboard.writeText(submittedOrder.textSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#071329] border-l border-amber-400/40 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#050B14]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div>
                <h2 id="cart-drawer-title" className="font-sans text-base font-bold text-white">
                  Giỏ Yêu Cầu Đặt Hàng ({totalItems})
                </h2>
                <span className="text-[10px] text-amber-300/80">Không thu tiền online • Tư vấn chuẩn Z121</span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Đóng giỏ hàng"
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {submittedOrder ? (
              /* Success Screen */
              <div className="space-y-5 py-4 text-center animate-fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-white">
                    Gửi Yêu Cầu Thành Công
                  </h3>
                  <p className="mt-1 font-mono text-xs text-amber-300 font-bold">
                    Mã hồ sơ: {submittedOrder.code}
                  </p>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Hệ thống đã lập phiếu tư vấn. Chú Bộ Đội sẽ liên hệ qua số {phone} hoặc Zalo để xác nhận số lượng thực tế tại kho Cà Mau và hướng dẫn nhận hàng hợp pháp.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-night-950 border border-amber-500/30 text-left text-xs space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                      Nội dung phiếu tư vấn
                    </span>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="flex items-center gap-1 text-amber-300 hover:text-white font-mono text-[11px]"
                    >
                      <Copy className="h-3 w-3" />
                      <span>{copied ? "Đã sao chép!" : "Sao chép đơn"}</span>
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-slate-300 max-h-48 overflow-y-auto leading-relaxed text-[11px]">
                    {submittedOrder.textSummary}
                  </pre>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={storeInfo.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={copyToClipboard}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0068FF] hover:bg-[#0054cc] px-4 py-3 text-xs font-bold text-white shadow-lg transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Mở Zalo Gửi Đơn Cho Chú Bộ Đội (0917.335.233)</span>
                  </a>

                  <a
                    href={`tel:${storeInfo.hotline}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 px-4 py-3 text-xs font-bold text-night-950 transition-all font-mono"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Gọi Chú Bộ Đội: {storeInfo.hotlineDisplay}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedOrder(null);
                      closeCart();
                    }}
                    className="text-xs text-slate-400 hover:text-white pt-2 block mx-auto"
                  >
                    Tiếp tục xem sản phẩm khác
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart */
              <div className="py-20 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-slate-400 border border-white/10">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-white">
                    Giỏ yêu cầu chưa có sản phẩm
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Khám phá các giàn pháo hoa Z121 chính hãng và thêm vào danh sách tư vấn.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-night-950 hover:bg-amber-300 transition-all shadow-md"
                >
                  Xem danh mục sản phẩm
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                      Danh sách đã chọn ({items.length})
                    </span>
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-[10px] text-slate-400 hover:text-red-400"
                    >
                      Xóa giỏ
                    </button>
                  </div>

                  <div className="divide-y divide-white/5 rounded-2xl bg-night-900 border border-white/10 p-3">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="py-3 first:pt-0 last:pb-0 flex gap-3 items-center">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-black border border-white/10">
                          <Image
                            src={product.media.thumbnail}
                            alt={product.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">
                            {product.name}
                          </h4>
                          <p className="font-sans text-xs text-amber-300 font-bold mt-0.5 tabular-nums tracking-tight">
                            xxxxxx đ
                          </p>

                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center rounded-lg bg-night-950 border border-white/10 p-0.5">
                              <button
                                type="button"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                aria-label="Giảm số lượng"
                                className="h-5 w-5 flex items-center justify-center rounded text-slate-300 hover:text-white"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-6 text-center font-mono text-xs font-bold text-white">
                                {quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                aria-label="Tăng số lượng"
                                className="h-5 w-5 flex items-center justify-center rounded text-slate-300 hover:text-white"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              aria-label="Xóa sản phẩm"
                              className="text-slate-400 hover:text-red-400 p-1"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal */}
                  <div className="flex items-center justify-between px-2 pt-1 text-xs">
                    <span className="text-slate-300 font-medium">Tạm tính dự kiến:</span>
                    <span className="font-sans text-lg font-black text-amber-300 tabular-nums tracking-tight">
                      xxxxxx đ
                    </span>
                  </div>
                </div>

                {/* Shipping & Condition Disclaimer */}
                <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3.5 flex gap-2.5 text-xs text-slate-200">
                  <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-amber-300">Quy định giao nhận & kiểm chứng</p>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Pháo hoa là mặt hàng có điều kiện. Cửa hàng không giao qua các đơn vị chuyển phát thông thường bị cấm; ưu tiên nhận hàng tại điểm bán hoặc tư vấn giải pháp giao nhận theo đúng quy định.
                    </p>
                  </div>
                </div>

                {/* Inquiry Form */}
                <form onSubmit={handleFormSubmit} className="space-y-3.5 pt-1">
                  <h3 className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                    Thông tin người đăng ký tư vấn
                  </h3>

                  {errorMessage && (
                    <div className="rounded-xl bg-red-950/80 border border-red-500/50 p-2.5 text-xs text-red-200 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1 font-semibold">
                      Họ và tên người nhận <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="VD: Nguyễn Văn Nam"
                      className="w-full rounded-xl bg-night-900 border border-white/10 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1 font-semibold">
                      Số điện thoại liên hệ / Zalo <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="VD: 0917 123 456"
                      className="w-full rounded-xl bg-night-900 border border-white/10 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1 font-semibold">
                      Khu vực tại Cà Mau <span className="text-red-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {caMauDistricts.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDeliveryArea(d)}
                          className={`px-2 py-1 rounded-lg text-[10px] font-medium border transition-colors ${
                            deliveryArea === d
                              ? "bg-amber-400 text-night-950 border-amber-400 font-bold"
                              : "bg-night-900 text-slate-300 border-white/10 hover:border-white/20"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={specificAddress}
                      onChange={(e) => setSpecificAddress(e.target.value)}
                      placeholder="Địa chỉ cụ thể (số nhà, ấp, khóm, xã...)"
                      className="w-full rounded-xl bg-night-900 border border-white/10 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1 font-semibold">
                      Kênh phản hồi ưu tiên
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <label className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border cursor-pointer transition-colors ${preferredContact === "zalo" ? "border-amber-400 bg-amber-400/10 text-amber-300 font-bold" : "border-white/10 text-slate-400"}`}>
                        <input
                          type="radio"
                          name="contactMethod"
                          value="zalo"
                          checked={preferredContact === "zalo"}
                          onChange={() => setPreferredContact("zalo")}
                          className="sr-only"
                        />
                        <span>Nhắn qua Zalo</span>
                      </label>
                      <label className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border cursor-pointer transition-colors ${preferredContact === "phone_call" ? "border-amber-400 bg-amber-400/10 text-amber-300 font-bold" : "border-white/10 text-slate-400"}`}>
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone_call"
                          checked={preferredContact === "phone_call"}
                          onChange={() => setPreferredContact("phone_call")}
                          className="sr-only"
                        />
                        <span>Gọi điện thoại</span>
                      </label>
                    </div>
                  </div>

                  {/* 18+ Self Declaration Checkbox */}
                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={isOver18Confirmed}
                        onChange={(e) => setIsOver18Confirmed(e.target.checked)}
                        className="mt-0.5 rounded border-white/20 bg-night-900 text-amber-500 focus:ring-amber-400"
                      />
                      <span className="text-[11px] leading-relaxed">
                        Tôi tự khai <strong>từ đủ 18 tuổi</strong> và có đầy đủ năng lực hành vi dân sự theo quy định của pháp luật. <span className="text-red-400">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={hasReadSafety}
                        onChange={(e) => setHasReadSafety(e.target.checked)}
                        className="mt-0.5 rounded border-white/20 bg-night-900 text-amber-500 focus:ring-amber-400"
                      />
                      <span className="text-[11px] leading-relaxed">
                        Tôi cam kết chèn gạch cố định chân giàn pháo và tuân thủ hướng dẫn PCCC khi kích hoạt. <span className="text-red-400">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-500 hover:from-red-600 hover:to-amber-400 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Đang gửi yêu cầu..." : "GỬI YÊU CẦU TƯ VẤN (KHÔNG THU TIỀN ONLINE)"}</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400 leading-relaxed">
                    * Phiếu yêu cầu nhằm mục đích kết nối tư vấn trực tiếp với Chú Bộ Đội tại Cà Mau.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
