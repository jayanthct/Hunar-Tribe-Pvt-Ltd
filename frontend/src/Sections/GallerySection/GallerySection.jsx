import React from "react";
import Button from "../../Components/Button/Button";

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

      {/* Gallery Grid */}
      <div className="grid grid-cols-4 min-h-screen md:grid-cols-4 grid-rows-3 md:grid-rows-3 gap-4 w-full">
        {[0, 1, 2, 5, 0, 1].map((item, index) => (
          <div
            key={index}
            className={`card relative col-span-${index === 2 || index === 3 ? "2" : "1"} row-span-2 bg-gray-200 rounded-lg p-8 flex justify-center items-center w-full h-full overflow-hidden`}
          >
            {/* <img
              src={`https://via.placeholder.com/300?text=Image+${item}`} // Replace with real image URLs
              alt={`Gallery ${item}`}
              className="w-full h-full object-cover transition-transform duration-500"
            /> */}
            <div className="card-data">
              <h3>Gallery Item {item}</h3>
              <p>Description for this image.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
