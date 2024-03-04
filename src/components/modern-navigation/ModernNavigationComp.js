import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModernNavigationComp = () => {
  const [indexNum, setIndexNum] = useState(0);
  const menu = [
    {
      label: "Home",
      link: "/modern-navigation/#",
    },
    {
      label: "About",
      link: "/modern-navigation/#",
    },
    {
      label: "contact",
      link: "/modern-navigation/#",
    },
  ];
  const obj = {
    "0":"Home",
    "1":"About",
    "2":"Contact",
  }
  return (
    <div className="flex" style={{ height: "91%" }}>
      <div className="bg-gray-300 w-60 h-full">
        <div className="flex flex-col mt-10 items-center w-full pl-10">
          {menu.map((item, index) => (
            <Link
              onClick={() => setIndexNum(index)}
              className={`mt-6 w-full px-4 py-2 cursor-pointer   ${
                index === indexNum
                  ? "bg-gray-900 text-white relative menu-item"
                  : ""
              }`}
              to={item.link}
            >
              <div className="topbar"></div>
              <div className="bottombar"></div>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 w-full flex justify-center items-center">
        {obj[indexNum]}
      </div>
    </div>
  );
};

export default ModernNavigationComp;
