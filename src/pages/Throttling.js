import React from 'react'
import Main from '../components/Main'
import ThrottleComp from '../components/ThrottleComp'

const Throttling = () => {
  const code = `
  import React, { useState } from "react";
// import useThrottle from "../hooks/Throttle";

const ThrottleComp = () => {
  // const throttle = useThrottle();
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);
  const para = Array.from({ length: 20 }, (_, index) => (
    <p key={index}>Throttling</p>
  ));

  const normalScroll = () => {
    setNormalCount(normalCount + 1);
  };

  const throttleScroll = () => {
    if (isScrolling) {
      setThrottleCount(throttleCount + 1);
      setIsScrolling(false);
      setTimeout(() => {
        setIsScrolling(true);
      }, 1000);
    }
  };

  const handleScroll = () => {
    normalScroll();
    //  custome function for throttling
    throttleScroll();
    //custome hook for throttling
    // throttle(throttleScroll, 1000);
  };

  return (
    <>
      <div className="text-center">Throttling</div>
      <h1>Normal Count: {normalCount}</h1>
      <h1>Throttle Count: {throttleCount}</h1>
      <div
        onScroll={handleScroll}
        className="bg-red-300 scroll-auto mt-5"
        style={{ height: "30vh", overflow: "auto" }}
      >
        {para}
      </div>
    </>
  );
};

export default ThrottleComp;

// Custome Hook
import React, { useRef } from "react";

const useThrottle = () => {
  const throttleSeed = useRef(null);

  const throttleFunction = useRef((func, delay = 200) => {
    if (!throttleSeed.current) {
      // Call the callback immediately for the first time
      func();
      throttleSeed.current = setTimeout(() => {
        throttleSeed.current = null;
      }, delay);
    }
  });

  return throttleFunction.current;
};

export default useThrottle;

`
  return (
    <Main Component={ThrottleComp} code={code} />
  )
}

export default Throttling