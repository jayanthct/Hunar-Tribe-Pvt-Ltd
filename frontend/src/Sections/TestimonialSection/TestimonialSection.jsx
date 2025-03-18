import React from "react";
import Button from "../../Components/Button/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import flower from "./Assets/flower.png";
import hflower from "./Assets/hangingflower.png";
import TestimonialPerson from "./TestimonialPerson";

const TestimonialSection = () => {
  return (
    <>
      <section className="testimonialsection flex md:flex-row flex-col justify-between gap-4 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-10">
        <div className="leftcontent w-[40%] flex flex-col justify-start items-start gap-4">
          <div className="text flex flex-col justify-start items-start gap-2">
            <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
              What Our&nbsp;
              <br />
              <span className="font-bold text-accent1">Customer</span> Tell
            </h1>
            <p className="description text-textsecondary">
              Lorem ipsum dolor sit amet consectetur mi ut tortor bibendum
              auctor sit tortor scelerisque nulla sed.Lorem ipsum dscelerisque
              nulla sed.
            </p>
          </div>
          <div className="allbuttons flex justify-start items-start w-full gap-8">
            <Button primary>Shop Now</Button>
            <div className="buttonsrow flex justify-center items-center gap-4">
              <button className="chevrons w-[48px] h-[48px] flex justify-center items-center p-2 bg-background border-[1.4px] border-accent2 rounded-full hover:scale-[1.1] hover:bg-[#3f12120e] cursor-pointer ease-in transition-all">
                <FaChevronLeft size={16} className="text-accent2" />
              </button>
              <button className="chevrons w-[48px] h-[48px] flex justify-center items-center p-2 bg-background border-[1.4px] border-accent2 rounded-full hover:scale-[1.1] hover:bg-[#3f12120e] cursor-pointer ease-in transition-all">
                <FaChevronRight size={16} className="text-accent2" />
              </button>
            </div>
          </div>
        </div>
        <div className="rightcontent w-[60%] flex flex-col justify-center gap-8 p-[64px] items-center bg-accent3light rounded-[16px] relative overflow-clip">
          <p className="comment text-[30px] w-[20ch] font-medium text-textprimary text-center tracking-tight leading-[130%]">
            “ Top-quality pots, vibrant and shiny, the best I've ever purchased!
            ”
          </p>
          <TestimonialPerson></TestimonialPerson>

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
    </>
  );
};

export default TestimonialSection;
