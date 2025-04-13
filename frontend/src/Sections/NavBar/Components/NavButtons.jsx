import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide icons
import clsx from "clsx";
import {
  BiLogoWhatsapp,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";

function NavButtons() {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false); // close menu after click
  };

  return (
    <>
      {/* Hamburger menu - visible only on mobile */}
      <div className="md:hidden flex justify-between items-center gap-2 px-4 py-2 w-full">
        <div className="menubutton flex justify-center items-center gap-2">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-10 h-10 text-accent2" />
          </button>
          <p className="title font-medium text-[18px] text-accent2">Menu</p>
        </div>

        <div className="flex justify-center gap-4 text-accent2 text-[20px] sm:text-[24px]">
          <a
            target="_blank"
            href="https://wa.me/918000425929"
            className="hover:text-accent1"
            rel="noopener noreferrer"
          >
            <BiLogoWhatsapp size={24} />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/company/hunar-tribe/"
            className="hover:text-accent1"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin size={24} />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/hunar_tribe_upcycles/"
            className="hover:text-accent1"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-screen bg-accent1 text-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-10 h-10" />
        </button>

        <ul className="flex flex-col gap-6 text-center text-[20px] font-light">
          {navItems.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleScroll(item.id)}
              className={clsx(
                "cursor-pointer relative",
                selected === item.id || hovered === item.id
                  ? "font-semibold text-white"
                  : "text-white font-medium hover:text-white"
              )}
            >
              {item.name}
              <div
                className={clsx(
                  "absolute left-0 right-0 h-[2px] bg-white bottom-[-4px] transition-all duration-300",
                  selected === item.id || hovered === item.id
                    ? "scale-x-100"
                    : "scale-x-0"
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center items-center px-4 py-1 w-[80%] lg:w-[60%]">
        <ul className="flex justify-between w-full text-textprimary">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative p-2 cursor-pointer text-textprimary transition-all duration-300 ease-in-out ${
                selected === item.id
                  ? "text-accent1 font-bold"
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
    </>
  );
}

export default NavButtons;
