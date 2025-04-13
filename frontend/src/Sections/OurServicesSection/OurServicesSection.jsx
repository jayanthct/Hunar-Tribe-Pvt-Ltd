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
    {
      1: "Designing vibrant, child-friendly Anganwadi spaces using sustainable, upcycled materials.",
      2: "Supporting early childhood development through creative and functional design.",
      3: "Empowering communities with environmentally-conscious, impactful design solutions.",
    },
    {
      1: "Crafting safe, eco-friendly playgrounds from discarded tyres",
      2: "Promoting active play through joyful, upcycled designs.",
      3: "Showcasing sustainability by transforming waste into wonder.",
    },
    {
      1: "Transforming public spaces into creative, interactive wonders.",
      2: "Using waste materials to design parks and gardens sustainably.",
      3: "Inspiring awareness and eco-conscious living through design.",
    },
    {
      1: "Establishing learning hubs focused on skill-building and sustainability.",
      2: "Empowering youth and communities through hands-on eco education.",
      3: "Promoting zero-waste living with practical, creative design.",
    },
    {
      1: "Conducting immersive workshops to showcase the power of upcycling.",
      2: "Engaging schools and communities in hands-on waste management activities.",
      3: "Fostering creativity and eco-awareness through interactive learning.",
    },
  ];

  const titles = [
    "Building Model Anganwadi",
    "Tyre-Based Playgrounds",
    "Waste to Wonder Parks",
    "Establishing Zero Waste Learning Centers",
    "Upcycling & Sustainability Workshops",
  ];
  const icon = [tyre, students, students, students, students, students];
  const ytlink = [
    "https://www.youtube.com/embed/nD3oSBv7uxY?si=c-j80lQvQYNP96Kz",
    "https://www.youtube.com/embed/69ZQsBC1fPU?si=iZ7GCh12OTfcTPDr",
    "https://www.youtube.com/embed/1I2XiQ0TdLw?si=imgpkr9LBRko_dfR",
    "https://www.youtube.com/embed/-J1DqW4nDyY?si=B_-PacTpPT_D-VEG",
    "https://www.youtube.com/embed/mrXL-PceEyE?si=uStH6-k2-r1rZBZF",
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % titles.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + titles.length) % titles.length);
  };

  return (
    <section
      id="services"
      className="service flex flex-col justify-center gap-8 overflow-y-clip items-start min-h-screen md:px-[8%] lg:px-[10%] px-4 w-full py-12"
    >
      {/* Heading and Join Button */}
      <div className="leftcontent w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div className="text flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2">
          <h1 className="text-[32px] md:text-[48px] tracking-tighter text-textprimary font-medium leading-[120%]">
            Our <span className="font-bold text-accent1">Services</span>
          </h1>
          <p className="description text-textsecondary  text-center md:text-start">
            Transforming Lives and Communities Through Innovation
          </p>
        </div>
        <div className="mt-2 sm:mt-0 hidden lg:block">
          <Button title="Join Us" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center py-4 h-full gap-10 justify-center w-full">
        {/* Left Content */}
        <div className="leftcontent flex flex-col items-center justify-center  lg:justify-start lg:items-start gap-6 w-full">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="maincontent flex justify-start items-center gap-4"
          >
            <div className="iconplace bg-accent3 rounded-full flex justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-shrink-0">
              <img
                src={icon[index]}
                alt=""
                className="icon w-[60%] h-[60%] scale-[0.8]"
              />
            </div>
            <p className="heading font-bold text-[28px] md:text-[32px] text-accent2 tracking-tight">
              {titles[index]}
            </p>
          </motion.div>

          {/* Points List */}
          <div className="points flex flex-col justify-start items-start gap-2">
            {Object.values(points[index]).map((point, i) => (
              <div
                key={i}
                className="point flex justify-start items-start gap-2"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-700 text-lg"
                />
                <p className="pointtext font-medium text-textprimary tracking-tight">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="allbuttons flex flex-wrap justify-center items-center lg:justify-start lg:items-center w-full gap-3">
            <Button primary title="Contact Us" />
            <Button title="Learn More" />
            <div className="buttonsrow flex justify-center items-center gap-2">
              <button
                onClick={handlePrev}
                className="chevrons w-10 h-10 flex justify-center items-center p-2 bg-background border border-accent2 rounded-full hover:scale-105 hover:bg-[#3f12120e] cursor-pointer transition-all"
              >
                <FaChevronLeft size={16} className="text-accent2" />
              </button>
              <button
                onClick={handleNext}
                className="chevrons w-10 h-10 flex justify-center items-center p-2 bg-background border border-accent2 rounded-full hover:scale-105 hover:bg-[#3f12120e] cursor-pointer transition-all"
              >
                <FaChevronRight size={16} className="text-accent2" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - YouTube Video */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="rightcontent w-full max-w-full "
        >
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={ytlink[index]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
