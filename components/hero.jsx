import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero h-screen bg-no-repeat md:bg-cover text-center flex flex-col lg:justify-center opacity-90 px-8 lg:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="text-5xl w-full lg:text-7xl text-white font-bold font-main lg:w-1/2 mx-auto pb-8 tracking-wide pt-16 lg:pt-0 "
      >
        Donations that change the world
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="text-lg lg:text-xl text-white font-medium font-secondary"
      >
        We are here to ensure that your donations reach the right place
      </motion.div>
      <Link href={"/organizations"}>
        <motion.button
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="bg-primary text-white font-semibold font-secondary py-2 px-4 my-8 lg:w-1/6 mx-auto hover:bg-secondary"
        >
          Donate Now
        </motion.button>
      </Link>
    </div>
  );
};

export default Hero;
