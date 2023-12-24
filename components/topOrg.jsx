import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai"

const TopOrg = () => {
  const topOrgData = [
    {
      id: 1,
      title: "Orphdonate",
      desc: "Help us create a brighter tomorrow - donate clothes, books, and toys to Orphdonate today!",
      bg: 'hover:bg-orph',
    },
    {
      id: 2,
      title: "Navchetna Old Age Home",
      desc: "Compassionate care for the elderly.",
      bg: 'hover:bg-nav',
    },
    {
      id: 3,
      title: "Wisdom's Oasis Library",
      desc: "Immerse Yourself in a World of Endless Possibilities and Knowledge",
      bg: 'hover:bg-wisdom',
    },
  ];
  return (
    <div className="flex h-screen mx-8 my-16">
        {/* <Image src={"/../public/images/kids.jpg"} width={500} height={500} /> */}
      <div className=" font-sans font-extrabold text-[230px] text-center bg-org bg-cover text-primary">
        <div className="-mt-16 tracking-wider opacity-70">TOP</div>
        <div className="text-[150px] -mt-24 opacity-70 text-white">THREE</div>
        <div className="-mt-24 text-[240px] opacity-70">ORG</div>
      </div>
      <div className="flex flex-col w-2/3 text-center h-screen bg-orange-100">
        {topOrgData.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer h-[33.33%] text-left px-12 ${item.bg} hover:bg-center hover:bg-cover hover:text-white relative`}
          >
            <div className="text-3xl font-semibold font-main pt-8 pb-4 tracking-wide">
              {item.title}
            </div>
            <div className="text-xl font-normal font-secondary">
              {item.desc}
            </div>
            <Link href={"/organizations"}>
            <div className="absolute bottom-5">
              <button className="bg-primary text-white font-semibold font-secondary py-2 px-4 hover:bg-secondary mt-2 rounded-full">
                <div className="flex gap-2">Donate Now <AiFillHeart className="self-center h-5 w-5" /></div>
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOrg;
