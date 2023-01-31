import React from "react";
import ContactUs from "./ContactUs";
import DotsDecoration from "./DotsDecoration";
import DropALine from "./DropALine";

import Template from "./Template";

const ContactMe = () => {
  return (
    <div className=" bg-primary relative">
      <Template height="py-[100px]">
        <div className="flex items-start md:gap-[30px] gap-[40px] sm:px-[30px] px-0 md:flex-row flex-col">
          <ContactUs />
          <DropALine />
        </div>
      </Template>
      <div className="absolute top-0 -right-[10px] -translate-y-[53px] z-[100]">
        <DotsDecoration />
      </div>
      <div className="absolute bottom-5 left-0 -translate-x-[14px] z-[100]">
        <DotsDecoration />
      </div>
    </div>
  );
};

export default ContactMe;
