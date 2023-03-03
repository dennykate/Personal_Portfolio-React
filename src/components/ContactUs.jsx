import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";

import ContactInformation from "./ContactInformation";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ translateX: -100, opacity: 0 }}
      viewport={{once: true}}
          whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="md:w-[40%] w-full"
    >
      <h1 className=" font-roboto font-bold text-[30px] text-white tracking-[0.1px]">
        Contact Me
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
          href="https://www.google.com/maps/place/16%C2%B059'01.1%22N+96%C2%B004'45.8%22E/@16.983636,96.0788458,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x9e8a8308022750d0!7e2!8m2!3d16.9836355!4d96.0793929"
          data="9/3/2 No.257(A) Sein Si Gong Young Street,Shwepyithar"
          title="Address"
          target
        />
      </div>
    </motion.div>
  );
};

export default ContactUs;
