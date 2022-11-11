import React from "react";

const Footer = () => {
  return (
    <div className="py-14">
      <div className="grid grid-cols-4 max-w-7xl mx-auto gap-4">
        <div>
          <h2 className="font-semibold py-6 ">THÔNG TIN LIÊN HỆ</h2>
          <h3 className="font-semibold py-2 text-sm">
            Phong Perfume – Nước Hoa Authentic
          </h3>
          <div className="text-sm space-y-2">
            <p>
              <span className="font-semibold">Địa chỉ :</span> Số 10 – Ngõ 8 –
              Đường Trần Quang Diệu – Phường Ô Chợ Dừa – Quận Đống Đa – Thành
              Phố Hà Nội
            </p>
            <p>
              <span className="font-semibold">Điện thoại :</span> 0824.422.828
            </p>
            <p>
              <span className="font-semibold">Email :</span>
              phong.thanh@gmail.com
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold py-6 ">HƯỚNG DẪN & CHÍNH SÁCH</h2>
          <div>
            <ul className="text-gray-600 space-y-2 ">
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Giới thiệu về Ken Perfume
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Chính sách bảo mật thông tin
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Chính sách bảo hành & đổi trả
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Chính sách giao nhận & vận chuyển
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Hướng dẫn mua hàng & thanh toán
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-semibold py-6 ">SẢN PHẨM HOT</h2>
          <div>
            <ul className="text-gray-600 space-y-2 ">
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Nước Hoa Mini
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Nước Hoa Chiết
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Nước Hoa Nam
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                Nước Hoa Nữ
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-semibold py-6 ">TÌM PHONGPERFUME TRÊN:</h2>
          <div>
            <ul className="text-gray-600 space-y-2 ">
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                FACEBOOK
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                YOUTUBE
              </li>
              <li className="cursor-pointer hover:text-perfume_red-light duration-300">
                TIKTOK
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
