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
    <div id="gallery" className="w-full py-10 bg-[#f8f5ef]">
        
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-14 text-center">
          Our <span className="text-[#eda126]">Gallery</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 text-center">
          Explore our gallery to discover beautifully crafted Chick Parda
          designs that blend natural elegance, durability, and modern style for
          every space.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;