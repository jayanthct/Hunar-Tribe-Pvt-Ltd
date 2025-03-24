import React from "react";
import "./OurClients.css";
import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";
import img4 from "./Assets/img4.png";
import img5 from "./Assets/img5.png";
import img6 from "./Assets/img6.png";
import img7 from "./Assets/img7.png";
import img8 from "./Assets/img8.png";
import img9 from "./Assets/img9.png";
import img10 from "./Assets/img10.png";
import img11 from "./Assets/img11.png";

const OurClients = () => {
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const name1 = [
    "Coal India",
    "FXB",
    "IIFL Finance",
    "Cafe Amaara",
    "PM Shri",
    "Women Development",
  ];
  const name2 = [
    "Tribe Development",
    "Biotechnology",
    "Navodaya",
    "RRIL",
    "Swachh Dungapur",
  ];

  return (
    <>
      <section className="ourclients flex flex-col justify-center gap-6 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-10 mb-10 min-h-screen">
        <div className="text flex flex-col justify-center items-center gap-2">
          <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Our&nbsp;
            <span className="font-bold text-accent1">Clients</span>
          </h1>
          <p className="description text-textsecondary">
            Agenda of the Hunar Tribe to make a difference
          </p>
        </div>

        <div className="imagesgrid grid grid-cols-2 md:grid-cols-6 gap-12 justify-center items-center w-[80%] mt-8">
          {logos.slice(0, 6).map((logo, index) => (
            <div
              key={index}
              className="aspect-w-1 aspect-h-1 flex justify-center items-center"
            >
              <img
                title={name1[index]}
                src={logo}
                alt={`client-logo-${index + 1}`}
                className="w-full h-auto object-contain hover:scale-[1.1] ease-in transition-all duration-150"
              />
            </div>
          ))}
        </div>

        {/* Line between rows */}
        <hr className="w-[90%] border-t border-gray-300 my-4" />

        <div className="imagesgrid grid grid-cols-2 md:grid-cols-5 gap-12 justify-center items-center w-[64%]">
          {logos.slice(6).map((logo, index) => (
            <div
              key={index}
              className="aspect-w-1 aspect-h-1 flex justify-center items-center"
            >
              <img
                title={name2[index]}
                src={logo}
                alt={`client-logo-${index + 7}`}
                className="w-full h-auto object-contain hover:scale-[1.1] ease-in transition-all duration-150"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurClients;
