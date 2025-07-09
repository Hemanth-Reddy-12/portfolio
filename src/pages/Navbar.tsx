import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed top-4 w-fit left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex justify-center text-sm items-center w-[600px] h-[40px] overflow-auto gap-10 rounded-4xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
        <div
          className={
            "cursor-pointer hover:text-[#B292FF] transition-all duration-200 px-4" +
            (location.pathname === "/" ? " active" : "")
          }
          onClick={() => navigate("/")}
        >
          H
        </div>
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
        <div
          className={
            "cursor-pointer hover:text-[#B292FF] transition-all duration-200 px-4" +
            (location.pathname === "/contactme" ? " active" : "")
          }
          onClick={() => navigate("/contactme")}
        >
          Contact me
        </div>
      </div>
    </div>
  );
};

export default Navbar;
