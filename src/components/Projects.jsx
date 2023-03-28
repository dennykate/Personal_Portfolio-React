import React, { useRef, useState } from "react";
import Template from "./Template";

import ProjectCard from "./ProjectCard";
import { projectsData } from "../utils/data";

const Projects = () => {
  const projectRef = useRef(null);
  const [limitProjects, setLimitProjects] = useState(6);

  const handleSeemore = () => {
    if (limitProjects < 16) {
      setLimitProjects(limitProjects + 6);
    } else {
      setLimitProjects(6);
      projectRef.current.scrollIntoView();
    }
  };

  return (
    <div id="projects" ref={projectRef} className="bg-primary">
      <Template height="min-h-[100px]">
        <div className="sm:px-[30px] px-0 py-[60px]">
          <div>
            <h1 className=" font-roboto font-bold sm:text-[30px] text-[24px] text-white tracking-[0.1px]">
              Projects
            </h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]  mt-[20px] ">
            {projectsData.slice(0, limitProjects).map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
          <div className="w-full mt-[40px] flex justify-center items-center">
            <button
              onClick={handleSeemore}
              className="px-[14px] py-[5px] bg-secondary text-white rounded-sm font-raleway font-semibold text-sm
            border-[1px] border-secondary md:hover:bg-transparent transition-all duration-200 ease-in-out md:hover:text-secondary"
            >
              {limitProjects < 16 ? "Show More" : "Show Less"}
            </button>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Projects;
