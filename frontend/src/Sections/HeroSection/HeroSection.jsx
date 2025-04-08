import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import banner1 from "./Assets/banner1.png";
import banner2 from "./Assets/banner2.png";
import banner3 from "./Assets/banner3.png";
import banner4 from "./Assets/banner4.png";
import Button from "../../Components/Button/Button";
import flower from "../TeamSection/Assets/flower.svg";


const slides = [
  {
    image: banner1,
    title: "Designing Model Anganvadi",
    description:
      "Lorem ipsum dolor sit amet consectetur mi ut tortor bibendum auctor sit tortor scelerisque nulla sed.",
    buttonText: "Shop Now",
  },
  {
    image: banner2,
    title: "Handcrafted Decor",
    description:
      "Enhancing the local tribes to upskill their abilities to make difference.",
    buttonText: "Explore Now",
  },
  {
    image: banner3,
    title: "Empowering Tribes",
    description: "Discover the new Generation Schools with our creativity.",
    buttonText: "View Gallery",
  },
  {
    image: banner4,
    title: "Eco-Friendly Pots",
    description:
      "Unique handcrafted pots to elevate your home and garden aesthetics.",
    buttonText: "Shop Handmade",
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
      <img
        src={flower}
        alt=""
        className="flower absolute bottom-0 left-[-12%] w-80 "
      />
      <img
        src={flower}
        alt=""
        className="flower absolute right-[-12%] top-0 w-80"
      />

      <motion.div
        key={currentSlide}
        className="heroimage w-full h-full bg-cover bg-center bg-no-repeat flex justify-start items-center px-[10%] py-16 rounded-[16px]"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
        initial={{ x: 300, opacity: 0 }} // Start from the right
        animate={{ x: 0, opacity: 1 }} // Slide to the center
        exit={{ x: -300, opacity: 0 }} // Slide to the left on exit
        transition={{ duration: 0.5 }}
      >
        <div className="content text-left flex flex-col justify-start items-start gap-4">
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
          <p className="text-textsecondary w-[36ch] tracking-tight leading-[130%]">
            {slides[currentSlide].description}
          </p>
          <Button link={"https://hunartribe.mini.site/?path=%2F"} title={slides[currentSlide].buttonText} primary={true} />
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
