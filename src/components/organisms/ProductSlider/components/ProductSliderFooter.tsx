import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductSliderFooterProps {
  totalPages: number;
  currentPage: number;
  onSetPage: (page: number) => void;
}

export function ProductSliderFooter({
  totalPages,
  currentPage,
  onSetPage,
}: ProductSliderFooterProps) {
  return (
    <div className="mt-8 flex justify-center gap-6 items-center">
      <Link
        href="#"
        className="text-primary font-black flex items-center gap-1 transition-all group hover:text-primary-vibrant drop-shadow-sm"
      >
        Xem tất cả
        <ChevronRight
          size={20}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>

      {totalPages > 1 && (
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => onSetPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === i
                  ? "w-8 bg-primary shadow-[0_0_10px_rgba(46,125,125,0.3)]"
                  : "w-1.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
