import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Package,
  Apple,
  MapPin,
  Building,
  Mail,
  Phone,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-[#EEF1F7] py-16 px-6 md:px-20 lg:px-32 text-[#333]"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-[#2C3E50] border-b-4 border-[#D4AF37] inline-block pb-2"
        >
          About Sawariya Kitchen Rack
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-700 mt-6 text-lg leading-relaxed max-w-4xl mx-auto"
        >
          Sawariya Kitchen Rack, a brand by{" "}
          <span className="text-[#D4AF37] font-semibold">
            Giriraj Steel Company
          </span>
          , is renowned for delivering premium kitchen storage solutions that
          blend **functionality** with **elegance**.
        </motion.p>

        {/* Specialties Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Feature Cards */}
          {[
            {
              icon: <Package size={30} className="text-[#D4AF37]" />,
              title: "Stainless Steel Racks",
              description:
                "Strong, sleek, and rust-free solutions for your kitchen.",
            },
            {
              icon: <CheckCircle size={30} className="text-[#D4AF37]" />,
              title: "Multi-Purpose Stands",
              description: "Smart storage for every household need.",
            },
            {
              icon: <Apple size={30} className="text-[#D4AF37]" />,
              title: "Stylish Fruit Baskets",
              description: "Organized fruit storage with a touch of elegance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#D4AF37] transition duration-300 hover:scale-105 hover:shadow-[#D4AF37]"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mt-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-3">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-10 bg-white p-6 rounded-lg shadow-lg border border-[#D4AF37]"
        >
          <h3 className="text-2xl font-bold text-[#2C3E50]">Why Choose Us?</h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            {[
              "Premium-Quality Stainless Steel",
              "Space-Saving & Elegant Designs",
              "Durable, Rust-Free & Long-Lasting",
            ].map((point, index) => (
              <li
                key={index}
                className="text-lg flex items-center justify-center gap-2"
              >
                <CheckCircle size={20} className="text-[#D4AF37]" /> {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
          className="mt-16 w-full text-center"
        >
          <h3 className="text-3xl font-bold text-[#2C3E50] mb-4 border-b-2 border-[#D4AF37] pb-2 flex items-center justify-center gap-2">
            <MapPin size={28} className="text-[#D4AF37]" /> Our Office
          </h3>
          <iframe
            className="w-full h-[400px] mt-5 rounded-lg shadow-lg border-2 border-[#D4AF37]"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3720.9025013944497!2d79.10506711139043!3d21.156278034891105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJagnath%20Budhwari%20Road%2C%20Teen%20Nal%20Chowk%2C%20Itwari%2C%20Nagpur-02!5e0!3m2!1sen!2sin!4v1743094517568!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
