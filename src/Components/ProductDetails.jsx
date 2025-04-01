import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ChevronDown,
  Truck,
} from "lucide-react";
import products from "../Products";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const [showDescription, setShowDescription] = useState(true);

  const product =
    location.state?.product || products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Product Not Found
        </h2>
      </div>
    );

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Product Images */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* Right Side - Product Details */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sticky top-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                New Arrival
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">(24 reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-orange-600">
                ${product.price}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            </div>

            {/* Description Toggle */}
            <div className="border-t border-b py-4 mb-8">
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="flex items-center justify-between w-full"
              >
                <span className="font-medium text-gray-900">Description</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    showDescription ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDescription && (
                <motion.p
                  className="mt-4 text-gray-600 leading-relaxed"
                  {...fadeIn}
                >
                  {product.description}
                </motion.p>
              )}
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Available in Sizes
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all
                      ${
                        selectedSize === size
                          ? "border-orange-500 text-orange-500 bg-orange-50"
                          : "border-gray-200 text-gray-600 hover:border-orange-200"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Share2 className="w-6 h-6 text-orange-500" />
              <p className="text-lg font-medium text-gray-800">
                Share with your friends
              </p>{" "}
              <motion.button
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Additional Info */}
            {/* <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-600">
                    Enter your postal code for delivery availability
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetails;