import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";
import { CATEGORIES } from "@/constants/categories";
import { Category } from "@/types/category";

interface CategoryMenuPanelProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
}

export function CategoryMenuPanel({
  activeCategory,
  setActiveCategory,
}: CategoryMenuPanelProps) {
  return (
    <div className="absolute top-full left-0 pt-2 w-[1200px]">
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 flex overflow-hidden min-h-[500px]">
        {/* Left Sidebar */}
        <div className="w-[280px] bg-slate-50 border-r border-slate-100 py-2">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat)}
              className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${
                activeCategory.id === cat.id
                  ? "bg-white text-primary font-bold shadow-sm"
                  : "text-slate-600 hover:bg-white hover:text-primary"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-500">{cat.icon}</span>
                <span className="text-sm">{cat.name}</span>
              </div>
              {activeCategory.id === cat.id && <ChevronRight size={14} />}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 bg-white">
          {activeCategory.children && activeCategory.children.length > 0 ? (
            <div className="flex gap-8">
              {/* Sub Categories Grid */}
              <div className="w-[250px] shrink-0 space-y-2">
                {activeCategory.children.map((sub, idx) => (
                  <div
                    key={sub.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors border ${
                      idx === 0
                        ? "bg-blue-50/50 border-blue-100 text-primary font-bold"
                        : "hover:bg-slate-50 border-transparent text-slate-600"
                    }`}
                  >
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-blue-500 shadow-sm text-xs">
                      {idx === 0 ? "VIT" : "..."}
                    </div>
                    <span className="text-sm">{sub.name}</span>
                  </div>
                ))}
              </div>

              {/* Sub Items Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-3">
                  {activeCategory.children[0]?.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border boundary-slate-100 p-3 rounded-lg text-sm text-slate-600 hover:text-primary hover:border-blue-100 hover:shadow-sm cursor-pointer transition-all flex items-center gap-2"
                    >
                      <div className="w-8 h-8 bg-slate-50 rounded shrink-0"></div>
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Best Sellers */}
                {activeCategory.bestSellers &&
                  activeCategory.bestSellers.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-slate-800 flex items-center gap-2">
                          Bán chạy nhất{" "}
                          <span className="text-slate-300">|</span>
                          <Link
                            href="#"
                            className="text-xs text-blue-500 font-normal hover:underline"
                          >
                            Xem tất cả
                          </Link>
                        </h4>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        {activeCategory.bestSellers.map((product) => (
                          <Link
                            href="#"
                            key={product.id}
                            className="group block"
                          >
                            <div className="aspect-square bg-slate-50 rounded-lg mb-2 relative overflow-hidden border border-slate-100">
                              <Image
                                src={product.image || "/placeholder.png"}
                                alt={product.name}
                                fill
                                className="object-contain p-2 group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <h5 className="text-xs text-slate-700 font-medium line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                              {product.name}
                            </h5>
                            <p className="text-sm font-bold text-primary">
                              {formatPrice(product.price)}đ
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-4">
              <div className="p-4 bg-slate-50 rounded-full">
                {activeCategory.icon}
              </div>
              <span>Đang cập nhật nội dung cho {activeCategory.name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
