import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    <div className="w-full h-[450px] bg-[#ff7900] flex items-center justify-center relative">
      {/* Testimonial Content */}
      <div className="text-center max-w-md px-4">
        <p className="text-4xl font-semibold text-black mb-4">
          “{testimonials[currentIndex].description}”
        </p>
        <h4 className="text-xl text-black font-bold mt-16">
          - {testimonials[currentIndex].name}
        </h4>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 text-2xl text-black hover:text-gray-600"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 text-2xl text-black hover:text-gray-600"
      >
        <FaArrowRight />
      </button>

      {/* Dots for slide indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;



