import React, { useState } from "react";
import { Link } from "react-router-dom";
import onlumic1 from "../assets/Onlumic1.avif";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#ff7900] text-black  z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={onlumic1} alt="Podcast Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-xl">
          {["HOME", "BOOK NOW", "PHOTO GALLERY", "FAQ", "CONTACT US"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-white text-blue-600 hover:bg-gray-200 transition-colors duration-300 py-2 px-6 rounded-full font-semibold"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-4 right-6 text-3xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center justify-center space-y-6 h-full text-xl">
          {["HOME", "BOOK NOW", "PHOTO GALLERY", "FAQ", "CONTACT US"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-blue-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              to="/login"
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 py-2 px-6 rounded-full font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
