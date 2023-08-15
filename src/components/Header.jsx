import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/svg/logo-no-background.svg";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <div className="md:hidden">
        <div className="flex flex-col box bg-white items-center p-5 pokemonFont border-4 border-white w-full">
          <div className="w-full flex flex-row justify-between ">
            <div className="w-36">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-xl focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="flex flex-col box border-4 bg-white absolute top-20 right-2 items-center w-1/2 pt-4 pb-4 space-y-2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/about" className="hover:underline ">
                About
              </Link>
              <Link to="/projects" className="hover:underline ">
                Projects
              </Link>
              <Link to="/services" className="hover:underline ">
                Services
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="box bg-white w-full h-20 hidden md:flex flex-row items-center justify-between pl-2 pr-2 lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 pokemonFont border-4 border-white">
        <div className="w-24 xl:w-36">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="flex flex-row justify-between space-x-5 lg:space-x-10 lg:text-base xl:text-lg font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline  ">
            About
          </Link>
          <Link to="/projects" className="hover:underline ">
            Projects
          </Link>
          <Link to="/services" className="hover:underline ">
            Services
          </Link>
          <Link to="/contact" className="hover:underline ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
