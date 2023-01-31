import React, { useEffect, useRef, useState } from "react";

const ExprienceCard = ({ data: { Icon, notDashed, title, total } }) => {
  const isNotDashed = notDashed ? "" : "border-dashed";
  return (
    <div
      className={`h-[160px] border-[1px]  border-secondary rounded-tr-[30px] relative px-[10px] text-center
          flex justify-center items-center flex-col ${isNotDashed}`}
    >
      <div
        className="absolute w-[38px] h-[38px] bg-secondary -top-[19px] left-[19px] flex justify-center items-center
            rounded-[2px]"
      >
        <Icon className="text-[#f5f5f5]" size={18} />
      </div>
      <h1 className="font-raleway text-[25px] font-[500] text-white">
        {total}
      </h1>
      <h1 className="font-raleway text-[26px] font-[600] text-white">
        {title}
      </h1>
    </div>
  );
};

export default ExprienceCard;
