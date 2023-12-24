import React from "react";
import cloths3 from "../public/images/cloths3.jpg";
import toys7 from "../public/images/toys7.jpg";
import books3 from "../public/images/books3.jpg";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const DonateItems = () => {
  const donateItems = [
    {
      id: 1,
      image: cloths3,
      title: "#WarmthForAll",
      percent: "68%",
      desc: "1708",
      width: "w-[68%]",
    },
    {
      id: 2,
      image: toys7,
      title: "#ToysForSmiles",
      percent: "91%",
      desc: "773",
      width: "w-[91%]",
    },
    {
      id: 3,
      image: books3,
      title: "#PassTheKnowledge",
      percent: "75%",
      desc: "347",
      width: "w-[75%]",
    },
  ];
  return (
    <div className="my-12 mx-8">
      <div className="text-4xl font-bold font-main text-center">
        What to donate
      </div>
      <div className="flex justify-around py-8 ">
        {donateItems.map((item) => (
          <div key={item.id} className="shadow-xl shadow-gray-400 rounded-sm">
            <div className="">
              <Image
                src={item.image}
                alt={"item"}
                width={"200px"}
                height={200}
                className="rounded-t-sm"
              />
            </div>
            <div className="p-4">
              <div className="text-primary text-lg font-semibold font-main">
                Mission: {item.title}
              </div>
              <div className="bg-gray-300 h-1.5 my-1 rounded-lg">
                <div
                  className={`bg-primary h-1.5 rounded-lg ${item.width}`}
                ></div>
              </div>
              <div className="text-sm font-secondary my-3 flex justify-between">
                <div>{item.desc} monthly supporters</div>
                <div>{item.percent}</div>
              </div>
              <Link href={"/organizations"}>
                <div className="text-center">
                  <button className="bg-primary text-white font-semibold font-secondary py-2 px-4 hover:bg-secondary mt-2 w-full">
                    <div className="flex gap-2 justify-center">
                      Donate Now <AiFillHeart className="self-center h-5 w-5" />
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonateItems;
