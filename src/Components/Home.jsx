import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homePageImg1 from "../assets/Homepageimg1.jpg";
import homePageImg2 from "../assets/Homepageimage2.jpg";
import homePageImg3 from "../assets/Homepageimg3.jpg";
import homePageImg4 from "../assets/Homepage1.jpg";
import AboutUs from "./AboutUs.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        className="min-h-screen w-full bg-[#EEF1F7] text-[#333] bg-cover bg-center bg-no-repeat px-4 md:px-10 py-10 flex items-center"
        id="Header"
      >
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto w-full">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-[Playfair Display] text-[#2C3E50]">
              Transform Your Kitchen with <br />
              <span className="text-[#D4AF37]">Premium Appliances</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 font-[Inter]">
              Discover our collection of high-quality kitchen appliances
              designed to make cooking a joy.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#C49B2D" }}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 rounded-xl transition duration-300 shadow-lg font-[Inter] font-semibold text-base sm:text-lg"
              style={{ backgroundColor: "#D4AF37", color: "#2C3E50" }}
              onClick={() => navigate("/products")}
            >
              Shop Now
            </motion.button>
          </div>

          {/* Right Side - Image Slider */}
          <div className="w-full">
            <Slider {...settings} className="w-full">
              {[homePageImg3, homePageImg1, homePageImg2, homePageImg4].map(
                (img, index) => (
                  <div
                    key={index}
                    className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </div>

      {/* ✅ Padding added to avoid overlap */}
      <div className="pb-20">
        <Element name="products">
          <Products />
        </Element>

        <Element name="about">
          <AboutUs />
        </Element>
      </div>
    </>
  );
};

export default Home;
