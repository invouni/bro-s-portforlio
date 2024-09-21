import React from 'react';
import '../index.css';
import Project from './Project.jsx';
const Projects = () => {
  const data =[{
    name:"Court Room",
    data:"Court Room is a blockchain-based legal e-portal that ensures secure, transparent record-keeping of legal documents and court proceedings. It uses smart contracts to automate legal processes, reducing paperwork and increasing efficiency."
  },{
    name: "Crop Expert",
    data: "CropXpert is a personalized crop recommendation system that uses machine learning to help farmers select the best crops based on soil type, climate conditions, and other factors. The platform aims to optimize yield and improve decision-making in agriculture."
  },{
    name:"BreakOut Ball Game",
    data: "Break Out Ball Game is a classic arcade-style game developed in Java, where players use a paddle to bounce a ball and break through a wall of bricks. The game features engaging gameplay, increasing difficulty levels, and a retro aesthetic, providing both challenge and nostalgia"
  }]
  return (
    <div className="projects-section w-full h-auto flex flex-col bg-gradient-to-b from-[#000] via-[#000101] to [#1B0D30] px-2 py-4 items-center">
      <h1 className="text-[3.5rem] text-[#d09666]"> Projects </h1>
      {
        data.map((data,index) => {
          return <Project key={index} even={index%2===0} data={data} />
        })
      }
    </div>
  );
};
/*https://github.com/sTanmaygupta8503/Breakout_Ball_Game.gitgrey:#A9A5B3
ornage:#D09666
purple:#1B0D30  
links*/
export default Projects;