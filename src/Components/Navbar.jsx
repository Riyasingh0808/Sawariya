import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-[#EEF1F7] h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <motion.img
            src={logo}
            alt="Sawariya Logo"
            className="h-20 w-48  rounded-lg shadow-sm"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2C3E50] text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static bg-[#EEF1F7] md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "top-16 opacity-100" : "-top-64 opacity-0 md:opacity-100"
          } md:flex-row flex flex-col items-center shadow-md md:shadow-none rounded-lg`}
        >
          {["Home", "About Us", "Products"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="py-2 md:py-0"
            >
              <Link
                to={`/${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
                className="text-lg text-[#2C3E50] hover:text-[#D4AF37] border-b-2 border-transparent hover:border-[#D4AF37] transition duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
