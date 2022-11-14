import { useRouter } from "next/router";
import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

const payment = () => {
  const router = useRouter();
  return (
    <Layout title="Phương thức thanh toán">
      <CheckoutWizard activeStep={2} />
      <form className="lg:max-w-7xl mx-auto py-8">
        <h1 className="mb-4 text-2xl font-semibold">Phương Thức Thanh Toán</h1>
        {["PayPal", "Visa", "Tài khoản ngân hàng", "Thanh toán tiền mặt"].map(
          (payment) => (
            <div key={payment} className="mb-4">
              <input
                name="paymentMethod"
                className="p-2 outline-none focus:ring-0"
                id={payment}
                type="radio"
              />
              <label className="p-2" htmlFor={payment}>
                {payment}
              </label>
            </div>
          )
        )}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push("/shipping")}
            type="button"
            className="px-8 py-2 bg-perfume_red-light text-white rounded-md hover:bg-red-700 active:bg-red-900 duration-300"
          >
            Trở về
          </button>
          <button className="px-8 py-2 bg-perfume_red-light text-white rounded-md hover:bg-red-700 active:bg-red-900 duration-300">
            Tiếp tục
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default payment;
