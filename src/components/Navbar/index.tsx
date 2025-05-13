import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className=" bg-[#ffffff] border-b border-gray-200 shadow-xl w-2/3 px-2 rounded-4xl h-24">
      {/* Logo & Brand */}
      <Link to="/home" className="flex justify-center gap-2">
        <img src={Logo} alt="Logo" className="h-24 w-auto" />
        <span
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="flex items-center  text-5xl  text-teal-800 "
        >
          Curatify
        </span>
      </Link>
    </header>
  );
};

export default Navbar;
