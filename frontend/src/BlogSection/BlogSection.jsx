import React from "react";
import Button from "../Components/Button/Button";
import BlogCard from "./Components/BlogCard";

const BlogSection = () => {
  return (
    <>
      <section className=" impact flex flex-col justify-between gap-8 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full my-12">
        <div className="leftcontent w-full flex justify-between items-end gap-4">
          <div className="text flex flex-col justify-start items-start gap-2">
            <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
              Our Latest&nbsp;
              <span className="font-bold text-accent1">News</span>
            </h1>
            <p className="description text-textsecondary">
              Our Mission to Make a Difference
            </p>
          </div>
          <Button title="Read More" />
        </div>

        <div className="gridsofblogs flex justify-center gap-12 items-center w-full">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
