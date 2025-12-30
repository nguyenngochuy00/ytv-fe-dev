import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F4F7F7] text-slate-900 selection:bg-primary/20">
      <Header />

      <main className="max-w-[1232px] mx-auto px-4 py-6 space-y-8 animate-slow-fade">
        {children}
      </main>

      <Footer />
    </div>
  );
}
