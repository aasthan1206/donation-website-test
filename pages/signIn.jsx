import Layout from "@/components/layout";
import React from "react";
import school8 from "../public/images/school8.jpg";
import { Input } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import GOOG from "../public/images/GOOG.png"

const SignIn = () => {
  async function handleGoogleSignIn(){
    signIn('google', { callbackUrl: "http://localhost:3000"})
  }
  return (
    <Layout>
      <div className="bg-secondary h-16 absolute top-0 w-full right-0"></div>
      <div className="mx-24 py-24 flex justify-between">
        <div>
          <div className="text-4xl font-main font-semibold">
            <span className="text-secondary">Sign</span>{" "}
            <span className="text-primary">In</span>
          </div>
          <form action="" className="pt-6 pb-4">
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
                placeholder="Enter password"
                name="password"
                focusBorderColor="orange.400"
                size={"lg"}
                required
              />
            </div>
            <div className="text-center">
              <button className="bg-primary text-white font-semibold font-secondary px-6 py-3  hover:bg-secondary w-full">
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center mb-2">
            <button onClick={handleGoogleSignIn} className="bg-white font-semibold font-secondary px-6 py-3 w-full border-2 border-gray-100 flex hover:bg-gray-100 justify-center gap-4">
              Sign In with <Image src={GOOG} alt={"google"} width={25} height={25} className="self-center"/>
            </button>
          </div>
          <div className="font-secondary">
            Not a member?
            <Link href={"/signUp"} className="text-primary font-semibold">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
        <div className="self-center border-8 border-white shadow-xl shadow-gray-400 rounded-2xl">
          <Image
            src={school8}
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

export default SignIn;
