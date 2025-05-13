import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDashboardStore } from "@/store/useDashboardStore";
import { categories } from "@/utils/constants";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const ProductFilters = () => {
  const {
    filters,
    search,
    setCategory,
    setPriceRange,
    resetFilters,
    setSearch,
  } = useDashboardStore();

  const [showFilters, setShowFilters] = useState(false);

  const handleMinChange = (val: number[]) => {
    const newMin = val[0];
    const currentMax = filters.priceRange[1];

    if (newMin <= currentMax) {
      setPriceRange([newMin, currentMax]);
    } else {
      throw new Error(
        `Minimum price ₹${newMin} cannot be greater than maximum price ₹${currentMax}`
      );
    }
  };

  const handleMaxChange = (val: number[]) => {
    const newMax = val[0];
    const currentMin = filters.priceRange[0];

    if (newMax >= currentMin) {
      setPriceRange([currentMin, newMax]);
    } else {
      throw new Error(
        `Maximum price ₹${newMax} cannot be less than minimum price ₹${currentMin}`
      );
    }
  };

  const handleReset = () => {
    resetFilters();
    setSearch("");
    setPriceRange([0, 1000]);
  };

  return (
    <>
      {/* Search Box */}
      <div className="flex justify-start pt-4">
        <div className="relative w-full sm:w-[300px] ">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      <div className="sm:hidden flex justify-end justify-items-end mt-3">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="!bg-teal-600 text-white px-1 rounded-md text-sm"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter section */}
      <div
        className={`${showFilters ? "block" : "hidden"}  sm:flex w-full justify-between bg-white p-4 rounded-md shadow-md space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row`}
      >
        {/* Category Filter */}
        <div className="w-full sm:w-1/2">
          <label className="text-sm font-medium block mb-1">Category</label>
          <Select
            onValueChange={(value) => setCategory(value)}
            value={filters.category || ""}
          >
            <SelectTrigger className="w-full bg-gradient-to-r from-[#f0f4f8] to-[#e4ebf3] border border-gray-300 rounded-md shadow-sm">
              <SelectValue
                placeholder="Select category"
                className="text-gray-700"
              />
            </SelectTrigger>
            <SelectContent className="bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg">
              <SelectItem value="all" className="hover:bg-teal-100">
                All
              </SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat} className="hover:bg-teal-100">
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Filters */}
        <div className="w-full sm:w-auto pt-4">
          <label className="text-sm font-medium block mb-2">
            Min Price: ₹{filters.priceRange[0]}
          </label>
          <Slider
            value={[filters.priceRange[0]]}
            min={0}
            max={1000}
            step={10}
            onValueChange={handleMinChange}
          />
        </div>

        <div className="w-full sm:w-auto pt-4">
          <label className="text-sm font-medium block mb-2">
            Max Price: ₹{filters.priceRange[1]}
          </label>
          <Slider
            value={[filters.priceRange[1]]}
            min={0}
            max={1000}
            step={10}
            onValueChange={handleMaxChange}
          />
        </div>

        {/* Reset Button */}
        <div className="w-full sm:w-auto pt-2 justify-center flex">
          <button
            onClick={handleReset}
            className="text-sm text-white !bg-teal-600 hover:underline px-3 py-1 rounded"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
