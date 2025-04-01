import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 h-20 flex items-center bg-[#0A192F]">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-[#D4AF37] hover:text-[#E63946] transition duration-300"
        >
          Sawariya Kitchen Rack
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#D4AF37] focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static bg-[#1E2A47] md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "top-16 opacity-100" : "-top-64 opacity-0 md:opacity-100"
          } md:flex-row flex flex-col items-center shadow-md md:shadow-none rounded-lg`}
        >
          {["About Us", "Products", "Sizes", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="py-2 md:py-0"
            >
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-lg text-[#F5F5F5] hover:text-[#E63946] border-b-2 border-transparent hover:border-[#D4AF37] transition duration-300"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#1E2A47] py-16 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-[#E63946]"
        >
          About Sawariya Kitchen Rack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[#F5F5F5] mt-6 text-lg leading-relaxed"
        >
          Sawariya Kitchen Rack, a brand by Giriraj Steel Company, is known for
          providing high-quality kitchen storage solutions. We specialize in
          stainless steel racks, multi-purpose stands, and fruit baskets,
          catering to various storage needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[#F5F5F5] mt-6 leading-relaxed w-full"
        >
          <span className="text-md md:text-3xl font-bold text-[#E63946] mb-10 border-b-2 border-[#D4AF37]">
            Our office
          </span>
          <iframe
            className="w-full h-[400px] mt-7 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3720.9025013944497!2d79.10506711139043!3d21.156278034891105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJagnath%20Budhwari%20Road%2C%20Teen%20Nal%20Chowk%2C%20Itwari%2C%20Nagpur-02!5e0!3m2!1sen!2sin!4v1743094517568!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-10 bg-[#0A192F] shadow-md p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-[#D4AF37]">Our Location</h3>
          <p className="text-[#F5F5F5] mt-2">
            📍 Factory: 15, Ward No.3, Mahalgaon, Tah. Kamptee, Dist. Nagpur
          </p>
          <p className="text-[#F5F5F5]">
            🏢 Office: Jagnath Budhwari Road, Teen Nal Chowk, Itwari, Nagpur-02
          </p>
          <p className="text-[#F5F5F5] mt-2">
            📧 Email: girirajsteelcompany@gmail.com
          </p>
          <p className="text-[#F5F5F5]">📞 Contact: 0712-2777417, 2763762</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
