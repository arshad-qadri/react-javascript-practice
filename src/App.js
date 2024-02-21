import "./App.css";
import Debouncing from "./pages/Debouncing";
import Home from "./pages/Home";
import { Routes, Route, Link  } from "react-router-dom";
import Throttling from "./pages/Throttling";
import TicTacToe from "./pages/TicTacToe";
import LoginWithPhoneAndOTP from "./pages/LoginWithPhoneAndOTP";
import Loader from "./pages/Loader";
import ProgressBar from "./pages/ProgressBar";
import GridLights from "./pages/GridLights";


function App() {

  return (
    <div className="App">
      <div onClick={()=>{window.location.href="/"}} className="cursor-pointer w-full bg-black text-white py-3 font-bold text-2xl text-center">
        Practice Javascript
      </div>
      <Link to={"/"}><button className="bg-gray-800 text-white py-2 px-4 m-4 rounded-lg font-semibold">Back</button></Link>
      <div className="p-5 h-[50vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debounce" element={<Debouncing />} />
          <Route path="/throttle" element={<Throttling />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/login-otp" element={<LoginWithPhoneAndOTP />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/grid-lights" element={<GridLights />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
