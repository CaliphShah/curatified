import { useEffect } from "react";
import { useDashboardStore } from "@/store/useDashboardStore";
import Dummy from "../../assets/image.jpg";

const ProductModal = () => {
  const { selectedProduct, setSelectedProduct } = useDashboardStore();

  const closeModal = () => setSelectedProduct(null);

  // Scroll lock when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-fadeInUp"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <img
          src={Dummy || selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-64 object-cover rounded mb-4"
        />

        {/* Product details */}
        <h2 className="font-semibold text-xl mb-1">{selectedProduct.name}</h2>
        <p className="text-blue-600 font-medium text-lg mb-2">
          ₹{selectedProduct.price}
        </p>
        <p className="text-sm text-gray-600 pb-2">
          User Ratings: {selectedProduct.rating}/5
        </p>

        <p className="text-sm text-gray-600">{selectedProduct.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
