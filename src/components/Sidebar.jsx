import React from "react";
import { HiXMark } from "react-icons/hi2";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`w-screen h-screen z-[200] bg-primary fixed top-0 left-0 p-[10px] pt-[36px]
      ${
        showSidebar ? "translate-x-0" : "-translate-x-[100%]"
      } transition-all duration-200 ease-in-out`}
    >
      <div className="flex flex-col gap-[20px] max-w-[300px]">
        <a
          className=" font-raleway tracking-[0.1px] font-[400] text-[20px] text-gray-300 cursor-pointer 
          hover:text-secondary transition-all duration-200 ease-in-out"
        >
          About Me
        </a>
        <a
          className=" font-raleway tracking-[0.1px] font-[400] text-[20px] text-gray-300 cursor-pointer 
          hover:text-secondary transition-all duration-200 ease-in-out"
        >
          Projects
        </a>
        <a
          className=" font-raleway tracking-[0.1px] font-[400] text-[20px] text-gray-300 cursor-pointer 
          hover:text-secondary transition-all duration-200 ease-in-out"
        >
          Skills
        </a>
        <a
          className=" font-raleway tracking-[0.1px] font-[400] text-[20px] text-gray-300 cursor-pointer 
          hover:text-secondary transition-all duration-200 ease-in-out"
        >
          Contact Me
        </a>
      </div>
      <button
        className="w-full py-[8px] bg-secondary text-primary font-semibold flex justify-center items-center
        rounded-sm text-[20px] mt-[40px]"
      >
        Download CV
      </button>

      <button
        onClick={() => setShowSidebar(false)}
        className="w-[30px] h-[30px] bg-secondary flex justify-center items-center absolute top-[36px] right-[10px]
      rounded-md"
      >
        <HiXMark color="black" size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
