"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Play, ShoppingBag, ShieldCheck, Check, Sparkles, PhoneCall } from "lucide-react";
import { storeInfo } from "@/data/storeInfo";

interface QuickPriceTableSectionProps {
  onOpenVideo: (product: Product) => void;
}

export function QuickPriceTableSection({ onOpenVideo }: QuickPriceTableSectionProps) {
  const { addItem, openCart } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    addItem(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
      openCart();
    }, 700);
  };

  return (
    <section className="py-20 sm:py-24 bg-night-950 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Minh Bạch Giá Xuất Xưởng — Dễ So Sánh</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight [text-wrap:balance]">
            Bảng Tra Cứu <span className="gold-shimmer-text">Toàn Bộ Sản Phẩm Z121</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            So sánh nhanh quy cách, độ cao bắn và giá niêm yết của tất cả 9 dòng pháo hoa dân dụng Z121 có sẵn tại kho Cà Mau.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/15 bg-night-900/90 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/15 bg-white/[0.04] text-xs font-bold text-amber-300 uppercase tracking-wider">
                <th className="py-4 px-4 sm:px-6">Sản phẩm</th>
                <th className="py-4 px-3 sm:px-4 text-center">Số Ống</th>
                <th className="py-4 px-3 sm:px-4">Độ Cao & Thời Lượng</th>
                <th className="py-4 px-3 sm:px-4 hidden md:table-cell">Hiệu Ứng Bắn</th>
                <th className="py-4 px-3 sm:px-4 text-right">Giá Xuất Xưởng</th>
                <th className="py-4 px-4 sm:px-6 text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              {products.map((product) => {
                const isAdded = addedId === product.id;
                return (
                  <tr
                    key={product.id}
                    className="hover:bg-white/[0.04] transition-colors group"
                  >
                    {/* Col 1: Product Thumbnail & Name */}
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-xl overflow-hidden bg-night-950 border border-white/15">
                          <Image
                            src={product.media.thumbnail}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <Link
                            href={`/san-pham/${product.slug}`}
                            className="font-serif font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors block line-clamp-1"
                          >
                            {product.name}
                          </Link>
                          <span className="text-[11px] font-mono text-amber-300 font-medium">
                            Mã: {product.sku}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Col 2: Shot Count */}
                    <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-white">
                      {product.specs.shotCount ? (
                        <span className="inline-block rounded-lg bg-white/[0.06] px-2.5 py-1 font-mono text-xs text-amber-300 border border-white/10">
                          {product.specs.shotCount} Ống
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400">Dây/Gói</span>
                      )}
                    </td>

                    {/* Col 3: Height & Duration */}
                    <td className="py-3.5 px-3 sm:px-4">
                      <div className="font-semibold text-white">{product.specs.heightRange}</div>
                      <div className="text-xs text-slate-300 font-light mt-0.5">{product.specs.duration}</div>
                    </td>

                    {/* Col 4: Effects */}
                    <td className="py-3.5 px-3 sm:px-4 hidden md:table-cell max-w-xs">
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {product.effects.description}
                      </p>
                    </td>

                    {/* Col 5: Price */}
                    <td className="py-3.5 px-3 sm:px-4 text-right">
                      <div className="font-sans font-black text-base sm:text-lg text-amber-400 tabular-nums tracking-tight">
                        xxxxxx đ
                      </div>
                    </td>

                    {/* Col 6: Actions */}
                    <td className="py-3.5 px-4 sm:px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {/* Play Video Button */}
                        <button
                          type="button"
                          onClick={() => onOpenVideo(product)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-night-950 text-amber-400 border border-white/10 transition-all"
                          title={`Xem video bắn ${product.name}`}
                          aria-label={`Xem video bắn ${product.name}`}
                        >
                          <Play className="h-4 w-4 fill-current ml-0.5" />
                        </button>

                        {/* Quick Add Button */}
                        <button
                          type="button"
                          onClick={() => handleQuickAdd(product)}
                          className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all ${
                            isAdded
                              ? "bg-emerald-500 text-white"
                              : "bg-amber-400 hover:bg-amber-300 text-night-950 active:scale-95 shadow-sm"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              <span className="hidden sm:inline">Đã Chọn</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="h-3.5 w-3.5" />
                              <span>Chọn</span>
                            </>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Fast Advice Banner */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:px-6">
          <div className="text-xs sm:text-sm text-slate-200">
            💡 Bà con cần mua số lượng lớn hoặc gửi ra các huyện xa ở Cà Mau?
          </div>
          <a
            href={`tel:${storeInfo.hotline}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 px-4 py-2 text-xs font-bold text-white hover:from-red-600 hover:to-amber-500 transition-all shrink-0"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Gọi Chú Bộ Đội: {storeInfo.hotlineDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
