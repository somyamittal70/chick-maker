import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroImg from "../assets/images/hero.png";

const Home = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>
      {/* Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-black/20 to-black/50"></div>
      Decorative Blur
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#eda126]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8a5708]/20 rounded-full blur-3xl"></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-28 md:pt-32">
        {/* Small Tag */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[5px] text-[#eda126] font-semibold mb-5"
        >
          Premium Bamboo Chick Solutions
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] max-w-5xl"
        >
          Elegant & Modern <br />
          <span className="text-[#eda126] relative">Chick Parda</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="
    mt-6
    max-w-3xl
    text-base sm:text-lg md:text-xl
    font-light
    leading-8 md:leading-9
    tracking-wide
    text-gray-100
    drop-shadow-md
  "
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Experience the perfect combination of tradition, craftsmanship, and
          modern luxury with our premium handcrafted bamboo chick curtains
          designed for homes, cafés, offices, and outdoor spaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-5 mt-10"
        >
          {/* Primary Button */}
          <a
            href="#about"
            className="group flex items-center gap-3 bg-[#eda126] hover:bg-[#c9830f] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_10px_30px_rgba(237,161,38,0.35)] transition duration-300 hover:scale-105"
          >
            Explore More
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition duration-300"
            />
          </a>

          {/* Secondary Button */}
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            View Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
