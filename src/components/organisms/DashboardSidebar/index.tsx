"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  ShoppingBag,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { useAuth } from "@/hooks";

export function DashboardSidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 border-b flex justify-center">
        <Link href="/" className="relative w-36 h-10">
          <Image
            src="/images/logo2.jpg"
            alt="MedStore Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 bg-primary/5 text-primary rounded-xl font-bold text-sm"
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors"
        >
          <ShoppingBag size={20} /> Đơn hàng
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors"
        >
          <User size={20} /> Hồ sơ của tôi
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors"
        >
          <Settings size={20} /> Cài đặt
        </Link>
      </nav>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-rose-500 hover:text-rose-600 hover:bg-rose-50 font-bold rounded-xl"
          onClick={() => logout()}
        >
          <LogOut size={20} /> Đăng xuất
        </Button>
      </div>
    </aside>
  );
}
