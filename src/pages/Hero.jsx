import React from "react";
import image1 from "../assets/image1.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-blue-900 h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Center Content */}
      <div className="text-center text-white z-10 px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 ">
          GET THE BEST PODCASTING EXPERIENCE IN DUBAI
        </h1>
        <Link
          to="/booknow"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-xl md:text-xl mt-16 inline-block"
        >
          BOOK ONLINE
        </Link>
      </div>

      {/* Decorative Table */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <div className="bg-wood-pattern h-20 w-3/4 rounded-lg"></div>
      </div>
    </div>
  );
};

export default HeroSection;
