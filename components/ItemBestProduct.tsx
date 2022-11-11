import Image from "next/image";
import React from "react";
import Product from "../public/product.jpg";
import ReactTooltip from "react-tooltip";
const ItemBestProduct = () => {
  return (
    <div className="w-[140px] h-[260px] lg:h-[360px] lg:w-[220px] p-2 lg:p-4 bg-white rounded-md cursor-pointer relative group hover:shadow-lg border border-gray-200">
      <div>
        <div>
          <Image
            src={Product}
            alt="product-img"
            className="h-[140px] lg:h-[220px] rounded-md"
          />
        </div>
      </div>
      <div className="text-center">
        <h1
          data-tip="React-tooltip"
          className="text-base lg:text-sm line-clamp-1 py-2"
        >
          Nước Hoa Nam Dior Sauvage
        </h1>
        <ReactTooltip place="right" type="dark" effect="float">
          Nước Hoa Nam Dior Sauvage
        </ReactTooltip>
        <p className="text-xs lg:text-sm py-2 font-semibold">
          300.000đ - 2.500.000đ
        </p>
      </div>
      <div className="text-center">
        <button className="text-xs lg:text-sm uppercase text-white bg-perfume_red-light px-6 py-1 rounded-md hover:bg-red-500 duration-200 active:bg-red-700">
          Mua Ngay
        </button>
      </div>
      <div className="absolute text-center rounded-md left-2 right-2 lg:left-8 lg:right-8 bottom-20 opacity-0 group-hover:bottom-36 group-hover:opacity-100 duration-300 hover:bg-red-500 active:bg-red-700">
        <div className="text-xs lg:text-sm py-1 bg-red-600/50 text-white rounded-md">
          <button>Xem Nhanh</button>
        </div>
      </div>
    </div>
  );
};

export default ItemBestProduct;
