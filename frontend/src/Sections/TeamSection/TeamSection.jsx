import React from "react";
import person1 from "./Assets/person1.webp";
import person2 from "./Assets/person2.webp";
import flower from "./Assets/flower.svg";

const teamMembers = [
  {
    name: "Gautam Bharati",
    role: "Founder",
    image: person1,
  },
  {
    name: "Avani Jain",
    role: "Co-Founder",
    image: person2,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section relative flex justify-center items-center flex-col gap-6 md:px-[4%] lg:px-[10%] px-4 w-full my-[10%]">
      {/* Decorative Flowers - Hidden on Mobile */}
      <img
        src={flower}
        alt=""
        className="flower absolute top-0 left-[-10%] w-80 hidden lg:block"
      />
      <img
        src={flower}
        alt=""
        className="flower absolute right-[-10%] bottom-0 w-80 hidden lg:block"
      />

      {/* Heading */}
      <div className="text-center flex justify-center items-center flex-col gap-2">
        <h1 className="text-[36px] lg:text-[48px] tracking-tighter text-textprimary font-medium leading-[120%]">
          Who <span className="text-accent1 font-bold">We</span> Are?
        </h1>
        <p className="description text-textsecondary sm:text-base">
          Our Mission To Make A Difference
        </p>
      </div>

      {/* Team Cards */}
      <div className="container flex items-center justify-center gap-6 w-full flex-col md:flex-row mt-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-start items-start w-full md:w-[40%]"
          >
            {/* Orange Background */}
            <div className="bg-[#FCDE5A66] w-full h-60 rounded-lg relative mt-12">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-72 h-72 object-contain"
              />
            </div>

            {/* Name and Role */}
            <div className="mt-3 flex flex-col justify-start items-start gap-1">
              <h3 className="text-2xl font-semibold text-accent2">
                {member.name}
              </h3>
              <p className="text-textsecondary">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
