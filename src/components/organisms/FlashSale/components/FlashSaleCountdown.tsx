export function FlashSaleCountdown() {
  return (
    <div className="p-6 flex items-center gap-4">
      <div className="text-sm font-bold text-slate-800 uppercase tracking-wide">
        Kết thúc sau
      </div>
      <div className="flex gap-2 items-center">
        {["07", "04", "46"].map((time, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="bg-[#FF424E] text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl">
              {time}
            </span>
            {i < 2 && (
              <span className="text-[#FF424E] font-black text-2xl">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
