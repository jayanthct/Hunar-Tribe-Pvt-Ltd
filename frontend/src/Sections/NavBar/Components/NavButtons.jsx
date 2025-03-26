import React, { useState } from "react";

function NavButtons() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const navItems = [
    {
      name: "Products",
      dropdown: [
        "Lamps",
        "Hanging Pots",
        "Pots and Planters",
        "Pen Stand",
        "Key Holders",
      ],
    },
    { name: "Services", dropdown: ["Consulting", "Support", "Installation"] },
    { name: "Contact Us", dropdown: ["Email", "Phone", "Live Chat"] },
    { name: "Gallery", dropdown: ["Photos", "Videos", "Virtual Tour"] },
    {
      name: "Track Order",
      dropdown: ["Order Status", "Shipping Info", "Returns"],
    },
  ];

  return (
    <div className="flex justify-center items-center px-4 py-1 w-[60%]">
      <ul className="flex justify-between w-full text-textprimary">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`relative p-2 cursor-pointer text-textprimary hover:text-accent1 font-medium hover:font-semibold transition-all duration-300 ease-in-out`}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.name}
            <div
              className={`absolute left-0 right-0 h-[2.4px] bg-accent1 rounded-full bottom-0 transition-transform duration-300 ease-in-out ${
                hovered === item.name ? "scale-x-100" : "scale-x-0"
              }`}
            />
            {hovered === item.name && (
              <ul className="absolute left-0 mt-4 w-60 bg-white shadow-lg rounded-[12px] border-2 border-[#6F746F4D] py-4 z-20">
                {item.dropdown.map((subItem) => (
                  <li
                    key={subItem}
                    onClick={() => setSelected(subItem)}
                    className={`px-4 py-2 cursor-pointer transition-all flex items-center gap-2 ${
                      selected === subItem
                        ? "text-accent1 font-bold"
                        : "font-normal hover:text-textprimary hover:font-semibold"
                    }`}
                  >
                    {selected === subItem && (
                      <div className="w-2 h-2 rounded-full bg-accent1"></div>
                    )}
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavButtons;
