"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  X,
  Scale,
  ShoppingBag,
  Trash2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function CompareModal() {
  const {
    isCompareOpen,
    closeCompare,
    compareIds,
    comparedProducts,
    removeFromCompare,
    clearCompare,
    addItem,
    openCart,
  } = useCart();

  if (!isCompareOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={closeCompare}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#071329] border border-amber-400/40 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-white">
                So Sánh Thông Số Sản Phẩm ({comparedProducts.length}/3)
              </h3>
              <p className="text-xs text-slate-300">
                Đối chiếu trực quan quy cách, tầm phóng, thời lượng và mức giá niêm yết Z121.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {comparedProducts.length > 0 && (
              <button
                type="button"
                onClick={clearCompare}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-red-400 px-2 py-1 rounded transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Xóa tất cả</span>
              </button>
            )}
            <button
              type="button"
              onClick={closeCompare}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {comparedProducts.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="h-16 w-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
              <Scale className="h-8 w-8" />
            </div>
            <p className="text-sm text-slate-300">
              Bạn chưa chọn sản phẩm nào để so sánh. Nhấn biểu tượng cái cân tại mỗi sản phẩm để đưa vào bảng đối chiếu.
            </p>
            <button
              type="button"
              onClick={closeCompare}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-night-950 font-bold px-4 py-2 text-xs"
            >
              <span>Xem danh sách sản phẩm</span>
            </button>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-3 text-slate-400 font-bold uppercase tracking-wider w-1/4">
                    Tiêu chí
                  </th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="py-3 px-3 text-center min-w-[200px]">
                      <div className="relative mx-auto h-28 w-28 rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-2">
                        <Image
                          src={p.media.thumbnail}
                          alt={p.name}
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeFromCompare(p.id)}
                          className="absolute top-1 right-1 p-1 rounded-full bg-black/80 hover:bg-red-700 text-white"
                          title="Bỏ khỏi so sánh"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="text-[10px] font-mono text-amber-300">{p.sku}</div>
                      <div className="font-sans text-sm font-bold text-white line-clamp-1">
                        {p.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                <tr>
                  <td className="py-3 px-3 font-semibold text-amber-300/90">Mức giá niêm yết</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center font-bold text-base text-amber-300">
                      xxxxxx đ
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-slate-300">Số lượng ống phóng</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center font-mono">
                      {p.specs.shotCount ? `${p.specs.shotCount} Ống` : "Dây / Gói"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-slate-300">Độ cao tầm phóng</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center font-mono">
                      {p.specs.heightRange}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-slate-300">Thời lượng bắn</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center font-mono">
                      {p.specs.duration}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-slate-300">Khoảng cách an toàn</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center text-emerald-300">
                      {p.specs.safeDistance}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-slate-300">Màu sắc bao bì</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center capitalize">
                      {p.packagingColor || "Tiêu chuẩn"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-slate-300">Âm thanh</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-center text-[11px]">
                      {p.effects.soundType}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-3 font-semibold text-slate-300">Thao tác</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="py-4 px-3 text-center">
                      <button
                        type="button"
                        onClick={() => {
                          addItem(p, 1);
                          closeCompare();
                          openCart();
                        }}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-night-950 font-bold px-3 py-2 text-xs transition-all active:scale-95 shadow"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Thêm vào yêu cầu</span>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
