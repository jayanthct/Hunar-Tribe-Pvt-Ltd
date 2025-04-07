import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";
import tyre from "../ImpactSection/Assets/tyre.svg";
import students from "../ImpactSection/Assets/students.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const OurServicesSection = () => {
  const points = [
    "Lorem ipsum dolor sit amet consectetur mi ut.",
    "Sed do eiusmod tempor incididunt ut labore.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
  ];

  const titles = ["Tire Pots", "Model Anganvadi"];
  const icon = [tyre, students];

  const ytlink = [
    "https://www.youtube.com/embed/aqu0kHP9knA?si=2PIbQzzy0APHrqXN",
    "https://www.youtube.com/embed/nD3oSBv7uxY?si=c-j80lQvQYNP96Kz",
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % titles.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + titles.length) % titles.length);
  };

  return (
    <section className="service flex flex-col justify-center gap-8 overflow-y-clip items-start min-h-screen md:px-[8%] lg:px-[10%] px-[16px] w-full">
      <div className="leftcontent w-full flex justify-between items-end gap-4">
        <div className="text flex flex-col justify-start items-start gap-2">
          <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Our <span className="font-bold text-accent1">Services</span>
          </h1>
          <p className="description text-textsecondary">
            Transforming Lives and Communities Through Innovation
          </p>
        </div>
        <Button title="Join Us" />
      </div>

      <div className="flex items-center py-4 h-full gap-4 justify-center w-full">
        <div className="leftcontent flex flex-col justify-start items-start gap-6 w-full">
          <motion.div
            key={index} // Helps Framer Motion detect changes
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="maincontent flex justify-start items-center gap-4"
          >
            <div className="iconplace bg-accent3 rounded-full flex justify-center items-center w-[100px] h-[100px] flex-shrink-0">
              <img
                src={icon[index]}
                alt=""
                className="icon w-[60%] h-[60%] scale-[0.8]"
              />
            </div>
            <p className="heading font-bold text-[36px] text-accent2 tracking-tight">
              {titles[index]}
            </p>
          </motion.div>

          <div className="points flex flex-col justify-start items-start gap-2">
            {points.map((text, i) => (
              <div
                key={i}
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

          <div className="allbuttons flex justify-start items-start w-full gap-2">
            <Button primary title="Contact Us"></Button>
            <Button title="See Samples"></Button>
            <div className="buttonsrow flex justify-center items-center ml-8 gap-2">
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

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="rightcontent w-full rounded-[12px]"
        >
          <iframe
            className="rounded-[12px]"
            width="600"
            height="360"
            src={ytlink[index]}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
