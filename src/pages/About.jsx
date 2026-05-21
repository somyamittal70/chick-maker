import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#f8f5ef] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#eda126]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8a5708]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative group overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-[600px] object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-8 -right-5 bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl px-8 py-6">
            <h3 className="text-4xl font-extrabold text-[#eda126]">10+</h3>
            <p className="text-gray-700 font-medium">
              Years of Experience
            </p>
          </div>

          {/* Decorative Border */}
          <div className="absolute -top-5 -left-5 w-full h-full border border-[#eda126]/30 rounded-[35px] -z-10"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Small Tag */}
          <p className="uppercase tracking-[4px] text-[#eda126] font-semibold mb-4">
            About Our Company
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            Crafted With <br />
            <span className="text-[#eda126]">Tradition & Style</span>
          </h1>

          {/* Paragraphs */}
          <p className="text-gray-600 text-lg leading-8 mb-6">
            Welcome to our Chick Parda Manufacturing business, where
            traditional craftsmanship meets modern elegance. We specialize in
            premium-quality bamboo chicks that bring shade, comfort, and a
            natural aesthetic to every space.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Every bamboo chick is carefully handcrafted using durable,
            weather-resistant materials to ensure long-lasting performance,
            beauty, and customer satisfaction.
          </p>

          {/* Features */}
          <div className="space-y-5">
            {[
              "Premium Quality Bamboo Materials",
              "Custom Design & Installation",
              "Weather Resistant & Durable",
              "Elegant Solutions For Every Space",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#eda126]/10 flex items-center justify-center">
                  <CheckCircle2 className="text-[#eda126]" size={22} />
                </div>

                <p className="text-gray-700 text-lg font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;