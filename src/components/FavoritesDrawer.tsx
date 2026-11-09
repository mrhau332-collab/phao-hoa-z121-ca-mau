"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";

export function FavoritesDrawer() {
  const {
    isFavoritesOpen,
    closeFavorites,
    favorites,
    toggleFavorite,
    addItem,
    openCart,
  } = useCart();

  if (!isFavoritesOpen) return null;

  const favoriteProducts = favorites
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[0] => Boolean(p));

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={closeFavorites}
    >
      <div
        className="relative w-full max-w-md h-full bg-[#071329] border-l border-amber-400/40 p-6 flex flex-col shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            <h3 className="font-sans text-lg font-bold text-white">
              Sản Phẩm Đã Lưu ({favoriteProducts.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={closeFavorites}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 py-4 space-y-3 overflow-y-auto">
          {favoriteProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="h-16 w-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                <Heart className="h-8 w-8 text-slate-500" />
              </div>
              <p className="text-xs text-slate-300">
                Bạn chưa lưu sản phẩm nào. Nhấn biểu tượng trái tim tại bất kỳ sản phẩm nào để lưu lại xem sau.
              </p>
            </div>
          ) : (
            favoriteProducts.map((p) => (
              <div
                key={p.id}
                className="flex gap-3 p-3 rounded-2xl bg-night-900 border border-white/10 hover:border-amber-400/40 transition-colors"
              >
                <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-black shrink-0">
                  <Image
                    src={p.media.thumbnail}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-300">
                      {p.sku}
                    </span>
                    <h4 className="font-sans text-xs font-bold text-white line-clamp-1">
                      {p.name}
                    </h4>
                    <div className="text-xs font-black text-amber-400 font-sans mt-0.5 tabular-nums tracking-tight">
                      xxxxxx đ
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleFavorite(p.id)}
                      className="text-[11px] text-slate-400 hover:text-red-400 inline-flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                      <span>Bỏ lưu</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        addItem(p, 1);
                        openCart();
                      }}
                      className="inline-flex items-center gap-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-night-950 font-bold px-2.5 py-1 text-xs transition-all active:scale-95"
                    >
                      <ShoppingBag className="h-3 w-3" />
                      <span>Thêm vào giỏ</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favoriteProducts.length > 0 && (
          <div className="pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                favoriteProducts.forEach((p) => addItem(p, 1));
                closeFavorites();
                openCart();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-500 hover:from-red-600 hover:to-amber-400 text-white font-bold text-xs shadow-lg transition-all"
            >
              Thêm tất cả vào giỏ yêu cầu ({favoriteProducts.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
