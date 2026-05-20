import React from "react";
import heroImg from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Welcome to{" "}
          <span className="text-[#eda126]">Chick Parda</span>
        </h1>

        <p className="text-xl md:text-xl text-gray-200 max-w-2xl mb-8">
          Experience the perfect combination of tradition, functionality, and modern style with our premium handcrafted bamboo chick curtains.
        </p>

        <a
          href="#about"
          className="bg-[#ab6d0a] hover:bg-[#8a5708] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Home;