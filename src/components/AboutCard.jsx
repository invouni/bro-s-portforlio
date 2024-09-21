import React from "react";

const AboutCard = (props) => {
  const data = (
    <>
      {props.data.map((project, index) => {
        return (
          <div
            key={`${project.name}-${index}`} // Combine name and index to create a unique key
            className={`border  border-crimson-500 bg-gradient-to-r from-[#28183d] to-[#9e5d54] project-btn rounded-md flex gap-2 items-center px-2 h-[100%] w-[100%] py-2`}
          >
            <img className="w-[5rem] h-auto" src={project.img} alt={project.name} />
            <div className="project-info flex flex-col justify-center">
              <h1 className="text-white text-[700] text-2xl no-wrap">{project.heading}</h1>
              <p className="text-white text-sm">{project.info}</p>
            </div>
          </div>
        );
      })}
    </>
  );
  return data;
};

export default AboutCard;