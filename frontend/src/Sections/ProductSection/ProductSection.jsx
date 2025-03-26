import { useState } from "react";
import Button from "../../Components/Button/Button";
import ProductCard from "./Components/ProductCard";
import { FaSeedling, FaTree } from "react-icons/fa";

import product1 from "./Assets/1.png";
import product2 from "./Assets/6.png";
import product3 from "./Assets/3.png";
import product4 from "./Assets/4.png";

import ProductDropdown from "./Components/ProductDropdown";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pots and Planters");
  const [selectedIcon, setSelectedIcon] = useState(<FaTree />);

  return (
    <>
      <section className="testimonialsection flex flex-col justify-between gap-8 items-center md:px-[8%] lg:px-[10%] px-[16px] w-full mt-10 mb-10">
        <div className="text flex justify-between items-end w-full gap-2">
          <h1 className="text-[48px] tracking-tight text-textprimary font-medium leading-[120%]">
            Check out our&nbsp;
            <br />
            <span className="font-bold text-accent1">Products</span>
          </h1>
          <div className="buttonrow flex justify-center items-center gap-4">
            <ProductDropdown
              selected={selectedCategory}
              setSelected={setSelectedCategory}
              iconselected={selectedIcon}
              seticonselected={setSelectedIcon}
            />
            <Button primary title="Browse All"></Button>
          </div>
        </div>

        <div className="banner flex justify-baseline items-baseline gap-4">
          <div className="icon w-12 h-12 bg-accent3 rounded-full flex justify-center items-center">
            {selectedIcon}
          </div>
          <p className="title text-accent2 font-medium text-[20px] tracking-tight">
            {selectedCategory}
          </p>
        </div>

        <div className="productcardsection grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full h-fit gap-4">
          <ProductCard price={2999} img={product1}></ProductCard>
          <ProductCard price={1298} img={product2}></ProductCard>
          <ProductCard price={1548} img={product3}></ProductCard>
          <ProductCard price={2999} img={product4}></ProductCard>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
