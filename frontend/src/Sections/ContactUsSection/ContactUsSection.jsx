import React from "react";
import ContactForm from "./ContactForm";
import FlipCard from "./FlipCard";

const Contactus = () => {
  return (
    <section id="contact" className="contact-section my-16 flex flex-col gap-6 md:px-[8%] lg:px-[10%] px-[16px] w-full">
      <div className="text-center flex justify-center items-center flex-col gap-2">
        <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
          Contact <span className="text-accent1 font-bold">Us</span>
        </h1>
        <p className="description text-textsecondary">
          For Bulk orders or need a service
        </p>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row gap-16 justify-between items-center">
        <ContactForm />
        <FlipCard />
      </div>
    </section>
  );
};

export default Contactus;
