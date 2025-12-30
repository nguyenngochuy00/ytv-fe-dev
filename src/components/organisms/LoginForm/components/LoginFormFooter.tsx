import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function LoginFormFooter() {
  return (
    <div className="mt-8 pt-8 border-t text-center space-y-4">
      <p className="text-xs text-slate-500 font-medium">
        Bạn chưa có tài khoản?{" "}
        <Link href="#" className="text-primary font-bold hover:underline">
          Đăng ký ngay
        </Link>
      </p>
      <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
        <ShieldCheck size={14} /> Bảo mật thông tin 100%
      </div>
    </div>
  );
}
