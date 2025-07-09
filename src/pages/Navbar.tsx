import { Github, LucideLinkedin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import svg from "../assets/react.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed top-4 w-fit left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex justify-between text-sm items-center md:w-[600px] md:h-[40px] md:px-10 p-2 overflow-auto gap-10 rounded-4xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
        <div className="hidden md:block">
          <div
            className={
              "cursor-pointer hover:text-[#B292FF] transition-all duration-200 px-4" +
              (location.pathname === "/" ? " active" : "")
            }
            onClick={() => navigate("/")}
          >
            <img src={svg} alt="" className="w-[20px]" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={
              "cursor-pointer hover:text-[#B292FF] transition-all duration-200 px-4" +
              (location.pathname === "/about" ? " active" : "")
            }
            onClick={() => navigate("/about")}
          >
            About Me
          </div>
          <div
            className={
              "cursor-pointer hover:text-[#B292FF] transition-all duration-200 px-4" +
              (location.pathname === "/projects" ? " active" : "")
            }
            onClick={() => navigate("/projects")}
          >
            Projects
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <a
            href="https://www.linkedin.com/in/hemanth-reddy-billipalli/"
            className="hover:text-[#B292FF]"
          >
            <LucideLinkedin size={"20px"} />
          </a>
          <a
            href="https://github.com/Hemanth-Reddy-12"
            className="hover:text-[#B292FF]"
          >
            <Github size={"20px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
