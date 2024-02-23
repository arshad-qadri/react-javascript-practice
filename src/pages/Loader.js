import React from "react";
import LoaderComp from "../components/LoaderComp";
import Main from "../components/Main";

const Loader = () => {
  const code = `
import React from "react";

const LoaderComp = () => {
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
    </div>
  );
};

export default LoaderComp;

`
const css = `
/* Loader 1 css */
.bars div {
  animation: animate 500ms linear alternate-reverse infinite;
}

.bars div:nth-child(2) {
  animation-delay: 150ms;
}
.bars div:nth-child(3) {
  animation-delay: 300ms;
}
.bars div:nth-child(4) {
  animation-delay: 400ms;
}
.bars div:nth-child(5) {
  animation-delay: 500ms;
}
@keyframes animate {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}

/* Loader 2 css */
.loader  { 
    height: 50px;
    width: 50px;
  }
  
`
  return <Main Component={LoaderComp} code={code} css={css} />
};

export default Loader;
