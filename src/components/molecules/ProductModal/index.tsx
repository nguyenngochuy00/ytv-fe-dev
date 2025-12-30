"use client";

import { X, Minus, Plus, Truck } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/atoms/Button";
import { useCartStore } from "@/store/useCartStore";
import { CartNotification } from "@/components/molecules/CartNotification";
import { formatPrice } from "@/lib/formatPrice";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number | string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image_url?: string;
  };
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  // Prevent scrolling when modal is open but keep scrollbar visible
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Add item to cart
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        image_url: product.image_url,
      },
      quantity
    );

    // Close modal first
    onClose();

    // Show notification after modal closes
    setTimeout(() => {
      setShowNotification(true);
    }, 150);

    // Reset quantity
    setQuantity(1);
  };

  // Only render modal on client-side
  if (!isOpen || typeof window === "undefined") {
    return (
      <>
        <CartNotification
          isVisible={showNotification}
          productName={product.name}
          productImage={product.image_url}
          productPrice={product.price}
          productOriginalPrice={product.originalPrice}
          quantity={quantity}
          onClose={() => setShowNotification(false)}
        />
      </>
    );
  }

  const modalContent = (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-0 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Chọn sản phẩm</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 pt-4 flex flex-col md:flex-row gap-8">
          {/* Left: Product Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-dashed border-primary/20 p-2 bg-slate-50">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                <Image
                  src={product.image_url || "/placeholder-product.png"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-bold w-fit mb-4">
              <Truck size={14} />
              Miễn phí vận chuyển cho mọi đơn hàng 0đ
            </div>

            <h1 className="text-xl font-bold text-slate-900 leading-snug mb-4">
              {product.name}
            </h1>

            {product.discount && (
              <div className="mb-2">
                <span className="bg-red-500 text-white text-xs font-black px-1.5 py-0.5 rounded uppercase">
                  Giảm {product.discount}%
                </span>
              </div>
            )}

            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-black text-primary">
                {formatPrice(product.price)}đ
              </span>
              <span className="text-[11px] text-primary font-bold">/ Hộp</span>
            </div>

            {product.originalPrice && (
              <div className="text-[11px] text-slate-400 line-through font-medium mb-6">
                {formatPrice(product.originalPrice)}đ
              </div>
            )}

            <div className="mb-8">
              <p className="text-sm font-bold text-slate-800 mb-3">Số lượng</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-full p-1 w-fit bg-slate-50">
                  <button
                    onClick={handleDecrease}
                    className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-10 text-center font-bold text-slate-800">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <Button className="w-full gradient-primary shimmer-effect text-white py-4 text-base font-black rounded-xl border-none shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Mua ngay
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/5 py-4 text-base font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all hover:shadow-md"
              >
                Thêm vào giỏ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal using portal to document body
  return (
    <>
      {createPortal(modalContent, document.body)}
      <CartNotification
        isVisible={showNotification}
        productName={product.name}
        productImage={product.image_url}
        productPrice={product.price}
        productOriginalPrice={product.originalPrice}
        quantity={quantity}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
}
