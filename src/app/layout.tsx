import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CompareModal } from "@/components/CompareModal";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";
import { MacroInspectModal } from "@/components/MacroInspectModal";
import { FloatingContact } from "@/components/FloatingContact";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { TetSpringAtmosphere } from "@/components/TetSpringAtmosphere";
import { storeInfo } from "@/data/storeInfo";

const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-vietnam",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["600", "700", "800", "900"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["700"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05070B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${storeInfo.storeName} — Điểm Bán Pháo Hoa Z121 Cà Mau`,
    template: `%s | ${storeInfo.storeName}`,
  },
  description:
    "Pháo hoa chú Bộ đội Cà Mau — Điểm Bán Pháo Hoa Z121 Cà Mau chính ngạch Nhà máy Hóa chất 21 (Bộ Quốc Phòng). Xem video hiệu ứng thực tế, bảng giá niêm yết xuất xưởng, hướng dẫn an toàn PCCC theo Nghị định 137/2020/NĐ-CP.",
  keywords: [
    "pháo hoa chú bộ đội cà mau",
    "điểm bán pháo hoa z121 cà mau",
    "pháo hoa cà mau",
    "pháo hoa bộ quốc phòng z121",
    "nhà máy hóa chất 21",
    "giàn phun viên d16",
    "giàn phun hoa d16",
    "hộp quà tết z121",
    "thác nước bạc",
    "pháo hoa không tiếng nổ",
    "nghị định 137 pháo hoa",
  ],
  authors: [{ name: storeInfo.storeName }],
  creator: storeInfo.storeName,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: `https://${storeInfo.domain}`,
    siteName: storeInfo.storeName,
    title: `${storeInfo.storeName} — Điểm Bán Pháo Hoa Z121 Cà Mau (Bộ Quốc Phòng)`,
    description:
      "Khám phá pháo hoa dân dụng Z121 chính hãng Bộ Quốc Phòng tại Cà Mau do Chú Bộ Đội trực tiếp phụ trách. Bán đúng giá niêm yết, đầy đủ tem QR xuất xưởng.",
    images: [
      {
        url: "/mediakit/03_gian_phun_vien_cam_D16x25_tren_tay.jpg",
        width: 1200,
        height: 630,
        alt: "Pháo hoa chú Bộ đội Cà Mau — Điểm bán Z121 Cà Mau",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${playfair.variable} ${plusJakarta.variable} ${dancingScript.variable} overflow-x-hidden`}>
      <body className="min-h-screen flex flex-col bg-night-950 text-slate-100 antialiased selection:bg-amber-400/30 selection:text-amber-300 relative overflow-x-hidden w-full">
        <TetSpringAtmosphere />
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <CartDrawer />
          <CompareModal />
          <FavoritesDrawer />
          <MacroInspectModal />
          <FloatingContact />
          <MobileBottomNav />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
