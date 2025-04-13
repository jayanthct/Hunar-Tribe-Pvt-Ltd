import React, { useState, useEffect, useRef } from "react";
import Advertisment from "./Components/Advertisment";
import Button from "../../Components/Button/Button";
import logo from "/Logo.svg";
import NavButtons from "./Components/NavButtons";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY - lastScrollY.current > 10
      ) {
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
        <a
          href="/"
          className="logo flex justify-center items-center cursor-pointer w-fit py-2"
        >
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
        </a>

        <div className="buttonandmeta flex justify-between items-center gap-4">
          <div className="hidden md:flex justify-center gap-4 text-accent2 text-[20px] sm:text-[24px]">
            <a
              target="_blank"
              href="https://wa.me/919876543210"
              className="hover:text-accent1"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/hunar_tribe_upcycles/"
              className="hover:text-accent1"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="mailto:hunartribe@gmail.com"
              className="hover:text-accent1"
            >
              <i className="far fa-envelope"></i>
            </a>
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
