import React from "react";
import swiggy from "./Assets/swiggy.png";
import arrow from "./Assets/arrow.svg";
import blur from "./Assets/blur.svg";
import "./SwiggyBanner.css";

const SwiggyBanner = () => {
  return (
    <section className="swiggybanner overflow-clip relative flex justify-center items-start flex-col gap-6 md:px-[8%] lg:px-[10%] lg:py-[6%] px-[16px] w-full my-[2%]">
      <a target="_blank" href="https://hunartribe.mini.site/?path=%2F" className="sidecontent z-2 relative flex flex-col w-fit justify-center items-start gap-4">
        <p className="heading font-medium tracking-tight text-accent2 text-[42px] leading-[120%]">
          Get your First Order!
        </p>
        <div className="tag bg-accent2 text-white px-8 py-2 flex justify-center items-center w-fit rounded-full">
          Now Available At!
        </div>
        <img src={swiggy} alt="" className="seiggyminis w-[50%]" />
        <img
          src={arrow}
          alt=""
          className="arrow absolute w-[24%] top-[16%] right-[20%]"
        />
      </a>
      <img src={blur} alt="" className="blur absolute z-0 top-[-8%] left-[-10%]" />
    </section>
  );
};

export default SwiggyBanner;
