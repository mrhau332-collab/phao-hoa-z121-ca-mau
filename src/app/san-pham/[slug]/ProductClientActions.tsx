"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Plus, Minus, ShoppingBag, Check, Send } from "lucide-react";

export function ProductClientActions({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    openCart();
  };

  return (
    <div className="space-y-4">
      {/* Quantity Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-300">Số lượng:</span>
        <div className="flex items-center rounded-xl bg-night-950 border border-white/10 p-1">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center font-serif text-sm font-bold text-white">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={handleAdd}
          className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all ${
            added
              ? "bg-emerald-500 text-white"
              : "bg-night-850 text-gold border border-gold/40 hover:bg-gold/10"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" />
              <span>Đã thêm</span>
            </>
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" />
              <span>Thêm vào giỏ</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light py-3 px-4 text-xs font-bold text-night-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
        >
          <Send className="h-4 w-4" />
          <span>Gửi yêu cầu ngay</span>
        </button>
      </div>
    </div>
  );
}
