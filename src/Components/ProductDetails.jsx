import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ChevronDown,
  X,
} from "lucide-react";
import products from "../Products";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const [showDescription, setShowDescription] = useState(true);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const currentURL = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const product =
    location.state?.product || products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EEF1F7] text-[#2C3E50]">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#EEF1F7] text-[#333] px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Product Image Slider */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="rounded-2xl shadow-lg"
            >
              {product.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-[80vh] object-contain rounded-2xl cursor-pointer"
                    onClick={() => setFullScreenImage(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Right Side - Product Details */}
        <motion.div
          className="lg:w-1/3 bg-[#D4AF37] p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">
            {product.title}
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-[#C49B2D]">
              ${product.price}
            </span>
            <span className="text-lg text-gray-700 line-through">
              {/* ${(product.price * 1.2).toFixed(2)} */}
            </span>
          </div>

          <div className="border-t border-b border-[#C49B2D] py-4 mb-4">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="flex items-center justify-between w-full"
            >
              <span className="font-medium text-[#2C3E50]">Description</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  showDescription ? "rotate-180" : ""
                }`}
              />
            </button>
            {showDescription && (
              <motion.p className="mt-4 text-[#2C3E50] leading-relaxed">
                {product.description}
              </motion.p>
            )}
          </div>

          {/* Sizes */}
          <h3 className="text-lg font-medium text-[#2C3E50] mb-4">Sizes</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all
                  ${
                    selectedSize === size
                      ? "border-[#2C3E50] text-[#2C3E50] bg-[#C49B2D]"
                      : "border-gray-600 text-[#2C3E50] hover:border-[#2C3E50]"
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Share Button */}
          <div className="text-center mt-4">
            <button
              onClick={() => setShowShareModal(true)}
              className="flex items-center justify-center gap-2 bg-[#2C3E50] text-white px-4 py-2 rounded-lg hover:bg-[#1A2536] transition"
            >
              <Share2 size={18} /> Share Product
            </button>
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Image View */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button
            className="absolute top-6 right-6 text-white p-2 bg-gray-700 rounded-full"
            onClick={() => setFullScreenImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={fullScreenImage}
            alt="Full View"
            className="max-w-4xl max-h-[90vh] object-contain"
          />
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center relative border-2 border-[#D4AF37]"
          >
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X />
            </button>
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
              Share this product
            </h3>
            <input
              type="text"
              value={currentURL}
              readOnly
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none text-sm"
            />
            <button
              onClick={handleCopy}
              className="mt-4 bg-[#D4AF37] text-[#2C3E50] px-4 py-2 rounded hover:bg-[#C49B2D] transition"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default ProductDetails;
