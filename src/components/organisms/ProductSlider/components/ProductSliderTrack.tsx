import { ProductCard } from "@/components/molecules/ProductCard";
import { Product } from "@/types";

interface ProductSliderTrackProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
  isFlashSale: boolean;
  itemsPerPage: number;
}

export function ProductSliderTrack({
  products,
  currentPage,
  totalPages,
  isFlashSale,
  itemsPerPage,
}: ProductSliderTrackProps) {
  return (
    <div className="w-full overflow-hidden pb-4">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="w-full shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 px-1"
          >
            {products
              .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
              .map((product, i) => (
                <div key={product.id} className="h-full">
                  <ProductCard
                    {...product}
                    isFlashSale={isFlashSale}
                    sold={isFlashSale && pageIndex === 0 && i < 2 ? 15 - i : 0}
                    total={20}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
