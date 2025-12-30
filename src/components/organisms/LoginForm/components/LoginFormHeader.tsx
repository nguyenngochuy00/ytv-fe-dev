import { CardDescription, CardHeader } from "@/components/atoms/Card";

export function LoginFormHeader() {
  return (
    <CardHeader className="space-y-4 pb-8 pt-8 px-8 bg-slate-50/50 border-b flex flex-col items-center">
      <CardDescription className="text-center font-medium">
        Chào mừng bạn quay lại với MedStore
      </CardDescription>
    </CardHeader>
  );
}
