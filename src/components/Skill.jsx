import React from 'react';

const Skill = ({ icon, name }) => {
  return (
    <div className="skill flex flex-col items-center gap-[0.4rem] bg-transparent mx-3 px-3 py-2 rounded-lg">
      <div className="skill-icon w-[4rem] h-[4rem]">
        <img 
          className="w-[100%] object-cover bg-cover h-[100%]" 
          src={icon} 
          alt={name} 
        />
      </div>
      <h2 className="text-center text-white text-lg">{name}</h2>
    </div>
  );
};

export default Skill;