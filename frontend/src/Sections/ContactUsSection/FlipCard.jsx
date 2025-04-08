import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "./arrow.svg";
import whatsapp from "./whatsapp.svg";
import pots from "./pots.png";

import "./FlipCard.css";

const FlipCard = () => {
  const [hovered, setHovered] = useState(false);

  const handleWhatsAppClick = (e) => {
    e.stopPropagation(); // Prevents flip interference
    window.open("https://wa.me/918000425929", "_blank");
  };

  return (
    <div
      className="w-full md:w-[50%] aspect-[4/3] relative perspective-[1000px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.div
            key="front"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            className="absolute w-full h-full rounded-[12px] backface-hidden preserve-3d"
          >
            <section className="flipcard flex flex-col justify-center items-center px-8 gap-6 py-8 bg-accent3light rounded-[12px] w-full h-full">
              <img
                src={pots}
                alt="product"
                className="heroimage w-full rounded-[16px]"
              />
              <article className="textandarrow flex justify-between items-center w-full">
                <div className="textarea flex flex-col gap-2 w-full justify-start items-start">
                  <p className="titile font-semibold text-[24px] sm:text-[28px] text-textprimary tracking-tight">
                    Need <span className="text-accent1">Bulk</span> In Orders?
                  </p>
                  <p className="description text-[16px] -mt-1 mb-2 text-textsecondary">
                    Don't worry! Just a Call we will reach you
                  </p>
                  <div className="whatsapp flex justify-center items-center gap-3 cursor-pointer">
                    <img src={whatsapp} alt="whatsapp" className="w-10 h-10" />
                    <p className="underline text-accent2 text-[16px] font-medium">
                      Order Through Text!
                    </p>
                  </div>
                </div>
                <img src={arrow} alt="arrow" className="arrow w-6 h-6" />
              </article>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="absolute w-full h-full rounded-[12px] backface-hidden preserve-3d cursor-pointer"
          >
            <button
              onClick={handleWhatsAppClick}
              className="flipcard flex flex-col justify-center items-center px-8 gap-6 py-8 bg-accent3light rounded-[12px] w-full h-full"
            >
              <img
                src={pots}
                alt="product"
                className="heroimage w-full rounded-[16px]"
              />
              <article className="textandarrow flex justify-between items-center w-full">
                <div className="textarea flex flex-col gap-3 w-full justify-center items-center">
                  <div className="phonenumber font-bold text-white px-8 py-2 rounded-[16px] mb-2 text-[24px] sm:text-[32px] bg-[#10C625]">
                    +91-8000425929
                  </div>
                  <div className="whatsapp flex justify-center items-center gap-3 cursor-pointer">
                    <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
                    <p className="underline text-textprimary text-[16px] font-medium">
                      Start Messaging Now!
                    </p>
                  </div>
                </div>
              </article>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlipCard;
