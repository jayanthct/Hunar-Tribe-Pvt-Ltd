import React from "react";

const Button = ({ primary, children, title, OnClick }) => {
  const baseClasses =
    "h-[48px] w-fit flex justify-center items-center  rounded-full px-6 py-2 hover:scale-[0.9] transition-all ease-in cursor-pointer";
  const primaryClasses = "bg-accent2 text-background";
  const secondaryClasses = "border-2 border-accent2 text-accent2";

  const buttonClasses = primary
    ? `${baseClasses} ${primaryClasses}`
    : `${baseClasses} ${secondaryClasses}`;

  return (
    <button className={buttonClasses} onClick={OnClick}>
      {title}
      {children}
    </button>
  );
};

export default Button;
