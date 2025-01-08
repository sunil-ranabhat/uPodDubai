import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router for navigation

const PodcastServices = () => {
  const services = [
    {
      title: "Recording & Editing",
      description: "High-quality podcast recording and editing services to ensure your content sounds professional.",
    },
    {
      title: "Brand Strategy",
      description: "Tailored strategies to enhance your podcast’s reach and engagement.",
    },
    {
      title: "Publishing & Distribution",
      description: "We assist in publishing your podcast on major platforms like Spotify, Apple Podcasts, and more.",
    },
    {
      title: "Monetization",
      description: "Strategies to monetize your podcast through sponsorships and partnerships.",
    },
    {
      title: "Marketing & Promotion",
      description: "Effective marketing plans to promote your podcast and attract a larger audience.",
    },
    {
      title: "Custom Sound Design",
      description: "Create unique sound designs, intros, and outros that enhance your podcast’s branding.",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-12">
      <h2 className="text-5xl font-bold text-center mb-16">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="border-2 border-gray-300 border-opacity-10 p-10 text-center h-72 w-full flex flex-col justify-center hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-[#ff7900] mb-4">{service.title}</h3>
            <p className="text-xl text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link 
          to="/contactus" // Change to your actual contact page route
          className="bg-[#ff7900] text-white py-3 px-8 rounded-full text-2xl font-semibold hover:bg-[#e67500] transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default PodcastServices;
