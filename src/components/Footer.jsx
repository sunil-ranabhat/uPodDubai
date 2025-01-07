import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Top Section */}
          <div className="text-center">
            <p className="text-md font-medium">© 2025 by U Pod Studio Dubai.</p>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <p className="text-md">Empire Heights Tower B</p>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-md">
              <a href="mailto:upoddubai@gmail.com" className="hover:underline">
                upoddubai@gmail.com
              </a>
            </p>
            <p className="text-md">
              Tel:{" "}
              <a href="tel:+971563119686" className="hover:underline">
                +971 563119686
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
