import React from "react";

const ProductCard = ({ price, img }) => {
  return (
    <article className="w-full cursor-pointer h-[260px] md:h-[360px] rounded-[16px] border-2 border-[#6F746F4D] bg-background shadow-md flex flex-col items-center justify-center relative group overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Price Tag */}
      <div className="absolute flex justify-center items-center top-4 right-4 bg-accent3light text-accent1 text-[20px] font-bold px-6 py-2 rounded-full z-2">
        <p className="leading-[130%]">₹{price}</p>
      </div>

      {/* Image Wrapper for hover effect */}
      <div className="w-full mt-8 flex justify-center transition-transform duration-300 group-hover:scale-110">
        <img src={img} alt="Product" className="w-full rounded-lg scale-[1.1] " />
      </div>
    </article>
  );
};

export default ProductCard;
