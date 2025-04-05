import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll"; // ✅ Import react-scroll
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/home-12.jpg";
import AboutUs from "./AboutUs.jsx";
import homePageImg1 from "../assets/Homepageimg1.jpg";
import homePageImg2 from "../assets/Homepageimage2.jpg";
import homePageImg3 from "../assets/Homepageimg3.jpg";
import homePageImg4 from "../assets/Homepage1.jpg";
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
        className="h-screen w-full bg-[#EEF1F7] text-[#333] bg-cover bg-center bg-no-repeat px-10 flex items-center"
        id="Header"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight font-[Playfair Display] text-[#2C3E50]">
              Transform Your Kitchen with <br />
              <span className="text-[#D4AF37]">Premium Appliances</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 font-[Inter]">
              Discover our collection of high-quality kitchen appliances
              designed to make cooking a joy.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#C49B2D" }}
              className="mt-8 px-8 py-3 rounded-xl transition duration-300 shadow-lg font-[Inter] font-semibold text-lg"
              style={{ backgroundColor: "#D4AF37", color: "#2C3E50" }}
              onClick={() => navigate("/products")}
            >
              Shop Now
            </motion.button>
          </div>

          {/* Right Side - Image Slider */}
          <div>
            <Slider {...settings} className="h-auto w-full">
              <div className="h-[500px] md:h-[700px]">
                <img
                  src={homePageImg3}
                  alt="Slide 1"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="h-[500px] md:h-[700px]">
                <img
                  src={homePageImg1}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="h-[500px] md:h-[700px]">
                <img
                  src={homePageImg2}
                  alt="Slide 3"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="h-[500px] md:h-[700px]">
                <img
                  src={homePageImg4}
                  alt="Slide 4"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* ✅ Wrapped sections with <Element> to enable smooth scrolling */}
      <Element name="products">
        <Products />
      </Element>

      <Element name="about">
        <AboutUs />
      </Element>
    </>
  );
};

export default Home;
