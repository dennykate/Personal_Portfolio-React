import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import Template from "./Template";
import DeveloperAnimation from "../assets/developer-animation.json";
import { skillsData } from "../utils/data";

const Skills = () => {
  return (
    <div className="bg-whiteBlue relative">
      <Template height="min-h-[160px] ">
        <div className="w-full h-full py-[60px] sm:px-[30px] px-0">
          <div className="flex items-center gap-[30px] md:flex-row flex-col">
            <motion.div
              initial={{ scale: 0 }}
              viewport={{ once: true }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="sm:min-w-[300px] min-w-[200px]"
            >
              <Lottie
                animationData={DeveloperAnimation}
                className="sm:w-[300px] w-[200px]"
              />
            </motion.div>

            <motion.div
              initial={{ translateX: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
              className="flex flex-col items-start gap-[20px]"
            >
              <h1 className=" font-raleway sm:text-[26px] text-[20px] text-white">
                I'm a MERN Stack Developer
              </h1>
              <div className="flex items-center gap-[20px] flex-wrap">
                {skillsData.map((data, id) => (
                  <div
                    key={id}
                    className={`sm:w-[130px] sm:h-[70px] w-[100px] h-[55px] flex justify-center items-center 
                   transition-all duration-200 ease-in-out rounded-md
                  ${
                    id % 2
                      ? "bg-[#f5f5f5] hover:scale-105"
                      : "bg-primary hover:scale-105"
                  } `}
                  >
                    <img
                      src={data}
                      alt="language logo"
                      className="sm:w-[55px] w-[40px] object-cover "
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Skills;
