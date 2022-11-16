import React from "react";

export default function solutionboard() {
  const items = [
    {
      name: "Hospitality & Healthcare",
      icon: "/icon/bed.png",
    },
    {
      name: "Real Estate",
      icon: "/icon/realestate.png",
    },
    {
      name: "Chemical",
      icon: "/icon/chemical.png",
    },
    {
      name: "Pharma",
      icon: "/icon/pharama.png",
    },
    {
      name: "Fmcg",
      icon: "/icon/ahndwash.png",
    },
    {
      name: "Civil Engineering",
      icon: "/icon/xivil.png",
    },
    {
      name: "Automotive",
      icon: "/icon/automotive.png",
    },
    {
      name: "F&B",
      icon: "/icon/food.png",
    },
  ];

  return (
    <>
      <div className="flex md:container md:mx-auto justify-center my-10  flex-col">
        <div className="flex my-14 justify-center ">
          <p className="text-3xl text-white text-center mb-4">
            Solutions Across The Board
          </p>
        </div>

        <div className="grid grid-cols-1  justify-center items-center md:grid-cols-4 gap-x-16 gap-y-2 mb-24 flex-wrap ">
          {items.map(({ name, icon }, index) => {
            return (
              <div
                key={index}
                className="w- border-slate-300 p-5 border-2 flex flex-col justify-center "
              >
                <p className="text-white text-lg font-bold text-center mb-2 ">
                  {name}
                </p>
                <div className="flex justify-center">
                  <img src={icon} className="w-[64px] h-[64px]" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
