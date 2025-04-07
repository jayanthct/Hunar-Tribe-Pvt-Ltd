import React, { useState } from "react";

function NavButtons() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const navItems = [
    { name: "Products", id: "products" },
    { name: "Services", id: "services" },
    { name: "Contact Us", id: "contact" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
  ];

  const handleScroll = (id) => {
    setSelected(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center px-4 py-1 w-[60%]">
      <ul className="flex justify-between w-full text-textprimary">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`relative p-2 cursor-pointer text-textprimary transition-all duration-300 ease-in-out ${
              selected === item.id
                ? "text-accent1 font-semibold"
                : "hover:text-accent1 hover:font-semibold"
            }`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
            <div
              className={`absolute left-0 right-0 h-[2.4px] bg-accent1 rounded-full bottom-0 transition-transform duration-300 ease-in-out transform origin-left ${
                hovered === item.id || selected === item.id
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavButtons;
