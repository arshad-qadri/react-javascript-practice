import React, { useEffect, useRef, useState } from "react";

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRef = useRef([]);
//   console.log(inputRef);
  const  handleChange =  (e, ind) => {
    const { value } = e.target;
    if(isNaN(value)) return
    const newOtp = [...otp];
    newOtp[ind] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value &&  ind < 3 && inputRef.current[ind+1]) {
      inputRef.current[ind + 1].focus();
    }
  };


const handleKeyDown = (e, ind) => {
    const newOtp = [...otp];
    if (e.key === "Backspace" && !newOtp[ind] && ind > 0 && inputRef.current[ind - 1]) {
  
      // Now inputRef.current[ind - 1] will have the updated state
      inputRef.current[ind - 1].focus();
    }
  };
  const handleClick = (ind) => {
    inputRef.current[ind].setSelectionRange(1, 1);
  };
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <div className="flex gap-x-3 justify-center mt-4">
      {otp.map((value, ind) => (
        <input
          ref={(input) => (inputRef.current[ind] = input)}
          type="text"
          value={value}
          key={ind}
          onChange={(e) => handleChange(e, ind)}
          onKeyDown={(e) => handleKeyDown(e, ind)}
          onClick={() => handleClick(ind)}
          className="border border-black h-12 w-12 outline-none text-center focus:border-2"
        />
      ))}
    </div>
    
  );
};

export default OTPInput;
