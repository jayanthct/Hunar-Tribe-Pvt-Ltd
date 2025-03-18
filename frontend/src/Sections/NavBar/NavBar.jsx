import React from "react";
import Advertisment from "./Components/Advertisment";
import Button from "../../Components/Button/Button";
import support from "./Assets/support.svg";
import chevdown from "./Assets/chevdown.svg";
import cart from "./Assets/cart.svg";

import logo from "/Logo.svg";
import NavButtons from "./Components/NavButtons";

const NavBar = () => {
  return (
    <>
      <nav className="fixed w-full top-0 left-0 right-0 bg-white z-20 flex flex-col justify-center items-center">
        <Advertisment></Advertisment>
        <section className="navbar flex justify-between items-center md:px-[8%] lg:px-[10%] px-[16px] py-4 w-full border-b-[0.8px] border-b-[#6f746fce] bg-white">
          <div className="logo flex justify-center items-center cursor-pointer">
            <img src={logo} alt="" className="logo w-20" />
            <div className="text leading-tight flex flex-col justify-start items-start -ml-1">
              <p className="text text-accent2 text-3xl tracking-tighter mt-2">
                Hunar
              </p>
              <p className="text font-bold text-accent1 text-4xl tracking-tighter">
                Tribe
              </p>
            </div>
          </div>

          <div className="buttonandmeta flex justify-between items-center w-[40%]">
            <div className="metabuttons flex justify-between items-center w-[56%]">
              <div className="cart flex justify-center gap-2 items-center cursor-pointer">
                <img src={cart} alt="" className="cart w-6 h-6" />
                <p className="text">Cart</p>
                <img src={chevdown} alt="" className="chev -ml-1 w-6 h-6" />
              </div>
              <div className="support flex justify-center items-center gap-2 cursor-pointer">
                <img src={support} alt="" className="supoort w-6 h-6" />
                <p className="text">Support</p>
                <img src={chevdown} alt="" className="chev -ml-1 w-6 h-6" />
              </div>
            </div>

            <Button title={"Shop Now"}></Button>
          </div>
        </section>

        <NavButtons></NavButtons>
      </nav>
    </>
  );
};

export default NavBar;
