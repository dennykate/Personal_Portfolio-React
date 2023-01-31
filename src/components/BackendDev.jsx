import React from "react";
import Lottie from "lottie-react";

import Template from "./Template";
import CircleDecoration from "../assets/circle-decoration.png";
import DatabaseAnimation from "../assets/database-animation.json";
import { backendApiData } from "../utils/data";
import ProjectCard from "./ProjectCard";

const BackendDev = () => {
  return (
    <div className="bg-primary relative">
      <Template height="min-h-[120px]">
        <div className="py-[60px] pb-[100px] sm:px-[30px] px-0">
          <div className="w-full flex justify-between items-start md:flex-row flex-col-reverse md:gap-0 gap-[20px]">
            <div>
              <h1 className=" font-roboto font-bold sm:text-[30px] text-[24px] text-white tracking-[0.1px]">
                Backend Services
              </h1>
              <h1 className="font-raleway sm:text-[12px] text-[10px] text-gray-300 mt-[5px]">
                I also developed backend api using Node.js, Express and MongoDB
                for api services .
              </h1>
            </div>
            <div className="min-w-[260px]">
              <Lottie animationData={DatabaseAnimation} className="w-[260px]" />
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]  mt-[20px] ">
            {backendApiData.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
        </div>
      </Template>

      <div className="w-[160px] h-[160px] absolute -top-[80px] -right-[80px]">
        <img
          src={CircleDecoration}
          alt="circle-decoration"
          className="w-full h-full circleAnimation"
        />
      </div>
    </div>
  );
};

export default BackendDev;
