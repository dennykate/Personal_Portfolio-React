import React from "react";
import Lottie from "lottie-react";

import LoadingDeveloper from "../assets/loading-developer.json";

const Loading = () => {
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen bg-primary flex justify-center items-center">
      <div className="w-[300px]">
        <Lottie animationData={LoadingDeveloper} />
      </div>
    </div>
  );
};

export default Loading;
