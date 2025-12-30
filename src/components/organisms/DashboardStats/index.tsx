import { DASHBOARD_STATS } from "@/constants/data";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {DASHBOARD_STATS.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2 hover:shadow-md transition-shadow"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {stat.label}
          </p>
          <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
