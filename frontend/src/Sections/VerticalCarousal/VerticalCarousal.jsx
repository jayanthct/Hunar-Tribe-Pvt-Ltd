import React from "react";
import "./VerticalCarousel.css";

import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";

const VerticalCarousel = () => {
  const items = [img1, img2, img3, img1, img2];

  return (
    <div className="vertical-carousel relative w-full h-[400px] flex justify-center items-center overflow-hidden">
      {items.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`carousel-item-${index + 1}`}
          className="absolute w-full h-[70%] object-cover rounded-[8px] animation-carousel"
          style={{ animationDelay: `${index * 3}s` }}
        />
      ))}
    </div>
  );
};

export default VerticalCarousel;
