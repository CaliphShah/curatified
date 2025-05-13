import { useDashboardStore } from '@/store/useDashboardStore'
import type { Product } from '@/utils/constants'
import Dummy from '../../assets/image.jpg'
import { Button } from '../ui/button'

const ProductCard = ({ product }: { product: Product }) => {
  const setSelectedProduct = useDashboardStore(s => s.setSelectedProduct)

  return (
    <div
      className="bg-white shadow rounded p-4 hover:shadow-lg transition"
      onClick={() => setSelectedProduct(product)}
    >
      <img
        src={Dummy || product.image}
        alt={product.name}
        height={60}
        width={20}
        className="h-40 w-full object-cover mb-2 rounded"
        loading="lazy"
      />
      <h3 className="font-semibold truncate text-center">{product.name}</h3>
      <p className="text-md text-center text-gray-600">₹{product.price}</p>
      <Button
        className="text-slate-300 text-xs mt-2 !bg-teal-800 hover:!bg-teal-600 ms-4"
        onClick={(e) => {
          e.stopPropagation();  // Prevent triggering the card click event
          setSelectedProduct(product); // Set selected product
        }}
      >
        View Details
      </Button>
    </div>
  )
}

export default ProductCard
