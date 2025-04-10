import React from "react";
import { FaGlobe, FaRecycle, FaBook } from "react-icons/fa"; // Importing icons

const visionData = [
  {
    icon: <FaGlobe className="text-[#119BD1] text-4xl" size={72} />,
    title: "Designing",
    highlight: "Sustainable",
    description: "Spaces",
    bgColor: "rgba(17,155,209,0.08)",
  },
  {
    icon: <FaRecycle className="text-[#2A890B] text-4xl" size={72} />,
    title: "Transforming",
    highlight: "Waste",
    description: "Into Wonder",
    bgColor: "rgba(42,137,11,0.08)",
  },
  {
    icon: <FaBook className="text-[#FF4E4E] text-4xl" size={72} />,
    title: "Educating the next",
    highlight: "Generations",
    description: "",
    bgColor: "rgba(255,78,78,0.08)",
  },
];

const OurVisionSection = () => {
  return (
    <section className="impactsection flex flex-col justify-between gap-6 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-[10%] mb-[10%]">
      <div className="text flex flex-col justify-center items-center gap-2">
        <h1 className="text-[36px] lg:text-[48px] tracking-tighter text-textprimary font-medium leading-[120%]">
          Our&nbsp;
          <span className="font-bold text-accent1">Vision</span>
        </h1>
        <p className="description text-textsecondary text-center md:text-start">
          Agenda of the Hunar Tribe to make a difference
        </p>
      </div>
      <article className="iconcards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {visionData.map((item, index) => (
          <div
            key={index}
            className="visioncard flex flex-col w-full items-center justify-center gap-6 px-[48px] py-[36px] rounded-lg hover:scale-[0.95] transition-all ease-in-out"
            style={{ backgroundColor: item.bgColor }}
          >
            {item.icon}
            <p className="title text-center text-textprimary leading-[150%] tracking-tight font-medium text-[20px]">
              {item.title} <br />
              <span className="font-bold text-accent1 text-[24px]">
                {item.highlight}
              </span>
              &nbsp; {item.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default OurVisionSection;
