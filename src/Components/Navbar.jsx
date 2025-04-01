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

export default Navbar;
