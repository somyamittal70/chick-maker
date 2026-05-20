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
    { name: "CHOOSE US", link: "#chooseus" },
    { name: "GALLERY", link: "#gallery" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 md:px-6 py-2 flex items-center justify-between shadow-md">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group relative text-sm font-semibold tracking-wide text-black transition duration-300 hover:text-[#eda126]"
              >
                {item.name}

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#eda126] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-[#eda126] hover:bg-[#d48d1f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 shadow-lg hover:scale-105"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[400px] mt-3" : "max-h-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl px-6 py-8 flex flex-col items-center gap-6 shadow-xl">
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

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#eda126] hover:bg-[#d48d1f] text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
