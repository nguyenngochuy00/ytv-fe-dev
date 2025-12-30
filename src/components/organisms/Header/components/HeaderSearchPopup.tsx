import { History, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types";

interface HeaderSearchPopupProps {
  searchTerm: string;
  searchHistory: string[];
  topSearches: string[];
  isLoading: boolean;
  filteredProducts: Product[];
  handleSearch: (term: string) => void;
  clearHistory: () => void;
  removeItem: (e: React.MouseEvent, item: string) => void;
  setIsFocused: (focused: boolean) => void;
}

export function HeaderSearchPopup({
  searchTerm,
  searchHistory,
  topSearches,
  isLoading,
  filteredProducts,
  handleSearch,
  clearHistory,
  removeItem,
  setIsFocused,
}: HeaderSearchPopupProps) {
  return (
    <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
      {!searchTerm ? (
        <div className="p-4">
          {searchHistory.length > 0 ? (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <History size={16} className="text-slate-400" />
                  Lịch sử tìm kiếm
                </h3>
                <button
                  onClick={clearHistory}
                  className="text-xs text-blue-500 hover:text-blue-600 hover:underline"
                >
                  Xóa tất cả
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSearch(item)}
                    className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors group border border-transparent hover:border-slate-200"
                  >
                    <span>{item}</span>
                    <button
                      onClick={(e) => removeItem(e, item)}
                      className="text-slate-300 hover:text-red-500 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-slate-400 text-sm">
              Chưa có lịch sử tìm kiếm
            </div>
          )}

          {topSearches.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3">
                Tra cứu hàng đầu
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSearches.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 hover:text-primary hover:border-primary transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="py-2">
          {isLoading ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              Đang tìm kiếm...
            </div>
          ) : filteredProducts.length > 0 ? (
            <div>
              <div className="px-4 py-2 border-b border-slate-50">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Sản phẩm gợi ý
                </h4>
              </div>
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {filteredProducts.map((product) => (
                  <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    onClick={() => {
                      handleSearch(product.name);
                      setIsFocused(false);
                    }}
                  >
                    <div className="flex gap-4 p-3 hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0">
                      <div className="w-12 h-12 bg-white border border-slate-100 rounded-lg shrink-0 overflow-hidden p-1">
                        <Image
                          src={
                            product.image ||
                            product.image_url ||
                            "/placeholder.png"
                          }
                          alt={product.name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h4 className="text-sm font-medium text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-primary font-bold text-sm">
                            {formatPrice(product.price)}đ
                          </span>
                          {product.originalPrice &&
                            product.originalPrice > product.price && (
                              <span className="text-xs text-slate-400 line-through">
                                {formatPrice(product.originalPrice)}đ
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                onClick={() => handleSearch(searchTerm)}
                className="p-3 text-center text-sm text-primary font-medium hover:underline cursor-pointer border-t border-slate-50 bg-slate-50/50"
              >
                Xem tất cả kết quả cho &quot;{searchTerm}&quot;
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-slate-500 text-sm">
              Không tìm thấy sản phẩm nào
            </div>
          )}
        </div>
      )}
    </div>
  );
}
