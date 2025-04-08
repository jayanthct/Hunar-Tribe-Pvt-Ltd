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
      <div className="grid grid-cols-5 grid-rows-3 gap-4 w-full">
        {/* Image 1: spans 2 cols and 2 rows */}
        <div className="col-span-2 row-span-2 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img2} alt="" className="image w-full h-full object-cover" />
        </div>

        {/* Image 2: spans 2 cols and 3 rows */}
        <div className="col-span-2 row-span-3 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img3} alt="" className="image w-full h-full object-cover" />
        </div>

        {/* Image 3: 1 col, 1 row */}
        <div className="col-span-1 row-span-1 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img1} alt="" className="image w-full h-full object-cover" />
        </div>

        {/* Image 4: 1 col, 1 row */}
        <div className="col-span-1 row-span-1 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img4} alt="" className="image w-full h-full object-cover" />
        </div>

        {/* Image 5: 1 col, 1 row */}
        <div className="col-span-1 row-span-1 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img5} alt="" className="image w-full h-full object-cover" />
        </div>

        {/* Image 6: 1 col, 1 row */}
        <div className="col-span-1 row-span-1 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img6} alt="" className="image w-full h-full object-cover" />
        </div>

        {/* Image 7: 1 col, 1 row */}
        <div className="col-span-1 row-span-1 bg-white flex items-center justify-center rounded-[8px] overflow-clip">
          <img src={img7} alt="" className="image w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
