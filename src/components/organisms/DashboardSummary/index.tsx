import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";

interface DashboardSummaryProps {
  userName: string;
}

export function DashboardSummary({ userName }: DashboardSummaryProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="font-black text-slate-800 tracking-wide uppercase text-sm">
          Chào mừng quay lại, {userName}!
        </h3>
        <Badge
          variant="outline"
          className="border-[#2E7D7D] text-[#2E7D7D] font-bold"
        >
          LIVE UPDATES
        </Badge>
      </div>
      <div className="p-12 text-center space-y-4">
        <div className="w-24 h-24 bg-[#2E7D7D]/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
        <h4 className="text-2xl font-black text-slate-900">
          Thông tin hệ thống
        </h4>
        <p className="text-slate-500 max-w-md mx-auto font-medium">
          Bạn hiện đang đăng nhập vào hệ thống quản trị MedStore. Toàn bộ dữ
          liệu được đồng bộ trực tiếp từ Odoo Server.
        </p>
        <div className="pt-4 flex gap-3 justify-center">
          <Button className="rounded-xl font-bold px-8 bg-[#2E7D7D] hover:bg-[#246565]">
            XEM ĐƠN HÀNG
          </Button>
          <Button
            variant="outline"
            className="rounded-xl font-bold px-8 text-slate-600 border-slate-200"
          >
            HỖ TRỢ
          </Button>
        </div>
      </div>
    </div>
  );
}
