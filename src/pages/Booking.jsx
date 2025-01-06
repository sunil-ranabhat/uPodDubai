import React from "react";

import studio2 from "../assets/studio2.webp";
import studio3 from "../assets/Studio-3.avif";

const Booking = () => {
  return (
    <div>
      {/* Upper Section with Big Header */}
      <div className="bg-black text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Choose Studio</h1>
      </div>

      {/* Booking Cards Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center px-4 py-16 bg-white gap-12">
        
        {/* Studio 1 Card */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[35%] h-[450px] relative rounded-[17px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Image */}
          <img
            src={studio3}
            alt="Luxury Suite"
            className="w-full h-full object-cover"
          />
          {/* Overlay with content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between items-center text-center text-white p-6">
            <h2 className="text-4xl font-semibold mt-4">Studio 1</h2>
            <div>
              
              <button className="px-6 py-2 bg-[#ff7900] text-black font-bold rounded-lg hover:bg-orange-400 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Studio 2 Card */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[35%] h-[450px] relative rounded-[17px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Image */}
          <img
            src={studio2}
            alt="Deluxe Room"
            className="w-full h-full object-cover"
          />
          {/* Overlay with content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between items-center text-center text-white p-6">
            <h2 className="text-4xl font-semibold mt-4">Studio 2</h2>
            <div>
              
              <button className="px-6 py-2 bg-[#ff7900] text-black font-bold rounded-lg hover:bg-orange-400 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="py-10 bg-white"></div>
    </div>
  );
};

export default Booking;
