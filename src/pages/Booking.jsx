import React, { useState } from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.avif";
import image8 from "../assets/image8.jpeg";

import { Carousel } from "@material-tailwind/react";
import PricingTable from "./PricingTable"; // Import the PricingTable component

const BookNow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const studioImages = [
    { src: image1, alt: "Studio 1" },
    { src: image2, alt: "Studio 2" },
    { src: image3, alt: "Studio 3" },
    { src: image4, alt: "Studio 4" },
    { src: image5, alt: "Studio 5" },
    { src: image6, alt: "Studio 6" },
    { src: image7, alt: "Studio 7" },
    { src: image8, alt: "Studio 8" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-11/12 md:w-2/3 lg:w-1/2">
        <Carousel infinite loop className="rounded-xl">
          {studioImages.map((photo, index) => (
            <div key={index} className="relative group">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover rounded-lg group-hover:transform group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={openModal}
                  className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-xl hover:bg-gray-800 hover:text-white transition-colors duration-300 transform group-hover:scale-105 group-hover:translate-y-2"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600"
            >
              X
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pricing Details</h3>

            {/* Pricing Table Section */}
            <PricingTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
