import React from "react";
import blogimg1 from "../Assets/blogimg1.png";
import Button from "../../Components/Button/Button";

const BlogCard = () => {
  return (
    <>
      <article className="blog flex flex-col justify-start items-start gap-4 w-full">
        <div className="blogimage w-full">
          <img src={blogimg1} alt="" className="image rounded-[8px]" />
        </div>
        <p className="titile font-medium tracking-tight leading-[120%] text-textprimary text-[24px]">
          Top-quality pots, vibrant and ever purchased!
        </p>
        <div className="context flex -mt-1 gap-2 justify-start items-center w-full">
          <p className="type bg-accent3 px-4 py-1 rounded-full text-[14px] text-accent2 font-medium tracking-tight">
            Article
          </p>
          <p className="date text-textsecondary text-[14px]">June 3, 2024</p>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
