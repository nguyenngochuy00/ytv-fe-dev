"use client";

import { useState } from "react";
import { useProducts } from "@/hooks";
import { ProductSlider } from "@/components/organisms/ProductSlider";
import { BestSellerHeader } from "./components/BestSellerHeader";

export function BestSeller() {
  const { products, isLoading } = useProducts({ limit: 18 });
  const [currentPage, setCurrentPage] = useState(0);

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE) || 1;

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  return (
    <section className="relative pt-6 animate-slow-fade">
      <div className="bg-[#ffffff] rounded-3xl relative shadow-[0_10px_40px_rgba(255,0,0,0.2)] border border-slate-100/50">
        <BestSellerHeader title="Sản phẩm bán chạy" />

        <div className="pt-8">
          <ProductSlider
            products={products}
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={nextSlide}
            onPrev={prevSlide}
            onSetPage={setCurrentPage}
            isFlashSale={false}
          />
        </div>
      </div>
    </section>
  );
}
