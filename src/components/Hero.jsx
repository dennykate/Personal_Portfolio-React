import React from "react";
import { colorData } from "../utils/data";
import Navbar from "./Navbar";
import Template from "./Template";

const Hero = () => {
  return (
    <div className="bg-primary">
      <Template>
        <Navbar />
        <div
          className="w-full min-h-screen flex md:flex-row flex-col-reverse pt-[100px] md:pt-0 md:pb-0 pb-[50px] sm:px-[30px]
        px-0"
        >
          <div className="md:w-1/2 w-full flex items-center ">
            <div className="md:w-[500px] w-full sm:px-[10px] px-0">
              <div className=" bg-[#632020] w-[140px] h-[40px] flex justify-center items-center rounded-sm">
                <h1 className="sm:text-[14px] text-[12px] text-gray-300 font-raleway">
                  Welcome I'M
                </h1>
              </div>
              <h1
                className=" font-raleway text-white sm:text-[40px] text-[32px] font-bold mt-[10px] -translate-x-[2px]
               tracking-wide"
              >
                {"Denny Kate".split("").map((data, index) => {
                  return (
                    <h1
                      key={index}
                      className={`${
                        colorData[Math.floor(Math.random() * 8)]
                      } inline devNameAnimation${index}`}
                    >
                      {data}
                    </h1>
                  );
                })}
              </h1>
              <h1 className="font-raleway text-gray-300 text-[10px] ">
                I'm a mern stack developer
              </h1>
              <h1 className="font-raleway text-[12px] text-gray-300 mt-[20px] leading-[25px] ">
                Welcome to my personal portfolio!. I am a skilled MERN full
                stack developer. I have experience in building and deploying web
                applications using the MongoDB, Express.js, React, and Node.js
                stack. With my expertise in both front-end and back-end
                development, I can create dynamic and visually appealing web
                applications that deliver a seamless user experience. On my
                portfolio, you will find a showcase of my past projects and my
                technical skills. Thank you for visiting
              </h1>
              <button
                className="sm:w-[200px] w-full py-[8px] bg-secondary text-primary font-semibold flex justify-center items-center
        rounded-sm text-[16px] mt-[20px] md:hidden "
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full"></div>
        </div>
      </Template>
    </div>
  );
};

export default Hero;
