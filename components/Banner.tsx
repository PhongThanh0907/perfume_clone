import Image from "next/image";
import React from "react";
import BannerImage from "../public/banner.jpg";
import BannerImage1 from "../public/banner5.jpg";
import BannerImage2 from "../public/banner1.jpg";
import BannerImage3 from "../public/banner-1.png";
import BannerImage4 from "../public/banner-2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const listBanner = [BannerImage, BannerImage1, BannerImage2];
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-2 lg:gap-4 px-2 lg:max-w-6xl xl:max-w-7xl m-auto py-6 ">
      <div className="row-span-2 col-span-3">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          className="cursor-pointer"
        >
          {listBanner.map((item, index) => (
            <Image
              loading="lazy"
              key={index}
              src={item}
              alt="banner"
              className="h-full rounded-md "
            />
          ))}
        </Carousel>
      </div>
      <div className="col-span-1 grid grid-flow-row-dense">
        <Image
          src={BannerImage3}
          className="h-full rounded-md cursor-pointer"
          alt="banner"
        />
      </div>
      <div className="col-span-1 grid grid-flow-row-dense">
        <Image
          src={BannerImage4}
          className="h-full rounded-md cursor-pointer"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
