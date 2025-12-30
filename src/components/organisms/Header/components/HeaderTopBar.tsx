import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function HeaderTopBar() {
  return (
    <div className="bg-primary text-white py-1.5 hidden md:block border-b border-white/10 relative z-50">
      <div className="max-w-[1232px] mx-auto px-4 flex justify-between items-center text-[13px] font-medium">
        <div className="flex gap-4 items-center">
          <Link
            href="#"
            className="hover:text-yellow-300 flex items-center gap-1.5 transition-all duration-300"
          >
            Medstore kính chào Quý khách!{" "}
            <span className="font-bold ml-1">
              Mở cửa: 8:00 - 20:00 hàng ngày
            </span>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            href="#"
            className="hover:text-blue-100 flex items-center gap-1.5 transition-colors"
          >
            <MapPin size={14} /> Hệ thống cửa hàng
          </Link>
          <Link
            href="#"
            className="hover:text-blue-100 flex items-center gap-1.5 transition-colors"
          >
            <Phone size={14} /> Tư vấn ngay:{" "}
            <span className="font-bold">0981943599</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
