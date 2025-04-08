import React from "react";
import ContactForm from "./ContactForm";
import FlipCard from "./FlipCard";
import ReactFlipCard from "reactjs-flip-card";

import arrow from "./arrow.svg";
import whatsapp from "./whatsapp.svg";
import pots from "./pots.png";

const handleWhatsAppClick = (e) => {
  e.stopPropagation(); // Prevents flip interference
  window.open("https://wa.me/918000425929", "_blank");
};

const styles = {
  card: { width: "100%" },
};

const Contactus = () => {
  return (
    <section
      id="contact"
      className="contact-section my-16 flex flex-col gap-6 md:px-[8%] lg:px-[10%] px-[16px] w-full"
    >
      <div className="text-center flex justify-center items-center flex-col gap-2">
        <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
          Contact <span className="text-accent1 font-bold">Us</span>
        </h1>
        <p className="description text-textsecondary">
          For Bulk orders or need a service
        </p>
      </div>
      <div className="mt-8 w-full flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between items-center">
        <ContactForm />

        <ReactFlipCard
          containerStyle={{ width: "100%", height: "100%" }}
          frontStyle={{ width: "100%" }}
          backStyle={{ width: "100%" }}
          frontComponent={
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
          }
          backComponent={
            <button
              onClick={handleWhatsAppClick}
              className="flipcard cursor-pointer flex flex-col justify-center items-center px-8 gap-6 py-8 bg-accent3light rounded-[12px] w-full h-full"
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
                    <img src={whatsapp} alt="whatsapp" className="arrow w-10 h-10" />
                    <p className="underline text-textprimary text-[16px] font-medium">
                      Start Messaging Now!
                    </p>
                  </div>
                </div>
              </article>
            </button>
          }
        />
      </div>
    </section>
  );
};

export default Contactus;
