import React from "react";
import Template from "./Template";

import { skillData } from "../utils/data";
import DotsDecoration from "./DotsDecoration";
import ExprienceCard from "./ExprienceCard";

const Exprience = () => {
  return (
    <div className="bg-[#302b63] relative">
      <Template height="min-h-[160px] ">
        <div
          className="w-full h-full py-[60px] sm:px-[30px] px-0 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-[15px]
         gap-[30px] "
        >
          {skillData.map((data, index) => (
            <ExprienceCard key={index} data={data} />
          ))}
        </div>
      </Template>
      <div className="absolute bottom-0 left-0 translate-y-[53px] z-[100]">
        <DotsDecoration />
      </div>
    </div>
  );
};

export default Exprience;
