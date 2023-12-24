import React from "react";
import Image from "next/image";
import image2 from "../public/images/image2.jpg";
import image3 from "../public/images/image3.jpg";
import { motion } from "framer-motion";

const Goal = () => {
  return (
    <div className="bg-background bg-opacity-40 px-12 py-6">
      <div className="flex justify-center gap-12">
        <div className="basis-1/2">
          <div className="text-4xl text-black font-main font-bold text-center">
            Our Goal
          </div>
          <div className="py-4 font-secondary font-medium">
            <motion.div
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ ease: "easeOut", duration: 0.5, }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur blanditiis nulla odio tenetur sunt delectus
              necessitatibus, incidunt ipsa cupiditate. Earum quod cum a esse
              vel enim nam officia asperiores possimus!
            </motion.div>
            <br />
            <motion.div
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ ease: "easeOut", duration: 0.5, }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              sed eum dicta modi quo repellendus, ea similique tenetur assumenda
              magnam dolores, repellat in commodi optio harum eaque non velit
              unde!
            </motion.div>
            {/* <br /> <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quo illo, non animi quam reprehenderit aperiam maxime totam debitis quas dolores. Praesentium, expedita itaque obcaecati cumque vero modi sed eaque!
            <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate dicta distinctio fugiat quidem, reiciendis amet, reprehenderit dolore quam veritatis architecto consectetur dolorem blanditiis eveniet et sapiente optio ipsa. Qui, deserunt. */}
          </div>
        </div>

        <div
          className="shadow-lg shadow-black relative"
        >
          <Image src={image2} alt={'kids image'}/>
          {/* <div className="absolute top-52 left-72">
          <Image src={image3} width={300} h={300} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Goal;
