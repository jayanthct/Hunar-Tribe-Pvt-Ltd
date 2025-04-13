import React, { useState, useEffect, useRef } from "react";
import Advertisment from "./Components/Advertisment";
import Button from "../../Components/Button/Button";
import logo from "/Logo.svg";
import NavButtons from "./Components/NavButtons";
import swiggymini from "../ProductSection/Assets/swiggymini.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 10) {
        // Scrolling down fast
        setShow(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 bg-white z-50 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Advertisment />
      <section className="navbar flex justify-between items-center md:px-[8%] lg:px-[10%] px-[16px] w-full border-b border-[#6f746fce] bg-white cursor-pointer">
        <div className="logo flex justify-center items-center cursor-pointer w-fit py-2">
          <img src={logo} alt="logo" className="w-14 md:w-16" />
          <div className="text leading-tight flex justify-center items-center mt-3">
            <p className="font-bold text-accent2 text-[24px] md:text-[32px] tracking-tighter">
              Hunar
            </p>
            &nbsp;
            <p className="font-bold text-accent1 text-[24px] md:text-[32px] tracking-tighter">
              Tribe
            </p>
          </div>
        </div>

        <div className="buttonandmeta flex justify-between items-center gap-4">
          <div className="hidden sm:flex w-[42px] h-[42px] items-center justify-center rounded-[12px] overflow-clip">
            <img
              src={swiggymini}
              alt="Swiggy Mini Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="scale-[0.9]">
            <Button
              title={"Shop Now"}
              link={"https://hunartribe.mini.site/?path=%2F"}
            />
          </div>
        </div>
      </section>
      <NavButtons />
    </nav>
  );
};

export default NavBar;
