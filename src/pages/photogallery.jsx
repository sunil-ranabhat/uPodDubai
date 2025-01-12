import React, { useState } from 'react';

import Studio1 from "../assets/image1.jpeg";
import Studio2 from "../assets/image2.jpeg";
import Studio3 from "../assets/image3.jpg";
import Studio4 from "../assets/image4.jpeg";
import Studio5 from "../assets/image5.jpeg";
import Studio6 from "../assets/image6.jpeg";
import Studio7 from "../assets/image7.avif";
import Studio8 from "../assets/image8.jpeg";
import Podcast1 from '../assets/podcast1.avif';
import Podcast2 from '../assets/podcast2.jpg';
import Podcast3 from '../assets/podcast3.avif';
import Podcast4 from '../assets/podcast4.webp';
import Podcast5 from '../assets/podcast5.png';

const PhotoGallery = () => {
  const [fullScreenPhoto, setFullScreenPhoto] = useState(null);

  const photos = [
    { src: Studio1,  },
    { src: Studio2,  },
    { src: Studio3,  },
    { src: Podcast5, },
    { src: Studio6,  },
    { src: Studio7,  },
    { src: Podcast1,  },
    { src: Studio8,  },
    { src: Podcast2,  },
    { src: Podcast3,  },
    { src: Podcast4,  },
    { src: Studio4,  }
  ];

  const handlePhotoClick = (photo) => {
    setFullScreenPhoto(photo);
  };

  const handleCloseFullScreen = (e) => {
    if (e.target === e.currentTarget) {
      setFullScreenPhoto(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12">
        Photo Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-72 object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <h3 className="text-lg text-white font-semibold">{photo.alt}</h3>
            </div>
          </div>
        ))}
      </div>
      {fullScreenPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center"
          onClick={handleCloseFullScreen}
        >
          <div className="relative">
            <img
              src={fullScreenPhoto.src}
              alt={fullScreenPhoto.alt}
              className="max-w-full max-h-[80vh] rounded-lg"
            />
            <button
              onClick={() => setFullScreenPhoto(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1"
            >
              &times;
            </button>
            <p className="text-center text-white mt-4">{fullScreenPhoto.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
