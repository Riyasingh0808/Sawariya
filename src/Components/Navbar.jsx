import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <a href="#home" className="text-2xl font-bold text-amber-950-600 hover:text-red-800 transition duration-300">
          Sawariya Kitchen Rack
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-red-600 focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "top-16 opacity-100" : "-top-64 opacity-0 md:opacity-100"
          } md:flex-row flex flex-col items-center shadow-md md:shadow-none`}
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
                className="text-lg text-gray-700 hover:text-red-600 transition duration-300"
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

