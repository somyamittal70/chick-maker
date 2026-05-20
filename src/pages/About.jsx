import React from "react";
import { Link } from "lucide-react";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="w-full py-10 bg-[#f8f5ef]">
      {/*Divider */}
      <div className="w-full h-[1px] bg-gray-300 mb-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About"
            className="w-full h-[500px] object-cover rounded-2xl border-8 border-[#eda126] shadow-2xl hover:scale-105 transition duration-500"
          />

          {/* Optional small box effect */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#eda126] rounded-2xl -z-10"></div>
        </div>

        {/* Content Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-[#eda126]">Us</span>
          </h1>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Welcome to our Chick Parda Manufacturing business, where tradition
            meets modern design. We specialize in crafting premium-quality
            bamboo chicks that provide shade, privacy, and a beautiful natural
            look for every space.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Our products are handmade using durable bamboo materials to ensure
            long-lasting performance and aesthetic appeal.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            With a focus on quality craftsmanship and customer satisfaction, we
            offer customized bamboo chick solutions for homes, restaurants,
            offices, cafés, balconies, and outdoor spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
