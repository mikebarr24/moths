import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Today from "./components/Today/Today";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/today" element={<Today />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
