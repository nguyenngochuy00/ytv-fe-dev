import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import { ChevronDown } from "lucide-react";
import { CategoryMenu } from "./CategoryMenu";
import Link from "next/link";

export function HeaderNav() {
  return (
    <nav className="bg-primary hidden md:block border-t border-white/10">
      <div className="max-w-[1232px] mx-auto px-4 py-2">
        <div className="flex items-center gap-8">
          {/* Category Dropdown Button */}
          <div className="shrink-0">
            <CategoryMenu />
          </div>

          {/* Main Navigation Links */}
          <ul className="flex flex-1 items-center justify-between gap-4 text-[13px] font-bold text-white uppercase">
            {MAIN_NAV_ITEMS.map((item, i) => (
              <li key={i} className="relative group/nav">
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1 py-2 hover:text-secondary transition-colors"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className="opacity-70 group-hover/nav:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
