import React from "react";
import Main from "../components/Main";
import OTPComp from "../components/otp/OTPCompo";

const LoginWithPhoneAndOTP = () => {
const code = `
// Main file code
import React, { useState } from "react";
import PhoneNumber from "./PhoneNumber";
import OTPInput from "./OTP";

const OTPComp = () => {
  const [isGotOtp, setIsGotOtp] = useState(false);
  const [number, setNumber] = useState("");

  return (
    <div className="text-center">
      {!isGotOtp ? (
        <>
          <h1 className="mb-3">Login with Phone</h1>
          <PhoneNumber
            setIsGotOtp={setIsGotOtp}
            setNumber={setNumber}
            number={number}
          />
        </>
      ) : (
        <div>
          <p>OTP sent to this {number}</p>
          <OTPInput />
        </div>
      )}
    </div>
  );
};

export default OTPComp;

// Phone Number Component with seperate file
import React from "react";

const PhoneNumber = ({setIsGotOtp, setNumber, number}) => {
    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        
        setIsGotOtp(true)
      };
      const handlePhoneNumberChange =  (e)=>{
        const {value} = e.target
        if(value.length<11){
            setNumber(value)
        }
      }
  return (
    <form onSubmit={handlePhoneNumberSubmit}>
      <input
        className="border h-10 rounded border-black px-3"
        type="number"
        placeholder="Phone number"
        onChange={handlePhoneNumberChange}
        value={number}
      />
      <button
        className="bg-gray-400 h-10 rounded border ml-3 px-3"
        type="submit"
      >
        Get OTP
      </button>
    </form>
  );
};

export default PhoneNumber;

// OTP Input Component with seperate file
import React, { useEffect, useRef, useState } from "react";

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRef = useRef([]);
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
`
  return <Main Component={OTPComp} code={code} />;
};

export default LoginWithPhoneAndOTP;
