import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg w-full max-w-4xl flex flex-wrap overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm md:text-base mb-6">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you!
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-sm md:text-base">Empire Heights Tower B</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm md:text-base">upoddubai@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm md:text-base">+971563119686</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <form className="space-y-4">
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
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


