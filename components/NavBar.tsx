import React, { useState } from "react";
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const NavBar = () => {
  const listMenu = [
    {
      title: "TƯ VẤN CHỌN",
      link: "/",
    },
    {
      title: "THƯƠNG HIỆU",
      link: "/",
    },
    {
      title: "TIN TỨC",
      link: "/",
    },
    {
      title: `QUÀ TẶNG`,
      link: "/",
    },
    {
      title: "LIÊN HỆ",
      link: "/",
    },
  ];

  const listMenuItem = [
    {
      title: "THƯƠNG HIỆU",
      link: "/",
    },
    {
      title: "NƯỚC HOA NAM",
      link: "/",
    },
    {
      title: "NƯỚC HOA NỮ",
      link: "/",
    },
    {
      title: "NƯỚC HOA MINI",
      link: "/",
    },
    {
      title: "MỸ PHẨM",
      link: "/",
    },
  ];

  const listBrandItem = [
    "Versace",
    "Nautica",
    "Dior",
    "Channel",
    "Narsico",
    "Creed",
    "Davioff",
    "CK",
    "Tomfort",
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="hidden lg:block bg-perfume_red-light">
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-4 text-white gap-8 text-sm ">
        <div
          className="flex col-span-1 items-center p-4 justify-between bg-[#2b2a2b] cursor-pointer relative z-20"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <div className="absolute bg-perfume_red-bg text-black font-semibold right-0 translate-y-[158px] left-0 duration-300 ease-in-out opacity-100">
              {listMenuItem.slice(0, 1).map((item, index) => (
                <div
                  className="hover:hover-default p-4 h-full hover:bg-white duration-200 flex items-center justify-between relative group"
                  key={index}
                >
                  {item.title}
                  <div>
                    <ChevronRightIcon className="h-4" />
                  </div>
                  <div className="style-group md:translate-x-[165px] lg:translate-x-[280px] duration-300 group-hover:visible group-hover:opacity-100 group-hover:w-[700px] group-hover:h-[248px] group-hover:border group-hover:shadow-md">
                    <ul className="grid grid-cols-6 p-6 gap-y-4">
                      {listBrandItem.map((item, index) => (
                        <Link key={index} href="/">
                          <li className="text-black hover:text-perfume_red-light uppercase duration-200">
                            {item}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              {listMenuItem.slice(1, listMenuItem.length).map((item, index) => (
                <div
                  className="hover:hover-default p-4 h-full hover:bg-white duration-200"
                  key={index}
                >
                  {item.title}
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute bg-perfume_red-bg text-black font-semibold right-0 left-0 translate-y-[-10px] duration-300 opacity-0 ease-in-out"></div>
          )}

          <div className="flex items-center gap-1">
            <Bars3BottomLeftIcon className="h-6" />
            <h4 className="uppercase">Danh Mục</h4>
          </div>

          <ChevronDownIcon className="h-4" />
        </div>
        {/* Menu */}

        <div className="flex col-span-3 gap-8 items-center">
          {listMenu.map((item, index) => (
            <div
              className="px-3 hover:bg-[#a82b2f] h-full flex items-center duration-200 active:bg-red-700 cursor-pointer"
              key={index}
            >
              <Link href={item.link}>
                <h4>{item.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
