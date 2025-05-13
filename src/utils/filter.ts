import type { Product } from "./constants";

export const filterProducts = (products: Product[], category: string): Product[] => {
  if (!category) return products;
  return products.filter(p => p.category === category);
};