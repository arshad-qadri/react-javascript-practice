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
