import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0E] text-white pt-[120px]">
      <div className="md:w-[1100px] mx-auto h-[80vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <div className="flex text-xs border-t-2 justify-end px-10">
        <div className="">@HR</div>
      </div>
    </div>
  );
}

export default App;
