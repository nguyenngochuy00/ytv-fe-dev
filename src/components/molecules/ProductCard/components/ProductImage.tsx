import Image from "next/image";
import { Pill } from "lucide-react";

interface ProductImageProps {
  image_url?: string;
  name: string;
  discount?: number;
}

export function ProductImage({ image_url, name, discount }: ProductImageProps) {
  return (
    <div className="aspect-square bg-white relative shrink-0">
      {discount && (
        <div className="absolute top-0 left-0 bg-[#FF424E] text-white text-[11px] px-3 py-1.5 font-bold rounded-br-2xl z-10 shadow-sm">
          -{discount}%
        </div>
      )}
      <div className="w-full h-full flex items-center justify-center p-6 relative">
        {image_url ? (
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <Pill className="w-20 h-20 text-slate-100 group-hover:text-[#2B61E3]/20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />
        )}
      </div>
    </div>
  );
}
