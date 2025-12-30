import { Loader2 } from "lucide-react";
import { Product } from "@/types";
import { ProductSliderNav } from "./components/ProductSliderNav";
import { ProductSliderTrack } from "./components/ProductSliderTrack";
import { ProductSliderFooter } from "./components/ProductSliderFooter";

interface ProductSliderProps {
  products: Product[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onSetPage: (page: number) => void;
  isFlashSale?: boolean;
}

export function ProductSlider({
  products,
  isLoading,
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onSetPage,
  isFlashSale = false,
}: ProductSliderProps) {
  const ITEMS_PER_PAGE = 6;

  if (isLoading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-4 text-slate-400">
        <Loader2 className="animate-spin" size={40} />
        <p className="font-medium">Đang tải sản phẩm...</p>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-6 pt-0 min-h-[400px] relative group/slider">
      <ProductSliderNav
        onPrev={onPrev}
        onNext={onNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <ProductSliderTrack
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
        isFlashSale={isFlashSale}
        itemsPerPage={ITEMS_PER_PAGE}
      />

      <ProductSliderFooter
        totalPages={totalPages}
        currentPage={currentPage}
        onSetPage={onSetPage}
      />
    </div>
  );
}
