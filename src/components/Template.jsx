import React from "react";

const Template = ({ children, height }) => {
  const customHeight = height ? height : "min-h-screen";

  return (
    <div
      className={`max-w-[1024px] mx-auto px-[10px] relative ${customHeight}`}
    >
      {children}
    </div>
  );
};

export default Template;
