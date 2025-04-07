import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ primary, children, title, OnClick, link }) => {
  const navigate = useNavigate();

  const baseClasses =
    "h-[48px] w-fit flex justify-center items-center  rounded-full px-6 py-2 hover:scale-[0.9] transition-all ease-in cursor-pointer";
  const primaryClasses = "bg-accent2 text-background";
  const secondaryClasses = "border-2 border-accent2 text-accent2";

  const buttonClasses = primary
    ? `${baseClasses} ${primaryClasses}`
    : `${baseClasses} ${secondaryClasses}`;

  const handleClick = () => {
    if (OnClick) {
      OnClick(); // If you passed a custom click function
    }
    if (link) {
      window.open(link, "_blank"); // opens in a new tab
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {title}
      {children}
    </button>
  );
};

export default Button;
