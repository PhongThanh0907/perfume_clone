import React from "react";

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="flex mb-5 flex-wrap lg:max-w-7xl mx-auto re">
      {[
        "Đăng Nhập",
        "Địa Chỉ Giao Hàng",
        "Phương Thức Thanh Toán",
        "Xác Nhận Đơn Hàng",
      ].map((step, index) => (
        <div
          key={index}
          className={`flex-1 border-b-2 text-xs lg:text-sm
          text-center
           ${
             index <= activeStep
               ? "border-perfume_red-light text-perfume_red-light py-2"
               : " border-gray-400 text-gray-400 py-2 "
           }
             `}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default CheckoutWizard;
