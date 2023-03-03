import React from "react";

const Input = ({ placeholder, value, setValue }) => {
  return (
    <input
      type="text"
      className="h-full outline-none bg-transparent
      border-[1px] border-gray-400 rounded-sm px-[14px] font-raleway text-[12px] text-white"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
