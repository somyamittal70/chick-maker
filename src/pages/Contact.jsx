import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
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
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Let’s Build Your <span className="text-[#eda126]">Perfect Space</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
            Reach out to us for premium bamboo chick solutions crafted with
            elegance, durability, and modern design for your home or business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[35px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            <form className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#eda126] transition duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#eda126] transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#eda126] transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-[#1f1f1f] hover:bg-[#eda126] text-white py-4 rounded-2xl text-lg font-semibold shadow-xl transition duration-300 hover:scale-[1.02]"
              >
                Send Message
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition duration-300"
                />
              </button>
            </form>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            
            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[35px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#eda126]/10 flex items-center justify-center">
                    <MapPin className="text-[#eda126]" size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Address
                    </h3>

                    <p className="text-gray-600 mt-1 leading-7">
                      CR 666, Panchsheel Greens 2,
                      Greater Noida, Uttar Pradesh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#eda126]/10 flex items-center justify-center">
                    <Phone className="text-[#eda126]" size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Phone
                    </h3>

                    <p className="text-gray-600 mt-1">
                      +91 9012139173
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#eda126]/10 flex items-center justify-center">
                    <Mail className="text-[#eda126]" size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Email
                    </h3>

                    <p className="text-gray-600 mt-1">
                      info@chickparda.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/30 h-[350px]">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Panchsheel+Greens+2&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;