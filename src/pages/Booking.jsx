import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 py-10 min-h-screen">
      {/* Card aligned to the left with background image */}
      <div className="flex items-center justify-start mb-10 md:mb-0 md:pl-[15%]">
        <div
          className="w-full md:w-[450px] h-[350px] md:h-[580px] bg-cover bg-center border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px] rounded-[17px] text-center cursor-pointer transition-all duration-500 transform flex items-center justify-center select-none font-bold text-black hover:border-black hover:scale-[1.02] hover:max-w-full hover:max-h-full active:scale-[0.95] active:rotate-[1.7deg] transition-transform duration-300 ease-in-out"
          style={{
            backgroundImage: `url('https://example.com/your-image.jpg')`, // Replace with your image URL
          }}
        >
          {/* Card content */}
        </div>
      </div>

      {/* Card aligned to the right with background image */}
      <div className="flex items-center justify-end md:pr-[15%]">
        <div
          className="w-full md:w-[450px] h-[350px] md:h-[580px] bg-cover bg-center border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px] rounded-[17px] text-center cursor-pointer transition-all duration-500 transform flex items-center justify-center select-none font-bold text-black hover:border-black hover:scale-[1.02] hover:max-w-full hover:max-h-full active:scale-[0.95] active:rotate-[1.7deg] transition-transform duration-300 ease-in-out"
          style={{
            backgroundImage: `url('https://example.com/your-image.jpg')`, // Replace with your image URL
          }}
        >
          {/* Card content */}
        </div>
      </div>
    </div>
  );
};

export default Card;
