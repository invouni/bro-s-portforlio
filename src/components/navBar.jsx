import React from 'react';
import '../index.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const NavBar = (  ) => {
  
  useGSAP(() => {
    gsap.from('.link',{
      y: "-100%",
      stagger: 0.3,
      delay: 0.1,
      duration: 0.5,
      opacity: 0.1
    })
  })
  return (
    <nav className="navBar w-full px-2 bg-transparent stiky top-0 flex items-center justify-center gap-[1rem] py-3 overflow-hidden md:text-xl">
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" ><NavLink to="/" className={({isActive}) => {return isActive?"text-orange-500":"text-white"}}>Home</NavLink></h1>
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl"  ><NavLink to="/about" className={({isActive}) => {return isActive?"text-orange-500":"text-white"}}>About me</NavLink></h1>
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" ><NavLink to="/contact" className={({isActive}) => {return isActive?"text-orange-500":"text-white"}}>Contact me</NavLink></h1>
    </nav>
  );
};

export default NavBar;