import React from "react";

const TestimonialPerson = ({ name, place }) => {
  return (
    <article className="persondetails flex justify-center items-center px-4 py-2 gap-4">
      <div className="content flex flex-col justify-center items-center gap-0">
        <p className="name text-[18px] text-accent2 font-bold">{name}</p>
        <p className="place text-textsecondary -mt-1">{place}</p>
      </div>
    </article>
  );
};

export default TestimonialPerson;
