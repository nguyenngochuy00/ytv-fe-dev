import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSliderNavProps {
  onPrev: () => void;
  onNext: () => void;
  currentPage: number;
  totalPages: number;
}

export function ProductSliderNav({
  onPrev,
  onNext,
  currentPage,
  totalPages,
}: ProductSliderNavProps) {
  if (totalPages <= 1) return null;

  return (
    <>
      <button
        onClick={onPrev}
        disabled={currentPage === 0}
        className={`absolute left-[-10px] sm:left-2 top-1/2 -translate-y-12 z-30 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 transition-all ${
          currentPage === 0
            ? "opacity-0 pointer-events-none"
            : "opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0 hover:text-primary hover:scale-110 active:scale-95"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`absolute right-[-10px] sm:right-2 top-1/2 -translate-y-12 z-30 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 transition-all ${
          currentPage === totalPages - 1
            ? "opacity-0 pointer-events-none"
            : "opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0 hover:text-primary hover:scale-110 active:scale-95"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
    </>
  );
}
