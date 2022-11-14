import Image from "next/image";
import React, { useState } from "react";
import Banner from "../../public/banner-nuochoajpg.jpg";
import Layout from "../../components/Layout";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ItemBestProduct from "../../components/ItemBestProduct";

const Product = () => {
  const [modalGender, setModalGender] = useState<boolean>(false);
  const [modalBrand, setModalGenderBrand] = useState<boolean>(false);
  const [modalPrice, setModalPrice] = useState<boolean>(false);
  const [modalScent, setModalScent] = useState<boolean>(false);
  const onClose = () => {
    setModalGender(false);
    setModalGenderBrand(false);
    setModalPrice(false);
    setModalScent(false);
  };

  const listBrand = [
    "channel",
    "dior",
    "versace",
    "creed",
    "narscio",
    "gio",
    "ck",
    "tomfort",
    "Buff",
  ];

  const perfumeScent = ["Tốt", "Rất tốt", "Ổn", "Lâu", "Kém"];

  return (
    <Layout title="Cửa hàng">
      <div className="px-4 xl:max-w-7xl mx-auto p-4 bg-white">
        <div className=" relative">
          <Image
            className="w-full rounded h-32 lg:h-56 object-cover"
            src={Banner}
            alt="banner"
          />
          <div className="bg-gray-800/50 absolute top-0 bottom-0 right-0 left-0 z-10 rounded" />
          <div className="text-lg absolute z-20 top-[40%] lg:top-[50%] left-[35%] lg:text-2xl text-white uppercase">
            Cửa Hàng
          </div>
        </div>
        <div className="grid-cols-1 py-4 lg:p-4 grid lg:grid-cols-4 gap-4">
          <div>
            <div className="bg-[#2b2a2b] text-white p-3 rounded cursor-pointer relative">
              <div
                className="flex justify-between items-center"
                onClick={() => setModalGender(!modalGender)}
              >
                <h4>Giới Tính</h4>
                <ChevronDownIcon className="h-4 w-4" />
              </div>

              {modalGender ? (
                <div className="absolute left-0 right-0 -bottom-36 top-14 text-gray-400 z-10 bg-white shadow-xl rounded-md opacity-100 duration-300 ease-in-out">
                  <div className="p-4 space-y-2">
                    <label className="block items-center">
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                        className="mr-1"
                        onClick={() => setTimeout(onClose, 500)}
                      />
                      Nam
                    </label>
                    <label className="block">
                      <input
                        type="radio"
                        name="radio"
                        className="mr-1"
                        onClick={() => setTimeout(onClose, 500)}
                      />
                      Nữ
                    </label>
                    <label className="block">
                      <input
                        type="radio"
                        name="radio"
                        className="mr-1"
                        onClick={() => setTimeout(onClose, 500)}
                      />
                      Unisex
                    </label>
                  </div>
                </div>
              ) : (
                <div className="absolute left-0 right-0 bottom-10 -top-14 duration-300 opacity-0 ease-in-out"></div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-[#2b2a2b] text-white p-3 rounded cursor-pointer relative">
              <div
                className="flex justify-between items-center"
                onClick={() => setModalGenderBrand(!modalBrand)}
              >
                <h4>Thương Hiệu</h4>
                <ChevronDownIcon className="h-4 w-4" />
              </div>

              {modalBrand ? (
                <div className="absolute left-0 right-0 -bottom-36 top-14 text-gray-400 bg-white z-10 shadow-xl rounded-md opacity-100 duration-300 ease-in-out overflow-y-scroll">
                  <div className="p-4 space-y-2 ">
                    {listBrand.map((item, index) => (
                      <label
                        key={index}
                        className="block items-center uppercase text-sm"
                      >
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                          className="mr-1 "
                          onClick={() => setTimeout(onClose, 500)}
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="absolute left-0 right-0 bottom-10 -top-14 duration-300 opacity-0 ease-in-out"></div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-[#2b2a2b] text-white p-3 rounded cursor-pointer relative">
              <div
                className="flex justify-between items-center"
                onClick={() => setModalPrice(!modalPrice)}
              >
                <h4>Giá</h4>
                <ChevronDownIcon className="h-4 w-4" />
              </div>

              {modalPrice ? (
                <div className="absolute left-0 right-0 -bottom-36 top-14 text-gray-400 z-10 bg-white shadow-xl rounded-md opacity-100 duration-300 ease-in-out">
                  <div className="p-4 space-y-2"></div>
                </div>
              ) : (
                <div className="absolute left-0 right-0 bottom-10 -top-14 duration-300 opacity-0 ease-in-out"></div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-[#2b2a2b] text-white p-3 rounded cursor-pointer relative">
              <div
                className="flex justify-between items-center"
                onClick={() => setModalScent(!modalScent)}
              >
                <h4>Lưu Hương</h4>
                <ChevronDownIcon className="h-4 w-4" />
              </div>

              {modalScent ? (
                <div className="absolute left-0 right-0 -bottom-36 top-14 text-gray-400 z-10 bg-white shadow-xl rounded-md opacity-100 duration-300 ease-in-out overflow-y-scroll">
                  <div className="p-4 space-y-2 ">
                    {perfumeScent.map((item, index) => (
                      <label
                        key={index}
                        className="block items-center uppercase text-sm"
                      >
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                          className="mr-1 "
                          onClick={() => setTimeout(onClose, 500)}
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="absolute left-0 right-0 bottom-10 -top-14 duration-300 opacity-0 ease-in-out"></div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-5 py-8 gap-y-6">
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
            <ItemBestProduct />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
