// Tự động quản lý việc gọi API lấy sản phẩm từ Odoo.
// Xử lý trạng thái isLoading, error và tự động ánh xạ dữ liệu sang định dạng mà Frontend yêu cầu.
import { useState, useEffect } from "react";
import { odooGetProducts } from "@/services/odoo";
import { Product, OdooProduct } from "@/types";

interface UseProductsProps {
  category_id?: number;
  limit?: number;
  search?: string;
}

export function useProducts({
  category_id,
  limit = 10,
  search,
}: UseProductsProps = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const data = await odooGetProducts({ category_id, limit, search });

        const mappedProducts = data.products.map((p: OdooProduct) => ({
          id: p.id,
          name: p.name,
          price: p.list_price,
          originalPrice: p.list_price * 1.25, // Mocking original price
          discount: 25, // Mocking discount
          image_url: p.image_url,
          brand: p.categ_id?.name || "MedStore",
        }));

        setProducts(mappedProducts);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch products")
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [category_id, limit, search]);

  return { products, isLoading, error };
}
