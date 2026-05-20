import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          {/* Optional Logo Image */}
          {/* <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain"
          /> */}

          <div>
            <h1 className="text-[#eda126] font-bold text-xl sm:text-2xl md:text-3xl leading-none">
              Chick Parda
            </h1>

            <p className="text-gray-300 text-[10px] sm:text-xs tracking-[3px] uppercase">
              Bamboo Solutions
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative text-white text-sm xl:text-[15px] font-semibold tracking-wide transition duration-300 hover:text-[#eda126] group"
            >
              {item.name}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#eda126] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-[#eda126] hover:bg-[#d48d1f] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-sm font-semibold transition duration-300 shadow-lg hover:shadow-[#eda126]/40 hover:scale-105"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={30} className="sm:w-8 sm:h-8" />
          ) : (
            <Menu size={30} className="sm:w-8 sm:h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl px-6 py-8 flex flex-col items-center gap-6 border-t border-white/10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="text-white text-base sm:text-lg font-semibold hover:text-[#eda126] transition duration-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-[#eda126] hover:bg-[#d48d1f] text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;