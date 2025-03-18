import React from "react";

const ImpactCard = ({ icon, number, quantity, highlight, description }) => {
  return (
    <article className="impactcard flex px-6 py-4 gap-4 justify-start items-center bg-accent3light w-full rounded-[12px] transition-all hover:scale-[0.9] ease-in-out duration-300">
      {/* Ensuring a fixed width and height */}
      <div className="iconplace bg-accent3 rounded-full flex justify-center items-center w-[100px] h-[100px] flex-shrink-0">
        <img src={icon} alt="" className="icon w-[60%] h-[60%] scale-[0.8]" />
      </div>

      <div className="content flex flex-col justify-start items-start">
        <p className="numbers text-[36px] text-accent2 font-bold">
          {number}&nbsp;
          <span className="font-medium text-[20px] tracking-tight">{quantity}</span>
        </p>
        <p className="description font-medium -mt-2">
          <span className="text-accent1 font-bold text-[20px] tracking-tight">
            {highlight}
          </span>{" "}
          {description}
        </p>
      </div>
    </article>
  );
};

export default ImpactCard;
