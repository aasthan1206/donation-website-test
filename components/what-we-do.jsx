import Image from "next/image";
import hands3 from "../public/images/hands3.jpg";
import hands4 from "../public/images/hands4.jpg";
import hands5 from "../public/images/hands5.jpg";


const WhatWeDo = () => {
    const whatWeDoData = [
        {
          id: 1,
          title: "Become a Volunteer",
          image: hands3,
        },
        {
          id: 2,
          title: "Call for Donation",
          image: hands4,
        },
        {
          id: 3,
          title: "Send Donation",
          image: hands5,
        },
      ];
  return (
    <div className="py-8 flex justify-around bg-white shadow-lg shadow-background mb-10 ">
      {whatWeDoData.map((item) => (
        <div key={item.id} className="">
            <div className="w-[100px] mx-auto"><Image src={item.image} width={100} alt="icon"/></div>
            <div className="text-secondary text-xl font-bold py-4">{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default WhatWeDo
