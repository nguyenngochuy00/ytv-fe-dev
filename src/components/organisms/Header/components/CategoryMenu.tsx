import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CATEGORIES } from "@/constants/categories";
import { Category } from "@/types/category";
import { CategoryMenuPanel } from "./CategoryMenuPanel";

export function CategoryMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative group/cat z-50"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Trigger Button */}
        <button className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors shadow-sm font-medium text-sm h-10">
          <Menu size={18} />
          <span className="font-bold">DANH MỤC</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        {/* Mega Menu Dropdown */}
        {isOpen && (
          <CategoryMenuPanel
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}
      </div>

      {/* Backdrop */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" />,
          document.body
        )}
    </>
  );
}
