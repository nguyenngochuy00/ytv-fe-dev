import { formatPrice } from "@/lib/formatPrice";

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline gap-1.5">
        <span className="text-primary font-black text-xl">
          {formatPrice(price)}đ
        </span>
        <span className="text-[11px] text-primary font-bold">/ Hộp</span>
      </div>
      {originalPrice && (
        <div className="text-[11px] text-slate-400 line-through font-medium">
          {formatPrice(originalPrice)}đ
        </div>
      )}
    </div>
  );
}
