import React from 'react';
import '../index.css'

const Project = (props) => {
  
  function getInfo() {
    return (
      <div className="left flex flex-col gap-[0.4rem]" key={props.data.name}>
        <h1 className="text-[2rem] text-[#dadada] sm:text-[3rem]">01</h1>
        <h1 className="text-[1.7rem] text-[#dadada] font-[800] sm:text-[2.7rem]">{props.data.name}</h1>
        <p className="text-md text-[#dadada] px-4 sm:font-bold sm:text-lg ">{props.data.data}</p>
        <div className="attrs text-[#d09666] text-sm sm:text-sm"><span>Mongo db</span><span>python...</span></div>
      </div>)
  }
  function getImg(src) {
   return (<div className="right w-[16rem] h-[16rem] object-cover bg-cover shrink-0">
        <img src={src} className="w-[100%] h-[100%] object-cover bg-cover bg-red-500"/>
      </div>)
  }
  return (
    <div className="project w-[75vw] py-[1rem] bg-transparent flex flex-col justify-between gap-[1rem] items-center border-b sm:flex-row">
      {props.even && getInfo() || getImg("")}
      {props.even && getImg("") || getInfo()}
      
    </div>
  );
};

export default Project;