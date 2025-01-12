import React, { useState } from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.avif";
import image8 from "../assets/image8.jpeg";
import PricingTable from "./PricingTable";

const BookNow = () => {
  const [fullScreenPhoto, setFullScreenPhoto] = useState(null);
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

  const handlePhotoClick = (photo) => {
    setFullScreenPhoto(photo);
  };

  const handleCloseFullScreen = () => {
    setFullScreenPhoto(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12">
        Book Your Studio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {studioImages.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-all duration-500"
              onClick={() => handlePhotoClick(photo)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg text-white font-semibold">{photo.alt}</h3>
                <button
                  onClick={handleOpenModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Photo Viewer */}
      {fullScreenPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseFullScreen}
        >
          <img
            src={fullScreenPhoto.src}
            alt={fullScreenPhoto.alt}
            className="max-w-full max-h-full"
          />
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className=" p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-4xl font-bold text-white hover:text-red-500 transition-colors"
            >
              &times;
            </button>
            
            <PricingTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
