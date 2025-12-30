import { useState, useEffect, useRef } from "react";
import { useProducts, useDebounce, useTopSearches } from "@/hooks";
import { useRouter } from "next/navigation";

export function useSearchLogic() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("search_history");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { topSearches, recordSearch } = useTopSearches();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch real products based on search
  const { products, isLoading } = useProducts({
    search: debouncedSearch,
    limit: 5,
  });

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when search is focused
  useEffect(() => {
    if (isFocused) {
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
  }, [isFocused]);

  const handleSearch = (term: string) => {
    if (!term.trim()) return;

    // Save to history
    const newHistory = [term, ...searchHistory.filter((h) => h !== term)].slice(
      0,
      5
    );
    setSearchHistory(newHistory);
    localStorage.setItem("search_history", JSON.stringify(newHistory));

    // Record top search
    recordSearch(term);

    setIsFocused(false);
    setSearchTerm(term);
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("search_history");
  };

  const removeItem = (e: React.MouseEvent, item: string) => {
    e.stopPropagation();
    const newHistory = searchHistory.filter((i) => i !== item);
    setSearchHistory(newHistory);
    localStorage.setItem("search_history", JSON.stringify(newHistory));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return {
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
  };
}
