import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Palette,
  Wrench,
  BadgeCheck,
  Headphones,
  Leaf,
  Smile,
  LayoutGrid,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Affordable Pricing",
    desc: "High quality chick parda solutions at budget-friendly prices.",
  },
  {
    icon: <Palette size={40} />,
    title: "Custom Design",
    desc: "We design curtains as per your room size and interior style.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Fast Installation",
    desc: "Quick and professional installation at your doorstep.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Quality Material",
    desc: "We use durable and long-lasting materials for better durability.",
  },
  {
    icon: <Headphones size={40} />,
    title: "Excellent Support",
    desc: "Our team is always ready to assist you with any queries.",
  },
  {
    icon: <Leaf size={40} />,
    title: "Eco-Friendly",
    desc: "Made with sustainable materials for a greener environment.",
  },
  {
    icon: <Smile size={40} />,
    title: "Satisfaction Guarantee",
    desc: "We ensure complete customer satisfaction with our services.",
  },
  {
    icon: <LayoutGrid size={40} />,
    title: "Wide Variety",
    desc: "Choose from multiple styles, colors, and elegant designs.",
  },
];

const ChooseUs = () => {
  return (
    <section
      id="chooseus"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#fdf8ef] to-[#f7f2e8]"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#eda126]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8a5708]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#eda126] font-semibold mb-3">
            Premium Services
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Why Choose{" "}
            <span className="text-[#eda126] relative">
              Us
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#eda126] rounded-full"></span>
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            We provide stylish, durable, and premium quality chick parda
            solutions that enhance the beauty of your home & office.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#eda126]/10 to-[#8a5708]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#eda126]/10 text-[#eda126] mb-6 mx-auto group-hover:rotate-6 transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-gray-800 mb-3 text-center">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="relative z-10 text-gray-600 text-center leading-relaxed group-hover:text-[#8a5708] transition duration-300">
                {item.desc}
              </p>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#eda126] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;