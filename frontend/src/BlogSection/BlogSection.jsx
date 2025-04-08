import React from "react";
import Button from "../Components/Button/Button";
import BlogCard from "./Components/BlogCard";

import blogimg1 from "./Assets/blogimg1.png";
import blogimg2 from "./Assets/blogimg2.jpg";
import blogimg3 from "./Assets/blogimg3.jpg";

const BlogSection = () => {
  return (
    <section className="impact flex flex-col justify-between gap-8 items-center px-4 sm:px-6 md:px-[8%] lg:px-[10%] w-full my-12">
      {/* Top Header Section */}
      <div className="leftcontent w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="text flex flex-col justify-start items-start gap-2">
          <h1 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Our Latest&nbsp;
            <span className="font-bold text-accent1">News</span>
          </h1>
          <p className="description text-textsecondary text-sm sm:text-base">
            Our Mission to Make a Difference
          </p>
        </div>

        {/* Button hidden on small screens */}
        <div className="hidden md:block">
          <Button title="Read More" />
        </div>
      </div>

      {/* Grid of Blogs */}
      <div className="gridsofblogs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <BlogCard
          img={blogimg1}
          title={"Team spirit in action at the Zero Waste Learning Center!"}
        />
        <BlogCard
          img={blogimg2}
          title={"Hands-on learning in progress at the Zero Waste Learning Center!"}
        />
        <BlogCard
          img={blogimg3}
          title={"Building sustainability, one tire at a time!"}
        />
      </div>

      {/* Button visible only on small screens */}
      <div className="md:hidden">
        <Button title="Read More" />
      </div>
    </section>
  );
};

export default BlogSection;
