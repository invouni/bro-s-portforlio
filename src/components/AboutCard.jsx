import React from 'react';

const AboutCard = ({ data, leftRef, rightRef }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={`${item.heading}-${index}`}
          className={`${
            index === 0 ? 'left' : 'right'
          } border border-crimson-500 bg-gradient-to-r from-[#28183d] to-[#9e5d54] project-btn rounded-md flex gap-2 items-center px-2 h-full w-full py-2`}
          ref={index === 0 ? leftRef : rightRef}
        >
          <img
            className="w-20 h-auto about-card-img"
            src={item.img}
            alt={item.heading}
          />
          <div className="project-info flex flex-col justify-center overflow-hidden">
            <h1 className="about-h text-white font-bold text-2xl">
              {item.heading}
            </h1>
            <p className="about-p text-white text-sm">{item.info}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCard;