import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const testimonials = [
  { id: 1, description: "Fantastic experience, very professional and met all our business needs.", name: "Maxine Meneses" },
  { id: 2, description: "The podcast is insightful, well-researched, and always engaging.", name: "John Doe" },
  { id: 3, description: "I look forward to each episode. Great work!", name: "Jane Smith" },
  { id: 4, description: "The topics are always relevant and thought-provoking.", name: "David Brown" },
  { id: 5, description: "A great blend of information and entertainment.", name: "Emma Wilson" },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[600px] bg-[#ff7900] bg-opacity-95 flex items-center justify-center relative p-10 md:p-16 lg:p-20">
      {/* Testimonial Content */}
      <div className="text-center max-w-2xl px-6">
        <p className="text-3xl md:text-5xl font-semibold text-black mb-6 leading-relaxed">
          “{testimonials[currentIndex].description}”
        </p>
        <h4 className="text-2xl md:text-3xl text-black font-bold mt-8">
          - {testimonials[currentIndex].name}
        </h4>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-8 md:left-16 lg:left-16 text-5xl md:text-6xl text-black hover:text-gray-800 transition duration-300"
      >
        <FaAngleLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-8 md:right-16 lg:right-16 text-5xl md:text-6xl text-black hover:text-gray-800 transition duration-300"
      >
        <FaAngleRight />
      </button>

      {/* Dots for slide indicators */}
      <div className="absolute bottom-8 flex space-x-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full cursor-pointer transition transform hover:scale-110 ${
              index === currentIndex ? "bg-black" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
