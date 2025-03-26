import React, { useState, useEffect } from "react";
import Advertisment from "./Components/Advertisment";
import Button from "../../Components/Button/Button";
import support from "./Assets/support.svg";
import chevdown from "./Assets/chevdown.svg";
import cart from "./Assets/cart.svg";
import logo from "/Logo.svg";
import NavButtons from "./Components/NavButtons";

const NavBar = () => {
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
          <div className="logo flex justify-center items-center cursor-pointer">
            <img src={logo} alt="" className="logo w-16" />
            <div className="text leading-tight flex flex-col justify-start items-start -ml-1">
              <p className="text text-accent2 text-[28px] tracking-tighter mt-2">
                Hunar
              </p>
              <p className="text font-bold text-accent1 text-[32px] tracking-tighter -mt-2">
                Tribe
              </p>
            </div>
          </div>

          <div className="buttonandmeta flex justify-between items-center w-[40%]">
            <div className="metabuttons flex justify-between items-center w-[56%]">
              <div className="cart relative flex justify-center gap-2 items-center cursor-pointer">
                <img src={cart} alt="" className="cart w-6 h-6" />
                <div className="cartitems w-4 h-4 bg-accent1 rounded-full absolute top-[-2px] left-[14%] text-white font-semibold text-[10px] flex justify-center items-center leading-[100%]">
                  2
                </div>
                <p className="text text-primary">Cart</p>
                <img src={chevdown} alt="" className="chev -ml-1 w-6 h-6" />
              </div>
              <div className="support flex justify-center items-center gap-2 cursor-pointer">
                <img src={support} alt="" className="support w-6 h-6" />
                <p className="text text-primary">Support</p>
                <img src={chevdown} alt="" className="chev -ml-1 w-6 h-6" />
              </div>
            </div>

            <Button title={"Shop Now"} />
          </div>
        </section>

        <NavButtons />
      </nav>
    </>
  );
};

export default NavBar;
