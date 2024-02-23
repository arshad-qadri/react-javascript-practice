import "./App.css";
import Debouncing from "./pages/Debouncing";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Throttling from "./pages/Throttling";
import TicTacToe from "./pages/TicTacToe";
import LoginWithPhoneAndOTP from "./pages/LoginWithPhoneAndOTP";
import Loader from "./pages/Loader";
import ProgressBar from "./pages/ProgressBar";
import GridLight from "./pages/GridLight";
import EcommercePage from "./pages/EcommercePage";

function App() {
  return (
    <div className="App">
      <div
        onClick={() => {
          window.location.href = "/";
        }}
        className="relative cursor-pointer w-full bg-black text-white py-3 font-bold text-2xl text-center"
      >
        Practice Javascript
      </div>
      <div className=" h-[50vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debounce" element={<Debouncing />} />
          <Route path="/throttle" element={<Throttling />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/login-otp" element={<LoginWithPhoneAndOTP />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/grid-lights" element={<GridLight />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
