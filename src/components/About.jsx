import React from "react";
import card from "../assets/card.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import finance from "../assets/finance.png";
import Card from "./AboutCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useState } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Hero() {
  const data = [
    {
      img: book,
      heading: "Education",
      info: `I am pursuing a B.Tech at Pranveer Singh Institute of Technology (PSIT), specializing in software development and engineering principles. My education has provided hands-on experience through projects, enhancing my practical skills and understanding of core concepts, and preparing me for a career in technology.`,
      span: 2,
    },
    {
      img: finance,
      heading: "Problem Solver",
      info: `Solved 1200+ problems on LeetCode with streaks on LeetCode and GFG, showcasing expertise in Data Structures and Algorithms (DSA) and strong problem-solving skills.`,
      span: 1,
    },
  ];
  const data2 = [
    {
      img: card,
      heading: "Experience",
      info: `Developed full-stack projects using the MERN stack and won the Buggify competition, gaining skills in debugging, adaptability, and handling complex technical challenges.`,
      span: 1,
    },
    {
      img: pc,
      heading: "Technical Skills",
      info: `I am skilled in Java, Python, and C++, with expertise in web development using the MERN stack, and database management with SQL and NoSQL. My knowledge extends to operating systems like Windows and Kali Linux, and core competencies in DSA, DBMS, and OS concepts. `,
      span: 2,
    },
  ];
  const [refs,changeRefs] = useState([useRef(null), useRef(null), useRef(null), useRef(null)]);
  useGSAP(() => {
    refs.forEach((ref, index) => {
     
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom 60%',
          scrub: 3,
        },
      });

      timeline.from(ref.current, {
        x: index < 2 ? '-150%' : '150%', // Left refs move left, right refs move right
        opacity: 0,
        duration: 0.5,
      }).from(ref.current.querySelector('.about-card-img'), {
          scale: 0,
          duration: 0.3,
        }).from(ref.current.querySelector('.about-h'),{
        y: "-100%",
        opacity: 0,
      }).from(ref.current.querySelector('.about-p'),{
        x: "100%",
        opacity: 0,
      })

      
    });
  });

  return (
    <div className="about overflow-hidden  bg-gradient-to-t from-[#000] via-[#2b1942] to-[#bf5c55] flex flex-col gap-[1rem]  w-full h-auto items-center justify-center px-[4rem] py-2 border-0">
      <h1 className=" heading text-[3.5rem] text-[#d39567] ">About me</h1>
      <div className=" w-[80vw] r1 flex flex-col  gap-[1rem] justify-center items-center w-[85vw]  h-auto sm:grid sm:grid-rows-1 sm:grid-cols-[2fr_1fr] overflow-hidden">
        <Card rightRef={refs[2]} leftRef={refs[0]} data={data} />
      </div>
      <div className="r1 flex gap-[1rem] justify-center items-center [16rem] flex-col w-[85vw]  sm:grid sm:grid-cols-[1fr_2fr] overflow-hidden">
        <Card
          rightRef={refs[1]}
          leftRef={refs[3]}
          className="card"
          data={data2}
        />
      </div>
    </div>
  );
}
