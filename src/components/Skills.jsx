import React from "react";
import Marquee from "react-fast-marquee";
import Skill from "./Skill.jsx";
import cpp from "../assets/c-.png";
import css from "../assets/css-3.png";
import html5 from "../assets/html5.png";
import javascript from "../assets/js.png";
import java from "../assets/java.png";
import next from "../assets/next.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sql from "../assets/sql-server.png";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="w-full text-center text-[#d09666] font-bold text-[3rem] py-4 my-4 sm:text-5xl">
        Skills
      </h1>
      <Marquee
        pauseOnHover={true}  // Changed from string to boolean
        speed={120}
        className="marquee w-full h-auto"
        direction="right"
      >
        <Skill name="HTML" icon={html5} />
        <Skill name="CSS" icon={css} />
        <Skill name="JavaScript" icon={javascript} />
        <Skill name="Python" icon={python} />
        <Skill name="Java" icon={java} />
        <Skill name="Next.js" icon={next} />
        <Skill name="C++" icon={cpp} />
        <Skill name="React" icon={react} />
        <Skill name="SQL" icon={sql} />
      </Marquee>
    </div>
  );
};

export default Skills;