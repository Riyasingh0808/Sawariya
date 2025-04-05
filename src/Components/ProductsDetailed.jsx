import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Importing the product list
import products from "../Products"; // Assuming your product list is stored in a Products.js file

function Products() {
  return (
    <div className="bg-[#F7F7F7] py-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-[#2C3E50]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Kitchen Utensils
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <Link
            to={`/product/${product.id}`}
            state={{ product }} // Passing product data to the detailed page
            key={product.id}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center border border-[#D4AF37] transition-all duration-300 hover:shadow-[#D4AF37]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Product Image */}
              <div className="w-full h-56 bg-[#EEF1F7] flex justify-center items-center">
                <img
                  src={product.image[0]}
                  alt={product.title}
                  className="w-full h-full object-cover p-2 rounded-t-xl"
                />
              </div>

              {/* Product Title Button */}
              <div className="p-5">
                <motion.button
                  className="bg-[#D4AF37] text-[#2C3E50] px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-[#C49B2D] transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {product.title}
                </motion.button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
