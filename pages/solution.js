import React from "react";

export default function Solution() {
  const items = [
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
    {
      name: "",
      link: "",
      image: "",
      text: "",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
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
      </section>
    </>
  );
}
