import React from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.avif";
import image8 from "../assets/image8.jpeg";

import { Carousel } from "@material-tailwind/react";

const BookNow = () => {
  const studioImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-11/12 md:w-2/3 lg:w-1/2">
        <Carousel className="rounded-xl">
          {studioImages.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Studio image ${index + 1}`}
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-xl hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BookNow;
