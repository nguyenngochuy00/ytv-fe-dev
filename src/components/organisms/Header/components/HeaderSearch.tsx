"use client";

import { Search, X, Mic, Camera } from "lucide-react";
import { Input } from "@/components/atoms/Input";
import { createPortal } from "react-dom";
import { useSearchLogic } from "@/hooks";
import { HeaderSearchPopup } from "./HeaderSearchPopup";

export function HeaderSearch() {
  const {
    isFocused,
    setIsFocused,
    searchTerm,
    setSearchTerm,
    searchHistory,
    topSearches,
    isLoading,
    filteredProducts,
    inputRef,
    wrapperRef,
    handleSearch,
    clearHistory,
    removeItem,
  } = useSearchLogic();

  return (
    <>
      {/* Backdrop */}
      {isFocused &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" />,
          document.body
        )}

      {/* Main Search Container */}
      <div
        ref={wrapperRef}
        className={`flex-1 max-w-2xl relative transition-all duration-300 ${
          isFocused ? "z-50" : "z-30"
        }`}
      >
        <div className="relative group">
          <Input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(searchTerm)}
            placeholder="Tìm tên dụng cụ, vật tư, thiết bị y tế..."
            className="bg-white text-slate-900 placeholder:text-slate-400 pl-11 pr-[140px] h-10 w-full rounded-full border-none shadow-sm text-sm focus-visible:ring-2 focus-visible:ring-secondary transition-all font-medium relative z-10"
          />

          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10">
            <Search size={20} />
          </div>

          {/* Right Actions */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10">
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  inputRef.current?.focus();
                }}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
              >
                <X size={16} />
              </button>
            )}

            <button className="text-slate-400 hover:text-primary p-1.5 rounded-full hover:bg-slate-50 transition-colors">
              <Mic size={18} />
            </button>

            <button className="text-slate-400 hover:text-primary p-1.5 rounded-full hover:bg-slate-50 transition-colors mr-1">
              <Camera size={18} />
            </button>
          </div>
        </div>

        {/* Search Popup */}
        {isFocused && (
          <HeaderSearchPopup
            searchTerm={searchTerm}
            searchHistory={searchHistory}
            topSearches={topSearches}
            isLoading={isLoading}
            filteredProducts={filteredProducts}
            handleSearch={handleSearch}
            clearHistory={clearHistory}
            removeItem={removeItem}
            setIsFocused={setIsFocused}
          />
        )}
      </div>
    </>
  );
}
