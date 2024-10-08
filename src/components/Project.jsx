import React from 'react';
import '../index.css';

const Project = ({ even, data, index, refVar }) => {
  const getInfo = () => (
    <div className={`${even ? "left-project-card" : "right-project-card"} flex flex-col gap-[0.4rem]`} key={data.name}>
      <h1 className="project-index text-[2rem] text-[#dadada] sm:text-[3rem]">0{index}</h1>
      <h1 className="project-name text-[1.7rem] text-[#dadada] font-[800] sm:text-[2.7rem]">{data.name}</h1>
      <p className="project-data text-md text-[#dadada] px-4 sm:font-bold sm:text-lg">{data.data}</p>
      <div className="project-attrs attrs text-[#d09666] text-sm sm:text-sm">
        <span className="elem">MongoDB</span>
        <span className="elem">Python...</span>
      </div>
    </div>
  );

  const getImg = () => (
    <div className="right w-[16rem] h-[16rem] object-cover bg-cover shrink-0">
      <img src={data.img} alt={data.name} className="project-image w-[100%] h-[100%] object-cover bg-red-500" />
    </div>
  );

  return (
    <div className="project w-[75vw] py-[1rem] bg-transparent flex flex-col justify-between gap-[1rem] items-center border-b sm:flex-row" ref={refVar}>
      {even ? getInfo() : getImg()}
      {even ? getImg() : getInfo()}
    </div>
  );
};

export default Project;