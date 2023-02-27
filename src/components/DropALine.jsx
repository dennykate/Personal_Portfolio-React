import React from "react";
import { motion } from "framer-motion";

import Input from "./Input";

const DropALine = () => {
  return (
    <motion.div
      initial={{ translateX: 100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="md:w-[60%] w-full"
    >
      <h1 className=" font-roboto font-bold text-[30px] text-white tracking-[0.1px]">
        Drop A Line
      </h1>
      <div className="w-full mt-[30px] flex sm:gap-[30px] gap-[16px] flex-col">
        <div className="w-full sm:h-[50px] h-[110px] grid sm:grid-cols-2 grid-cols-1 gap-[16px]">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </div>
        <div className="w-full sm:h-[50px] h-[110px] grid sm:grid-cols-2 grid-cols-1 gap-[16px]">
          <Input placeholder="Phone#" />
          <Input placeholder="Budget" />
        </div>
        <textarea
          rows="8"
          className="h-full outline-none bg-transparent
      border-[1px] border-gray-400 rounded-sm p-[14px] font-raleway text-[12px] text-white"
          placeholder="message"
        ></textarea>
        <button
          className="sm:w-[120px] w-full h-[45px] flex justify-center items-center bg-secondary text-white font-raleway
        font-normal rounded-sm border-[1px] border-secondary md:hover:bg-transparent transition-all duration-200 ease-in-out
        md:hover:text-secondary"
        >
          Submit
        </button>
      </div>
    </motion.div>
  );
};

export default DropALine;
