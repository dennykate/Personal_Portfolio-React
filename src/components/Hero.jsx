import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import { colorData } from "../utils/data";

import Template from "./Template";

import Profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div id="about-me" className="bg-primary sm:pt-0 pt-[100px]">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bgDecoration"></div>
      <Template>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full min-h-screen flex md:flex-row flex-col-reverse sm:pt-[100px] pt-[0] md:pt-0 md:pb-0 pb-[50px] 
          sm:px-[30px] px-0"
        >
          <div className="md:w-1/2 w-full flex items-center sm:mt-[80px] mt-[20px]">
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
              <a
                href="https://github.com/dennykate"
                target="_blank"
                className="mt-[18px] items-center gap-[5px] group cursor-pointer md:flex hidden"
              >
                <BsGithub size={16} className="text-gray-300" />
                <h1
                  className="font-raleway text-[12px] text-gray-300 font-bold group-hover:underline
                  group-hover:text-gray-400 transition-all duration-200 ease-in-out"
                >
                  Follow me on github for more details
                </h1>
              </a>
              <div className="md:hidden sm:flex grid xs:grid-cols-2 grid-cols-1 items-center gap-[10px] mt-[20px]">
                <button
                  className="sm:w-[200px] w-full py-[8px] bg-secondary text-primary font-semibold flex justify-center items-center
        rounded-sm text-[16px]  "
                >
                  Download CV
                </button>
                <button
                  className="sm:w-[200px] w-full py-[8px] bg-secondary text-primary font-semibold flex justify-center items-center
        rounded-sm text-[16px]  gap-[5px]"
                >
                  <BsGithub size={20} color="black" />
                  <h1>Github</h1>
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full flex justify-center items-center sm:mt-[80px] mt-0 ">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="sm:w-[280px] w-[200px] p-[10px] relative"
            >
              <div className="w-full rounded-lg overflow-hidden rotate-[-8deg]">
                <img src={Profile} alt="profile" className="w-full" />
              </div>
              <div className="w-full absolute top-0 rounded-lg overflow-hidden rotate-[4deg]">
                <img src={Profile} alt="profile" className="w-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Template>
    </div>
  );
};

export default Hero;
