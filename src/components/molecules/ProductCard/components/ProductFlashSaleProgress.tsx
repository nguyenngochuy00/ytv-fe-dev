import { Flame } from "lucide-react";

interface ProductFlashSaleProgressProps {
  sold: number;
  total: number;
}

export function ProductFlashSaleProgress({
  sold,
  total,
}: ProductFlashSaleProgressProps) {
  const progress = (sold / total) * 100;

  return (
    <div className="relative h-6 bg-[#FFC5C5] rounded-full overflow-hidden flex items-center justify-center group/progress">
      <div
        className="absolute left-0 top-0 h-full bg-[#FF424E] transition-all duration-1000"
        style={{ width: `${progress}%` }}
      />
      <div className="relative z-10 flex items-center gap-1.5 text-[10px] font-bold text-white italic tracking-tight">
        <Flame size={12} fill="currentColor" />
        {sold > 0 ? `Đã bán ${sold}/${total} suất` : "Ưu đãi giá sốc"}
      </div>
    </div>
  );
}
