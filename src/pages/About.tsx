import { Github, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import klLogo from "../assets/kllogo.png";
import img from "../assets/Hemanth.jpg";

const about = () => {
  return (
    <div className="px-10">
      <div className="intro md:flex p-10 justify-between items-center pt-10">
        <div className="ProfileIcon flex items-center p-10">
          <div className="image md:h-30 md:w-30 rounded-full overflow-hidden border-white/10 shadow-2xl">
            <img src={img} alt="" />
          </div>
          <div className="name text-xl font-bold ml-4">
            BILLIPALLI
            <div className="text-3xl"> HEMANTH REDDY</div>
          </div>
        </div>
        <div className="socialProfile text-sm">
          <div className="grid md:grid-cols-2  gap-4 pb-4">
            <a href="https://github.com/Hemanth-Reddy-12">
              <div className="github flex gap-2 hover:text-[#B292FF]">
                <Github size={"20px"} />
                <p>Hemanth-Reddy-12</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/hemanth-reddy-billipalli/">
              <div className="linkedin flex gap-2 hover:text-[#B292FF]">
                <LinkedinIcon size={"20px"} /> <p>hemanth-reddy-billipalli</p>
              </div>
            </a>
            <div className="flex phone gap-2">
              <Phone size={"20px"} />
              <p>+91 9963267855</p>
            </div>
            <div className="email flex gap-2">
              <Mail size={"20px"} />
              <p>reddyhemanth044@gmail.com</p>
            </div>
          </div>
          <div className="loc flex gap-2">
            <MapPin size={"20px"} /> Vijayawada, Andhra Pradesh, India(🇮🇳).
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 p-10 mx-10">
        <div className="education">
          <div>
            <div className="text-2xl font-bold underline">Education</div>
          </div>
          <div className="college">
            <div className="text-lg font-semibold">B.Tech in CSE</div>
            <div className="text-sm flex gap-2">
              <div className="img w-[20px] h-[20px] border rounded-full overflow-hidden">
                <img src={klLogo} alt="" />
              </div>
              KL University , Vijayawada.
            </div>
            <div className="text-sm">2019 - 2023</div>
          </div>
        </div>
        <div className="skills">
          <div className="text-2xl font-bold underline">Skills</div>
          <div className="text-sm ">
            java,python,reactjs,typescript html,css,tailwindcss,bootstrap
            expressjs,nodejs,mongodb,sql,git,github.
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
