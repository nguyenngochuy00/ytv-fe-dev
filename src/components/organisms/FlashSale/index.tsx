"use client";

import { useState } from "react";
import { useProducts } from "@/hooks";
import { FlashSaleHeader } from "./components/FlashSaleHeader";
import { FlashSaleTabs } from "./components/FlashSaleTabs";
import { FlashSaleCountdown } from "./components/FlashSaleCountdown";
import { ProductSlider } from "@/components/organisms/ProductSlider";

export function FlashSale() {
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

  const tabs = [
    { time: "08:00 - 22:00, 26/12", status: "Đang diễn ra", active: true },
    { time: "08:00 - 22:00, 27/12", status: "Sắp diễn ra", active: false },
    { time: "08:00 - 22:00, 28/12", status: "Sắp diễn ra", active: false },
  ];

  return (
    <section className="bg-linear-to-r from-[#FF0000] to-[#FF5555] rounded-3xl p-1.5 shadow-[0_10px_40px_rgba(255,0,0,0.2)] animate-slow-fade">
      <div className="bg-white rounded-2xl overflow-hidden">
        <FlashSaleHeader />
        <div className="bg-white overflow-hidden">
          <FlashSaleTabs tabs={tabs} />
          <FlashSaleCountdown />
          <ProductSlider
            products={products}
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={nextSlide}
            onPrev={prevSlide}
            onSetPage={setCurrentPage}
            isFlashSale={true}
          />
        </div>
      </div>
    </section>
  );
}
