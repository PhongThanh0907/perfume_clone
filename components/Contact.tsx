import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="bg-perfume_red-light text-white py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 max-w-7xl mx-auto">
        <div className="col-span-2  lg:flex items-center gap-3">
          <EnvelopeIcon className="mx-auto lg:mx-0 h-14" />
          <div className="text-center lg:text-left my-4">
            <h4 className="uppercase font-semibold">Đăng ký nhận tin</h4>
            <p className="text-sm text-gray-200">
              Nhận ngay VOUCHER giảm 5% cùng nhiều ưu đãi!
            </p>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 px-4 lg:grid-cols-5 my-auto gap-4">
          <div className="col-span-2">
            <input
              className="w-full py-2 px-4 focus:outline-none text-black rounded"
              type="text"
              placeholder="Số điện thoại"
            />
          </div>
          <div className="col-span-2">
            <input
              className="w-full py-2 px-4 text-black rounded focus:outline-none"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="col-span-1 ">
            <button className="w-full py-1 lg:py-0  bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 duration-300 h-full rounded font-semibold">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
