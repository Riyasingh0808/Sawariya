import React from "react";
import { motion } from "framer-motion";
import fruitBasket from "../assets/fruit-basket.png";
import MiniFruitBasketImg from "../assets/miniFruitBasket.png";
import SquareBasketImg from "../assets/square-basket.png";

function Products() {
  const products = [
    { id: 1, image: fruitBasket, title: "FRUIT BASKET" },
    { id: 2, image: MiniFruitBasketImg, title: "ROUND MINI FRUIT BASKET" },
    { id: 3, image: SquareBasketImg, title: "SQUARE BASKET" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <motion.h2
        className="text-4xl font-bold text-gray-800 text-center mb-8 inter-font"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Best Selling Products
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-4"
            />

            <div className="p-4">
              <motion.button
                className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-bold hover:bg-red-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {product.title}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Products;
