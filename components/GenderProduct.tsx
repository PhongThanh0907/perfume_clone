import Image from "next/image";
import React from "react";
import ManImage from "../public/forman.jpg";
import WomanImage from "../public/forwomanjpg.jpg";

const GenderProduct = () => {
  return (
    <div className="lg:max-w-6xl xl:max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 grid-rows-1 h-[400px] px-4 lg:px-0">
        <div className="relative">
          <Image
            src={ManImage}
            className="h-full rounded-tl-[100px] rounded-br-[100px]"
            alt="imgman"
          />
          <div className="absolute bg-gray-400/60 left-0 right-0 top-0 bottom-0 z-10 rounded-tl-[100px] rounded-br-[100px]"></div>

          <button className="top-16 bottom-16 right-16 left-16 lg:top-40 lg:bottom-40 py-2  uppercase  z-20 absolute lg:right-40 lg:left-40 bg-perfume_red-light text-white rounded-lg duration-300 hover:bg-red-700 active:bg-red-900">
            Nước hoa nam
          </button>
        </div>
        <div className="relative">
          <Image
            src={WomanImage}
            className="h-full rounded-tl-[100px] rounded-br-[100px]"
            alt="imgman"
          />
          <div className="absolute bg-gray-400/60 left-0 right-0 top-0 bottom-0 z-10 rounded-tl-[100px] rounded-br-[100px]"></div>

          <button className="top-16 bottom-16 right-16 left-16 lg:top-40 lg:bottom-40 py-2  uppercase  z-20 absolute lg:right-40 lg:left-40 bg-perfume_red-light text-white rounded-lg duration-300 hover:bg-red-700 active:bg-red-900">
            Nước hoa nữ
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderProduct;
