import React from "react";
import Button from "../../Components/Button/Button";

import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";
import img4 from "./Assets/img4.png";
import img5 from "./Assets/img5.png";
import img6 from "./Assets/img6.png";
import img7 from "./Assets/img7.png";

const GallerySection = () => {
  return (
    <section className="product flex flex-col justify-between gap-8 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-10 mb-10">
      {/* Heading and Button */}
      <div className="leftcontent w-full flex justify-between items-end gap-4">
        <div className="text flex flex-col justify-start items-start gap-2">
          <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Our <span className="font-bold text-accent1">Gallery</span>
          </h1>
          <p className="description text-textsecondary">
            Transforming Lives and Communities Through Innovation
          </p>
        </div>
        <Button title="See All" />
      </div>
      <div className="grid grid-cols-5 gap-4 p-4 max-w-screen-xl mx-auto">
        {/* Left column - stacked vertically */}
        <div className="col-span-2 flex flex-col gap-4">
          <img src={img2} className="w-full h-full object-cover rounded-lg" />
          <img src={img7} className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Center image - large center focus */}
        <div className="col-span-1 w-full flex items-center justify-center">
          <img src={img3} className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right column - stacked vertically */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex gap-4 h-full">
            <img src={img1} className="w-1/2 h-full object-cover rounded-lg" />
            <img src={img5} className="w-1/2 h-full object-cover rounded-lg" />
          </div>
          <div className="flex gap-4 h-full">
            <img src={img6} className="w-1/2 h-full object-cover rounded-lg" />
            <img src={img4} className="w-1/2 h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
