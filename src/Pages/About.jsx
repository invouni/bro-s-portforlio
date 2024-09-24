import React from 'react';
import '../index.css';
import brosImg from '../assets/BrosImg.jpeg';

const About = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center">
      <div className="flex items-center justify-center w-full shrink-0 sm:max-w-[50vw]">
        <img 
          className="w-[16rem] h-[16rem] rounded-full" 
          src={brosImg} 
          alt="Tanmay"  
        />
      </div>
      <div className="section flex flex-col justify-between gap-[1.2rem] w-full shrink-0 sm:max-w-[50vw] px-2"> 
        <h1 className="heading text-[3.5rem] text-[#d39567]">About Me</h1>
        <p className="text text-center text-white text-sm">
          Hello, I'm Tanmay—a dedicated problem solver and consistent coder with a passion for tackling complex challenges. With over 1200+ problems solved on LeetCode and a 365+ day streak, I leverage my programming expertise to create innovative solutions that drive results.
        </p>
        <p className="text text-center text-white text-sm">
          I am proficient in multiple programming languages, including Python, Java, and C++, and I continuously expand my knowledge to stay updated with the latest technologies and trends in computer science. My technical skills are complemented by my ability to communicate effectively and collaborate in team environments. Whether working on a team project or engaging in individual challenges, I bring a commitment to excellence, attention to detail, and a results-driven mindset.
        </p>
        <h1 className="heading text-[3.5rem] text-[#d39567]">Achievements</h1>  
        <p className="text text-center text-white text-sm">
          I am proud to be the winner of the Buggify competition at PSIT’s annual event, IGNITIA 2023. This recognition highlights my ability to identify and fix bugs swiftly, reflecting my dedication and passion for the field of computer science.
        </p>
      </div>
    </div>
  );
};

export default About;