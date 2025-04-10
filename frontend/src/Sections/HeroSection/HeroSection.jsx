import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import banner1 from "./Assets/banner1.png";
import banner2 from "./Assets/banner2.png";
import banner3 from "./Assets/banner3.png";
import banner4 from "./Assets/banner4.png";

import small1 from "./Assets/small1.png";
import small2 from "./Assets/small2.png";
import small3 from "./Assets/small3.png";
import small4 from "./Assets/small4.png";

import Button from "../../Components/Button/Button";

const slides = [
  {
    image: banner1,
    simage: small1,
    title: "Designing Model Anganvadi",
    description:
      "Lorem ipsum dolor sit amet consectetur mi ut tortor bibendum auctor sit tortor scelerisque nulla sed.",
    buttonText: "Shop Now",
  },
  {
    image: banner2,
    simage: small2,
    title: "Handcrafted Decor",
    description:
      "Enhancing the local tribes to upskill their abilities to make difference.",
    buttonText: "Explore Now",
  },
  {
    image: banner3,
    simage: small3,
    title: "Empowering Tribes",
    description: "Discover the new Generation Schools with our creativity.",
    buttonText: "View Gallery",
  },
  {
    image: banner4,
    simage: small4,
    title: "Eco-Friendly Pots",
    description:
      "Unique handcrafted pots to elevate your home and garden aesthetics.",
    buttonText: "Shop Handmade",
  },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImage = isMobile
    ? slides[currentSlide].simage
    : slides[currentSlide].image;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="hero-section h-[86vh] md:h-[68vh] flex flex-col justify-center items-center w-full px-[16px] md:px-[4%] relative mb-12 mt-[160px] md:mt-[200px]">
      
      <motion.div
        key={currentSlide}
        className="heroimage w-full h-full bg-cover bg-center bg-no-repeat flex justify-start items-center px-[10%] py-16 rounded-[16px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{ x: 300, opacity: 0 }} // Start from the right
        animate={{ x: 0, opacity: 1 }} // Slide to the center
        exit={{ x: -300, opacity: 0 }} // Slide to the left on exit
        transition={{ duration: 0.5 }}
      >
        <div className="content self-start md:self-center w-full md:text-left flex flex-col justify-center items-center gap-4 md:items-start md:justify-start text-center">
          <motion.h1
            className="text-[28px] md:text-[42px] tracking-tighter font-bold text-textprimary leading-[100%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentSlide].title.split(" ")[0]}{" "}
            <span className="text-accent1">
              {slides[currentSlide].title.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
          <p className="text-textsecondary w-[26ch] md:w-[36ch] tracking-tight leading-[130%]">
            {slides[currentSlide].description}
          </p>
          <Button
            link={"https://hunartribe.mini.site/?path=%2F"}
            title={slides[currentSlide].buttonText}
            primary={true}
          />
        </div>
      </motion.div>

      <div className="dots flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-accent1 w-12" : "bg-gray-300"
            } cursor-pointer`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
