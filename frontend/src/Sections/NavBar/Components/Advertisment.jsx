import React from "react";
import phoneicon from "../Assets/phoneicon.svg";

const Advertisment = () => {
  return (
    <div className="bg-accent2 text-white flex flex-wrap justify-between items-center w-full px-[4%] py-1 text-[12px]">
      {/* Phone Section */}
      <div className="flex items-center gap-2">
        <img src={phoneicon} alt="Phone" className="w-4 h-4" />
        <p>+91-8000425929</p>
      </div>

      {/* Offer - hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2">
        <p className="text-neutral-200 font-light">Get 20% off on this Ugadi 🎉 |</p>
        <a href="#" className="underline text-[13px]">Shop Now</a>
      </div>

      {/* Location */}
      <p className="text-white">
        <span className="font-medium text-[13px]">Rajasthan,</span>&nbsp;India
      </p>
    </div>
  );
};

export default Advertisment;
