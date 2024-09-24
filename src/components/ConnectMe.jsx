import React from "react";
import Form from "./Form.jsx";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import leetcode from "../assets/leetcode.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ConnectMe = () => {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".connect-me",
        start: "top 95%",
        end: "bottom 90%",
        scrub: 3,
      },
    })
      .from(".connect-heading", { y: "-100%", opacity: 0 })
      .from(".connect-icon", { scale: 0 })
      .from([".mob", ".email"], { opacity: 0 })
      .from(".connect-me-img-link", { scale: 0 });
  });

  return (
    <div className="connect-section">
      <h1 className="connect-heading w-full text-[3rem] text-[#d09666] text-center py-4">
        Connect Me
      </h1>
      <div className="connect-me w-full flex justify-center gap-[1.3rem] flex-col items-center sm:flex-row">
        <div className="imgs flex flex-col gap-[1rem] items-center">
          <div className="flex gap-[0.5rem] m-[0.4rem] items-center">
            <img src={phone} alt="Phone" className="connect-icon w-[3rem] h-auto" />
            <p className="mob text-white font-bold">+91 8840195708</p>
          </div>
          <div className="flex gap-[0.5rem] m-[0.4rem] items-center">
            <img src={mail} alt="Email" className="connect-icon w-[3rem] h-auto" />
            <p className="email text-white font-bold">vbhvgupta15@gmail.com</p>
          </div>
          <div className="logos flex justify-between items-center gap-[0.5rem]">
            <a href="https://leetcode.com/adityawsome_8503/" target="_blank" rel="noopener noreferrer">
              <img
                src={leetcode}
                alt="LeetCode"
                className="connect-me-img-link w-[2rem] h-[2rem] rounded-full border border-black"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tanmaygupta8503?utm_source=share&utm_campaign=share_via&utm_content=profille"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="connect-me-img-link w-[2rem] h-[2rem] rounded-full border border-black"
              />
            </a>
            <a href="https://github.com/Tanmaygupta8503/" target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="GitHub"
                className="connect-me-img-link w-[2rem] h-[2rem] rounded-full border border-black"
              />
            </a>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ConnectMe;