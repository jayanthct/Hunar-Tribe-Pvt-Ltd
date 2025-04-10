import React, { useEffect, useState } from "react";

const TestimonialPerson = ({ name, place }) => {
  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const username = name.replace(/\s+/g, "");
        const url = `https://avatar.iran.liara.run/username?username=${username}`;
        setAvatarURL(url);
      } catch (error) {
        console.error("Error fetching avatar:", error);
        setAvatarURL(""); // fallback or default image could go here
      }
    };

    getAvatar();
  }, [name]);

  return (
    <article className="persondetails flex justify-center items-center px-4 py-2 gap-4">
      <img
        src={avatarURL}
        alt={name}
        className="person w-12 h-12 rounded-full object-cover"
      />
      <div className="content flex flex-col justify-start items-start gap-0">
        <p className="name text-accent2 font-bold">{name}</p>
        <p className="place text-[12px] text-textsecondary -mt-1">{place}</p>
      </div>
    </article>
  );
};

export default TestimonialPerson;
