import { DashboardSidebar } from "@/components/organisms/DashboardSidebar";
import { DashboardHeader } from "@/components/organisms/DashboardHeader";

interface DashboardTemplateProps {
  children: React.ReactNode;
  userName: string;
}

export function DashboardTemplate({
  children,
  userName,
}: DashboardTemplateProps) {
  return (
    <div className="min-h-screen bg-[#F4F7F7] flex overflow-hidden">
      {/* Sidebar - Fixed on the left */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <DashboardHeader userName={userName} />

        <div className="p-8 space-y-8 animate-slow-fade">{children}</div>
      </main>
    </div>
  );
}
