import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import equipment1 from "../assets/equipment1.avif";
import equipment2 from "../assets/equipment2.jpg";
import equipment3 from "../assets/equipment3.png";
import equipment4 from "../assets/equipment4.jpg";
import equipment5 from "../assets/equipment5.webp";
import equipemnt6 from "../assets/equipemnt6.webp";

const PodcastEquipment = () => {
  const products = [
    { name: "Rode RODECaster Pro II Integrated", image: equipment1 },
    { name: "Rode PodMic Dynamic Podcasting", image: equipment2 },
    { name: "Rode PSA1+ Pro Studio Boom/Arm", image: equipment3 },
    { name: "Aputure Amaran 200x S-LED Video Light", image: equipment4 },
    { name: "Rode RODECaster Pro II Integrated", image: equipment5 },
    { name: "Rode PodMic Dynamic Podcasting", image: equipemnt6 },
    { name: "Rode PSA1+ Pro Studio Boom/Arm", image: equipment1 },
  ];

  return (
    <div className=" max-w-7xl mx-auto py-16 overflow-hidden">
      <h2 className="text-center text-5xl md:text-6xl font-bold mb-12">
        Podcast Studio Equipment
      </h2>
      <Swiper
        slidesPerView={1} // Default for mobile
        spaceBetween={20} // Default for mobile
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="min-h-0">
            <div className="p-6 md:p-10 border rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-52 h-52 md:w-64 md:h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl md:text-2xl font-semibold text-center">
                {product.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PodcastEquipment;
