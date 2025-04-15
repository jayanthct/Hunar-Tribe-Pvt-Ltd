import React from "react";

const InstagramPost = ({ postid }) => {
  return (
    <div className="w-full max-w-[540px] h-[300px] md:h-[480px] mx-auto aspect-[4/5] sm:aspect-[1/1] overflow-hidden rounded-[8px]">
      <iframe
        src={`https://www.instagram.com/p/${postid}/embed`}
        className="w-full h-full px-4"
        allow="encrypted-media"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

export default InstagramPost;
