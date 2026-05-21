import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logo from "../../assets/images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SERVICES", link: "#services" },
    { name: "GALLERY", link: "#gallery" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40"
            : "bg-white/25 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between px-5 md:px-8 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`group relative text-sm font-semibold tracking-[1px] transition duration-300 hover:text-[#eda126] ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}

                {/* Animated Underline */}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#eda126] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-[#eda126] hover:bg-[#c9830f] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-[0_10px_30px_rgba(237,161,38,0.35)] hover:scale-105 transition duration-300"
            >
              Get Started
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition duration-300"
              />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black transition duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden px-5 pb-5"
            >
              <div className="bg-black/95 backdrop-blur-2xl rounded-3xl py-8 px-6 flex flex-col items-center gap-7 shadow-2xl border border-white/10">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-lg font-semibold hover:text-[#eda126] transition duration-300"
                  >
                    {item.name}
                  </a>
                ))}

                {/* Mobile CTA */}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 bg-[#eda126] hover:bg-[#c9830f] text-white px-7 py-3 rounded-full text-sm font-semibold transition duration-300 shadow-lg"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
