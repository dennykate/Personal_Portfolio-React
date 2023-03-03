import React from "react";

const Alert = ({ isSuccess, alertMessage }) => {
  const bgColor = isSuccess ? "bg-green-600" : "bg-red-600";

  return (
    <div
      className={`fixed bottom-[10px] left-[10px] px-[14px] py-[6px] rounded font-raleWay text-[#f5f5f5] z-[1000]
    text-base font-normal ${bgColor}`}
    >
      {alertMessage}
    </div>
  );
};

export default Alert;
