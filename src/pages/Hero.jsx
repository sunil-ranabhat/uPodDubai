import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-900 h-screen flex items-center justify-center">
      {/* Shelves and Decorations */}
      <div className="absolute inset-0 flex justify-between items-center px-20">
        <div className="space-y-5">
          <div className="bg-gray-700 h-24 w-24 rounded-full"></div>
          <div className="bg-gray-700 h-16 w-16 rounded-full"></div>
        </div>
        <div className="space-y-5">
          <div className="bg-gray-700 h-24 w-24 rounded-full"></div>
          <div className="bg-gray-700 h-16 w-16 rounded-full"></div>
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center text-white z-10">
        <h1 className="text-6xl font-bold mb-14">
          GET THE BEST PODCASTING EXPERIENCE IN DUBAI
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-xl">
          BOOK ONLINE
        </button>
      </div>

      {/* Decorative Table */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="bg-wood-pattern h-20 w-3/4 rounded-lg"></div>
      </div>
    </div>
  );
};

export default HeroSection;
