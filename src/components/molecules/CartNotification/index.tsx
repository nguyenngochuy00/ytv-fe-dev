"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";

interface CartNotificationProps {
  isVisible: boolean;
  productName: string;
  productImage?: string;
  productPrice: number;
  productOriginalPrice?: number;
  quantity: number;
  onClose: () => void;
}

export function CartNotification({
  isVisible,
  productName,
  productImage,
  productPrice,
  productOriginalPrice,
  quantity,
  onClose,
}: CartNotificationProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match animation duration
  }, [onClose]);

  useEffect(() => {
    if (isVisible) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsClosing(false);
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, handleClose]);

  if (!isVisible || typeof window === "undefined") return null;

  const notificationContent = (
    <div
      className={`fixed top-4 right-4 z-9999 ${
        isClosing ? "animate-slide-up-out" : "animate-slide-in-right"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 w-[380px] max-w-[calc(100vw-2rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800">
            Thêm vào giỏ hàng thành công
          </h3>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-all duration-200 text-slate-400 hover:text-slate-600 hover:rotate-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex gap-3 mb-4">
          <div className="w-20 h-20 shrink-0 bg-slate-100 rounded-lg overflow-hidden relative hover-lift">
            <Image
              src={productImage || "/placeholder-product.png"}
              alt={productName}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-slate-800 line-clamp-2 mb-1">
              {productName}
            </h4>
            <p className="text-xs text-slate-500 mb-2">Số lượng: {quantity}</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-black text-primary">
                {formatPrice(productPrice)}đ
              </span>
              <span className="text-[11px] text-primary font-bold">/ Hộp</span>
            </div>
            {productOriginalPrice && (
              <div className="text-[11px] text-slate-400 line-through font-medium mt-0.5">
                {formatPrice(productOriginalPrice)}đ
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Link href="/cart">
          <button
            onClick={handleClose}
            className="w-full gradient-primary shimmer-effect text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingCart size={18} />
            XEM GIỎ HÀNG
          </button>
        </Link>
      </div>
    </div>
  );

  return createPortal(notificationContent, document.body);
}
