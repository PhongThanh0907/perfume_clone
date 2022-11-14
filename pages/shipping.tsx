import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const Shipping = () => {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form className="lg:max-w-7xl mx-auto py-8">
        <h1 className="mb-4 text-2xl font-semibold">Địa chỉ giao hàng:</h1>
        <div className="mb-4 grid grid-cols-1">
          <label htmlFor="fullName inline">Họ và tên:</label>
          <input
            className="lg:w-[50%] text-gray-500 focus:outline-none py-2 px-4 "
            id="fullName"
            autoFocus
          />
        </div>

        <div className="mb-4  grid grid-cols-1">
          <label htmlFor="city">Thành phố/Tỉnh:</label>
          <input
            className="lg:w-[50%] text-gray-500 focus:outline-none py-2 px-4"
            id="city"
            autoFocus
          />
        </div>

        <div className="mb-4  grid grid-cols-1">
          <label htmlFor="postalCode">Quận/Huyện:</label>
          <input
            className="lg:w-[50%] text-gray-500 focus:outline-none py-2 px-4"
            id="postalCode"
            autoFocus
          />
        </div>

        <div className="mb-4 grid grid-cols-1">
          <label htmlFor="address">Địa chỉ:</label>
          <input
            className="lg:w-[50%] text-gray-500 focus:outline-none py-2 px-4"
            id="address"
            autoFocus
          />
        </div>

        <div className="mb-4 flex justify-between">
          <Link href="/payment">
            <button className="px-8 py-2 bg-perfume_red-light text-white rounded-md hover:bg-red-700 active:bg-red-900 duration-300">
              Tiếp tục
            </button>
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Shipping;
