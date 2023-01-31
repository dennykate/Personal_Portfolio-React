import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="h-full outline-none bg-transparent
      border-[1px] border-gray-400 rounded-sm px-[14px] font-raleway text-[12px] text-white"
      placeholder={placeholder}
    />
  );
};

export default Input;
