import React from "react";
import Button from "../../Components/Button/Button";
import ImpactCard from "./ImpactCard";

import icon1 from "./Assets/tyre.svg";
import icon2 from "./Assets/students.svg";
import icon3 from "./Assets/scrap.svg";
import icon4 from "./Assets/students.svg";
import icon5 from "./Assets/plastic.svg";
import icon6 from "./Assets/ecployee.svg";

const ImpactSection = () => {
  const numbers = [
    "2,65,000+",
    "5,000+",
    "70,000+",
    "5,000+",
    "15,000+",
    "30+",
  ];
  const quantity = [
    "Kgs",
    "Students",
    "Kgs",
    "Students",
    "Kgs",
    "Tribal Youth",
  ];
  const highlight = [
    "Scrap",
    "Educational",
    "Scrap",
    "Educational",
    "Plastics",
    "Skilled",
  ];
  const description = [
    "Tires Upcycled",
    "Activities",
    "Iron Upcycled",
    "Activities",
    "Upcycled",
    "& Empowered",
  ];
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <>
      <section className=" impact flex flex-col justify-between gap-8 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-10">
        <div className="leftcontent w-full flex justify-between items-end gap-4">
          <div className="text flex flex-col justify-start items-start gap-2">
            <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
              Our&nbsp;
              <span className="font-bold text-accent1">Impact</span>
            </h1>
            <p className="description text-textsecondary">
              Transforming Lives and Communities Through Innovation
            </p>
          </div>
          <Button primary title="Join Us" />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-[20px] w-full">
          {numbers.map((num, index) => (
            <ImpactCard
              key={index}
              icon={icons[index]}
              number={num}
              quantity={quantity[index]}
              highlight={highlight[index]}
              description={description[index]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ImpactSection;
