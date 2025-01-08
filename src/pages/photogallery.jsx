import React, { useState } from 'react';

import Studio1 from "../assets/image1.jpeg";
import Studio2 from "../assets/image2.jpeg";
import Studio3 from "../assets/image3.jpg";
import Studio4 from "../assets/image4.jpeg";
import Studio5 from "../assets/image5.jpeg";
import Studio6 from "../assets/image6.jpeg";
import Studio7 from "../assets/image7.avif";
import Studio8 from "../assets/image8.jpeg";

const PhotoGallery = () => {
  const [fullScreenPhoto, setFullScreenPhoto] = useState(null);

  const photos = [
    { src: Studio1, alt: "Studio 1" },
    { src: Studio2, alt: "Studio 2" },
    { src: Studio3, alt: "Studio 3" },
    { src: Studio4, alt: "Studio 4" },
    { src: Studio5, alt: "Studio 5" },
    { src: Studio6, alt: "Studio 6" },
    { src: Studio7, alt: "Studio 7" },
    { src: Studio8, alt: "Studio 8" },
  ];

  const handlePhotoClick = (photo) => {
    setFullScreenPhoto(photo);
  };

  const handleCloseFullScreen = () => {
    setFullScreenPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12">
        Our Studios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl group"
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-72 object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-lg text-white font-semibold">{photo.alt}</h3>
            </div>
          </div>
        ))}
      </div>
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
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
