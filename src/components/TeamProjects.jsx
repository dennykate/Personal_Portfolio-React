import React, { useRef, useState } from "react";
import Template from "./Template";

import ProjectCard from "./ProjectCard";
import { TeamProjectsData } from "../utils/data";

const TeamProjects = () => {
  const projectRef = useRef(null);

  return (
    <div id="projects" ref={projectRef} className="bg-primary">
      <Template height="min-h-[100px]">
        <div className="sm:px-[30px] px-0 py-[60px]">
          <div>
            <h1 className=" font-roboto font-bold sm:text-[30px] text-[24px] text-white tracking-[0.1px]">
              Team Projects
            </h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]  mt-[20px] ">
            {TeamProjectsData.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
        </div>
      </Template>
    </div>
  );
};

export default TeamProjects;
