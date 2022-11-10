import React from "react";

export default function solutionboard() {
  const items = [
    {
      name: "HOSPITALITY & HEALTHCARE",
      icon: "/icon/bed.png",
    },
    {
      name: "REAL ESTATE",
      icon: "/icon/realestate.png",
    },
    {
      name: "CHEMICAL",
      icon: "/icon/chemical.png",
    },
    {
      name: "PHARMA",
      icon: "/icon/pharama.png",
    },
    {
      name: "FMCG",
      icon: "/icon/ahndwash.png",
    },
    {
      name: "CIVIL ENGINEERING",
      icon: "/icon/xivil.png",
    },
    {
      name: "AUTOMOTIVE",
      icon: "/icon/automotive.png",
    },
    {
      name: "F&B",
      icon: "/icon/food.png",
    },
  ];

  return (
    <>
      <div className="flex justify-center my-10 w-[1000px] flex-col">
        <div className="flex my-8 justify-center ">
          <p className="text-3xl text-white">SOLUTIONS ACROSS THE BOARD</p>
        </div>

        <div className="grid grid-cols-4 mb-10 flex-wrap ">
          {items.map(({ name, icon }, index) => {
            return (
              
                <div key={index} className="w-[241px] border-slate-300 p-5 border-2 flex flex-col justify-center h-[200px]">
                  <p className="text-white text-center mb-2 ">{name}</p>
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
