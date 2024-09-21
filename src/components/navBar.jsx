import React from 'react';
import '../index.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  /*useGSAP(() => {
    gsap.from('.link',{
      y: "-100%",
      opacity: 0,
      duration:0.4,
      stagger: 0.3,
      delay: 0.2,
      
      
    })
  })*/
  return (
    <nav className="navBar w-full px-2 bg-transparent flex items-center justify-center gap-[1rem] py-3 overflow-hidden md:text-xl">
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" >Home</h1>
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" >Portfolio</h1>
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" >Contact me</h1>
    </nav>
  );
};

export default NavBar;