"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MasterDashboardSection } from "@/components/MasterDashboardSection";
import { QuickSelectorQuiz } from "@/components/QuickSelectorQuiz";
import { FeaturedProductsSection } from "@/components/FeaturedProductsSection";
import { QuickPriceTableSection } from "@/components/QuickPriceTableSection";
import { ShowcaseGallerySection } from "@/components/ShowcaseGallerySection";
import { RealStoreGallerySection } from "@/components/RealStoreGallerySection";
import { HowToBuySection } from "@/components/HowToBuySection";
import { AuthenticGuideSection } from "@/components/AuthenticGuideSection";
import { SafetySection } from "@/components/SafetySection";
import { VideoModal } from "@/components/VideoModal";
import { products } from "@/data/products";
import { Product } from "@/types";

export default function HomePage() {
  const [activeVideoProduct, setActiveVideoProduct] = useState<Product | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideo = (product: Product) => {
    setActiveVideoProduct(product);
    setIsVideoModalOpen(true);
  };

  const handleOpenFeaturedVideo = () => {
    // Open the best selling Giàn Phun Viên 25 Cam
    const featured = products[0];
    handleOpenVideo(featured);
  };

  return (
    <>
      {/* 1. Hero Section: Authentic Cà Mau Branding & Real Packaging Pedestal */}
      <HeroSection onOpenFeaturedVideo={handleOpenFeaturedVideo} />

      {/* 2. Master 3-Column Dashboard: Combo Tết, Best Sellers, Video & Legal Actions */}
      <MasterDashboardSection onOpenVideo={handleOpenVideo} />

      {/* 3. Quick Selector Quiz: 30-Second Recommendation Selector */}
      <QuickSelectorQuiz />

      {/* 4. Full Verified Product Catalog with Occasion & Category Filters */}
      <FeaturedProductsSection onOpenVideo={handleOpenVideo} />

      {/* 5. Quick Price Comparison Matrix */}
      <QuickPriceTableSection onOpenVideo={handleOpenVideo} />

      {/* 6. Showcase Gallery "Xem pháo hoa đẹp như thế nào" */}
      <ShowcaseGallerySection onOpenVideo={handleOpenVideo} />

      {/* 7. Real Store & Warehouse Verification */}
      <RealStoreGallerySection />

      {/* 8. How To Buy: 4 Legal Steps */}
      <HowToBuySection />

      {/* 9. Authentic Z121 Verification Guide */}
      <AuthenticGuideSection />

      {/* 10. Fire Safety & Brick Stacking Rule */}
      <SafetySection />

      {/* Global Video Modal */}
      <VideoModal
        product={activeVideoProduct}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
