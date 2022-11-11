import React, { useState } from "react";
import ItemBestProduct from "./ItemBestProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotProduct = () => {
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
  const [status, setStatus] = useState<number>(0);

  return (
    <div className="lg:max-w-6xl xl:max-w-7xl bg-white mx-auto p-4 lg:p-8">
      <div className="text-center">
        <h2>Sản phẩm Nổi Bật</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 px-8 lg:px-32 py-4">
          <div
            className={
              status === 1
                ? " border border-perfume_red-light rounded-lg text-perfume_red-light duration-300 cursor-pointer"
                : " border border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 duration-300 cursor-pointer"
            }
            onClick={() => setStatus(1)}
          >
            {" "}
            <button className="uppercase py-2">Nước hoa nam</button>{" "}
          </div>
          <div
            className={
              status === 2
                ? "  border border-perfume_red-light rounded-lg text-perfume_red-light duration-300 cursor-pointer"
                : " border border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 duration-300 cursor-pointer"
            }
            onClick={() => setStatus(2)}
          >
            {" "}
            <button className="uppercase py-2">Nước hoa nữ</button>{" "}
          </div>
          <div
            className={
              status === 3
                ? "  border border-perfume_red-light rounded-lg text-perfume_red-light duration-300 lg:col-span-1 col-span-2 cursor-pointer"
                : " border border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 duration-300 lg:col-span-1 col-span-2 cursor-pointer"
            }
            onClick={() => setStatus(3)}
          >
            {" "}
            <button className=" uppercase py-2">Nước hoa unisex</button>{" "}
          </div>
        </div>
        <div className="hidden lg:inline py-6">
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

export default HotProduct;
