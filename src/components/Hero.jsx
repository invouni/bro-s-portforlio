import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Nav from "./navBar.jsx";
import "../index.css";
import poto from "../assets/poto.png";
import icon2 from "../assets/icon2.png";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const nameRef = useRef(null);
  const nameRef2 = useRef(null);

  {/*useGSAP(() => {
    gsap.from([nameRef.current, nameRef2.current,'p'], {
      y: "-100%",
      opacity: 0,
      duration: 0.3,
      delay: 0.3,
      stagger: 0.4,
    });
    gsap.from(['.poto','.icon2'],{
      scale:  0.6,
      delay: 0.2,
      duration: 0.6,
      ease: "bounce.inOut",
    })
  });
  */}return (
    <div className="hero w-full h-auto bg-gradient-to-b from-[#000] via-[#28183d] to-[#8f5d54] border-0">
      <Nav />
      <div className="hero-content flex flex-col items-center justify-center h-auto w-auto mx-auto py-[1rem]">
        <div className="overflow-hidden flex flex-col items-center justify-center">
          <h1 ref={nameRef} className="text-[#96b4cc] text-[3rem] p-0 m-0 sm:text-[6rem]">
            Hi, I am
          </h1>
          <h1 ref={nameRef2} className=" text-[#ffa754] text-[2.5rem] p-0 m-0 sm:text-[5.5rem]">
            Tanmay Gupta
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-white text-md p-0 m-0 sm:text-md">
            Hi, I am Tanmay Gupta. I am a software developer with experience in developing web applications using MERN stack and Java Web Technologies.
          </p>
          <p className="text-white text-md p-0 m-0 text-sm sm:text-md">
            I am a quick learner and always eager to learn new technologies.
          </p>
        </div>
        <img src={poto} className="w-[8rem] poto"></img>
        <div className="free-images">
          <img
            src={icon2}
            className="icon2 w-[2rem] absolute top-[5vh] right-[5vh] sm:w-[4rem]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
