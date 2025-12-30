import { ODOO_CONFIG } from "@/constants/config";
import { odooCall } from "./client";
import { OdooProduct, OdooCategory } from "@/types";

const { URL: ODOO_URL } = ODOO_CONFIG;

export async function odooGetProducts(params: {
  category_id?: number;
  search?: string;
  min_price?: number;
  max_price?: number;
  limit?: number;
  offset?: number;
  order?: string;
}) {
  const result = await odooCall("/api/products", params);
  if (!result?.success) {
    throw new Error(result?.error?.message || "Failed to fetch products");
  }
  // Transform image_url to absolute URL
  const products = result.data.products.map((p: OdooProduct) => ({
    ...p,
    image_url: p.image_url
      ? `${ODOO_URL.replace(/\/$/, "")}/${p.image_url.replace(/^\//, "")}`
      : null,
  }));
  return { ...result.data, products };
}

export async function odooGetProductDetail(productId: number) {
  const result = await odooCall(`/api/products/${productId}`);
  if (!result?.success) {
    throw new Error(result?.error?.message || "Failed to fetch product detail");
  }
  const data = result.data;
  if (data.image_url) {
    data.image_url = `${ODOO_URL.replace(/\/$/, "")}/${data.image_url.replace(
      /^\//,
      ""
    )}`;
  }
  return data;
}

export async function odooGetCategories(
  parentId?: number
): Promise<OdooCategory[]> {
  const result = await odooCall("/api/categories", { parent_id: parentId });
  if (!result?.success) {
    throw new Error(result?.error?.message || "Failed to fetch categories");
  }
  return result.data;
}
