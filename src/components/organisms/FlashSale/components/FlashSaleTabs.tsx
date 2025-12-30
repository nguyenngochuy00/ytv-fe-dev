interface Tab {
  time: string;
  status: string;
  active: boolean;
}

interface FlashSaleTabsProps {
  tabs: Tab[];
}

export function FlashSaleTabs({ tabs }: FlashSaleTabsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`p-4 text-center cursor-pointer transition-all duration-300 relative group
            ${tab.active ? "bg-[#FFE9E9]" : "bg-[#F8FAFC] hover:bg-slate-50"}`}
        >
          <div
            className={`font-black tracking-tight ${
              tab.active ? "text-[#FF424E]" : "text-slate-600"
            }`}
          >
            {tab.time}
          </div>
          <div
            className={`text-xs font-bold mt-1 ${
              tab.active ? "text-[#FF424E]" : "text-slate-400"
            }`}
          >
            {tab.status}
          </div>
          {tab.active && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF424E]"></div>
          )}
        </div>
      ))}
    </div>
  );
}
