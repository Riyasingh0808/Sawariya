import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 h-20 flex items-center bg-[#EEF1F7]">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#2C3E50] hover:text-[#D4AF37] transition duration-300"
        >
          Sawariya Kitchen Rack
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2C3E50] focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static bg-[#EEF1F7] md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "top-16 opacity-100" : "-top-64 opacity-0 md:opacity-100"
          } md:flex-row flex flex-col items-center shadow-md md:shadow-none rounded-lg`}
        >
          {[
            { name: "Home", to: "/" },
            { name: "About Us", to: "/about" },
            { name: "Products", to: "/products" },
            // { name: "Contact Us", to: "/contact" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="py-2 md:py-0"
            >
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)} // close menu on click (mobile UX)
                className="text-lg text-[#2C3E50] hover:text-[#D4AF37] border-b-2 border-transparent hover:border-[#D4AF37] transition duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
