import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/images/logo1.png";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }
  const navbarData = [
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
      link: "/about",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <div className="bg-black bg-opacity-30 flex z-10 text-white h-16 border-b-[1px] border-b-white w-full justify-around px-16 gap-32 absolute">
      <div className="text-3xl font-secondary font-bold self-center">
        <Image src={logo} alt={"logo"} width={175} height={175} />
      </div>
      <div className="flex gap-8 self-center">
        {navbarData.map((item) => (
          <Link key={item.id} href={item.link}>
            <div className="font-secondary font-medium cursor-pointer hover:text-primary active:text-primary">
              {item.title}
            </div>
          </Link>
        ))}
      </div>

      <div className="self-center">
        {session ? (
          <button
            onClick={handleSignOut}
            className="bg-primary text-white font-semibold font-secondary mx-auto hover:bg-secondary py-2 px-4"
          >
            Sign Out
          </button>
        ) : (
          <Link href={"/signUp"}>
            <button className="bg-primary text-white font-semibold font-secondary mx-auto hover:bg-secondary py-2 px-4">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
