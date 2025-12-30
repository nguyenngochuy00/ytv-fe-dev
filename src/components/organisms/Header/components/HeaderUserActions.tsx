"use client";

import Link from "next/link";
import { ShoppingCart, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks";
import { useCartStore } from "@/store/useCartStore";
import { CartDropdown } from "@/components/organisms/CartDropdown";
import { useState, useEffect } from "react";

export function HeaderUserActions() {
  const { user, logout } = useAuth();
  // Subscribe to cart items directly for reactive updates
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Prevent hydration mismatch
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="flex items-center gap-3 lg:gap-4 shrink-0">
        <div className="w-[100px] h-9 bg-white/10 rounded-full animate-pulse" />
        <div className="w-[124px] h-11 bg-secondary rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 lg:gap-4 shrink-0">
      {user ? (
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors group"
          >
            <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <User size={20} />
            </div>
            <span className="hidden xl:inline text-[13px] font-semibold group-hover:text-yellow-300 transition-colors max-w-[150px] truncate">
              {user.name}
            </span>
          </Link>
          <button
            onClick={logout}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            title="Đăng xuất"
          >
            <LogOut size={18} />
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors group"
        >
          <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
            <User size={20} />
          </div>
          <span className="hidden xl:inline text-[13px] font-semibold group-hover:text-yellow-300 transition-colors">
            Đăng nhập
          </span>
        </Link>
      )}

      <div className="relative group">
        <Link
          href="/cart"
          className="flex items-center gap-2 gradient-secondary shimmer-effect text-primary px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(255,209,64,0.3)] border border-yellow-500/10 hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,209,64,0.4)]"
        >
          <div className="relative">
            <ShoppingCart
              size={20}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-3 bg-linear-to-r from-rose-500 to-rose-600 text-white min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-secondary shadow-lg animate-pulse">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[13px] font-bold ml-0.5">Giỏ hàng</span>
        </Link>

        <CartDropdown />
      </div>
    </div>
  );
}
