import React from 'react'
import Main from '../components/Main'
import DebouncingComp from '../components/DebouncingComp'


const Debouncing = () => {
  const code = `
  import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/debounce";

const DebouncingComp = () => {
  const [inpValue, setInpValue] = useState("");
  const [displayVal, setDisplayVal] = useState();
  const debounce = useDebounce();
  const getData = () => {
    console.log(inpValue);
    setDisplayVal(inpValue);
  };
  useEffect(() => {
    // custome hook for debounce
    debounce(getData, 1000);
    // custome code for debounce
    // let time = setTimeout(() => {
    //   getData();
    // }, 1000);
    // return () => clearInterval(time);
  }, [inpValue]);
  const handleChange = (event) => {
    const value = event.target.value;
    setInpValue(value);
  };
  return (
    <div className="w-1/2 mx-auto bg-gray-100 p-2 min-h-[80vh]">
      <input
        placeholder="type here..."
        className="w-full p-2 border border-gray-100 rounded-md focus:outline-none"
        onChange={handleChange}
        value={inpValue}
      />
      <h1 className="mt-5 font-bold">{displayVal}</h1>
    </div>
  );
};

export default DebouncingComp;

// Custome Hook
import React, { useRef } from 'react'

const useDebounce = () => {
    const timeoutRef =useRef()
    const debounce = (func, delay=300)=>{
        clearTimeout(timeoutRef.current)
        console.log(delay);
        timeoutRef.current = setTimeout(() => {
            func()
        }, delay);
    }
  return debounce
}

export default useDebounce
`
  return (
    <Main Component={DebouncingComp} code={code} />
  )
}

export default Debouncing