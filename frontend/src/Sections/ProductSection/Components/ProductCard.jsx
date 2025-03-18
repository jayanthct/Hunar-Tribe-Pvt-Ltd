import React from "react";
import { FaPlus } from "react-icons/fa";


const ProductCard = ({ price,img }) => {
  return (
    <article className="w-full cursor-pointer h-fit rounded-[16px] border-2 border-[#6F746F4D] bg-background shadow-md p-4 flex flex-col items-center relative group overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Price Tag */}
      <div className="absolute flex justify-center items-center top-4 right-4 bg-accent3light text-accent1 text-[20px] font-bold px-6 py-2 rounded-full z-2">
        <p className="leading-[130%]">₹{price}</p>
      </div>

      {/* Image Wrapper for hover effect */}
      <div className="w-full flex justify-center transition-transform duration-300 group-hover:scale-110">
        <img src={img} alt="Product" className="w-full rounded-lg" />
      </div>

      {/* Add to Cart Button (Hidden initially, slides in on hover) */}
      <button className="cursor-pointer absolute bottom-6 right-4 w-[64px] h-[64px] flex items-center justify-center bg-accent3light text-accent1 rounded-full transform translate-x-[82px] group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
        <FaPlus className="text-xl" />
      </button>
    </article>
  );
};

export default ProductCard;
