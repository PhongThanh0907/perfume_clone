/* eslint-disable @next/next/no-img-element */
import React from "react";

const Support = () => {
  const item = [
    {
      image:
        "https://kenperfume.com/wp-content/uploads/2022/07/free-shipping.svg",
      title: "Miễn Phí Vận Chuyển",
      subtitle: "Cho đơn hàng từ 500K",
    },
    {
      image:
        "https://kenperfume.com/wp-content/uploads/2022/07/online-secure-payment.svg",
      title: "Thanh Toán Online",
      subtitle: "Nhanh chóng - Bảo mật",
    },
    {
      image: "https://kenperfume.com/wp-content/uploads/2022/07/authentic.svg",
      title: "Cam Kết Chính Hãng",
      subtitle: "Toàn bộ sản phẩm",
    },
    {
      image: "https://kenperfume.com/wp-content/uploads/2022/07/gift.svg",
      title: "Chính Sách Bán Hàng",
      subtitle: "Nhiều ưu đãi cho khách hàng",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="grid grid-cols-2 px-4 gap-4 lg:grid-cols-4 xl:max-w-7xl mx-auto lg:gap-28">
        {item.map((item, index) => (
          <div className="flex gap-2 items-center lg:py-14" key={index}>
            <img className="h-8 lg:h-10" src={item.image} alt="logo" />
            <div className="text-xs lg:text-sm">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-400">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
