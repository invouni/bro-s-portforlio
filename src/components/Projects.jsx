import React, { useState, useRef } from "react";
import "../index.css";
import Project from "./Project.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import courtRoom from '../assets/CourtRoom.png';
import cropExpert from '../assets/cropExpert.png';
import breakOutBall from '../assets/breakOutBall.png';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Projects = () => {
  const data = [
    {
      name: "Court Room",
      data: "Court Room is a blockchain-based legal e-portal that ensures secure, transparent record-keeping of legal documents and court proceedings. It uses smart contracts to automate legal processes, reducing paperwork and increasing efficiency.",
      link: "https://github.com/Tanmaygupta8503/CourtRoom",
      img: courtRoom,
    },
    {
      name: "Crop Expert",
      data: "CropXpert is a personalized crop recommendation system that uses machine learning to help farmers select the best crops based on soil type, climate conditions, and other factors. The platform aims to optimize yield and improve decision-making in agriculture.",
      link: "https://github.com/Tanmaygupta8503/CropExpert",
      img: cropExpert
    },
    {
      name: "BreakOut Ball Game",
      data: "Break Out Ball Game is a classic arcade-style game developed in Java, where players use a paddle to bounce a ball and break through a wall of bricks. The game features engaging gameplay, increasing difficulty levels, and a retro aesthetic, providing both challenge and nostalgia.",
      link: "https://github.com/Tanmaygupta8503/Breakout_Ball_Game",
      img: breakOutBall
    },
  ];

  const refs = [useRef(null), useRef(null), useRef(null)];

  useGSAP(() => {
    refs.forEach((ref, index) => {
      const name = ref.current.querySelector(".project-name");
      const image = ref.current.querySelector(".project-image");
      const para = ref.current.querySelector(".project-data");
      const attrs = ref.current.querySelectorAll(".elem");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: 3,
        },
      });

      timeline
        .from(name, {
          y: "-100%",
          opacity: 0,
        }, "name-image")
        .from(para, {
          x: index % 2 === 0 ? "-100%" : "100%",
          opacity: 0,
        })
        .from(image, {
          opacity: 0,
        }, "name-image");

      attrs.forEach(attr => {
        timeline.from(attr, {
          y: "-100%",
          stagger: 0.6,
          opacity: 0,
        });
      });
    });
  });

  return (
    <div className="projects-section w-full h-auto flex flex-col bg-gradient-to-b from-[#000] via-[#000101] to-[#1B0D30] px-2 py-4 items-center">
      <h1 className="text-[3.5rem] text-[#d09666]">Projects</h1>
      {data.map((item, index) => (
        <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.name}>
          <Project
            refVar={refs[index]}
            even={index % 2 === 0}
            data={item}
          />
        </a>
      ))}
    </div>
  );
};

export default Projects;