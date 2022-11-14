import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import Product from "../../public/product.jpg";
import {
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const ProductDetail = () => {
  return (
    <div>
      <Layout title="Chi tiết sản phẩm">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:max-w-7xl mx-auto gap-8 py-6">
          <div className="h-[450px] ">
            <Image
              className="rounded-md h-full w-full"
              src={Product}
              alt="img-product"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dior Sauvage - EDP 100ml</h1>
            <div className="text-lg space-y-2">
              <h4>
                {" "}
                <span className="underline text-perfume_red-light font-semibold">
                  Thương hiệu:
                </span>{" "}
                Dior
              </h4>
              <h4>
                <span className="underline text-perfume_red-light font-semibold">
                  Danh mục:
                </span>{" "}
                Nước hoa full
              </h4>
              <h4>
                <span className="underline text-perfume_red-light font-semibold">
                  Giới tính:
                </span>{" "}
                Nam
              </h4>
              <p className="text-gray-400">
                <span className="underline text-perfume_red-light font-semibold">
                  Mã sản phẩm:
                </span>{" "}
                3614227693296
              </p>
            </div>
            <h4 className="text-2xl text-perfume_red-light font-semibold underline border-t border-gray-200 py-4">
              2.500.000VNĐ
            </h4>
            <div className="space-x-4">
              <input
                className="border rounded-lg w-[100px] text-center border-gray-400 focus:outline-none py-2"
                type="number"
                min={1}
                defaultValue="1"
              />
              <button className="uppercase px-8 py-2 border border-red-800 bg-perfume_red-light rounded-md text-white hover:bg-red-700 active:bg-red-900">
                Mua Ngay
              </button>
            </div>
          </div>
          <div className="border border-gray-200 shadow-lg p-4 rounded-md lg:h-[80%] lg:w-[80%]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BuildingStorefrontIcon className="h-7 text-perfume_red-light" />
                <div>
                  <h1 className="text-perfume_red-light font-semibold">
                    PHONG PERFUME
                  </h1>
                  <div className="flex">
                    <StarIcon className="h-5 text-yellow-400" />
                    <StarIcon className="h-5 text-yellow-400" />
                    <StarIcon className="h-5 text-yellow-400" />
                    <StarIcon className="h-5 text-yellow-400" />
                    <StarIcon className="h-5 text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="flex items- gap-2">
                <ShieldCheckIcon className="h-7 text-blue-500" />
                <h1>Cửa Hàng Đảm Bảo</h1>
              </div>{" "}
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-7 text-green-600" />
                <h1 className="text-perfume_red-light">097999999</h1>
              </div>
              <div className="">
                <div className="flex items-center gap-2 border-t border-gray-200 py-3">
                  <CheckBadgeIcon className="text-yellow-500 h-6" />
                  <p>Miễn phí đổi trả trong 7 ngày </p>
                </div>
                <div className="flex items-center gap-2 border-t border-gray-200 py-3">
                  <CheckBadgeIcon className="text-yellow-500 h-6" />
                  <p>Kiểm tra hàng trước khi nhận</p>
                </div>
                <div className="flex items-center gap-2 border-t border-gray-200 py-3">
                  <CheckBadgeIcon className="text-yellow-500 h-6 " />
                  <p>Hoàn tiền nếu phát hiện hàng giả</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductDetail;
