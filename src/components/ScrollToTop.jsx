import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = ({ showScrollBtn }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollTop}
      className={` fixed sm:bottom-[30px] sm:right-[30px] bottom-[10px] right-[10px] sm:w-[50px] sm:h-[50px]
       bg-whiteBlue border-[1px] w-[40px] h-[40px]
     border-primary flex justify-center items-center z-[120] cursor-pointer ${
       showScrollBtn ? "translate-y-[0]" : "translate-y-[100px]"
     } transition-all duration-200 ease-in-out`}
    >
      <RiArrowUpSLine className="text-secondary text-[26px] sm:text-[30px]" />
    </div>
  );
};

export default ScrollToTop;
