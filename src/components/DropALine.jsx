import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Input from "./Input";

const REACT_APP_API = "https://personal-portfolio-api-eight.vercel.app/comment";

const DropALine = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    if (!name || !email || !phone || !budget || !message) {
      toast.error("Require all data");
      return;
    }

    const data = { name, email, phone, budget, message };

    setLoading(true);
    await fetch(REACT_APP_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resJson) => {
        return resJson.json();
      })
      .then((mes) => {
        defaultForm();
        toast.success("Thanks for your message");
      });
  };

  const defaultForm = () => {
    setLoading(false);
    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ translateX: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="md:w-[60%] w-full"
    >
      <Toaster position="bottom-center" />
      <h1 className=" font-roboto font-bold text-[30px] text-white tracking-[0.1px]">
        Drop A Line
      </h1>
      <div className="w-full mt-[30px] flex sm:gap-[30px] gap-[16px] flex-col">
        <div className="w-full sm:h-[50px] h-[110px] grid sm:grid-cols-2 grid-cols-1 gap-[16px]">
          <Input placeholder="Name" value={name} setValue={setName} />
          <Input placeholder="Email" value={email} setValue={setEmail} />
        </div>
        <div className="w-full sm:h-[50px] h-[110px] grid sm:grid-cols-2 grid-cols-1 gap-[16px]">
          <Input placeholder="Phone#" value={phone} setValue={setPhone} />
          <Input placeholder="Budget" value={budget} setValue={setBudget} />
        </div>
        <textarea
          rows="8"
          className="h-full outline-none bg-transparent
      border-[1px] border-gray-400 rounded-sm p-[14px] font-raleway text-[12px] text-white"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button
          onClick={clickHandler}
          className="sm:w-[120px] w-full h-[45px] flex justify-center items-center bg-secondary text-white font-raleway
        font-normal rounded-sm border-[1px] border-secondary md:hover:bg-transparent transition-all duration-200 ease-in-out
        md:hover:text-secondary"
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading3Quarters
              color="white"
              className=" animate-spin"
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default DropALine;
