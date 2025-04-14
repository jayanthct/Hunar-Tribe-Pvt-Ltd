import React from "react";

const FooterButtons = ({ item, heading }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -200; // Adjust this value to suit your header height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 text-[18px]">
      <p className="font-bold text-accent3">{heading}</p>
      <ul className="flex flex-col gap-1 text-white">
        {item.map((item) => (
          <li
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="hover:underline cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterButtons;
