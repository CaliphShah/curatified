import allProducts from "@/data/products.json";
import type { Product } from "@/utils/constants";

export const fetchProductsPage = async ({
  page,
  limit,
  filters,
  search,
}: {
  page: number;
  limit: number;
  filters: {
    category: string | null;
    priceRange: [number, number];
  };
  search: string;
}): Promise<{ data: Product[]; hasMore: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = allProducts;

      if (filters.category) {
        filtered =
          filters.category === "all"
            ? filtered
            : filtered.filter((p) => p.category === filters.category);
      }

      filtered = filtered.filter(
        (p) =>
          p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );

      if (search.trim()) {
        filtered = filtered.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      const start = (page - 1) * limit;
      const end = start + limit;
      const pageData = filtered.slice(start, end);

      resolve({
        data: pageData,
        hasMore: end < filtered.length,
      });
    }, 1000); // simulate delay
  });
};
