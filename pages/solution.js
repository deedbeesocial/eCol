import React from "react";
import Image from "next/image";

import Link from "next/link";

export default function Solution() {
  const items = [
    {
      name: "ecol your shopping mall and see the saving you make",
      link: "/solution/solution1",
      image: "/so/so1.jpg",
      text: "",
    },
    {
      name: "Turn trash to cash in corporate food courts",
      link: "/solution/solution2",
      image: "/so/so2.jpg",
      text: "",
    },
    {
      name: "Harvest sky and air",
      link: "/solution/solution3",
      image: "/so/so3.jpg",
      text: "",
    },
    {
      name: "Upcycle way more than half the water you see",
      link: "/solution/solution4",
      image: "/so/so4.jpg",
      text: "",
    },
    {
      name: "You produce you consume.You prosume",
      link: "/solution/solution5",
      image: "/so/so5.jpg",
      text: "",
    },
    {
      name: "Get your assets to speak to you",
      link: "/solution/solution6",
      image: "/so/so6.jpg",
      text: "",
    },
   
    {
      name: "Revamps your central AC and clip a chunk",
      link: "/solution/solution8",
      image: "/so/so7.jpg",
      text: "",
    },
    {
      name: "Transformers can being silent savings",
      link: "/solution/solution8",
      image: "/so/so8.jpg",
      text: "",
    },
  ];
  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {items.map(({}, index) => {
              return (
                <div key={index} className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 relative overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover brightness-50  object-center h-full w-full"
                      src="/solutions/solution1.jpg"
                    />
                    <p className="absolute text-white top-20 left-20">
                      titile -here
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}



<section className="md:pt-14 md:pb-10 text-zinc-90 bg-lightgray">
        <div className="lg:container p-4 mx-auto">
          <div className="flex gap-4 justify-center mb-10">
           
            <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
            Solutions
            </h1>
           
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12 gap-4 pt-4 lg:pt-8">
            {items.map(({ name, name2, image, id, link }) => (
              <Link key={id} href={link}>
                <div className="w-auto relative">
                  <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                    <Image
                      layout="fill"
                      alt=""
                      objectFit="cover"
                      src={image}
                      className="brightness-75"
                    />
                    <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                    <div className="flex items-center justify-between z-40 w-full p-4 mb-10 ">
                      <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                        {name} 
                      </h1>
                      {rightIcon}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
