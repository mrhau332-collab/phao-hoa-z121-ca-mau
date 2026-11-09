"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { VideoModal } from "@/components/VideoModal";
import { SlidingTabs } from "@/components/SlidingTabs";
import { Product, ProductCategory, ProductOccasion } from "@/types";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  const [activeVideoProduct, setActiveVideoProduct] = useState<Product | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "Tất Cả Loại", count: products.length },
    { id: "gian-phun-vien", label: "Giàn Phun Viên", count: 3 },
    { id: "gian-phun-hoa", label: "Giàn Phun Hoa", count: 2 },
    { id: "hop-qua-tet", label: "Bộ Quà Tết VIP", count: 2 },
    { id: "thac-nuoc-bac", label: "Thác Nước Bạc", count: 1 },
    { id: "ong-phun-cam-tay", label: "Pháo Bông Que", count: 1 },
  ];

  const occasions = [
    { id: "all", label: "Mọi Dịp" },
    { id: "tet", label: "Tết & Giao Thừa" },
    { id: "dam-cuoi", label: "Tiệc Cưới" },
    { id: "khai-truong", label: "Khai Trương" },
    { id: "sinh-nhat", label: "Kỷ Niệm" },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Search query filter
        if (
          searchQuery &&
          !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.sku.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return false;
        }

        // Category filter
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
          return false;
        }

        // Occasion filter
        if (
          selectedOccasion !== "all" &&
          !product.occasions.includes(selectedOccasion as ProductOccasion)
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        const priceA = a.price ?? 0;
        const priceB = b.price ?? 0;
        if (sortBy === "price-asc") return priceA - priceB;
        if (sortBy === "price-desc") return priceB - priceA;
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedOccasion, sortBy]);

  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3 pb-8 border-b border-white/10">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-950/70 border border-amber-500/40 px-3.5 py-1 text-xs font-semibold text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Pháo Hoa Chú Bộ Đội Cà Mau • Hotline/Zalo: 0917.335.233</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Danh Mục <span className="gold-shimmer-text">Pháo Hoa Z121</span> — Điểm Bán Cà Mau
        </h1>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
          Danh mục các dòng pháo hoa dân dụng không tiếng nổ do Nhà máy Hóa chất 21 (Bộ Quốc Phòng) sản xuất. Giá sản phẩm đang cập nhật niêm yết — liên hệ Hotline/Zalo 0917.335.233 để nhận báo giá chi tiết.
        </p>
      </div>

      {/* Modern Minimalist Filter & Search Bar */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên hoặc mã SP..."
              className="w-full rounded-full bg-white/[0.04] border border-white/15 pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none font-medium"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end font-mono text-xs">
            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-slate-400">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-white focus:border-gold focus:outline-none"
            >
              <option value="default" className="bg-night-950">Mặc định</option>
              <option value="price-asc" className="bg-night-950">Giá: Thấp đến Cao</option>
              <option value="price-desc" className="bg-night-950">Giá: Cao đến Thấp</option>
            </select>
          </div>
        </div>

        {/* Sliding Category Tabs */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <SlidingTabs
            tabs={categories}
            activeTab={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {/* Occasion Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-amber-200/90 font-semibold">Lọc theo dịp:</span>
          {occasions.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setSelectedOccasion(o.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                selectedOccasion === o.id
                  ? "bg-amber-400 text-night-950 font-bold shadow-gold-glow"
                  : "bg-white/[0.04] text-slate-200 hover:text-white border border-white/10 hover:border-amber-400/40"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Results Grid with Fluid Morph Motion */}
      <div
        key={`${selectedCategory}-${selectedOccasion}-${sortBy}`}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenVideo={(p) => {
              setActiveVideoProduct(p);
              setIsVideoModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        product={activeVideoProduct}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3 pb-8 border-b border-white/10 animate-pulse">
            <div className="h-6 w-48 bg-white/10 rounded-full" />
            <div className="h-10 w-96 bg-white/10 rounded-2xl" />
            <div className="h-4 w-full bg-white/5 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 rounded-[2rem] bg-white/[0.02] border border-white/5 animate-pulse" />
            ))}
          </div>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
