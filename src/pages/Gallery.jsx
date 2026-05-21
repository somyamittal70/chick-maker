import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";

import img1 from "../assets/images/hero.png";
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
            Our Showcase
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Our <span className="text-[#eda126]">Gallery</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
            Explore beautifully crafted Chick Parda designs that combine
            elegance, durability, and premium craftsmanship for every space.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden rounded-[30px] cursor-pointer bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              
              {/* Image */}
              <div className="overflow-hidden rounded-[30px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={img}
                  alt={`Gallery Item ${index + 1}`}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 shadow-xl">
                <Expand className="text-[#8a5708]" size={22} />
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition duration-500">
                <h3 className="text-white text-2xl font-bold">
                  Premium Design
                </h3>

                <p className="text-white/80 mt-2 text-sm">
                  Elegant handcrafted bamboo chick solutions.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                loading="eager"
                decoding="async"
                src={selectedImage}
                alt="Selected"
                className="max-w-full md:max-w-6xl max-h-[90vh] rounded-[30px] shadow-2xl object-contain"
              />

              {/* Close Button */}
              <button
                className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:rotate-90 transition duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;