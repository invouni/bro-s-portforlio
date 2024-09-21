import React from 'react';

const Skill = ( skill ) => {
  return (
    <div className="skill flex flex-col items-center gap-[0.4rem] bg-transparent mx-3 px-3 py-2 rounded-lg" >
      <div className="skill-icon w-[4rem] h-[4rem]">
        <img className="w-[100%] obj-cover bg-cover h-[100%]" src={skill.icon} alt={skill.name}/>
      </div>
      
    </div>
  );
};

export default Skill;
