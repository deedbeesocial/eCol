import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";
import Link from "next/link";
export default function Resources() {
  const [videoss, setVideoss] = useState(null);
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const loadclick = (videoss) => {
    setVideoss(videoss);
    setFullblog(1);
  };
  const { asPath } = useRouter();
  useEffect(() => {
    const hashes = ["Blogs", "Videos", "News"];
    const whichButton = hashes.indexOf(asPath.split("#")[1]);

    setButtonIndex(whichButton === -1 ? 0 : whichButton);
  }, [asPath]);

  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };

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
  const discover = [
    {
      name: "Blogs",
      id: 0,
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Should water be used just once? ",
          link: "/blogs/blogOne",
          image: "/so/so1.jpg",
          blogId: 0,
        },
        {
          name: "What Water Fix Do You Have at Your Office?",
          link: "/blogs/blogTwo",
          image: "/so/so2.jpg",
          text: "",
          blogId: 0,
        },
        {
          name: "Water Woes of India’s Cities",
          link: "/blogs/blogThree",
          image: "/so/so3.jpg",
          text: "",
          blogId: 0,
        },
        // {
        //   name: "Upcycle way more than half the water you see",
        //   link: "/solution/solution4",
        //   image: "/so/so4.jpg",
        //   text: "",
        // },
        // {
        //   name: "You produce you consume.You prosume",
        //   link: "/solution/solution5",
        //   image: "/so/so5.jpg",
        //   text: "",
        // },
        // {
        //   name: "Get your assets to speak to you",
        //   link: "/solution/solution6",
        //   image: "/so/so6.jpg",
        //   text: "",
        // },

        // {
        //   name: "Revamps your central AC and clip a chunk",
        //   link: "/solution/solution8",
        //   image: "/so/so7.jpg",
        //   text: "",
        // },
        // {
        //   name: "Transformers can being silent savings",
        //   link: "/solution/solution9",
        //   image: "/so/so8.jpg",
        //   text: "",
        // },
      ],
    },
    {
      name: "Videos",
      id: 1,
      img: "/discover/discover1.png",
      para: "",
      desc: "",
      blogsdata: [
        {
          name: "GRIP Main 2 new wa 1",
          blogId: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/vdothumb.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/FalH9iXfPvc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "GRIP Main 2",
          blogId: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/vdothumb.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/k2iruntgUbQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "GRIP Final Video Presentation 1",
          blogId: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/vdothumb.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/rIVdFLEBHk8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },

        {
          name: "GRIP Final VideoPresentation 2",
          blogId: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/vdothumb.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/_S4P9PnKUDI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        // {
        //   name: "loremipsum",
        //   desc: " ",
        //   imgs: "/yogatv/2.jpg",
        //   vidoes: (
        //     <iframe
        //       width="100%"
        //       height="100%"
        //       src=""
        //       title="YouTube video player"
        //       frameBorder="0"
        //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //       allowFullScreen="allowfullscreen"
        //     ></iframe>
        //   ),
        // },
        // {
        //   name: "loremipsum",
        //   desc: " similique optioducimus provident, ",
        //   imgs: "/yogatv/3.jpg",
        //   vidoes: (
        //     <iframe
        //       width="100%"
        //       height="100%"
        //       src=""
        //       title="YouTube video player"
        //       frameBorder="0"
        //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //       allowFullScreen="allowfullscreen"
        //     ></iframe>
        //   ),
        // },
      ],
      blogsdatafull: [],
    },

    {
      name: "News",
      id: 2,
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Water Woes of India’s Cities",
          link: "/blogs/blogThree",
          image: "/so/so3.jpg",
          text: "",
          blogId: 2,
        },
      ],
    },
  ];

  return (
    <section className="bg-lightgray">
      <section className="md:container mx-auto">
        <div className="py-5  md:py-10">
          <section className=" ">
            <p className="text-3xl font-bah  title-font text-black text-center mb-2"></p>
            <div className="md:container flex justify-center md:mx-auto">
              <ul className="grid grid-flow-col gap-4 w-full md:w-1/2 mt-5 text-center  text-black  rounded-full p-1">
                {discover.map(({ name, id }, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        buttonClick(index);
                        console.log(buttonIndex);
                      }}
                    >
                      <p
                        className={`${
                          index === buttonIndex
                            ? " text-blue text-2xl font-bold font-bah border-blue border-b-4"
                            : ""
                        } flex justify-center text-xl  font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                      >
                        {name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          {/* <p className="text-black text-xl font-bah text-center p-8">
            "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
            perspiciatis unde omnis iste."
          </p> */}

          <div
            className={
              "grid gap-6 mt-8 row-gap-5 mb-8 lg:grid-cols-3 justify-center sm:row-gap-6 sm:grid-cols-2"
            }
          >
            {discover[buttonIndex].blogsdata.map(
              (
                { name, imgs, desc, blogId, vidoes, name2, image, id, link },
                index
              ) => {
                if (blogId === 0) {
                  return (
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
                  );
                } else if (blogId === 1) {
                  return (
                    <div
                      key={index}
                      // onClick={() => loadclick(vidoes)}
                      href="/"
                      aria-label="View Item"
                    >
                      {vidoes}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      onClick={() => loadclick(vidoes)}
                      href="/"
                      aria-label="View Item"
                    >
                      <p className="text-xl h-80  text-center w-full font-bah">
                        Coming Soon
                      </p>
                      {/* <div className="relative rounded shadow-lg  hover:shadow-2xl">
                      <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={imgs}
                        alt=""
                      />
                      <div className="absolute top-[30%] left-[40%] animate-pulse duration-100 ">
                        <FaPlay color="slate" size={80} />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-sm font-medium font-bah tracking-wide text-white">
                          {name}
                        </p>
                      </div>
                    </div> */}
                    </div>
                  );
                }
              }
            )}
          </div>
          {videoss && (
            <div
              className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
            >
              <div
                className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
              >
                <div className="lg:w-full bg-opacity-0 h-fit    bg-white flex flex-col  overflow-auto w-full">
                  <div
                    onClick={() => loadclick(null)}
                    className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
                  >
                    X
                  </div>
                  <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">
                    {videoss}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <div className="text-center flex justify-center">
            <button className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg">
              Watch More
            </button>
          </div> */}
        </div>
      </section>
    </section>
  );
}
