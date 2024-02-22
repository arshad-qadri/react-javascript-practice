import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      label: "Debounce",
      path: "/debounce",
    },
    {
      label: "Throttling",
      path: "/throttle",
    },
    {
      label: "Tic Tac Toe",
      path: "/tic-tac-toe",
    },
    {
      label: "Login with otp",
      path: "/login-otp",
    },
    {
      label: "Loader",
      path: "/loader",
    },
    {
      label: "Progress Bar",
      path: "/progress-bar",
    },
    {
      label: "Grid Lights",
      path: "/grid-lights",
    },
  ];
  return (
    <>
      <div className="p-4">
        <ul>
          {links.map((item, index) => (
            <li className="text-xl text-blue-400 mb-1" key={index}>
              <span className="text-black">{index+1}.</span> <Link to={item.path} className="underline">{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
