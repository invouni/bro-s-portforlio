import React, { useRef } from 'react';
import "../index.css";
import poto from "../assets/poto.png";
import icon2 from "../assets/icon2.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      duration: 0.4,
      delay: 0.1,
      stagger: 0.2,
      ease: "power2.out"
    });

    timeline
      .from(headingRef1.current, {
        y: "-100%",
        opacity: 0,
      })
      .from(headingRef2.current, {
        y: "100%",
        opacity: 0,
      })
      .from(pRef1.current, {
        opacity: 0,
        y: "-100%",
      })
      .from(pRef2.current, {
        opacity: 0,
        y: "100%",
      })
      .from('.poto', {
        scale: 0,
      });
  });

  return (
    <div className="hero overflow-hidden w-full h-auto bg-gradient-to-b from-[#000] via-[#2b1942] to-[#bf5c55]">
      <div className="hero-content flex flex-col items-center justify-center mx-auto py-[1rem]">
        <div className="overflow-hidden flex flex-col items-center">
          <h1 ref={headingRef1} className="name text-[#98b4ce] text-[3rem] text-center p-0 m-0 sm:text-[6rem]">
            Hi, I am
          </h1>
          <h1 ref={headingRef2} className="name text-[#e48a57] text-[2.5rem] p-0 m-0 sm:text-[5.5rem]">
            Tanmay Gupta
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <p ref={pRef1} className="text-sm text-white text-md p-0 m-0 sm:text-md text-center">
            Hi, I am Tanmay Gupta. I am a software developer with experience in developing web applications using MERN stack and Java Web Technologies.
          </p>
          <p ref={pRef2} className="text-white text-md p-0 m-0 text-sm sm:text-md text-center">
            I am a quick learner and always eager to learn new technologies.
          </p>
        </div>
        <img src={poto} alt="Tanmay Gupta" className="w-[8rem] poto" />
        <div className="free-images">
          <img
            src={icon2}
            alt="Decorative Icon"
            className="icon2 poto w-[2rem] absolute top-[5vh] right-[5vh] sm:w-[4rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;