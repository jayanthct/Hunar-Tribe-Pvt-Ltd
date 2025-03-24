import React from "react";

const InstagramPost = ({ postid }) => {
  return (
    <>
      <div
        className="overflow-clip"
        style={{ maxWidth: "540px", margin: "0 auto" }}
      >
        <iframe
          src={`https://www.instagram.com/p/${postid}/embed`}
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allow="encrypted-media"
          title="Instagram Post"
        ></iframe>
      </div>
    </>
  );
};

export default InstagramPost;
