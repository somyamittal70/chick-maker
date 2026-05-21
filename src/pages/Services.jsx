import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";

const servicesData = [
  {
    id: 1,
    image: service1,
    title: "Outdoor Bamboo Chicks",
    description:
      "Premium handcrafted bamboo chicks designed for homes, balconies, and outdoor spaces.",
  },
  {
    id: 2,
    image: service2,
    title: "Restaurant & Café Shades",
    description:
      "Stylish bamboo shades for restaurants and cafés that enhance ambiance and comfort.",
  },
  {
    id: 3,
    image: service3,
    title: "Office Bamboo Blinds",
    description:
      "Elegant and durable bamboo blinds for offices with modern natural aesthetics.",
  },
  {
    id: 4,
    image: service4,
    title: "Custom Bamboo Chick",
    description:
      "Strong and weather-resistant bamboo solutions for terraces, gardens, and patios.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-24 bg-[#f8f5ef] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#eda126]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8a5708]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-[#eda126] font-semibold mb-4">
            Premium Services
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-[#eda126]">Services</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            We provide premium bamboo chick manufacturing, custom design,
            installation, and maintenance services for homes, offices,
            cafés, balconies, and outdoor spaces.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#8a5708] transition duration-300">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-7 text-[15px]">
                  {service.description}
                </p>

                {/* Bottom Line Animation */}
                <div className="mt-6 w-0 h-[2px] bg-[#eda126] group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;