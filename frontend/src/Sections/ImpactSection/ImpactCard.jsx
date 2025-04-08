import React from "react";

const ImpactCard = ({ icon, number, quantity, highlight, description }) => {
  return (
    <article className="impactcard flex flex-col xl:flex-row px-4 sm:px-6 py-4 gap-4 xl:gap-6 justify-center items-center bg-accent3light w-full rounded-[12px] transition-all hover:scale-[0.95] ease-in-out duration-300 overflow-hidden">
      {/* ICON */}
      <div className="iconplace bg-accent3 rounded-full flex justify-center items-center w-[70px] sm:w-[90px] xl:w-[100px] h-[70px] sm:h-[90px] xl:h-[100px] flex-shrink-0">
        <img src={icon} alt="" className="w-[60%] h-[60%] object-contain" />
      </div>

      {/* CONTENT */}
      <div className="content flex flex-col justify-center items-center text-left w-full max-w-[100%]">
        <p className="numbers text-[20px] sm:text-[26px] md:text-[30px] xl:text-[34px] text-accent2 font-bold leading-snug flex flex-wrap items-end">
          {number}&nbsp;
          <span className="font-medium text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] tracking-tight">
            {quantity}
          </span>
        </p>

        <p className="description font-medium text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] leading-snug break-words">
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
