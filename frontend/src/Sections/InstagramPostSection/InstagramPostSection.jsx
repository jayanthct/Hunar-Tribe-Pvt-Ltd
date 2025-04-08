import React from "react";
import Button from "../../Components/Button/Button";
import InfiniteSlider from "../InstagramPostSection/Components/InfiniteSlider";

const InstagramPostSection = () => {
  return (
    <>
      <section className="instagram flex flex-col justify-between gap-8 bg-accent3light items-center md:px-[8%] py-[4%] lg:px-[10%] px-4 w-full mt-10 mb-10">
        <div className="text w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-[48px] tracking-tight text-textprimary font-medium leading-snug">
            Follow Us For&nbsp;
            <br className="hidden sm:block" />
            Regular&nbsp;
            <span className="font-bold text-accent1">Updates</span>
          </h1>

          {/* Hide on small screens */}
          <div className="hidden sm:block">
            <Button title="Follow On Instagram" />
          </div>
        </div>

        <InfiniteSlider />
      </section>
    </>
  );
};

export default InstagramPostSection;
