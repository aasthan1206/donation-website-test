import Layout from "@/components/layout";
import React from "react";
import { Input } from "@chakra-ui/react";
import school4 from "../public/images/school4.jpg";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <Layout>
      <div className="bg-secondary h-16 absolute top-0 w-full right-0"></div>
      <div className="flex mx-24 py-24 justify-between">
        <div>
          <div className="text-4xl font-main font-semibold">
            <span className="text-secondary">Sign</span>{" "}
            <span className="text-primary">Up</span>
          </div>
          <form action="" className="pt-6 pb-4">
            <div className="mb-4">
              <label htmlFor="" className="font-secondary">
                First Name<span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <Input
                type="text"
                placeholder="Enter First Name"
                name="first_name"
                focusBorderColor="orange.400"
                size={"lg"}
                width={400}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="font-secondary">
                Last Name<span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Enter Last Name"
                name="last_name"
                focusBorderColor="orange.400"
                size={"lg"}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="font-secondary">
                Email<span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Enter Email"
                name="email"
                focusBorderColor="orange.400"
                size={"lg"}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="font-secondary">
                Password<span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                placeholder="Create a password"
                name="password"
                focusBorderColor="orange.400"
                size={"lg"}
                required
              />
            </div>
            <div className="text-center">
              <button className="bg-primary text-white font-semibold font-secondary px-6 py-3  hover:bg-secondary w-full">
                Create Account
              </button>
            </div>
          </form>
          <div className="font-secondary">
            Already a member?
            <Link href={"/signIn"} className="text-primary font-semibold">
              {" "}
              Sign In
            </Link>
          </div>
        </div>
        <div className="self-center border-8 border-white shadow-xl shadow-gray-400 rounded-2xl">
          <Image
            src={school4}
            alt={"image"}
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
