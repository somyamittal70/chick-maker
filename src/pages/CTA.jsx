import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f8f5ef]">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#eda126]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8a5708]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Premium Card */}
        <div className="relative overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] px-8 py-16 md:px-16 text-center">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-[40px] p-[1px] bg-gradient-to-r from-[#eda126]/20 via-transparent to-[#8a5708]/20"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Small Tag */}
            <p className="uppercase tracking-[4px] text-[#eda126] font-semibold mb-4">
              Premium Chick Parda
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              Give Your Space <br />A Stylish New Look
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Modern designs, premium quality materials, and professional
              installation services crafted to enhance your home & office.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
              {/* Call Button */}
              <a
                href="tel:+919012139173"
                className="group flex items-center gap-3 px-8 py-4 bg-[#1f1f1f] text-white rounded-full font-semibold text-lg hover:scale-105 transition duration-300 shadow-xl"
              >
                <Phone
                  size={20}
                  className="group-hover:rotate-12 transition duration-300"
                />
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919012139173"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 border border-gray-300 text-gray-800 rounded-full font-semibold text-lg hover:bg-[#eda126] hover:text-white hover:border-[#eda126] transition duration-300"
              >
                <MessageCircle
                  size={20}
                  className="group-hover:scale-110 transition duration-300"
                />
                WhatsApp Us
              </a>
            </div>

            {/* Bottom Text */}
            <p className="mt-8 text-gray-500 text-sm tracking-wide">
              Trusted by hundreds of happy customers ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
