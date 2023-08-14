import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/svg/logo-no-background.svg";

function Header() {
  return (
    <div className="box bg-white w-full h-20 flex flex-row justify-between items-center pl-20 pr-20 pokemonFont border-4 border-white">
      <div className="w-36">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="justify-between flex flex-row w-[45%]">
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
        <Link to="/services" className="hover:underline text-xl font-bold">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
