import React from "react";
import { motion } from "framer-motion";
import headerImage from "/src/assets/Header.img.jpg";

const Header = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${headerImage})` }}
      id="Header"
    >

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-white px-6 md:px-20 lg:px-32"
      >
       <h2 className="text-5xl sm:text-6xl md:text-[82px] font-semibold">
          Smart Storage for a Smarter Kitchen
        </h2>
      </motion.div>
    </div>
  );
};

export default Header; 