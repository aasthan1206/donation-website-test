import React from "react";
import Image from "next/image";
import cloths from "../public/images/cloths.jpg";
import books from "../public/images/books.jpg";
import toyBox from "../public/images/toyBox.jpg";

const WhatToDonate = () => {
  const donationItems = [
    {
      id: 1,
      title: "Cloths",
      image: cloths,
    },
    {
      id: 2,
      title: "Stationary",
      image: books,
    },
    {
      id: 3,
      title: "Toys",
      image: toyBox,
    },
  ];
  return (
    <div className="my-8 px-12">
      <div className="text-primary text-5xl text-center font-bold">
        What you can donate?
      </div>
      <div className="flex flex-wrap justify-center py-16 gap-24 w-2/3 mx-auto">
        {donationItems.map((item) => (
          <div key={item.id}>
            <div
              className="rounded-full border-8 border-t-primary border-b-secondary shadow-lg shadow-background"
            >
              <Image
                src={item.image}
                width={200}
                height={200}
                style={{ borderRadius: "100px" }}
                alt="donation items"
              />
            </div>
            <div className="text-secondary text-3xsxl font-bold text-center py-4">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatToDonate;
