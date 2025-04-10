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
      <div className="leftcontent w-full flex justify-between items-end gap-4 flex-wrap">
        <div className="text flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
          <h1 className="text-[36px] lg:text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Our <span className="font-bold text-accent1">Gallery</span>
          </h1>
          <p className="description text-textsecondary text-[16px] text-center lg:text-start sm:text-[18px]">
            Transforming Lives and Communities Through Innovation
          </p>
        </div>
        {/* Hide button on mobile */}
        <div className="hidden md:block">
          <Button title="See All" />
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[240px] gap-4 w-full">
        <div className="col-span-1 sm:col-span-2 sm:row-span-2 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img2} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-1 sm:col-span-2 sm:row-span-3 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img3} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img4} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img5} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img6} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img7} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
