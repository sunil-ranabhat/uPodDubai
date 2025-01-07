import React from 'react';
import image6 from '../assets/imge6.png';

const UPodStudioSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white">
      {/* Left Side - Text and Button */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        "UPod studio is everyone’s top recommendation for recording podcast in Dubai".
        </h1>
        
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-0 md:ml-8">
        <img
          src={image6} // Replace with your actual image URL
          alt="Podcast Studio"
          className="w-full h-auto rounded-lg shadow-lg hover: transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default UPodStudioSection;
