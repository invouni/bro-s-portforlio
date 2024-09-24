import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Card from './AboutCard';
import book from '../assets/book.png';
import finance from '../assets/finance.png';
import card from '../assets/card.png';
import pc from '../assets/pc.png';
import '../index.css'; // Make sure this import is necessary, otherwise remove it

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const data = [
    {
      img: book,
      heading: 'Education',
      info: `I am pursuing a B.Tech at Pranveer Singh Institute of Technology (PSIT), specializing in software development and engineering principles. My education has provided hands-on experience through projects, enhancing my practical skills and understanding of core concepts, and preparing me for a career in technology.`,
      span: 2,
    },
    {
      img: finance,
      heading: 'Problem Solver',
      info: `Solved 1200+ problems on LeetCode with streaks on LeetCode and GFG, showcasing expertise in Data Structures and Algorithms (DSA) and strong problem-solving skills.`,
      span: 1,
    },
  ];

  const data2 = [
    {
      img: card,
      heading: 'Experience',
      info: `Developed full-stack projects using the MERN stack and won the Buggify competition, gaining skills in debugging, adaptability, and handling complex technical challenges.`,
      span: 1,
    },
    {
      img: pc,
      heading: 'Technical Skills',
      info: `I am skilled in Java, Python, and C++, with expertise in web development using the MERN stack, and database management with SQL and NoSQL. My knowledge extends to operating systems like Windows and Kali Linux, and core competencies in DSA, DBMS, and OS concepts.`,
      span: 2,
    },
  ];

  const [refs] = useState([useRef(null), useRef(null), useRef(null), useRef(null)]);

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

      timeline
        .from(ref.current, {
          x: index < 2 ? '-150%' : '150%',
          opacity: 0,
          duration: 0.5,
        })
        .from(ref.current.querySelector('.about-card-img'), {
          scale: 0,
          duration: 0.3,
        })
        .from(ref.current.querySelector('.about-h'), {
          y: '-100%',
          opacity: 0,
        })
        .from(ref.current.querySelector('.about-p'), {
          x: '100%',
          opacity: 0,
        });
    });
  });

  return (
    <div className="about overflow-hidden bg-gradient-to-t from-[#000] via-[#2b1942] to-[#bf5c55] flex flex-col gap-4 w-full h-auto items-center justify-center px-[2rem] py-2 border-0">
      <h1 className="heading text-3.5rem text-[#d39567]">About Me</h1>
      <div className=" flex flex-col gap-4 justify-center items-center sm:grid sm:grid-rows-1 sm:grid-cols-[2fr_1fr] overflow-hidden">
        <Card rightRef={refs[2]} leftRef={refs[0]} data={data} />
      </div>
      <div className="flex gap-4 justify-center items-center flex-col sm:grid sm:grid-cols-[1fr_2fr] overflow-hidden">
        <Card rightRef={refs[1]} leftRef={refs[3]} className="card" data={data2} />
      </div>
    </div>
  );
}