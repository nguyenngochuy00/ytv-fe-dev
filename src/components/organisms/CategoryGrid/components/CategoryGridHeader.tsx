import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function CategoryGridHeader() {
  return (
    <div className="flex justify-between items-center mb-8 px-2 sm:px-4">
      <h2 className="text-2xl font-black flex items-center gap-3 tracking-tight text-slate-800">
        <span className="w-2 h-8 bg-linear-to-b from-primary to-primary-vibrant rounded-full"></span>
        Danh mục nổi bật
      </h2>
      <Link
        href="#"
        className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all group/all"
      >
        Xem tất cả{" "}
        <ChevronRight
          size={18}
          className="text-primary-vibrant group-hover/all:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  );
}
