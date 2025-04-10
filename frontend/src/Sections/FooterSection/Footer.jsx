import React from "react";
import FooterButtons from "./Components/FooterButtons";
import logo from "/footerlogo.svg";
import tlogo from "/transparent.svg";
import arrow from "./arrow.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <footer className="relative footersection bg-accent2 w-full flex flex-col justify-center items-center gap-6 md:px-[8%] lg:px-[10%] px-[16px] pt-[4%] pb-[2%] overflow-hidden">
        <img
          src={tlogo}
          alt=""
          className="transparentlogo absolute w-[24%] bottom-[-8%] right-[-8%] pointer-events-none"
        />

        <div className="starting flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 w-full">
          <div className="contactdetails flex flex-col gap-2 w-full sm:w-[45%]">
            <div className="logo flex justify-start items-start cursor-pointer">
              <img src={logo} alt="" className="logo w-16" />
              <div className="text leading-tight flex flex-col justify-start items-start -ml-1">
                <p className="text text-white text-[28px] tracking-tighter mt-1">
                  Hunar
                </p>
                <p className="text font-bold text-accent3 text-[32px] tracking-tighter -mt-2">
                  Tribe
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-1 text-white text-sm sm:text-base">
              <li>+91-8000425929</li>
              <li>hunartribe@gmail.com</li>
              <li>Work hours : 08:00AM - 08:00PM</li>
              <li>Dungarpur, Rajasthan, India</li>
            </ul>
          </div>

          <div className="buttonsfooter grid grid-cols-2 sm:grid-cols-3 gap-4 w-full sm:w-[55%]">
            <FooterButtons />
            <FooterButtons />
            <FooterButtons />
          </div>
        </div>

        <div className="bottom flex flex-col w-full justify-center items-center gap-6">
          <button className="letstalk self-start bg-accent1 px-[12px] py-2 flex flex-col justify-center items-start rounded-[4px] cursor-pointer w-fit hover:scale-[0.9] transition-all duration-150 ease-in">
            <p className="description text-white opacity-80 mt-2 leading-[120%]">
              Need a Service ?
            </p>
            <div className="logandtext flex justify-start items-center -mt-2">
              <p className="title font-bold text-white text-[36px]">
                Let's Talk
              </p>
              <img src={arrow} alt="" className="icon w-20" />
            </div>
          </button>

          <div className="flex justify-center gap-4 text-white text-[20px] sm:text-[24px] -mt-4">
            <a href="#" className="hover:text-accent1">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-accent1">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-accent1">
              <i className="far fa-envelope"></i>
            </a>
          </div>

          <div className="links flex flex-col justify-center items-center gap-4 border-t border-t-[#ffffff67] w-full -mt-4 pt-4">
            <p className="text-white text-center text-sm sm:text-base">
              Copyright © 2024{" "}
              <span className="font-semibold">Hunar Tribe Pvt Ltd</span>, All
              Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-20 text-white text-sm sm:text-base">
              <a href="#" className="underline">
                Refund Policy
              </a>
              <a href="#" className="underline">
                Legal
              </a>
              <a href="#" className="underline">
                Privacy
              </a>
              <a href="#" className="underline">
                Site-Map
              </a>
              <a href="#" className="underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
