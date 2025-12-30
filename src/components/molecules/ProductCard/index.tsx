"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Tooltip } from "@/components/atoms/Tooltip";
import { ProductImage } from "./components/ProductImage";
import { ProductPrice } from "./components/ProductPrice";
import { ProductFlashSaleProgress } from "./components/ProductFlashSaleProgress";
import { ProductModal } from "@/components/molecules/ProductModal";

interface ProductCardProps {
  id: number | string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image?: string;
  image_url?: string;
  isFlashSale?: boolean;
  sold?: number;
  total?: number;
}

export function ProductCard({
  id,
  name,
  brand,
  price,
  originalPrice,
  discount,
  image_url,
  isFlashSale,
  sold = 0,
  total = 20,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover-lift hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative">
        <ProductImage image_url={image_url} name={name} discount={discount} />

        <div className="p-4 pt-2 pb-5 flex flex-col flex-1 gap-4">
          <div className="space-y-1">
            <Tooltip content={name}>
              <h3 className="text-sm font-bold h-15 line-clamp-3 text-slate-800 group-hover:text-primary transition-colors duration-300 leading-5 overflow-hidden text-ellipsis">
                {name}
              </h3>
            </Tooltip>
          </div>

          <div className="mt-auto space-y-4">
            <ProductPrice price={price} originalPrice={originalPrice} />

            {isFlashSale && (
              <ProductFlashSaleProgress sold={sold} total={total} />
            )}

            <Button
              onClick={handleOpenModal}
              className="w-full h-10 text-sm font-black rounded-2xl gradient-primary shimmer-effect text-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 border-none"
            >
              Chọn sản phẩm
            </Button>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={{
          id,
          name,
          brand,
          price,
          originalPrice,
          discount,
          image_url,
        }}
      />
    </>
  );
}
