import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f0f] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#eda126]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8a5708]/10 rounded-full blur-3xl"></div>

      {/* Top Border */}
      <div className="w-full h-[1px] bg-white/10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-20 border-b border-white/10">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="logo"
                className="h-20 w-auto object-contain"
              />
            </a>

            {/* Description */}
            <p className="text-gray-400 leading-8 mt-6 text-[15px]">
              Handcrafted Chick Parda made with premium-quality materials and
              expert craftsmanship. Bringing elegance, durability, and natural
              beauty to homes, cafés, offices, and outdoor spaces.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 mt-8 text-[#eda126] font-semibold hover:text-white transition duration-300"
            >
              Contact Us
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition duration-300"
              />
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#eda126]">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {[
                "Home",
                "About",
                "Services",
                "Gallery",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition duration-300"
                  >
                    <span className="w-0 h-[2px] bg-[#eda126] transition-all duration-300 group-hover:w-5"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-[#eda126]">
              Contact Info
            </h3>

            <div className="space-y-6">
              
              {/* Phone */}
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#eda126] transition duration-300">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-gray-300">
                    +91 9012139173
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#eda126] transition duration-300">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-gray-300">
                    info@chickparda.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-4">
                <div className="w-18 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#eda126] transition duration-300">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-gray-300 leading-7">
                    CR-666, Panchsheel Greens 2,
                    Greater Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-7 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-center">
            © 2026 Chick Parda. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;