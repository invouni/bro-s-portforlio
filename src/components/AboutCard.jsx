import React from "react";
const AboutCard = (props) => {

  
const data = (
    <>
      {props.data.map((project, index) => {
        return (
          <div
            key={`${project.name}-${index}`}
            className={`${index==0?"left":"right"}   border  border-crimson-500 bg-gradient-to-r from-[#28183d] to-[#9e5d54] project-btn rounded-md flex gap-2 items-center px-2 h-[100%] w-[100%] py-2`} ref={index==0?props.leftRef:props.rightRef} 
          >
            <img
              className="w-[5rem] h-auto about-card-img"
              src={project.img}
              alt={project.name}
            />
            <div className="project-info flex flex-col justify-center overflow-hidden">
              <h1 className="about-h text-white text-[700] text-2xl no-wrap">
                {project.heading}
              </h1>
              <p className="text-white text-sm about-p">{project.info}</p>
            </div>
          </div>
        );
      })}
    </>
  );
  return data;
};

export default AboutCard;
