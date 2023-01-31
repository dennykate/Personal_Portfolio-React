import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

import ContactInformation from "./ContactInformation";

const ContactUs = () => {
  return (
    <div className="md:w-[40%] w-full">
      <h1 className=" font-roboto font-bold text-[30px] text-white tracking-[0.1px]">
        Contact Us
      </h1>
      <h1 className="font-raleway text-[14px] text-gray-300 my-[10px] tracking-[0.1px]">
        Let's make something new,different and more meaingful or make thing more
        visual
      </h1>
      <div className="flex flex-col items-start">
        <ContactInformation
          Icon={TbPhoneCall}
          href="tel:+959964470356"
          data="+959 964 470 356"
          title="Call Me"
        />
        <ContactInformation
          Icon={AiOutlineMail}
          href="mailto:dennykate22@gmail.com"
          data="dennykate22@gmail.com"
          title="Email"
        />
        <ContactInformation
          Icon={MdLocationPin}
          href=""
          data="9/3/2 No.257(A) Sein Si Gong Young Street,Shwepyithar"
          title="Address"
        />
      </div>
    </div>
  );
};

export default ContactUs;
