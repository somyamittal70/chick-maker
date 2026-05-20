import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 bg-[#f8f5ef]">

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Contact <span className="text-[#eda126]">Us</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-14 text-center">
          Reach out to us! We're here to help you create
          beautiful, natural spaces with our premium bamboo chick solutions.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda126]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda126]"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eda126]"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#eda126] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#d48c1a] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Map + Info */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Contact Information
              </h2>

              <div className="space-y-4 mt-4 text-gray-700">
                <p>
                  📍 <span className="font-semibold">Address:</span> Cr 666
                  Panchsheel Greens 2, Greater Noida
                </p>

                <p>
                  📞 <span className="font-semibold">Phone:</span> +91
                  9012139173
                </p>

                <p>
                  📧 <span className="font-semibold">Email:</span>
                  info@chickparda.com
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg h-[350px]">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Panchsheel+Greens+2&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
