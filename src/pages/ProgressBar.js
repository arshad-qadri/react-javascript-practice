import React from "react";
import Main from "../components/Main";
import ProgressBarComp from "../components/ProgressBarComp";

const ProgressBar = () => {
  const code = `
  import React, { useEffect, useRef, useState } from "react";

  const ProgressBar = () => {
    const [progressPercent, setProgressPercent] = useState(0);
    const intervalID = useRef(null);
    useEffect(() => {
      intervalID.current = setInterval(() => {
        setProgressPercent((prev) => prev + 1);
      }, 100);
      return () => {
        clearInterval(intervalID.current);
      };
    }, []);
    useEffect(() => {
      if (progressPercent === 100) {
        clearInterval(intervalID.current);
      }
    }, [progressPercent]);
    return (
      <div className="w-96  m-auto p-4">
        <h1 className="text-center mb-3">Progress Bar</h1>
        <div className="bg-gray-100 rounded-full text-center relative overflow-hidden  w-full h-10">
          <div
            className={\`absolute top-0 left-0 w-full h-full bg-transparent z-20 flex justify-center items-center font-bold \${
              progressPercent <= 50 ? "text-black" : "text-white"
            }\`}
          >
            {progressPercent}%
          </div>
          <div
            className="absolute  h-full bg-green-500 left-0 top-0 z-10"
            style={{ width: \`\${progressPercent}%\` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  `;
  return <Main Component={ProgressBarComp} code={code}></Main>;
};

export default ProgressBar;
