import React from "react";

const FooterButtons = ({ item, heading }) => {
  const handleClick = (id) => {
    // If it starts with "http" or "/", treat it as a link
    if (id.startsWith("https") || id.startsWith("/")) {
      window.open(id, "_blank", "noopener,noreferrer");
    } else {
      // Otherwise scroll to the section
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -200; // Adjust this if you have a sticky header
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 text-[18px]">
      <p className="font-bold text-accent3">{heading}</p>
      <ul className="flex flex-col gap-1 text-white">
        {item.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
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
