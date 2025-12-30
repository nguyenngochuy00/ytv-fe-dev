import Link from "next/link";
import Image from "next/image";

interface AuthTemplateProps {
  children: React.ReactNode;
}

export function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F7F7] p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-primary/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="mb-8">
            <div className="relative w-64 h-20">
              <Image
                src="/images/logo2.jpg"
                alt="MedStore Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Form Container */}
        <div className="animate-slow-fade">{children}</div>
      </div>
    </div>
  );
}
