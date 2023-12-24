import React from "react";
import tealNote from "../public/images/tealNote.jpg";
import Image from "next/image";
import speaker1 from "../public/images/speaker1.png";

const Ads = () => {
  return (
    <div className="my-12 mx-8 flex bg-secondary">
      <div className="relative">
        <Image src={tealNote} height={650} width={500} alt="note" />
        {/* <div className="absolute top-72 left-48 text-4xl text-center font-semibold font-main text-red-500 flex">
          URGENT!{" "}
        </div>
        <div className="absolute top-52 left-80">
          {" "}
          <Image src={speaker1} alt={"speaker"} width={200} height={200} />
        </div> */}
      </div>
      <div className="">Make an impact</div>
    </div>
  );
};

export default Ads;
