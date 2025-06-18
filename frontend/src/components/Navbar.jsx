import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';
import {socialLink} from '../constent/constent'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "cursor-pointer hover:underline";

  return (
    <div className="w-full top-6 fixed z-20 dark:text-white transition-colors duration-500">
      <nav className="container mx-auto flex justify-between items-center p-4 rounded-xl shadow-md backdrop-blur-2xl transition-colors duration-500 bg-white/40 dark:bg-black/40 text-xl font-medium">

        {/* Logo */}
        <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">P</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-4">
          <li><Link to="profile" smooth={true} duration={500} offset={-70} className={linkClass}>Profile</Link></li>
          <li><Link to="skills" smooth={true} duration={500} offset={-70} className={linkClass}>Skills</Link></li>
          <li><Link to="education" smooth={true} duration={500} offset={-70} className={linkClass}>Education</Link></li>
          <li><Link to="projects" smooth={true} duration={500} offset={-70} className={linkClass}>Projects</Link></li>
        </ul>

        {/* Icons + Dark Mode Toggle */}
        
        <div className="hidden md:flex gap-4 items-center">
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-purple-700 hover:bg-purple-700/90 p-2 rounded-md text-white cursor-pointer hover:scale-110 transition-transform">
    View Resume
  </button>
</a>

          <a href={socialLink.github} target="_blank" rel="noreferrer" className="bg-purple-700 hover:bg-purple-700/90 p-2 rounded-md text-white hover:scale-110 transition-transform">
            <Github />
          </a>
          <a href={socialLink.linkedin} target="_blank" rel="noreferrer" className="bg-purple-700 hover:bg-purple-700/90 p-2 rounded-md text-white hover:scale-110 transition-transform">
            <Linkedin />
          </a>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 dark:text-purple-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white transition-all duration-500 dark:bg-[#001219] shadow-lg z-30 transform ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6 text-lg dark:text-white">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <X size={24} />
          </button>
          <Link to="profile" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Profile</Link>
          <Link to="skills" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="education" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="projects" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)}>Projects</Link>
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-purple-700 hover:bg-purple-700/90 p-2 rounded-md text-white cursor-pointer hover:scale-110 transition-transform">
    View Resume
  </button>
  </a>
          <div className="flex gap-4 pt-4 items-center">
            
            <a href={socialLink.github} target="_blank" rel="noreferrer" className="bg-purple-700 hover:bg-purple-700/90 p-2 rounded-md text-white hover:scale-110 transition-transform">
              <Github />
            </a>
            <a href={socialLink.linkedin} target="_blank" rel="noreferrer" className="bg-purple-700 hover:bg-purple-700/90 p-2 rounded-md text-white hover:scale-110 transition-transform">
              <Linkedin />
            </a>
            <DarkModeToggle  />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/30 z-20 md:hidden" />
      )}
    </div>
  );
};

export default Navbar;
