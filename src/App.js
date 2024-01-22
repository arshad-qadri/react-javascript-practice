import "./App.css";
import Debouncing from "./pages/Debouncing";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Throttling from "./pages/Throttling";
import TicTacToe from "./pages/TicTacToe";
import LoginWithPhoneAndOTP from "./pages/LoginWithPhoneAndOTP";
import Loader from "./pages/Loader";

function App() {
  // const arr = [9,4,7,65,12,56,0,0,65,9,99,66,3,76]
  // const sorted = arr.sort((a,b)=>b-a)
  // console.log(sorted);
  // const avg = arr.reduce((a,b)=>a+b) / arr.length
  // console.log(avg); 
  // const removeDuplicates = new Set(arr)
  // console.log(removeDuplicates);
  // const newArray = [1,2,3,4,5,6,7,8]
  // newArray.shift()
  // newArray.unshift(9) 
  // console.log( newArray.slice(5));
  // console.log(newArray.splice(0,3));
  // console.log(Array.isArray(newArray));
  // console.log(newArray.pop());
  return (
    <div className="App">
      <div onClick={()=>{window.location.href="/"}} className="cursor-pointer w-full bg-black text-white py-3 font-bold text-2xl text-center">
        Practice Javascript
      </div>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debounce" element={<Debouncing />} />
          <Route path="/throttle" element={<Throttling />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/login-otp" element={<LoginWithPhoneAndOTP />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
