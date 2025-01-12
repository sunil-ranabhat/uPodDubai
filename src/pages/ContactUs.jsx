import React from "react";
import { motion } from "framer-motion";
import image3 from "../assets/image3.jpg";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-6"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="bg-white shadow-lg rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl flex flex-wrap overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-[#ff7900] text-white p-4 sm:p-6">
          <h2 className="text-xl font-bold mb-3">Get in Touch</h2>
          <p className="text-sm mb-4">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you!
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-semibold">Address</h3>
              <p className="text-sm">Empire Heights Tower B</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Email</h3>
              <p className="text-sm">upoddubai@gmail.com</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Phone</h3>
              <p className="text-sm">+971563119686</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <form className="space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                rows="3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff7900] text-white font-semibold py-2 rounded-md hover:bg-orange-400 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
