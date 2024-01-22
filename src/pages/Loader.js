import React from "react";

const Loader = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col">
      <div className="bars w-[60px] h-8  relative">
        <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-0 bg-black"></div>
        <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[20%] bg-black"></div>
        <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[40%] bg-black"></div>
        <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[60%] bg-black"></div>
        <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[80%] bg-black"></div>
      </div>
      <div className="text-sm ">Loading...</div>
    </div>
  );
};

export default Loader;
