import React from "react";
import logo from "../../assets/images/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 border-t border-gray-800">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-800 mb-10" />
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="hidden sm:block">
                <img
                  src={logo}
                  alt="logo"
                  className="h-18 w-auto object-contain transition-all duration-300"
                />
              </div>
            </a>

            <p className="text-gray-400 leading-7 mt-4">
              Handcrafted Chick Parda made with premium quality materials and
              expert craftsmanship. Experience the perfect blend of elegance,
              durability, and natural beauty for every space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-center font-semibold mb-5 text-[#eda126]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-center mt-4 text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#eda126] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#eda126] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#eda126] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-[#eda126] transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#eda126] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#eda126]">
              Contact
            </h3>

            <div className="space-y-4 mt-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 9012139173</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@chickparda.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                  Cr-666, Panchsheel Greens 2, Greater Noida, Uttar Pradesh,
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center text-gray-500 text-sm">
          © 2026 Chick Parda. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
