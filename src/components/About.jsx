import React from "react";
import card from "../assets/card.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import finance from "../assets/finance.png";
import Card from "./AboutCard.jsx";
export default function App() {
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
      info:`Solved 1200+ problems on LeetCode with streaks on LeetCode and GFG, showcasing expertise in Data Structures and Algorithms (DSA) and strong problem-solving skills.`,
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

  return (
    <div className="projects bg-gradient-to-b from-[#8f5d54] via-[#28183d] flex flex-col gap-[1rem] to-[#000] w-full h-auto items-center justify-center px-[4rem] py-2 border-0">
      <h1 className="text-white text-[1000] text-bold text-3xl text-[1rem] text-white sm:text-5xl">
        About me
      </h1>
      <div className=" w-[80vw] r1 flex flex-col  gap-[1rem] justify-center items-center w-[85vw] h-auto sm:grid sm:grid-rows-1 sm:grid-cols-[2fr_1fr]">
        <Card data={data} />
      </div>
      <div className="r1 flex gap-[1rem] justify-center items-center [16rem] flex-col w-[85vw]  sm:grid sm:grid-cols-[1fr_2fr] ">
        <Card data={data2} />
      </div>
    </div>
  );
}
