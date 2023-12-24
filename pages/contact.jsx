import Layout from "@/components/layout";
import { Input, Button, Select } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const Contact = () => {
  const contactData = [
    {
      id: 1,
      icon: <AiOutlineMail className="h-12 w-12 text-primary" />,
      title: "Email Address",
      desc: "donatehelp@mail.com",
    },
    {
      id: 2,
      icon: <FiPhoneCall className="h-12 w-12 text-primary" />,
      title: "Phone Number",
      desc: "+91 1234567890",
    },
    {
      id: 3,
      icon: <MdOutlineLocationOn className="h-12 w-12 text-primary" />,
      title: "Our Location",
      desc: "123, MY Street, Near White Church, Indore (M.P.)",
    },
  ];
  const category = [
    {
      id: 1,
      name: 'Donor Relations',
    },
    {
      id: 1,
      name: 'Press Enquiry',
    },
    {
      id: 1,
      name: 'Corporate Partnership',
    },
    {
      id: 1,
      name: 'Fundraising',
    },
    {
      id: 1,
      name: 'General Enquiry',
    },
  ]
  return (
    <Layout>
      <div className="">
        <div className="bg-contact bg-cover flex justify-start pl-36 h-[86.5vh]">
          <div className="self-center text-primary text-8xl font-main font-bold">
            Contact Us
          </div>
        </div>
        <div className="flex my-16 mx-12 gap-24">
          <div className="w-1/2">
            <div className="text-primary text-2xl text-center font-main font-semibold flex gap-2 pb-2">
              <AiFillHeart className="self-center" /> Get In Touch
            </div>
            <div className="text-5xl font-secondary font-semibold pb-2">
              Don't hesitate to contact us
            </div>
            <div className="text-secondary font-secondary font-medium">
              Here's how you can reach out to us. We would love to hear from
              you. Know how can we help you with your donations.
            </div>
            <div className="py-4">
              {contactData.map((item) => (
                <div className="flex gap-8 py-4">
                  <div className="">{item.icon}</div>
                  <div className="self-center">
                    <div className="font-secondary text-xl font-semibold">
                      {item.title}
                    </div>
                    <div className="text-lg font-secondary font-medium text-secondary">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-orange-100 px-8 py-12">
            <div className="text-primary text-xl text-center font-main font-semibold flex gap-2 pb-2">
              <AiFillHeart className="self-center" /> Send Message
            </div>
            <div className="text-4xl font-secondary font-bold pb-6">
              Feel Free To Write Us Message
            </div>
            <Input
              focusBorderColor={"orange.400"}
              variant={"filled"}
              size={"lg"}
              placeholder="Your Name"
              className="mb-4"
            />
            <Input
              focusBorderColor={"orange.400"}
              variant={"filled"}
              size={"lg"}
              placeholder="Email Address"
              className="mb-4"
            />
            <Input
              focusBorderColor={"orange.400"}
              variant={"filled"}
              size={"lg"}
              placeholder="Your Location"
              className="mb-4"
            />
            <Input
              focusBorderColor={"orange.400"}
              variant={"filled"}
              size={"lg"}
              placeholder="Message"
              className="mb-4"
            />
            <Select placeholder="Category" name="category" focusBorderColor={"orange.400"}
              variant={"filled"}
              size={"lg"}
              className="mb-4">
              {category.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
            <div className="text-center">
              <button className="bg-primary text-white font-semibold font-secondary px-6  hover:bg-secondary w-full h-[48px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
