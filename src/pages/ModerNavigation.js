import React from "react";
import ModernNavigationComp from "../components/modern-navigation/ModernNavigationComp";
import Main from "../components/Main";

const ModerNavigation = () => {
  const code = `
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
              className={\`mt-6 w-full px-4 py-2 cursor-pointer   \${
                index === indexNum
                  ? "bg-gray-900 text-white relative menu-item"
                  : ""
              }\`}
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
`;
const css = `
/* modern navigation bar css */
.menu-item {
  border-radius: 20px 0 0 20px;
}
.bottombar,
.topbar {
  position: absolute;
  height: 10px;
  right: 0;
  width: 100%;
  background: rgb(17 24 39);
}
.topbar {
  top: -10px;
}

.bottombar {
  bottom: -10px;
}

.bottombar::after,
.topbar::after {
  position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  left: 0;
  right: 0;
  background: #d1d5db;
}
.bottombar::after {
  border-radius: 0 10px 0 0;
}
.topbar::after {
  border-radius: 0 0 10px 0;
}`
  return (
    <div>
      <Main Component={ModernNavigationComp} code={code} css={css} />
    </div>
  );
};

export default ModerNavigation;
