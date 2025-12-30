import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16 pb-12 pt-20">
      <div className="max-w-[1232px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-8">
          <Link href="/" className="flex flex-col items-start gap-1">
            <Image
              src="/images/logo2.jpg"
              alt="MedStore Logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            MEDSTORE là cửa hàng thiết bị y tế online và offline, chuyên cung
            cấp các sản phẩm thiết bị y tế gia đình, thiết bị y tế bệnh viện,
            vật tư y tế và các sản phẩm chăm sóc sức khỏe mẹ và bé.
          </p>
          <div className="flex gap-4">
            {["f", "y", "in"].map((social) => (
              <div
                key={social}
                className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer font-black shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                {social}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-black text-sm uppercase tracking-[0.2em] text-primary">
            VỀ MEDSTORE
          </h4>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
              Giới thiệu công ty
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
              Hệ thống cửa hàng
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
              Tuyển dụng MedStore
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
              Giá trị cốt lõi
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-black text-sm uppercase tracking-[0.2em] text-primary">
            CHÍNH SÁCH
          </h4>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li className="hover:text-primary transition-colors cursor-pointer">
              Chính sách giao hàng
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Chính sách đổi trả
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Chính sách bảo mật
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Điều khoản sử dụng
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-black text-sm uppercase tracking-[0.2em] text-primary">
            LIÊN HỆ
          </h4>
          <div className="space-y-5 text-sm text-slate-500 font-semibold">
            <p className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-vibrant shrink-0" />
              Số 29, Lô A10, KĐT Lê Trọng Tấn - Geleximco, An Khánh - Hoài Đức -
              Hà Nội
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} className="text-primary-vibrant shrink-0" />
              Hotline: 0981943599
            </p>
            <p className="flex items-end gap-3">
              <Mail size={20} className="text-primary-vibrant shrink-0" />
              medstore.lienhe@gmail.com
            </p>
            <div className="bg-linear-to-br from-slate-50 to-white p-6 rounded-3xl space-y-4 border border-slate-100 shadow-inner">
              <span className="text-[10px] text-primary font-black uppercase tracking-widest">
                Ưu đãi MEDSTORE mới nhất
              </span>
              <div className="flex flex-col gap-3">
                <Input
                  placeholder="Email của bạn"
                  className="h-10 bg-white rounded-xl border-slate-200 focus:border-secondary"
                />
                <Button
                  size="sm"
                  className="h-10 w-full bg-primary hover:bg-primary-vibrant text-white font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  Đăng ký nhận tin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto px-4 mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-400 font-black uppercase tracking-[0.25em]">
        <p>© 2025 MEDSTORE GLOBAL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <span className="hover:text-primary transition-colors cursor-pointer">
            ATM card
          </span>
          <span className="hover:text-primary transition-colors cursor-pointer">
            Visa / Mastercard
          </span>
          <span className="hover:text-primary transition-colors cursor-pointer">
            MoMo / ZaloPay
          </span>
        </div>
      </div>
    </footer>
  );
}
