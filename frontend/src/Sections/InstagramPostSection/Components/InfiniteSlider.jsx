import React, { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import InstagramPost from "./InstagramPost";

const postid = [
  "DHNuVH5Bhb2",
  "DHKvCZZIlD2",
  "DGXQiuxSSmc",
  "DF1uX0vyIDW",
  "DFuEfrBScyU",
  "DDsMccAhpGg",
];

const InfiniteSlider = () => {
  const [sliderWidth, setSliderWidth] = useState("100px");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) {
        setSliderWidth("400px"); // lg screens
      } else if (window.innerWidth >= 600) {
        setSliderWidth("320px"); // lg screens
      } else {
        setSliderWidth("200px"); // sm screens
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Listen to window resize

    return () => window.removeEventListener("resize", updateWidth); // Cleanup listener
  }, []);

  return (
    <article className="slider w-full p-6 bg-white rounded-[12px]">
      <Slider width={sliderWidth} duration={40} pauseOnHover={true}>
        {postid.map((post, index) => (
          <Slider.Slide key={index}>
            <InstagramPost postid={post}></InstagramPost>
          </Slider.Slide>
        ))}
      </Slider>
    </article>
  );
};

export default InfiniteSlider;
