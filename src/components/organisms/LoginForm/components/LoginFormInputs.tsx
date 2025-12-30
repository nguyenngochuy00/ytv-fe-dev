import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface LoginFormInputsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export function LoginFormInputs({
  email,
  setEmail,
  password,
  setPassword,
}: LoginFormInputsProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-xs font-bold uppercase tracking-wider text-slate-500"
        >
          Email / Số điện thoại
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          required
          className="h-12 border-slate-200 focus:ring-primary/20 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label
            htmlFor="password"
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Mật khẩu
          </Label>
          <Link
            href="#"
            className="text-[10px] font-bold text-primary hover:underline uppercase"
          >
            Quên mật khẩu?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            className="h-12 border-slate-200 focus:ring-primary/20 rounded-xl pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
