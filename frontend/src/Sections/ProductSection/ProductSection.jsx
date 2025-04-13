import React, { useEffect, useState } from "react";
import { getAllImageURLs } from "../../Utility/ImageFetch";

import Button from "../../Components/Button/Button";
import ProductCard from "./Components/ProductCard";

import ProductDropdown from "./Components/ProductDropdown";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

const categoryIcons = {
  "Art Mini Collection": <FaPalette className="text-accent2" />,
  "Bird Collection": <FaFeatherAlt className="text-accent2" />,
  "Black and White Collection": <FaShapes className="text-accent2" />,
  "Boho Collection": <FaSeedling className="text-accent2" />,
  "Feminine Collection": <FaPalette className="text-accent2" />,
  "Hanging Pot Collection": <FaTree className="text-accent2" />,
  "Tribal Collection": <FaIndustry className="text-accent2" />,
  "Whispering Petals Collection": <FaFeatherAlt className="text-accent2" />,
  Lamps: <FaLightbulb className="text-accent2" />,
  "Home Decor": <FaHome className="text-accent2" />,
  Keychain: <FaKey className="text-accent2" />,
};

const categories = [
  { name: "Art Mini Collection", foldername: "art mini collection" },
  { name: "Bird Collection", foldername: "bird collection" },
  {
    name: "Black and White Collection",
    foldername: "black and white collection",
  },
  { name: "Boho Collection", foldername: "boho collection" },
  { name: "Feminine Collection", foldername: "girls collection" },
  { name: "Hanging Pot Collection", foldername: "hanging pot collection" },
  { name: "Tribal Collection", foldername: "tribal collection" },
  {
    name: "Whispering Petals Collection",
    foldername: "whispering petals",
  },
  { name: "Lamps", foldername: "lamp product" },
  { name: "Home Decor", foldername: "home decor article" },
];

const ProductSection = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(<FaTree />);
  const [loading, setLoading] = useState(false);

  const fetchImagesForCategory = async (category) => {
    setLoading(true);
    setImages([]);
    if (!category) return;

    setSelectedIcon(categoryIcons[category.name] || <FaTree />);

    try {
      const urls = await getAllImageURLs(category.foldername);
      if (urls && urls.length > 0) {
        const selectedImages = urls.sort(() => 0.5 - Math.random()).slice(0, 4);
        setImages(selectedImages);
      }
    } catch (err) {
      console.error("Error fetching images", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    setSelectedCategory(randomCategory.name); // Triggers the second useEffect
  }, []);

  useEffect(() => {
    const category = categories.find((cat) => cat.name === selectedCategory);
    if (category) {
      fetchImagesForCategory(category);
    }
  }, [selectedCategory]);

  return (
    <>
      <section
        id="products"
        className="product flex flex-col justify-between gap-8 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-10 mb-10"
      >
        <div className="text flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-2">
          <h1 className="text-[36px] lg:text-[48px] tracking-tighter text-textprimary font-medium leading-[120%]">
            Check out our&nbsp;
            <br />
            <span className="font-bold text-accent1">Products</span>
          </h1>
          <div className="buttonrow flex self-center justify-center items-center gap-4">
            <ProductDropdown
              selected={selectedCategory}
              setSelected={setSelectedCategory}
              iconselected={selectedIcon}
              seticonselected={setSelectedIcon}
            />
            <Button
              link={"https://hunartribe.mini.site/?path=%2F"}
              primary
              title="Browse All"
            ></Button>
          </div>
        </div>

        {/* <div className="smallbanner w-full bg-accent1 h-[64px]">
kasdk
        </div> */}

        <div className="banner flex justify-baseline items-baseline gap-4">
          <div className="icon w-12 h-12 bg-accent3 rounded-full flex justify-center items-center">
            {selectedIcon}
          </div>
          <p className="title text-accent2 font-medium text-[20px] tracking-tight">
            {selectedCategory}
          </p>
        </div>

        <div className="productcardsection grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full h-fit gap-4">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="p-2">
                    <Skeleton height={300} borderRadius={12} />
                    <Skeleton height={20} className="mt-2" />
                    <Skeleton height={20} width="60%" />
                  </div>
                ))
            : images.map((img, index) => <ProductCard key={index} img={img} />)}
        </div>
      </section>
    </>
  );
};

export default ProductSection;
