import React from "react";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center gap-10 flex-wrap">
      {/* loader 1 */}
      <div>
        <div className="bars w-[60px] h-8  relative">
          <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-0 bg-black"></div>
          <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[20%] bg-black"></div>
          <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[40%] bg-black"></div>
          <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[60%] bg-black"></div>
          <div className="w-1/5 absolute bottom-0  border-[2.5px] border-white  left-[80%] bg-black"></div>
        </div>
        <div className="text-sm ">Loading...</div>
      </div>
      {/* loader 2 */}
      <div>
        <div className="w-10 h-10 rounded-full mx-4 border-4 border-black border-b-white animate-spin"></div>
      </div>
      <div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
