import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

import {
  FaLightbulb,
  FaSeedling,
  FaTree,
  FaPencilAlt,
  FaKey,
  FaCouch,
  FaIndustry,
  FaFeatherAlt,
  FaPalette,
  FaHome,
  FaShapes,
} from "react-icons/fa";

const ProductDropdown = ({
  selected,
  setSelected,
  iconselected,
  seticonselected,
}) => {
  const categoryIcons = {
    "Art Mini Collection": <FaPalette className="text-accent2" />,
    "Bird Collection": <FaFeatherAlt className="text-accent2" />,
    "Black and White Collection": <FaShapes className="text-accent2" />,
    "Boho Collection": <FaSeedling className="text-accent2" />,
    "Feminine Collection": <FaPalette className="text-accent2" />,
    "Hanging Pot Collection": <FaTree className="text-accent2" />,
    "Trible Collection": <FaIndustry className="text-accent2" />,
    "Whispering Petals Collection": <FaFeatherAlt className="text-accent2" />,
    Lamps: <FaLightbulb className="text-accent2" />,
    "Home Decor": <FaHome className="text-accent2" />,
    Keychain: <FaKey className="text-accent2" />,
  };

  const categories = [
    "Art Mini Collection",
    "Bird Collection",
    "Black and White Collection",
    "Boho Collection",
    "Feminine Collection",
    "Hanging Pot Collection",
    "Tribal Collection",
    "Whispering Petals Collection",
    "Lamps",
    "Home Decor",
  ];

  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

  return (
    <div className="relative inline-block z-10">
      <button
        className="h-[48px] border-2 border-accent2 text-accent2 w-fit gap-2 group flex baseline justify-center items-center rounded-full px-6 py-2 hover:bg-accent2 hover:text-background transition-all ease-in cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Categories
        <FaChevronLeft
          size={16}
          className={`text-accent2 transition-transform group-hover:text-background duration-300 ease-in-out ${
            isOpen ? "rotate-90" : "rotate-270"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-[12px] border-2 border-[#6F746F4D] py-4">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => {
                setSelected(category);
                seticonselected(categoryIcons[category]); // ✅ Update icon based on selected category
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer transition-all flex items-center gap-2 ${
                selected === category
                  ? "text-accent1 font-bold"
                  : "hover:text-textprimary hover:font-semibold"
              }`}
            >
              {selected === category && (
                <div className="w-2 h-2 rounded-full bg-accent1"></div>
              )}
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductDropdown;
