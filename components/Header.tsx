import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="hidden lg:inline">
      <div className="flex justify-end gap-10 max-w-[90%] p-2 text-sm text-gray-600">
        <div className="flex-default gap-1 hover:hover-default">
          <MapPinIcon className="text-gray-300 h-6" />
          <span>Tìm Cửa Hàng</span>
        </div>
        <div className="flex-default gap-1">
          <h4 className="hover:hover-default">Đăng Ký</h4>
          <span>|</span>
          <h4 className="hover:hover-default">Đăng Nhập</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
