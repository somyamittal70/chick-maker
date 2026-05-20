import React, { useState } from "react";

import img1 from "../assets/images/hero.jpg";
import img2 from "../assets/images/about.jpg";
import img3 from "../assets/images/service1.jpg";
import img4 from "../assets/images/service2.jpg";
import img5 from "../assets/images/service3.jpg";
import img6 from "../assets/images/service4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section
      id="gallery"
      className="w-full py-20 bg-[#f8f5ef] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Our <span className="text-[#eda126]">Gallery</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-5 leading-8">
            Explore our gallery to discover beautifully crafted Chick Parda
            designs that blend natural elegance, durability, and modern style
            for every space.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  loading="lazy"
                  decoding="async"
                  src={img}
                  alt={`Gallery Item ${index + 1}`}
                  className="w-full h-72 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105 will-change-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              loading="eager"
              decoding="async"
              src={selectedImage}
              alt="Selected"
              className="max-w-full md:max-w-5xl max-h-[90vh] rounded-2xl shadow-xl object-contain"
            />

            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full text-2xl font-bold shadow-lg hover:bg-gray-200 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;