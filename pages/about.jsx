import React from "react";
import Image from "next/image";
import donateVector4 from "../public/images/donateVector4.jpg";
import donate from "../public/images/donate.jpg";
import donate1 from "../public/images/donate1.jpg";
import donate2 from "../public/images/donate2.jpg";
import donate3 from "../public/images/donate3.jpg";
import donate4 from "../public/images/donate4.jpg";
import school1 from "../public/images/school1.jpg";
import school2 from "../public/images/school2.jpg";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";
const About = () => {
  return (
    <Layout>
      <div className="flex bg-[#79B0BB]">
        <Image
          src={donateVector4}
          alt={"about vector"}
          width={800}
          height={800}
        />
        <div className="text-8xl font-main self-center font-bold text-center text-white py-6">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            About Us
          </motion.div>
        </div>
      </div>
      <div className="flex mx-8 my-16 gap-10">
        <div className="">
          <Image src={donate2} alt={"donation image"} width={3000} height={3000} className="shadow-xl shadow-gray-500" />
          <Image src={school1} alt = {'donation image'} width={3000} height={3000} className="shadow-xl shadow-gray-500" />
        </div>
        <div className="self-center">
          <div className="text-4xl text-center font-main font-medium">
            <span className="text-secondary">Donate</span> <span className="text-primary">Hope</span> is a platform that connects various social organisations
            and helps donor ensure that their donation is reaching the right
            hands.{" "}
            {/* Donate Hope brings hope in lives by ensuring your that your donations reach the right hands. */}
          </div>
          <div className="">
            <button className="bg-primary text-white font-semibold font-secondary py-2 px-4 my-8 mx-auto hover:bg-secondary flex gap-2">
              Donate Now
              <AiFillHeart className="self-center h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="">
          <Image src={donate} alt={"donation image"} width={3000} height={3000} className="shadow-xl shadow-gray-500" />
          <Image src={school2} alt = {'donation image'} width={3000} height={3000} className="shadow-xl shadow-gray-500" />
        </div>
      </div>
      <div className="flex gap-16 mx-8 justify-around my-16">
        <div className="text-5xl text-left font-main font-medium h-96 self-center">
          Make your donation bring light in someone's life.{" "}
        </div>
        <div className="h-96 overflow-y-auto no-scrollbar">
          <div className="mb-12">
            <Image src={donate3} alt={"donation image"} />
          </div>
          <div className="my-12">
            <Image src={donate4} alt={"donation image"} />
          </div>
          <div className="my-12">
            <Image src={donate1} alt={"donation image"} />
          </div>
        </div>
      </div>
      <div className="mx-8 text-center my-16">
      <div className="text-5xl text-primary font-main font-bold">We save lives and build resilient communities</div>
      <div className="py-4 text-xl text-center font-secondary font-medium">We save the lives of children and their families. We are there for them before and after disaster strikes. We enable people to provide for themselves, see their children grow up strong, and for whole communities to prosper. We constantly search for more effective solutions, while sharing our knowledge and expertise with the world. We push for long-term change.</div>
      </div>
      
    </Layout>
  );
};

export default About;
