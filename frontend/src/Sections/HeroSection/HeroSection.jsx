import React, { useState, useEffect } from "react";
import banner from "./Assets/banner.png";
import banner1 from "./Assets/banner1.png";
import banner2 from "./Assets/banner2.png";
import banner3 from "./Assets/banner3.png";
import Button from "../../Components/Button/Button";
import { motion } from "framer-motion";

const slides = [
  {
    image: banner,
    title: "Eco-Friendly Pots",
    description:
      "Lorem ipsum dolor sit amet consectetur mi ut tortor bibendum auctor sit tortor scelerisque nulla sed.",
    buttonText: "Shop Now",
  },
  {
    image: banner1,
    title: "Empowering Tribes",
    description:
      "Enhancing the local tribes to upskill their abilities to make difference.",
    buttonText: "Explore Now",
  },
  {
    image: banner2,
    title: "Designing Model Anganvadi",
    description: "Discover the new Generation Schools with our creativity.",
    buttonText: "View Gallery",
  },
  {
    image: banner3,
    title: "Handcrafted Decor",
    description:
      "Unique handcrafted pots to elevate your home and garden aesthetics.",
    buttonText: "Shop Handmade",
  },
  {
    image: banner,
    title: "Nature-Inspired Designs",
    description:
      "Bring nature closer with beautifully designed pots that blend with any decor.",
    buttonText: "Buy Now",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section h-[68vh] flex flex-col justify-center items-center w-full px-[16px] md:px-[10%] relative mb-12 mt-[200px]">
      <motion.div
        key={currentSlide}
        className="heroimage w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-start py-16 rounded-[16px]"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
        initial={{ x: 300, opacity: 0 }} // Start from the right
        animate={{ x: 0, opacity: 1 }} // Slide to the center
        exit={{ x: -300, opacity: 0 }} // Slide to the left on exit
        transition={{ duration: 0.5 }}
      >
        <div className="content text-center flex flex-col justify-center items-center gap-4">
          <motion.h1
            className="text-[42px] tracking-tighter font-bold text-textprimary leading-[100%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentSlide].title.split(" ")[0]}{" "}
            <span className="text-accent1">
              {slides[currentSlide].title.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
          <p className="text-textsecondary w-[48ch] leading-[130%]">
            {slides[currentSlide].description}
          </p>
          <Button title={slides[currentSlide].buttonText} primary={true} />
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
