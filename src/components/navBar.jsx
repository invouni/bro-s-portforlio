import React from 'react';
import '../index.css'

const NavBar = () => {
  
  return (
    <nav className="navBar w-full px-2 bg-transparent stiky top-0 flex items-center justify-center gap-[1rem] py-3 overflow-hidden md:text-xl">
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" >Home</h1>
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl"  >Projects</h1>
      <h1 className="link text-sm text-white text-xs font-bold hover:underline hover:decoration-orange-500 sm:text-xl" >Contact me</h1>
    </nav>
  );
};

export default NavBar;