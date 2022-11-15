import React from "react";
import Image from "next/image";
import Link from "next/link";
function Projectscard() {
  return (
    <>
      <section className="text-black relative ">
        <div className="md:container md:mx-auto    mt-10  pb-10 ">
          <h1 className=" capitalize text-xl lg:text-4xl  my-16 text-black text-center ">
            {` Boost Your Building's Bottom Lines`}
          </h1>

          <div className="flex flex-col  mb-10  lg:flex-row  justify-center  gap-16">
            <div className="flex  top-0 flex-col bg-blue  rounded-3xl  justify-around h-[350px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="w-[267px] p-5 h-[274px]">
                  <p className="text-xl font-semibold  text-white text-center mt-4">
                    Saving is your earning
                  </p>
                  <p className=" text-center text-white  mt-4 ">
                    eCol translates proof points on the cutting edge of resource
                    efficiency. Post Covid, it is even more relevant.
                  </p>
                </div>
              </div>
            </div>

            <div className=" rounded-3xl  flex flex-col bg-[#00f2c2]  justify-around h-[350px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="w-[267px]  p-5 h-[274px]">
                  <p className="text-xl text-center font-semibold mt-4">
                    Go Eco, Profitably
                  </p>
                  <p className="text-black text-center   mt-4 ">
                    eCol helps your company move to a proactive, tech-driven
                    model with high investment payback
                  </p>
                </div>
              </div>
            </div>

            <div className=" rounded-3xl  flex flex-col bg-blue  justify-around h-[350px]   shadow-xl ">
              <div className=" rounded-lg ">
                <div className="w-[267px]  p-5 h-[290px]">
                  <p className="text-xl text-center text-white font-semibold mt-4">
                    Enhance your living experience at work{" "}
                  </p>
                  <p className="text-white text-center  mt-4 ">
                    While you better Operations costs, with no capital cost of
                    implementing.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl  flex flex-col bg-[#00f2c2]  justify-around h-[350px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="w-[267px]  p-5 h-[290px]">
                  <p className="text-xl text-center font-semibold mt-4">
                    eCol Your Building to be a Prosumer
                  </p>
                  <p className="text-black text-center  mt-4 ">
                    Decentralise is the key to solutions for buildings. eCol
                    forges with you a deep trusteeship by making your company a
                    prosumer: you produce, you consume water & energy.
                  </p>
                </div>
              </div>
              {/* <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projectscard;
