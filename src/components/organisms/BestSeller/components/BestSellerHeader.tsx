"use client";

interface BestSellerHeaderProps {
  title: string;
}

export function BestSellerHeader({ title }: BestSellerHeaderProps) {
  return (
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-full max-w-fit px-4">
      <div className="bg-[#FF0000] text-white font-bold text-lg md:text-xl px-12 py-3.5 rounded-xl shadow-lg uppercase tracking-wide border-2 border-white/20 whitespace-nowrap">
        {title}
      </div>
    </div>
  );
}
