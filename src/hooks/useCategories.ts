// Quản lý việc lấy danh sách danh mục sản phẩm một cách tập trung.
import { useState, useEffect } from "react";
import { odooGetCategories } from "@/services/odoo";
import { OdooCategory } from "@/types";

export function useCategories(parentId?: number) {
  const [categories, setCategories] = useState<OdooCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      setIsLoading(true);
      try {
        const data = await odooGetCategories(parentId);
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch categories")
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, [parentId]);

  return { categories, isLoading, error };
}
