import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import banner1 from "./Assets/banner1.webp";
import banner2 from "./Assets/banner2.webp";
import banner3 from "./Assets/banner3.webp";
import banner4 from "./Assets/banner4.webp";
import banner5 from "./Assets/banner5.webp";

import small1 from "./Assets/small1.webp";
import small2 from "./Assets/small2.webp";
import small3 from "./Assets/small3.webp";
import small4 from "./Assets/small4.webp";
import small5 from "./Assets/small5.webp";

import Button from "../../Components/Button/Button";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      image: banner1,
      simage: small3,
      title: "Reimagining Early Childhood Spaces",
      description:
        "Creative, colorful, and child-centric Anganwadis designed to spark curiosity and care.",
      buttonText: "Shop Now",
    },
    {
      image: banner2,
      simage: small2,
      title: "Transforming Trash into Treasures",
      description:
        "Enhancing the local tribes to upskill their abilities to make difference.",
      buttonText: "Explore Now",
    },
    {
      image: banner3,
      simage: small1,
      title: "From Margins to Makers",
      description:
        "Empowering tribal youth with skills, creativity, and opportunities to lead with purpose.",
      buttonText: "View Gallery",
    },
    {
      image: banner4,
      simage: small4,
      title: "Unbreakable. Timeless. Tire Pots.",
      description:
        "Redefining durability with sustainable design - handcrafted from reclaimed tires.",
      buttonText: "Shop Handmade",
    },
    {
      image: banner5,
      simage: small5,
      title: "Every Piece Tells a Story",
      description:
        "Unique decor handcrafted from scrap — sustainable, soulful, and full of character",
      buttonText: "Shop Handmade",
    },
  ];

  const backgroundImage = isMobile
    ? slides[currentSlide].simage
    : slides[currentSlide].image;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="hero-section h-[80vh] md:h-[68vh] flex flex-col justify-center items-center w-full px-[16px] md:px-[4%] relative mb-4 mt-[160px] md:mt-[160px]">
      {loading ? (
        <Skeleton height="100%" width="100%" />
      ) : (
        <motion.div
          key={currentSlide}
          className="heroimage w-full h-full bg-cover bg-center bg-no-repeat flex justify-start items-center px-[6%] py-12 rounded-[16px]"
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
              className="text-[28px] md:text-[42px] tracking-tighter leading-[120%] font-bold text-textprimary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide].title.split(" ")[0]} <br />
              <span className="text-accent1">
                {slides[currentSlide].title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>
            <p className="text-textsecondary w-[28ch] md:w-[36ch] tracking-tight leading-[130%]">
              {slides[currentSlide].description}
            </p>
            <Button
              link={"https://hunartribe.mini.site/?path=%2F"}
              title={slides[currentSlide].buttonText}
              primary={true}
            />
          </div>
        </motion.div>
      )}

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
