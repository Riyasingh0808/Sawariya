import React from "react";
import { motion } from "framer-motion";
import headerImage from "/src/assets/Header.img.jpg";
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/home-12.jpg";

const Home = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    paueOnHover: true,
  };

  return (
    <>
      <div
        className="h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat flex mb-8"
        // style={{ backgroundImage: `url(${headerImage})` }}
        id="Header"
      >
        <Slider {...settings} className="h-auto w-[95vw]">
          <div className="h-[700px]">
            <img src={image1} alt="Slide 1" className="w-full h-[700px]" />
          </div>
          <div className="h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Slide 2"
              className="w-full h-[700px]"
            />
          </div>
          <div className="h-[700px]">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/peach-pine-interiors-ph-joseph-bradshaw3-6762df055024b.jpg?crop=1xw:0.7499566974595843xh;center,top"
              alt="slide 3"
              className="w-full h-[700px]"
            />
          </div>
        </Slider>
      </div>
      <Products />
    </>
  );
};

export default Home;
