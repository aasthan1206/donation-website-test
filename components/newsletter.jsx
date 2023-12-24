import Image from "next/image";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../public/animations/98273-paper-plane.json"

const Newsletter = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    // <div className="bg-hero bg-right bg-no-repeat mx-8 my-16 h-screen justify-center gap-32 relative">
    //   <div className="self-center bg-background">
    //     <div className="font-main font-bold text-5xl">Join Our Newsletter!</div>
    //     <div className="py-4 font-secondary text-xl font-semibold text-center text-primary">
    //       Let's create something great together.
    //     </div>
    //     <div className="w-full">
    //       <input
    //         type="text"
    //         placeholder="Enter your email"
    //         className="px-4 py-2 rounded-l-full border-background border-2 outline-primary w-2/3 text-secondary font-secondary font-medium"
    //       />
    //       <button className="bg-primary text-white font-semibold font-secondary h-11 hover:bg-secondary rounded-r-full w-1/3">
    //         Subscribe!
    //       </button>
    //     </div>
    //   </div>
    //   {/* <Image src={"/../public/images/kids4.jpg"} width={400} height={300} /> */}
    // </div>
    <div className="mx-8 my-16 bg-newsletter bg-cover bg-no-repeat h-screen flex justify-center gap-8 relative">
      <div className="self-center bg-background bg-opacity-50 p-12 flex justify-center">
        <div className="">
          <div className="font-main font-bold text-5xl text-white flex gap-2">
            Join Our Newsletter <FaPaperPlane className="self-center h-12 w-12 text-white" />
          </div>
          <div className="py-4 font-secondary text-xl font-semibold text-center text-white">
            Let's create something great together!
          </div>
          <div className="w-[85%] text-center mx-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full border-primary border-2 outline-none w-2/3 font-secondary font-medium"
            />
            <button className="bg-primary text-white font-semibold font-secondary h-11 hover:bg-secondary rounded-r-full w-1/3">
              Subscribe!
            </button>
          </div>
        </div>
        
        <div className="self-center absolute left-40">
            <Image src={"/../public/images/2.gif"} alt="plane gif" width={400} height={400} />
        </div>
      </div>
      {/* <motion.div className="self-center">
        <FaPaperPlane className=" h-24 w-24 text-white" />
      </motion.div> */}
      {/* <div className="absolute"><Lottie options={defaultOptions} height={400} width={400} /></div> */}
      
    </div>
  );
};

export default Newsletter;
