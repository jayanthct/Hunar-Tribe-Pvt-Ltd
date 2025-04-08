import React from "react";

const ImpactCard = ({ icon, number, quantity, highlight, description }) => {
  return (
    <article className="impactcard flex flex-col lg:flex-row px-4 sm:px-6 py-4 gap-4 justify-start items-center bg-accent3light w-full rounded-[12px] transition-all hover:scale-[0.9] ease-in-out duration-300">
      <div className="iconplace bg-accent3 rounded-full flex justify-center items-center w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] flex-shrink-0">
        <img src={icon} alt="" className="icon w-[60%] h-[60%] scale-[0.8]" />
      </div>

      <div className="content flex flex-col justify-start items-start gap-1">
        <p className="numbers text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-accent2 font-bold leading-snug">
          {number}&nbsp;
          <span className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-tight">
            {quantity}
          </span>
        </p>
        <p className="description font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-snug">
          <span className="text-accent1 font-bold text-[16px] sm:text-[18px] md:text-[20px] tracking-tight">
            {highlight}
          </span>{" "}
          {description}
        </p>
      </div>
    </article>
  );
};

export default ImpactCard;
