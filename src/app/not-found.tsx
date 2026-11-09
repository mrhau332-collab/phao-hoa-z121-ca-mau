import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#070D18] text-white p-4 text-center">
      <h1 className="text-5xl font-black text-[#FDE047] mb-3">404</h1>
      <h2 className="text-xl font-bold mb-2">Không tìm thấy trang</h2>
      <p className="text-slate-300 mb-6 max-w-md">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được thay đổi đường dẫn.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold transition-all shadow-lg"
      >
        Về Trang Chủ Pháo Hoa Z121
      </Link>
    </div>
  );
}
