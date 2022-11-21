import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Approach() {
  return (
    <section className="bg-lightgray">
      <section className="md:container md:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center my-5">
            <p className="text-center p-5">
              Alttech synthesises solutions based on your unique needs. We
              marshal a host of solutions to integrate <br /> a comprehensive
              saving-and-sustainability plan for you.
            </p>
          </div>

          <div className="relative flex justify-center">
            <p className="absolute text-3xl text-black text-center mt-4">
              THE Alttech APPROACH
            </p>
            <img className="md:flex hidden" src="/appro/1.jpg" alt="" />
            <img className="md:hidden " src="/appro/1mob.jpg" alt="" />
          </div>
          <div className="flex justify-center my-5 ">
            <p className="text-center">
              Alttech doesn’t stop at solution delivery. The post deployment
              process is as important. And it ensures <br /> you get maximum IRR
              on your green spend.{" "}
            </p>
          </div>
          <div className="relative flex justify-center">
            <p className="absolute text-3xl text-black text-center mt-1 md:mt-4">
              The Alttech WAY
            </p>

            <img className="md:flex hidden" src="/appro/2.jpg" alt="" />
            <img className="md:hidden " src="/appro/2mob.jpg" alt="" />
          </div>
          <div className="flex justify-center my-5 md:mb-0 mb-20">
            <p className="text-center">
              {`Alttech 's approach to various sustainability streams is exhaustive and customised to be able to give maximum returns.`}
            </p>
          </div>
          <div className="relative flex justify-center">
            <p className="absolute  md:flex hidden text-3xl text-black text-center mt-4">
              The Alttech WAY
            </p>
            <p className="absolute md:hidden  text-3xl text-black text-left  mt-[-40px] ml-0 ">
              Energy
            </p>
            <img src="/appro/3.jpg" alt="" />
          </div>
          <div className="flex justify-center mt-4 mb-14 md:mb-8 ">
            <Link href={"/contact"}>
              <p className="text-blue hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
          <div className="relative flex justify-center">
            <p className="absolute  md:flex hidden text-3xl text-black text-center mt-4">
              The Alttech WAY
            </p>
            <p className="absolute md:hidden  text-3xl text-black text-left  mt-[-40px] ml-0 ">
              Water
            </p>
            <img src="/appro/4.jpg" alt="" />
          </div>
          <div className="flex justify-center mt-4 mb-12 md:mb-8 ">
            <Link href={"/contact"}>
              <p className="text-blue hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
          <div className="relative flex justify-center">
            <p className="absolute  md:flex hidden text-3xl text-black text-center mt-4">
              The Alttech WAY
            </p>
            <p className="absolute md:hidden  text-3xl text-black text-left  mt-[-40px] ml-0 ">
              Waste
            </p>
            <img src="/appro/5.jpg" alt="" />
          </div>
          <div className="flex justify-center mt-4 md:mb-8 mb-14">
            <Link href={"/contact"}>
              <p className="text-blue hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
          <div className="relative flex justify-center">
            <p className="absolute  md:flex hidden text-3xl text-black text-center mt-4">
              The Alttech WAY
            </p>
            <p className="absolute md:hidden  text-3xl text-black text-left  mt-[-40px] ml-0 ">
              Air
            </p>
            <img src="/appro/6.jpg" alt="" />
          </div>
          <div className="flex justify-center mt-4 mb-8 ">
            <Link href={"/contact"}>
              <p className="text-blue hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
