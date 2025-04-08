import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../Components/Button/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import flower from "./Assets/flower.png";
import hflower from "./Assets/hangingflower.png";
import TestimonialPerson from "./TestimonialPerson";

const comments = [
  "Top-quality pots, vibrant and shiny, the best I've ever purchased!",
  "Absolutely love these plants! They bring life to my home very bright.",
  "Excellent customer service and beautiful products. Highly recommended!",
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % comments.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + comments.length) % comments.length);
  };

  return (
    <section id="testimonials" className="testimonialsection flex md:flex-row flex-col justify-between gap-4 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full my-[10%]">
      <div className="leftcontent w-[40%] flex flex-col justify-start items-start gap-8">
        <div className="text flex flex-col justify-start items-start gap-2">
          <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            What Our&nbsp;
            <br />
            <span className="font-bold text-accent1">Customer</span> Tell
          </h1>
          <p className="description text-textsecondary leading-[120%]">
            Lorem ipsum dolor sit amet consectetur mi ut tortor bibendum auctor
            sit tortor scelerisque nulla sed.Lorem ipsum dscelerisque nulla sed.
          </p>
        </div>
        <div className="allbuttons flex justify-start items-start w-full gap-8">
          <Button primary>Shop Now</Button>
          <div className="buttonsrow flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="chevrons w-[48px] h-[48px] flex justify-center items-center p-2 bg-background border-[1.4px] border-accent2 rounded-full hover:scale-[1.1] hover:bg-[#3f12120e] cursor-pointer ease-in transition-all"
            >
              <FaChevronLeft size={16} className="text-accent2" />
            </button>
            <button
              onClick={handleNext}
              className="chevrons w-[48px] h-[48px] flex justify-center items-center p-2 bg-background border-[1.4px] border-accent2 rounded-full hover:scale-[1.1] hover:bg-[#3f12120e] cursor-pointer ease-in transition-all"
            >
              <FaChevronRight size={16} className="text-accent2" />
            </button>
          </div>
        </div>
      </div>
      <div className="rightcontent w-[60%] flex flex-col justify-center gap-8 p-[64px] items-center bg-accent3light rounded-[16px] relative overflow-clip">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={index}
            className="comment text-[30px] w-[20ch] font-medium text-textprimary text-center tracking-tighter leading-[130%]"
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            “ {comments[index]} ”
          </motion.p>
        </AnimatePresence>
        <TestimonialPerson />
        <img
          src={flower}
          alt=""
          className="images absolute left-[-32px] bottom-[-64px] w-[36%]"
        />
        <img
          src={hflower}
          alt=""
          className="images absolute right-[-72px] top-[-72px]"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
