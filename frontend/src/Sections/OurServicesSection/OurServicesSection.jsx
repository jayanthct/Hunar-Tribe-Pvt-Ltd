import React from "react";
import Button from "../../Components/Button/Button";

import tyre from "../ImpactSection/Assets/tyre.svg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const OurServicesSection = () => {
  const slides = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const points = [
    "Lorem ipsum dolor sit amet consectetur mi ut.",
    "Sed do eiusmod tempor incididunt ut labore.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
  ];
  return (
    <>
      <section className="casestudy mb-20 mt-20 flex flex-col justify-between gap-8 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full">
        <div className="leftcontent w-full flex justify-between items-end gap-4">
          <div className="text flex flex-col justify-start items-start gap-2">
            <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
              Our&nbsp;
              <span className="font-bold text-accent1">Services</span>
            </h1>
            <p className="description text-textsecondary">
              Transforming Lives and Communities Through Innovation
            </p>
          </div>
          <Button title="Join Us" />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="leftcontent flex flex-col justify-start items-start gap-6 w-full">
            <div className="maincontent flex justify-start items-center gap-4">
              <div className="iconplace bg-accent3 rounded-full flex justify-center items-center w-[100px] h-[100px] flex-shrink-0">
                <img
                  src={tyre}
                  alt=""
                  className="icon w-[60%] h-[60%] scale-[0.8]"
                />
              </div>
              <p className="heading font-bold text-[36px] text-accent2 tracking-tight">
                Tire Pots
              </p>
            </div>

            <div className="points flex flex-col justify-start items-start gap-2">
              {points.map((text, index) => (
                <div
                  key={index}
                  className="point flex justify-center items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-700 text-lg"
                  />
                  <p className="pointtext font-medium text-textsecondary text-[20px] tracking-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="allbuttons flex justify-start items-start w-full gap-8">
              <Button primary title="Contact Us"></Button>
              <Button title="See Samples"></Button>
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
          <div className="rightcontent">{/* carousal */}
            {/* <Carousel></Carousel> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
