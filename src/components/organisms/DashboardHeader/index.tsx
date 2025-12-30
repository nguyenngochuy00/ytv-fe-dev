import { Bell } from "lucide-react";

interface DashboardHeaderProps {
  userName: string;
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="font-black text-xl text-slate-800 uppercase tracking-tight">
        Dashboard
      </h2>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-200 transition-colors">
          <Bell size={20} />
        </div>
        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-slate-900 leading-none">
              {userName}
            </p>
            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">
              Thành viên Bạc
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#2D7D7D] text-white flex items-center justify-center font-black">
            {userName.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}
