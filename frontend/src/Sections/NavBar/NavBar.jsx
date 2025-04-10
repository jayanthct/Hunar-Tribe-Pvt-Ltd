import React, { useState, useEffect } from "react";
import Advertisment from "./Components/Advertisment";
import Button from "../../Components/Button/Button";
import logo from "/Logo.svg";
import NavButtons from "./Components/NavButtons";
import swiggymini from "../ProductSection/Assets/swiggymini.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Hide on scroll down
      } else {
        setShow(true); // Show on scroll up or return to top
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`w-full top-0 left-0 right-0 bg-white z-20 flex flex-col justify-center items-center transition-transform duration-300 ease-in ${
          show ? "fixed" : "relative -translate-y-full"
        }`}
      >
        <Advertisment />
        <section className="navbar flex justify-between items-center md:px-[8%] lg:px-[10%] px-[16px] w-full border-b-[0.8px] border-b-[#6f746fce] bg-white cursor-pointer">
          <div className="logo flex justify-center items-center cursor-pointer w-fit">
            <img src={logo} alt="" className="logo w-14 md:w-16" />
            <div className="text leading-tight flex flex-col justify-start items-start -ml-1">
              <p className="text text-accent2 text-[24px] md:text-[28px] tracking-tighter mt-2">
                Hunar
              </p>
              <p className="text font-bold text-accent1 text-[28px] md:text-[32px] tracking-tighter -mt-2">
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

            <Button
              title={"Shop Now"}
              link={"https://hunartribe.mini.site/?path=%2F"}
            />
          </div>
        </section>

        <NavButtons />
      </nav>
    </>
  );
};

export default NavBar;
