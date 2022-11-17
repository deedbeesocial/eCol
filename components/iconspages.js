import React from "react";
import Image from "next/image";
import Link from "next/link";
function IconPages() {
  return (
    <>
      <section className="text-black  md:container md:mx-auto relative ">
        <div className=" mt-10  container mx-auto  pb-10 ">
          <div className="w-full md:flex  lg:justify-center ">
            <h1 className=" capitalize text-xl lg:text-4xl  my-8 text-black text-center ">
              eCol Approach
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:p-0 p-5  justify-center gap-10 md:gap-11 lg:gap-24">
            <div className="flex   flex-col  rounded-3xl  justify-around h-[300px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="md:w-fit md:flex md:flex-col justify-center  ">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/bulb.gif" alt="" />
                    </div>
                  </div>
                  <p className="text-black  text-center  mt-4 ">
                    ~30%+ savings in monthly energy bill
                  </p>
                  <div className="flex justify-center mt-4 ">
                    <Link href={"/approach"}>
                      <p className="text-black hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className=" rounded-3xl  flex flex-col  justify-around h-[300px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className=" flex flex-col justify-center  h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full h-[70px]">
                      <img src="/icon/water.gif" alt="" />
                    </div>
                  </div>

                  <p className="text-black text-center   mt-4 ">
                    Closed water loop
                  </p>
                  <div className="flex justify-center mt-4 ">
                    <Link href={""}>
                      <p className="text-black hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className=" rounded-3xl  flex flex-col  justify-around h-[300px]   shadow-xl ">
              <div className=" rounded-lg ">
                <div className=" flex flex-col justify-center  h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/waste.gif" alt="" />
                    </div>
                  </div>
                  <p className="text-black text-center  mt-4 ">
                    Ethical and safe waste management. Waste to Energy.
                  </p>
                  <div className="flex justify-center mt-4 ">
                    <Link href={"/approach"}>
                      <p className="text-black hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl  flex flex-col  justify-around md:h-[300px] h-[350px]  shadow-xl">
              <div className=" rounded-lg ">
                <div className=" flex flex-col justify-center  ">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/air.gif" alt="" />
                    </div>
                  </div>
                  <p className="text-black text-center   mt-4 ">
                    Better Air quality and savings in air based energy
                    requirements.
                  </p>
                  <div className="flex justify-center mt-4 ">
                    <Link href={"/approach"}>
                      <p className="text-black hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IconPages;
