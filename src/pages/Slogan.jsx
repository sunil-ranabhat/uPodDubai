import React from 'react';
import image6 from '../assets/imge6.png';

const UPodStudioSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20 bg-white">
      {/* Left Side - Text and Button */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left text-gray-800 leading-tight">
          " <span className='text-orange-500'>UPod</span> Studio is Everyone’s Top Recommendation For Recording Podcast in <span className='text-orange-500'>Dubai</span> ".
        </h1>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
          <img
            src={image6}
            alt="Podcast Studio"
            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default UPodStudioSection;

