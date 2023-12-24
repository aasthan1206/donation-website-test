import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/images/logo1.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaFacebookF className="h-6 w-6" />,
    },
    {
      id: 2,
      icon: <FaInstagram className="h-6 w-6" />,
    },
    {
      id: 3,
      icon: <FaTwitter className="h-6 w-6" />,
    },
    {
      id: 4,
      icon: <FaYoutube className="h-6 w-6" />,
    },
  ];
  const pagesLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Organizations",
      link: "/organizations",
    },
    {
      id: 3,
      title: "Donate",
      link: "/registrationForm",
    },
    {
      id: 4,
      title: "About Us",
      link: "/AboutUs",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/ContactUs",
    },
  ];
  const signLinks = [
    {
      id: 1,
      title: "Sign Up",
      link: "/signUp",
    },
    {
      id: 2,
      title: "Sign In",
      link: "/signIn",
    },
  ];
  return (
    <div className="bg-secondary text-white px-8 py-12">
      <div className="flex justify-around">
        <div className="">
          <div className="text-3xl font-main font-bold text-center">
            <Image src={logo} alt={"logo"} width={200} height={200} />
          </div>
          <div className="flex py-4 gap-4">
            {socialIcons.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-full bg-primary hover:bg-white hover:text-primary cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xl font-main font-semibold pb-3">
            Quick Links
          </div>
          <div className=" text-left text-lg font-medium font-secondary">
            <div>
              {pagesLinks.map((item) => (
                <Link href={item.link} key={item.id}>
                  <div className="hover:text-primary">{item.title}</div>
                </Link>
              ))}
            </div>
            <div className="pt-2">
              {signLinks.map((item) => (
                <Link href={item.link} key={item.id}>
                  <div className="hover:text-primary">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-main font-semibold pb-3 text-primary flex gap-4">
            <MdOutlineLocationOn className="h-8 w-8 text-primary" />
            <span className="text-white">Indore </span>
          </div>
          <div className="text-xl font-main font-semibold pb-3 text-primary flex gap-4">
            <AiOutlineMail className="h-8 w-8 text-primary" />{" "}
            <span className="text-white">donatehelp@mail.com</span>{" "}
          </div>
          <div className="text-xl font-main font-semibold pb-3 text-primary flex gap-4">
            <FiPhoneCall className="h-8 w-8 text-primary" />{" "}
            <span className="text-white">+91 1234567890</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
