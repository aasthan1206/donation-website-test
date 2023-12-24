import React, { useState } from "react";
import kidsBW from "../public/images/kidsBW.jpg";
import old2bw from "../public/images/old2bw.jpg";
import schoolBw from "../public/images/schoolBw.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import cx from "classnames";

const Affiliation = () => {
  const [cardId, setCardId] = useState(0);
  const affiliationData = [
    {
      id: 1,
      title: "Orphanages",
      image: kidsBW,
      desc: "We provide aids to orphanages across the city by donating cloths, books & toys.",
      contri: "1000",
      affiliated: "50",
    },
    {
      id: 2,
      title: "Old Age Homes",
      image: old2bw,
      desc: "We provide aids to orphanages across the city by donating cloths, books & toys.",
      contri: "1000",
      affiliated: "50",
    },
    {
      id: 3,
      title: "Government Schools",
      image: schoolBw,
      desc: "We provide aids to orphanages across the city by donating cloths, books & toys.",
      contri: "1000",
      affiliated: "50",
    },
  ];
  return (
    <div className="text-center mt-16">
      <div className="text-4xl font-bold font-main">
        Organizations we collaborate with
      </div>
      <div className="flex justify-around py-16">
        {affiliationData.map((item) => (
          <div key={item.id} className="relative cursor-pointer">
            <div
              onMouseOver={() => setCardId(item.id)}
              // onMouseLeave={() => setCardId(0)}
            >
              <Image src={item.image} width={350} height={300} alt={'organization image'}/>
            </div>
            {/* After hover part */}
            <div>
              <AnimatePresence initial={false}>
                <div
                  className={cx(
                    "hidden absolute top-0 h-full bg-primary bg-opacity-50 py-3 px-6 text-center",
                    { "!flex !flex-col !justify-center": cardId === item.id }
                  )}
                >
                  <div className="text-white font-main text-2xl">
                    {item.title}
                  </div>
                  <div className="text-white text-sm font-secondary py-2">
                    {item.desc}
                  </div>
                  <div className="flex gap-4 justify-around text-white">
                    <div>Contributions: {item.contri}</div>
                    <div>Affiliations: {item.affiliated}</div>
                  </div>
                </div>
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
