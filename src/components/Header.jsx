import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="box bg-white w-full h-20 flex flex-row justify-between items-center pl-20 pr-20 pokemonFont border-4 border-white">
      <Link to="/" className="hover:underline text-xl font-bold">
        Home
      </Link>
      <Link to="/about" className="hover:underline text-xl font-bold">
        About
      </Link>
      <Link to="/projects" className="hover:underline text-xl font-bold">
        Projects
      </Link>
      <Link to="/services" className="hover:underline text-xl font-bold">
        Services
      </Link>
    </div>
  );
}

export default Header;
