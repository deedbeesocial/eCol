import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Approach() {
  return (
    <section className="md:container md:mx-auto">
      <div className="flex flex-col justify-center">
      
      <div className="flex justify-center my-5">
          <p className="text-center p-5">
          eCol synthesises solutions based on your unique needs. We marshal a host of solutions to integrate <br /> a comprehensive saving-and-sustainability plan for you. 
          
          </p>
        </div>
       
       <div className="relative flex justify-center">
          <p className="absolute text-3xl text-black text-center mt-4">
            THE eCol APPROACH
          </p>
          <img src="/appro/1.jpg" alt="" />
        </div>
        <div className="flex justify-center my-5">
          <p className="text-center">
            eCol doesn’t stop at solution delivery. The post deployment process
            is as important. And it ensures <br /> you get maximum IRR on your green
            spend.{" "}
          </p>
        </div>
        <div className="relative flex justify-center">
          <p className="absolute text-3xl text-black text-center mt-4">
            The eCol WAY
          </p>
          <img src="/appro/2.jpg" alt="" />
        </div>
        <div className="flex justify-center my-5">
          <p className="text-center">
            {`eCol's approach to various sustainability streams is exhaustive and customised to be able to give maximum returns.`}
          </p>
        </div>
        <div className="relative flex justify-center">
          <p className="absolute text-3xl text-black text-center mt-4">
            The eCol WAY
          </p>
          <img src="/appro/3.jpg" alt="" />
        </div>
        <div className="flex justify-center mt-4 mb-8 ">
            <Link href={"/contact"}>
              <p className="text-white hover:border-black hover:border-2 p-3 font-bold bg-blue ease-in duration-300 rounded-md  hover:bg-white hover:text-black   flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
          <div className="relative flex justify-center">
          <p className="absolute text-3xl text-black text-center mt-4">
            The eCol WAY
          </p>
          <img src="/appro/4.jpg" alt="" />
        </div>
        <div className="flex justify-center mt-4 mb-8 ">
            <Link href={"/contact"}>
              <p className="text-white hover:border-black hover:border-2 p-3 font-bold bg-blue ease-in duration-300 rounded-md  hover:bg-white hover:text-black   flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
          <div className="relative flex justify-center">
          <p className="absolute text-3xl text-black text-center mt-4">
            The eCol WAY
          </p>
          <img src="/appro/5.jpg" alt="" />
        </div>
        <div className="flex justify-center mt-4 mb-8 ">
            <Link href={"/contact"}>
              <p className="text-white hover:border-black hover:border-2 p-3 font-bold bg-blue ease-in duration-300 rounded-md  hover:bg-white hover:text-black   flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
          <div className="relative flex justify-center">
          <p className="absolute text-3xl text-black text-center mt-4">
            The eCol WAY
          </p>
          <img src="/appro/6.jpg" alt="" />
        </div>
        <div className="flex justify-center mt-4 mb-8 ">
            <Link href={"/contact"}>
              <p className="text-white hover:border-black hover:border-2 p-3 font-bold bg-blue ease-in duration-300 rounded-md  hover:bg-white hover:text-black   flex justify-center items-center text-left hover:cursor-pointer">
                Reach Us
              </p>
            </Link>
          </div>
      </div>
    </section>
  );
}
