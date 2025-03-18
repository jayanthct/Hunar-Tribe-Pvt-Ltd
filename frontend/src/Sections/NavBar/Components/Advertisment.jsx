import React from "react";
import phoneicon from "../Assets/phoneicon.svg";

const Advertisment = () => {
  return (
    <>
      <div className="bg-accent2 text-white flex justify-between items-center w-full px-[4%] py-2 top-0 left-0 right-0">
        <div className="phone flex justify-center items-center gap-2">
          <img src={phoneicon} alt="" className="phoneicon w-6 h-6" />
          <p className="text">+91-8000425929</p>
        </div>
        <div className="offer flex justify-center items-center gap-2">
          <p className="text font-light text-neutral-200">Get 20% off on this Diwali 🎉 |</p>
          <a href="#" className="link underline">
            Shop Now
          </a>
        </div>
        <p className="location font-light text-white">
          <span className="font-medium">Rajasthan,</span>&nbsp;India
        </p>
      </div>
    </>
  );
};

export default Advertisment;
