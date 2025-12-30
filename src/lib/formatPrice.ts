/**
 * Format price with dot (.) as thousand separator
 * Example: 1000000 -> "1.000.000"
 */
export function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Format price with currency symbol
 * Example: 1000000 -> "1.000.000đ"
 */
export function formatPriceWithCurrency(price: number): string {
  return `${formatPrice(price)}đ`;
}
