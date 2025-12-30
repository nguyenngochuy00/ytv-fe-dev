"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/formatPrice";

export function CartDropdown() {
  const { items, removeItem } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Lock scroll when dropdown is open
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

  if (items.length === 0) {
    return (
      <div
        className="absolute right-0 top-full mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <p className="text-center text-slate-400 py-8">Giỏ hàng trống</p>
      </div>
    );
  }

  return (
    <div
      className="absolute right-0 top-full mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-slate-500">Tạm tính:</span>
          <span className="text-lg font-black text-primary">
            {formatPrice(subtotal)}đ
          </span>
          <span className="text-sm text-slate-400">
            ({items.length} sản phẩm)
          </span>
        </div>
        <Link
          href="/cart"
          className="text-sm text-primary hover:text-primary-vibrant font-medium transition-colors"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Scrollable Product List */}
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        <div className="p-3 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-3 hover:bg-slate-50 rounded-xl transition-all duration-200 group/item relative"
            >
              {/* Product Image */}
              <div className="w-[100px] h-[100px] relative shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                <Image
                  src={item.image_url || "/placeholder-product.png"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                {/* Product Name */}
                <h4 className="text-sm font-bold text-slate-900 line-clamp-2 mb-1 pr-6">
                  {item.name}
                </h4>

                {/* Variant Info (if available) */}
                <p className="text-xs text-slate-500 mb-2">
                  {/* You can add variant info here like "Đen / M" */}
                </p>

                {/* Price and Quantity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-black text-primary">
                      {formatPrice(item.price)}đ
                    </span>
                    <span className="text-[11px] text-primary font-bold">
                      / Hộp
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {formatPrice(item.originalPrice)}đ
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-slate-600">
                    x{item.quantity}
                  </span>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100"
                aria-label="Xóa sản phẩm"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
          margin: 8px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
