import React from "react";

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
    <section id="services" className="w-full py-10 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Our <span className="text-[#eda126]">Services</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            We provide premium bamboo chick manufacturing, custom design, installation, and maintenance services for homes, offices, cafés, balconies, and outdoor spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;