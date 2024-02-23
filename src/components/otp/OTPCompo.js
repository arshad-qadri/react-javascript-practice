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
