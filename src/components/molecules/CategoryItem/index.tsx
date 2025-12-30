import Link from "next/link";
import * as React from "react";

interface CategoryItemProps {
  label: string;
  icon: React.ElementType; // Changed from ReactNode to React.ElementType
  href?: string;
}

export function CategoryItem({ icon: Icon, label, href }: CategoryItemProps) {
  return (
    <Link href={href || "#"}>
      <div className="group hover-lift bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-linear-to-br group-hover:from-primary/20 group-hover:to-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="w-8 h-8 text-primary group-hover:text-primary-vibrant transition-colors duration-300" />
          </div>
          <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors duration-300 text-center">
            {label}
          </span>
        </div>
      </div>
    </Link>
  );
}
