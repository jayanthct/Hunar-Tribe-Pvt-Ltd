import React from "react";
import Button from "../../Components/Button/Button";

const BlogCard = ({ img, title }) => {
  return (
    <>
      <article className="blog flex flex-col justify-start items-start gap-4 w-full">
        <div className="blogimage w-full h-[300px]">
          <img
            src={img}
            alt=""
            className="image w-full h-full object-cover rounded-[8px]"
          />
        </div>

        <p className="titile font-medium tracking-tight leading-[120%] text-textprimary text-[24px]">
          {title}
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
