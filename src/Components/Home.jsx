import React from "react";
import { motion } from "framer-motion";
import headerImage from "/src/assets/Header.img.jpg";
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/home-12.jpg";
import AboutUs from "./AboutUs";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div
        className="h-screen w-full bg-[#0A192F] text-[#F5F5F5] bg-cover bg-center bg-no-repeat mb-8 px-10 flex items-center"
        id="Header"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Kitchen with Premium Appliances
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Discover our collection of high-quality kitchen appliances
              designed to make cooking a joy.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#E63946" }}
              className="mt-8 px-8 py-3 rounded-xl transition duration-300 shadow-lg"
              style={{ backgroundColor: "#D4AF37", color: "#0A192F" }}
            >
              Shop Now
            </motion.button>
          </div>

          {/* Right Side - Image Slider */}
          <div>
            <Slider {...settings} className="h-auto w-full">
              <div className="h-[700px]">
                <img
                  src={image1}
                  alt="Slide 1"
                  className="w-full h-[700px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="h-[700px]">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Slide 2"
                  className="w-full h-[700px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="h-[700px]">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/peach-pine-interiors-ph-joseph-bradshaw3-6762df055024b.jpg?crop=1xw:0.7499566974595843xh;center,top"
                  alt="Slide 3"
                  className="w-full h-[700px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <Products />
      <AboutUs />
    </>
  );
};

export default Home;
