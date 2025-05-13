import Navbar from "../Navbar";
import ProductFilters from "../ProductFilters/productFilters";
import ProductGrid from "../ProductGrid/productGrid";

const Home = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full flex flex-col items-center bg-white">
        <Navbar />
        <ProductFilters />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Home;
