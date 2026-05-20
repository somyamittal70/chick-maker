import React from "react";

const features = [
  {
    title: "Affordable Pricing",
    desc: "High quality chick parda solutions at budget-friendly prices.",
  },
  {
    title: "Custom Design",
    desc: "We design curtains as per your room size and interior style.",
  },
  {
    title: "Fast Installation",
    desc: "Quick and professional installation at your doorstep.",
  },
  {
    title: "Quality Material",
    desc: "We use durable and long-lasting fabrics for better results.",
  },
  {
    title: "Excellent Support",
    desc: "Our team is always ready to assist you with any queries.",
  },
  {
    title: "Eco-Friendly",
    desc: "Our products are made with sustainable materials for a greener planet.",
  },
  {
    title: "Satisfaction Guarantee",
    desc: "We are committed to your satisfaction and will ensure you are happy with our service.",
  },
  {
    title: "Wide Variety",
    desc: "Choose from a wide range of styles, colors, and fabrics to suit your taste.",
  }
];

const ChooseUs = () => {
  return (
    <section id="chooseus" className="py-20 bg-[#f8f5ef]">
      <div className="max-w-6xl mx-auto px-4 text-center ">
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
          Why Choose <span className="text-[#eda126]">Us</span>
        </h2>

        <p className="text-lg text-gray-600 mt-3 mb-10">
          We provide the best quality chick parda solutions for your home & office.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg hover:text-[#8a5708] transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;