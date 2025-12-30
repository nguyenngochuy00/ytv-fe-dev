import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthTemplate } from "@/components/templates/AuthTemplate";
import { LoginForm } from "@/components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <AuthTemplate>
      {/* Central Login Card extracted as an Organism */}
      <LoginForm />

      {/* Helper Links beneath the card */}
      <div className="text-center mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Quay lại trang chủ
        </Link>
      </div>
    </AuthTemplate>
  );
}
