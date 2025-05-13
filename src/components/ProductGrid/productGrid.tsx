import { useCallback, useEffect, useState } from "react";
import { useDashboardStore } from "@/store/useDashboardStore";
import ProductCard from "../ProductCard/index";
import type { Product } from "@/utils/constants";
import { fetchProductsPage } from "@/api/fetch-product-api";
import ProductModal from "../ProductCard/productModal";

const PRODUCTS_PER_PAGE = 8;

const ProductGrid = () => {
  const { filters, search, page, setPage } = useDashboardStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    const { data, hasMore } = await fetchProductsPage({
      page,
      limit: PRODUCTS_PER_PAGE,
      filters,
      search,
    });
    setProducts((prev) => (page === 1 ? data : [...prev, ...data]));
    setHasMore(hasMore);
    setLoading(false);
  }, [page, filters, search]);

  // Reset products when filters/search changes
  useEffect(() => {
    setProducts([]);
    setPage(1);
  }, [filters, search, setPage]);

  useEffect(() => {
    loadProducts();
  }, [page, loadProducts]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (
        scrollTop + clientHeight >= scrollHeight - 200 &&
        hasMore &&
        !loading
      ) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, setPage]);

  const isEmpty = !loading && products.length === 0;

  return (
    <div className="pt-4 w-full h-full">
      <div className="space-y-6 animate-fadeIn">
        {/* Loading skeleton when first loading */}
        {loading && page === 1 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 w-full justify-items-center">
            {[...Array(PRODUCTS_PER_PAGE)].map((_, i) => (
              <div
                key={i}
                className="h-72 w-48 mb-2 bg-gray-200 rounded-xl animate-pulse transition-all duration-300"
              />
            ))}
          </div>
        ) : isEmpty ? (
          // No products available
          <div className="text-center text-gray-500 mt-12 text-lg animate-fadeIn">
            No products available for the selected filters.
          </div>
        ) : (
          // Product grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 transition-all duration-500 justify-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="h-72 w-48 mb-6 animate-fadeInUp opacity-0 animate-delay-[100ms]"
              >
                <ProductCard product={product} />
              </div>
            ))}
            <ProductModal />
          </div>
        )}

        {/* Loading spinner for next page */}
        {loading && page > 1 && (
          <div className="flex justify-center my-4">
            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
