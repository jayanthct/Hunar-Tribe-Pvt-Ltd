import React from "react";

const FooterButtons = () => {
  return (
    <div className="flex flex-col items-start gap-2 text-[18px]">
      <p className="font-bold text-accent3">Useful Links</p>
      <ul className="flex flex-col gap-1 text-white">
        <li className="hover:underline cursor-pointer">Products</li>
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
        <li className="hover:underline cursor-pointer">Donation</li>
      </ul>
    </div>
  );
};

export default FooterButtons;
