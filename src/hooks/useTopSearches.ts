import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "search_counts";
const EVENT_KEY = "top_searches_updated";

function getTopSearchesFromStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const counts: Record<string, number> = stored ? JSON.parse(stored) : {};

    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([term]) => term);
  } catch (error) {
    console.error("Error parsing search counts:", error);
    return [];
  }
}

export function useTopSearches() {
  const [topSearches, setTopSearches] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTopSearches(getTopSearchesFromStorage());
  }, []);

  const refresh = useCallback(() => {
    setTopSearches(getTopSearchesFromStorage());
  }, []);

  // Event listeners
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        refresh();
      }
    };

    const handleCustomEvent = () => {
      refresh();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(EVENT_KEY, handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(EVENT_KEY, handleCustomEvent);
    };
  }, [refresh]);

  const recordSearch = useCallback((term: string) => {
    if (!term.trim()) return;

    try {
      const normalizedTerm = term.trim(); // Keep case or lower? Usually lower for aggregation but display might want original. Let's do case-insensitive aggregation but store display?
      // User request implies simple text. Let's stick to simple "term" as key.
      // Better: capitalization matters for display. Let's standardize to Title Case or just store as is.
      // For simplicity and "Tra cuu hang dau" feeling, let's just capitalize first letter for display, store lower case?
      // No, let's just use the term as typed for now, or match existing keys case-insensitively.

      const stored = localStorage.getItem(STORAGE_KEY);
      const counts: Record<string, number> = stored ? JSON.parse(stored) : {};

      // key check (case insensitive)
      let targetKey = normalizedTerm;
      const existingKey = Object.keys(counts).find(
        (k) => k.toLowerCase() === normalizedTerm.toLowerCase()
      );
      if (existingKey) {
        targetKey = existingKey;
      }

      counts[targetKey] = (counts[targetKey] || 0) + 1;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
      window.dispatchEvent(new Event(EVENT_KEY));
    } catch (error) {
      console.error("Error saving search count:", error);
    }
  }, []);

  return { topSearches, recordSearch };
}
