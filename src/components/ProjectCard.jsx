import React, { useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";

const ProjectCard = ({ data: { name, image, fullStack, demo, github } }) => {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowDetail(false);
      }
    });
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      <div
        className="lg:h-[180px] sm:h-[200px] h-[180px] cursor-pointer relative overflow-hidden rounded-sm group
    transition-all duration-200 ease-in-out"
      >
        <img src={image} alt="website" className="w-full h-full object-cover" />

        <div
          className={`w-full h-full absolute top-0 left-0 z-[10] bg-whiteBlue bg-opacity-70 p-[10px]
      md:group-hover:translate-y-0 transition-all duration-200 ease-in-out ${
        showDetail ? "translate-y-0" : "translate-y-[100%]"
      }`}
        >
          <div className="w-full h-full flex justify-center items-center flex-col gap-[10px]">
            <div className="flex items-center justify-center gap-[10px]">
              {demo && (
                <div
                  onClick={() => handleClick(demo)}
                  className="flex justify-center items-center w-[35px] h-[35px] bg-primary rounded-full text-white
            hover:text-secondary transition-all duration-200 ease-in-out hover:bg-opacity-90"
                >
                  <AiOutlineLink size={20} />
                </div>
              )}
              <div
                onClick={() => handleClick(github)}
                className="flex justify-center items-center w-[35px] h-[35px] bg-primary rounded-full text-white
            hover:text-secondary transition-all duration-200 ease-in-out hover:bg-opacity-90"
              >
                <AiOutlineGithub size={20} />
              </div>
            </div>
            <h1 className=" font-raleway text-[16px] font-semibold text-white p-[10px] bg-primary">
              <span className=" text-secondary text-[18px] mr-[1px]">
                {name.slice(0, 1)}
              </span>
              {name.slice(1, name.length)}
            </h1>
          </div>
        </div>

        <button
          onClick={() => setShowDetail(!showDetail)}
          className={`absolute bottom-[5px] right-[5px] w-[40px] h-[40px] rounded-full md:hidden 
      flex justify-center items-center z-[10] ${
        showDetail ? "bg-black" : "bg-secondary"
      }`}
        >
          {showDetail ? (
            <HiXMark size={18} color="white" />
          ) : (
            <BiDetail size={18} color="white" />
          )}
        </button>
      </div>

      {fullStack && (
        <div
          className="px-[5px] py-[3px] bg-secondary flex justify-center items-center text-primary rounded-sm
      font-raleway absolute top-[5px] -left-[10px] text-[12px] font-semibold z-10 shadow-lg"
        >
          Full Stack
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
