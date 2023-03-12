import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-full sm:absolute static top-0 z-[100]">
      <div
        className="max-w-[1024px] mx-auto h-[100px] flex justify-between items-center sm:px-[30px] px-[20px] bg-transparent
       "
      >
        <div className="md:w-[200px] w-[160px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <div className="items-center lg:gap-[50px] gap-[30px] md:flex hidden">
          <a
            href="#about-me"
            className=" font-roboto tracking-[0.1px] font-[400] text-[14px] text-gray-300 cursor-pointer hover:text-secondary
         transition-all duration-200 ease-in-out"
          >
            About Me
          </a>
          <a
            href="#skills"
            className=" font-roboto tracking-[0.1px] font-[400] text-[14px] text-gray-300 cursor-pointer hover:text-secondary
         transition-all duration-200 ease-in-out"
          >
            Skills
          </a>
          <a
            href="#projects"
            className=" font-roboto tracking-[0.1px] font-[400] text-[14px] text-gray-300 cursor-pointer hover:text-secondary
         transition-all duration-200 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact-me"
            className=" font-roboto tracking-[0.1px] font-[400] text-[14px] text-gray-300 cursor-pointer hover:text-secondary
         transition-all duration-200 ease-in-out"
          >
            Contact Me
          </a>
          <button
            className="px-[16px] py-[8px] rounded-sm bg-[#c5274c] text-primary font-roboto text-[14px]
        hover:bg-transparent border-[1px] border-[#c5274c] transition-all duration-200 ease-in-out md:block hidden
        hover:text-secondary"
          >
            Download CV
          </button>
        </div>

        <button
          className="md:hidden block"
          onClick={() => setShowSidebar(true)}
        >
          <GiHamburgerMenu size={26} color="white" />
        </button>
      </div>

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default Navbar;
