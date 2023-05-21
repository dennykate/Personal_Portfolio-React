import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import FooterBgDecoration from "../assets/footer-bg-decoration.png";

const Footer = () => {
  return (
    <div className="bg-[#302b63] relative">
      <div className="py-[40px] w-full flex justify-center items-center border-b-[1px] border-gray-500">
        <div className="relative sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] flex justify-center items-center">
          <div
            className="sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] absolute top-0 left-0 rounded-full border-[1px]
           border-gray-300 border-dashed footerCircleAnimation"
          ></div>
          <div
            className="sm:w-[298px] sm:h-[298px] w-[248px] h-[248px]  rounded-full flex
         justify-center items-center flex-col gap-[10px] z-[10]"
          >
            <h1 className="font-raleway sm:text-[26px] text-[24px] font-bold text-white">
              Let's Say Hi
            </h1>
            <a
              href="mailto:dennykate22@gmail.com"
              className="font-raleway sm:text-[18px] font-normal text-white text-[12px] hover:underline"
            >
              dennykate22@gmail.com
            </a>
            <div className="flex mt-[20px] gap-[16px] items-center">
              <a
                href="https://web.facebook.com/aung.myochit.98499"
                target="_blank"
                className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#3b5998] hover:bg-[#3b5898ab]
             transition-all duration-200 ease-in-out cursor-pointer"
              >
                <FaFacebookF className="text-white" size={16} />
              </a>
              <a
                href="https://web.facebook.com/aung.myochit.98499"
                className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#00acee] hover:bg-[#00abeea8]
             transition-all duration-200 ease-in-out cursor-pointer"
              >
                <FaTwitter className="text-white" size={16} />
              </a>
              <a
                href="https://web.facebook.com/aung.myochit.98499"
                target="_blank"
                className="w-[30px] h-[30px] flex justify-center items-center rounded-full instagram
             transition-all duration-200 ease-in-out cursor-pointer"
              >
                <FaInstagram className="text-white" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[20px] flex justify-center items-center">
        <h1 className=" font-raleway sm:text-[13px] text-[11px] font-semibold text-white">
          &#169; 2022 - Form | All right reserved
        </h1>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[989px] md:block hidden opacity-80">
          <img src={FooterBgDecoration} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
