import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const MenuBrand = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [status, setStatus] = useState<number>();

  return (
    <div className="bg-white relative">
      <div
        className={
          "justify-between flex items-center mx-auto px-4 py-6 md:max-w-7xl gap-4"
        }
      >
        <div className="md:hidden" onClick={() => setOpenMenuMobile(true)}>
          <Bars3Icon className="h-6" />
        </div>
        <div className="flex">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl">
              <b className="text-perfume_red-light">PHONG</b>PERFUME
            </h1>
          </Link>
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-red-700 hover:bg-red-800 active:bg-red-900">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l focus:outline-none px-4 text-black bg-gray-100 border border-gray-300"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <MagnifyingGlassIcon className="h-12 p-4 text-yellow-300" />
        </div>
        <div className="hidden md:flex">
          <PhoneIcon className="h-10 text-gray-500" />
          <div>
            <p className="text-xs text-gray-500">Hotline</p>
            <h4 className="font-bold">0979999999</h4>
          </div>
        </div>
        <div></div>
        <div className="flex gap-2">
          <div className="hidden md:inline">
            <SocialIcon
              className="h-[40px] w-[40px]"
              url="https://www.tiktok.com/"
            />
          </div>
          <div className="hover:hover-default">
            <HeartIcon className="h-6 mx-auto" />
            <span className="hidden md:inline">Đã Lưu</span>
          </div>
          <div className="hover:hover-default">
            <UserIcon className="h-6 mx-auto" />
            <span className="hidden md:inline">Tài khoản</span>
          </div>
          <div className="hover:hover-default relative">
            <ShoppingBagIcon className="h-6 mx-auto" />
            <span className="hidden md:inline">Giỏ hàng</span>
            <div className="right-0 absolute -top-2 md:right-3">
              <h4 className="px-1 bg-yellow-300 rounded-full mx-auto">0</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {openMenuMobile ? (
        <div className="bg-black text-white visible fixed w-[80%] top-0 px-4 py-6 duration-300 ease-in-out h-[100vh] opacity-100 translate-x-[0px]">
          <div className="flex border border-gray-700 rounded justify-between py-2 px-3">
            <input
              className="bg-black focus:outline-none text-gray-500"
              type="text"
              placeholder="Tìm"
            />
            <MagnifyingGlassIcon className="text-gray-400 h-6 text-right" />
          </div>
          <div className="grid grid-cols-2 py-6">
            <div
              className={
                status === 1
                  ? "uppercase text-center text-sm font-semibold border-b border-2px  border-red-600 py-2 duration-200"
                  : "uppercase text-center text-sm font-semibold border-b border-2px border-white py-2 duration-200"
              }
              onClick={() => setStatus(1)}
            >
              Danh mục
            </div>
            <div
              className={
                status === 1
                  ? "uppercase text-center text-sm font-semibold border-b border-2px border-white py-2 duration-200"
                  : "uppercase text-center text-sm font-semibold border-b border-2px border-red-600 py-2 duration-200"
              }
              onClick={() => setStatus(2)}
            >
              Thông tin
            </div>
          </div>
          <div className="duration-200">
            {status === 1 ? (
              <ul className="text-gray-400 space-y-4 mx-2">
                <li>Cửa Hàng</li>
                <li>Nước Hoa Nam</li>
                <li>Nước Hoa Nữ</li>
                <li>Mỹ Phẩm</li>
                <li>Make Up</li>
              </ul>
            ) : (
              <ul className="text-gray-400 space-y-4 mx-2">
                <li>Hotline: 0979999999</li>
                <li>Khuyến Mãi</li>
                <li>Sản Phẩm Đã Lưu</li>
                <li>Tài Khoản</li>
                <li>Liên Hệ</li>
              </ul>
            )}
          </div>
          <div className="absolute text-gray-500 h-10 w-10 -right-10 top-2">
            <XMarkIcon onClick={() => setOpenMenuMobile(false)} />
          </div>
        </div>
      ) : (
        <div className="bg-black text-white visible w-[80%] fixed top-0 px-4 py-6 translate-x-[-100%] duration-300 h-[100vh] ease-in-out"></div>
      )}
    </div>
  );
};

export default MenuBrand;
