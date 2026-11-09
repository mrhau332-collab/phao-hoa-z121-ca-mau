import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductClientActions } from "./ProductClientActions";
import { ProductStudioStage } from "@/components/ProductStudioStage";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  AlertTriangle,
  Play,
  FileBadge,
  Eye,
  PhoneCall,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} — Pháo Hoa Z121 Chính Hãng`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} — Pháo Hoa Dân Dụng Z121`,
      description: product.tagline,
      images: [{ url: product.media.thumbnail }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const isLocalMp4 = product.media.videoUrl?.endsWith(".mp4") || product.media.videoUrl?.startsWith("/videos/");

  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link href="/" className="hover:text-gold transition-colors">
          Trang chủ
        </Link>
        <span>/</span>
        <Link href="/san-pham" className="hover:text-gold transition-colors">
          Bộ sưu tập
        </Link>
        <span>/</span>
        <span className="text-white font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: 3D Product Studio Stage & Real Video (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* 3D Studio Stage with Macro Inspection Lens */}
          <ProductStudioStage
            imageSrc={product.media.thumbnail}
            productName={product.name}
            badge="Ảnh Thật Tại Cửa Hàng Z121"
          />

          {/* Embedded Video Showcase Player */}
          {product.media.videoUrl && (
            <div className="p-2 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-2xl">
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-night-900/90 p-5 shadow-inner-glow space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-gold fill-gold" />
                    <h3 className="font-serif text-sm font-bold text-white">
                      Video Đo Kiểm Hiệu Ứng Bắn Thực Tế
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">
                    {product.media.videoType === "actual" ? "Video Thực Tế" : "Minh Họa"}
                  </span>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                  {isLocalMp4 ? (
                    <video
                      src={product.media.videoUrl}
                      controls
                      playsInline
                      className="h-full w-full object-contain"
                    >
                      Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                  ) : (
                    <iframe
                      src={`${product.media.videoUrl}?rel=0&modestbranding=1`}
                      title={`Video thực tế ${product.name}`}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                {product.media.videoSourceTitle && (
                  <p className="text-[11px] font-mono text-slate-400 italic">
                    * Nguồn ghi hình: {product.media.videoSourceTitle}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Safety Notice Box */}
          <div className="p-2 rounded-[2rem] bg-vermilion/[0.04] border border-vermilion/30">
            <div className="rounded-[calc(2rem-0.375rem)] bg-night-900/90 p-6 shadow-inner-glow space-y-2.5 text-xs text-slate-300 font-light">
              <div className="flex items-center gap-2 text-vermilion font-bold text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Quy Tắc An Toàn Sống Còn</span>
              </div>
              <p className="leading-relaxed">
                1. <strong>Cố định chân giàn:</strong> Bắt buộc dùng gạch đặc hoặc vật nặng chèn chặt 4 góc chân giàn pháo trên mặt phẳng xi măng trước khi châm ngòi.
              </p>
              <p className="leading-relaxed">
                2. <strong>Khoảng cách:</strong> Sau khi ngòi bắt lửa, lập tức lùi xa tối thiểu <strong>{product.specs.safeDistance}</strong>.
              </p>
              <p className="leading-relaxed">
                3. <strong>Tuyệt đối không:</strong> Không cúi mặt ngó vào miệng ống, không cầm tay giàn pháo khi đốt.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Product Information & Purchase Request (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-gold">
              <FileBadge className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>Mã: {product.sku}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              <span className="gold-shimmer-text">{product.name}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Price & Order Action Box (Double-Bezel) */}
          <div className="p-2 rounded-[2.5rem] bg-white/[0.03] border border-gold/40 shadow-2xl">
            <div className="rounded-[calc(2.5rem-0.5rem)] bg-night-900/95 p-6 shadow-inner-glow space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Giá xuất xưởng niêm yết
                  </div>
                  <div className="font-sans text-3xl font-black text-gold mt-1 tabular-nums tracking-tight">
                    xxxxxx đ
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1 border-t border-white/5">
                <ShieldCheck className="h-4 w-4" />
                <span>Hàng tại điểm bán Cà Mau • Tem nhãn Nhà máy Hóa chất 21</span>
              </div>

              {/* Direct Hotline Consultation Pill */}
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span className="text-slate-200">
                    Tư vấn trực tiếp: <strong className="text-white">Chú Bộ Đội</strong>
                  </span>
                </div>
                <a
                  href="tel:0917335233"
                  className="font-mono font-bold text-amber-400 hover:underline"
                >
                  0917.335.233
                </a>
              </div>

              {/* Interactive Client Cart & Order Actions */}
              <div className="pt-2">
                <ProductClientActions product={product} />
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="p-2 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-lg">
            <div className="rounded-[calc(2rem-0.375rem)] bg-night-900/90 p-5 shadow-inner-glow space-y-3">
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
                Thông Số Kỹ Thuật Chính Thức
              </h3>
              <div className="divide-y divide-white/5 text-xs font-mono text-slate-300">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Quy cách:</span>
                  <span className="font-bold text-white">{product.specs.packaging}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Tầm phóng cao:</span>
                  <span className="font-bold text-white">{product.specs.heightRange}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Thời lượng cháy:</span>
                  <span className="font-bold text-white">{product.specs.duration}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Khoảng cách an toàn:</span>
                  <span className="font-bold text-emerald-400">{product.specs.safeDistance}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Hạn sử dụng:</span>
                  <span className="font-bold text-white">{product.specs.shelfLife}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Đặc tính âm thanh:</span>
                  <span className="font-bold text-white">{product.effects.soundType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optical Colors */}
          <div className="p-2 rounded-[2rem] bg-white/[0.03] border border-white/5 text-xs font-light">
            <div className="rounded-[calc(2rem-0.375rem)] bg-night-900/90 p-5 shadow-inner-glow space-y-2.5">
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                Phối Màu Quang Học
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {product.effects.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.effects.colors.map((color, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-gold border border-gold/20"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-white/5">
          <h2 className="font-serif text-2xl font-bold text-white mb-8">
            Sản Phẩm Cùng Bộ Sưu Tập
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
