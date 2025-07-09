import { TypeAnimation } from "react-type-animation";
import image from "../assets/profile1.jpg";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-10 pt-20 px-10">
        {/* Intro */}
        <div className="flex-1">
          <h1
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Hi! I'm
            <div className="text-[#B292FF] text-4xl">Hemanth Reddy</div>
          </h1>
          <TypeAnimation
            sequence={[
              `A Full Stack Developer`,
              2000,
              "A Frontend Developer",
              2000,
              "A Backend Developer",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-2xl text-white mb-4 font-semibold"
          />
          <button className="px-6 py-2 cursor-pointer text-sm bg-white text-black rounded-4xl hover:scale-105 transition-all duration-300">
            Download Resume
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden imageWrapper shadow-sm shadow-[#B292FF]">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
