import React from 'react'
import Main from '../components/Main'
import PiechartComp from '../components/PiechartComp'

const PieChart = () => {
  const code = `
import React, { useState } from "react";

const PiechartComp = () => {
  const [value, setValue] = useState(10);
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <input
        className="w-48 mt-5  cursor-pointer"
        value={value}
        type="range"
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className="w-48 h-48  rounded-full mt-5 "
        style={{
          backgroundImage: \`conic-gradient(green \${value}%, lightgreen 0)\`,
        }}
      ></div>
    </div>
  );
};

export default PiechartComp;
`
  return (
    <Main Component={PiechartComp}  code={code} />
  )
}

export default PieChart
