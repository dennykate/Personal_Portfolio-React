import React from "react";
import DotsDecorationImage from "../assets/dots-decoration.png";

const DotsDecoration = () => {
  return (
    <div className="w-[50px] h-[107px] ">
      <img
        src={DotsDecorationImage}
        alt="dots-decoration"
        className="w-full h-full"
      />
    </div>
  );
};

export default DotsDecoration;
