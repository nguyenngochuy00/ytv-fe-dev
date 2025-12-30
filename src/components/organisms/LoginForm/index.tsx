"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Card, CardContent } from "@/components/atoms/Card";
import { useAuth } from "@/hooks";
import { LoginFormHeader } from "./components/LoginFormHeader";
import { LoginFormInputs } from "./components/LoginFormInputs";
import { LoginFormFooter } from "./components/LoginFormFooter";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setToken, setUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToken(data.token);
        setUser(data.user);
        router.push("/dashboard");
      } else {
        setError(data.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại.");
      }
    } catch (err) {
      console.error(err);
      setError("Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-2xl shadow-primary/10 rounded-2xl overflow-hidden">
      <LoginFormHeader />
      <CardContent className="p-8">
        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs p-3 rounded-lg font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0"></span>
              {error}
            </div>
          )}

          <LoginFormInputs
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          <Button
            className="w-full h-12 text-sm font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] gradient-primary text-white"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "ĐANG ĐĂNG NHẬP..." : "ĐĂNG NHẬP NGAY"}
          </Button>
        </form>

        <LoginFormFooter />
      </CardContent>
    </Card>
  );
}
