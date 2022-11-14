import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Layout from "../../components/Layout";
import ItemCart from "../../components/ItemCart";

const Cart = () => {
  return (
    <Layout title="Giỏ Hàng">
      <div className="lg:max-w-7xl mx-auto py-4">
        <div>
          <div className="flex gap-4 my-5 items-center">
            <Link href="/">
              <h1>Trang chủ</h1>
            </Link>
            <ChevronRightIcon className="h-4 text-[gray]" />

            <h1 className="underline text-perfume_red-light">Giỏ hàng</h1>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-10 text-[gray] ">
              <h3 className="col-span-5 text-sm lg:text-base">Sản phẩm</h3>
              <h3 className="text-sm lg:text-base text-center">Giá</h3>
              <h3 className="col-span-2 text-sm lg:text-base text-center">
                Số lượng
              </h3>
              <h3 className="col-span-2 text-sm lg:text-base text-center">
                Tổng tiền
              </h3>
            </div>
            <hr className="bg-mainGray border-mainGray h-[2px] my-4" />

            <ItemCart />
            <h1 className="text-right pr-10">
              Tổng tiền tạm tính:{" "}
              <span className="font-bold text-lg">2.500.000VNĐ</span>
            </h1>
            <hr className="bg-mainGray border-mainGray h-[2px] my-4" />
            <div className="text-right">
              <Link href="/shipping">
                <button className="px-10 py-2 bg-perfume_red-light rounded-3xl text-white font-bold hover:bg-red-700 active:bg-red-900 duration-300">
                  Thanh toán
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
