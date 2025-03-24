import React from "react";
import Button from "../../Components/Button/Button";
import InfiniteSlider from "../InstagramPostSection/Components/InfiniteSlider";

const InstagramPostSection = () => {
  return (
    <>
      <section className="instagram flex flex-col justify-between gap-12 bg-accent3light items-center md:px-[8%] py-[4%] lg:px-[10%] px-[16px] w-full mt-10 mb-10">
        <div className="text flex justify-between items-end w-full gap-2">
          <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Follow Us For&nbsp;
            <br />
            Regular&nbsp;
            <span className="font-bold text-accent1">Updates</span>
          </h1>

          <Button title="Follow On Instagram"></Button>
        </div>

        <InfiniteSlider></InfiniteSlider>
      </section>
    </>
  );
};

export default InstagramPostSection;
