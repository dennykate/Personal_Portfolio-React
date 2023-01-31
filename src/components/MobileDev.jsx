import React from "react";
import Lottie from "lottie-react";

import Template from "./Template";
import CircleDecoration from "../assets/circle-decoration.png";
import MobileAnimation from "../assets/mobile-animation.json";
import { backendApiData, mobileAppData } from "../utils/data";
import ProjectCard from "./ProjectCard";

const BackendDev = () => {
  return (
    <div className="bg-primary relative">
      <Template height="min-h-[120px]">
        <div className="py-[60px] sm:px-[30px] px-0">
          <div className="w-full flex justify-between items-start md:flex-row flex-col md:gap-0 gap-[20px]">
            <div className="min-w-[260px]">
              <Lottie animationData={MobileAnimation} className="w-[260px]" />
            </div>
            <div>
              <h1 className=" font-roboto font-bold sm:text-[30px] text-[24px] text-white tracking-[0.1px]">
                Mobile App Development
              </h1>
              <h1 className="font-raleway sm:text-[12px] text-[10px] text-gray-300 mt-[5px]">
                I also have mobile app development knowledge with react native.
              </h1>
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]  mt-[20px] ">
            {mobileAppData.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
        </div>
      </Template>

      <div className="w-[160px] h-[160px] absolute -top-[80px] -left-[80px]">
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
