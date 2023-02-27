import React from "react";
import DotsDecorationImage from "../assets/dots-decoration.png";

const DotsDecoration = () => {
  return (
    <div className="sm:w-[50px] sm:h-[107px] w-[25px] h-[53px]">
      <img
        src={DotsDecorationImage}
        alt="dots-decoration"
        className="w-full h-full"
      />
    </div>
  );
};

export default DotsDecoration;
