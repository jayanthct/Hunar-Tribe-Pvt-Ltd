import React from "react";
import swiggy from "./Assets/swiggy.png";
import arrow from "./Assets/arrow.svg";
import blur from "./Assets/blur.svg";
import "./SwiggyBanner.css";

const SwiggyBanner = () => {
  return (
    <section className="swiggybanner relative flex flex-col justify-center items-start gap-6 px-4 sm:px-8 md:px-[8%] lg:px-[10%] py-6 md:py-10 w-full h-[48vh] lg:h-[58vh] overflow-hidden my-[4%]">
      {/* Content Link */}
      <a
        target="_blank"
        href="https://hunartribe.mini.site/?path=%2F"
        className="z-10 relative flex flex-col w-full sm:w-fit justify-center items-start gap-4"
      >
        {/* Heading */}
        <p className="font-medium tracking-tighter text-accent2 text-[32px] sm:text-[36px] md:text-[42px] leading-tight">
          Get your First Order!
        </p>

        {/* Tag */}
        <div className="bg-accent2 text-white px-6 py-2 flex justify-center items-center w-fit rounded-full text-sm sm:text-base">
          Now Available At!
        </div>

        {/* Swiggy Image */}
        <img
          src={swiggy}
          alt="Swiggy"
          className="w-[50%] sm:w-[70%] md:w-[40%] lg:w-[40%]"
        />

        {/* Arrow */}
        <img
          src={arrow}
          alt="Arrow"
          className="absolute w-[30%] top-[30%] right-[20%] sm:w-[20%] sm:top-[24%] sm:left-[40%]"
        />
      </a>

      {/* Background Blur */}
      <img
        src={blur}
        alt="Blur"
        className="blur absolute  lg:top-[20%] lg:left-0 bottom-[10%] left-[4%] w-[150%] sm:w-[50%]"
      />
    </section>
  );
};

export default SwiggyBanner;
