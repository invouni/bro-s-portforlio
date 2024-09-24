import React from 'react';
import '../index.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  useGSAP(() => {
    gsap.from('.link', {
      y: "-100%",
      stagger: 0.3,
      delay: 0.1,
      duration: 0.5,
      opacity: 0.1,
    });
  });

  return (
    <nav className="navBar w-full px-2 bg-transparent sticky top-0 flex items-center justify-center gap-[1rem] py-3 overflow-hidden md:text-xl">
      <ul className="flex gap-[1rem]">
        <li className="link text-sm text-white font-bold hover:underline hover:decoration-orange-500 sm:text-xl">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-orange-500" : "text-white")}>
            Home
          </NavLink>
        </li>
        <li className="link text-sm text-white font-bold hover:underline hover:decoration-orange-500 sm:text-xl">
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-orange-500" : "text-white")}>
            About me
          </NavLink>
        </li>
        <li className="link text-sm text-white font-bold hover:underline hover:decoration-orange-500 sm:text-xl">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-orange-500" : "text-white")}>
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;