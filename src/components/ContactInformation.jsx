import React from "react";

const ContactInformation = ({ Icon, href, data, title, target }) => {
  return (
    <div className="flex flex-col gap-[16px] items-start mt-[30px] flex-wrap">
      <div className="flex gap-[10px] items-center ">
        <div className="min-w-[40px] min-h-[40px] rounded-full bg-secondary flex justify-center items-center">
          <Icon size={18} color="white" />
        </div>
        <div className="flex flex-col items-start gap-[2px] ">
          <h1 className="font-raleway text-gray-600 text-[13px] font-[700]">
            {title}
          </h1>
          <a
            href={href}
            target={target && "_blank"}
            className="font-raleway text-white text-[15px] font-[500] hover:underline"
          >
            {data}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
