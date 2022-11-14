import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const Register = () => {
  return (
    <Layout title="Đăng Ký">
      <div>
        <div className="bg-[#eee] text-center py-14 xl:max-w-7xl mx-auto">
          <h4 className="text-3xl font-semibold">Tài Khoản</h4>
          <div className="flex justify-center text-sm text-gray-500">
            <Link href="/#">
              <p className="text-perfume_red-light hover:text-blue-500 duration-200 active:text-red-900">
                Trang Chủ
              </p>
            </Link>
            <p>/Tài khoản</p>
          </div>
        </div>
        <div className="xl:max-w-7xl mx-auto text-center py-10">
          <h4 className="text-2xl font-semibold py-4">Đăng Ký</h4>
          <div className="py-14 px-4 border border-gray-200 shadow-lg lg:w-[50%] mx-auto rounded-md">
            <input
              className="w-[90%] mx-auto border border-gray-200 focus:outline-none px-4 py-2"
              type="text"
              placeholder="Tên của bạn"
            />
            <input
              className="w-[90%] mx-auto border border-gray-200 focus:outline-none px-4 py-2 my-8"
              type="email"
              placeholder="Nhập email"
            />
            <input
              className="w-[90%] mx-auto border border-gray-200 focus:outline-none px-4 py-2 text-gray-400 mb-8"
              type="password"
              placeholder="Nhập mật khẩu"
            />
            <button className="px-8 py-2 bg-perfume_red-light rounded-md text-white hover:bg-red-600 active:bg-red-900">
              Đăng Nhập
            </button>
            <p className="py-4">
              Bạn đã có tài khoản?{" "}
              <Link href="/login">
                <span className="underline text-perfume_red-light hover:text-blue-600">
                  Đăng Nhập
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
