import type { Product } from "@/utils/constants";
import { create } from "zustand";

interface Filters {
  category: string | null;
  priceRange: [number, number];
}

interface ProductDashboard {
  filters: Filters;
  page: number;
  search: string;
  selectedProduct: Product | null;
  setSearch: (query: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  setCategory: (category: string | null) => void;
  setPriceRange: (range: [number, number]) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

export const useDashboardStore = create<ProductDashboard>((set) => ({
  filters: {
    category: null,
    priceRange: [0, 1000],
  },
  page: 1,
  search: '',
  selectedProduct: null,
  setSearch: (search) => set({ search }),

  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setCategory: (category) =>
    set((state) => ({ filters: { ...state.filters, category } })),
  setPriceRange: (range) =>
    set((state) => ({
      filters: { ...state.filters, priceRange: range },
    })),
  setPage: (page) => set(() => ({ page })),
  resetFilters: () =>
    set(() => ({
      filters: { category: null, priceRange: [0, 1000] },
      page: 1,
    })),
}));
