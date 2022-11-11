import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ItemBestProduct from "./ItemBestProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSelles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="py-8">
      <div className="lg:max-w-6xl xl:max-w-7xl bg-yellow-400 mx-auto p-4 lg:p-8 rounded">
        <div className="flex justify-between items-center border-b border-white py-3">
          <h4 className="text-xl text-white font-semibold">
            Sản phẩm bán chạy
          </h4>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <span>Xem tất cả</span>
            <ArrowRightIcon className="h-5" />
          </div>
        </div>
        <div className="hidden lg:inline py-4">
          <Slider className="py-4" {...settings}>
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
          </Slider>
        </div>

        <div className="lg:hidden p-2">
          <Slider className="py-4" {...settingsMobile}>
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSelles;
