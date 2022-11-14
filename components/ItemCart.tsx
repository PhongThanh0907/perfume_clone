import Image from "next/image";
import React from "react";
import Product from "../public/product.jpg";

const ItemCart = () => {
  return (
    <div>
      <div className="grid grid-cols-10 relative items-center">
        <div className="lg:col-span-5 gap-2 flex lg:gap-4 items-center sm:text-xs col-span-5">
          <div className="w-[80px] lg:w-[100px] p-2 border ">
            <Image src={Product} alt="img" />
          </div>
          <h1 className="text-sm lg:text-lg">Dior Sauvage</h1>
        </div>
        <h2 className="col-span-1 text-sm items-center lg:text-lg">
          2.500.000đ
        </h2>
        <div className="col-span-2 text-center">
          <input
            type="number"
            className="border border-mainGray w-full lg:w-[30%] text-center rounded-2xl pl-6 py-1 text-[gray] focus:outline-none focus:shadow-outline"
            min={1}
            defaultValue="1"
          />
        </div>
        <h2 className="text-s text-center col-span-2 lg:text-lg">2.500.000</h2>
        <hr className="bg-mainGray border-mainGray h-[2px] my-4 col-span-8" />
        <button className="absolute top-1/4 -left-10 px-2 rounded-full bg-mainGray">
          X
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
