import Image from "next/image";
import Slider from "../components/slider";
import Link from "next/link";
import Projectscard from "../components/projectscard";
import SolutionBoard from "../components/solutionboard";
import IconPages from "../components/iconspages";
import Typewriter from "typewriter-effect";
export default function Home() {
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

  const whyworkwithus = [
    {
      id: 1,
      text: "Long-term Water & Energy Resilience",
    },
    {
      id: 2,
      text: " A Strong Sustainability Brand",
    },
    {
      id: 3,
      text: " Boosts your Bottomline with reduced OpEx",
    },
    {
      id: 4,
      text: "  Enhances Value for Customer ",
    },
    {
      id: 5,
      text: " Comprehensive Net Zero solutions customized for each business",
    },
    {
      id: 6,
      text: "   Greater Asset Longevity and Smarter Performance",
    },
  ];
  const offerings = [
    {
      id: 1,
      name1: "Energy ",
      name2: "Efficiency ",
      images: "/ouroffering/energy.png",
      links: "",
    },
    {
      id: 2,
      name1: "Water",
      name2: "Management",
      images: "/ouroffering/water.png",
      links: "",
    },
    {
      id: 3,
      name1: "Renewable  ",
      name2: "Energy",
      images: "/ouroffering/solar.png",
      links: "",
    },

    {
      id: 4,
      name1: "Carbon ",
      name2: "Trading",
      images: "/ouroffering/carbon.png",
      links: "",
    },
  ];

  return (
    <>
      <section
        className=" lg:h-[800px]   "
        style={{
          backgroundImage: `url(${"/down/welcometothe.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container md:mx-auto flex h-[500px] md:h-[700px] lg:h-full md:justify-center  items-center">
          <div className="text-white md:w-[70%] w-[100%] mt-14 text-center h-[200px] md:h-[200px] leading-none text-2xl md:text-5xl font-bah">
            <Typewriter
              className="text-white text-3xl"
              options={{
                strings: [
                  "Do Good. Do Well.",
                  "Accelerate sales with smart solutions for your clients.",
                  "Keep your business simple. Make the planet sacred.",
                  "Look at 4x growth with AltTech's rare approach to mentoring market, and capital. ",
                  // "Connect, learn, collaborate with the auditing ecosystem and deliver world-class services",
                ],
                autoStart: true,
                loop: true,
                delay: 60,

                deleteSpeed: 0,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>
      </section>

      <Projectscard />

      {/* whyworkwithus/////////////////////////////////////////////////// */}
      {/* <section
        className="text-black bg-green body-font  overflow-hidden lg:py-12"
        style={{
          backgroundImage: `url(${"/carosel/welcometothe.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" container mx-auto  lg:rounded-lg text-left">
          <div className="lg:w-full mx-auto flex flex-col  lg:flex-col ">
            <div className="lg:w-full w-full   mt-6 lg:mt-0 ">
              <div className="w-full flex gap-4 lg:justify-center ">
                <h1 className=" capitalize text-xl lg:text-4xl  text-white text-center ">
                  Getting a Hold of Essential Sustainability <br /> Without the
                  RISK of Your Investing
                </h1>
              </div>
            </div>
            <div className="p-10  flex justify-center">
              <video controls autoPlay width="" className="w-[642px] h-[362px]">
                <source src="/video-example.webm" type="video/webm" />
                <source src="/video/grass.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section> */}
      <section
        data-aos="fade-up"
        className="text-black bg-lightgray body-font  "
        // style={{
        //   backgroundImage: `url(${"/carosel/welcometothe.png"})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className=" md:container md:mx-auto md:p-0 p-5   lg:rounded-lg text-left">
          <div className="lg:w-full     md:my-16 flex flex-col lg:flex-col ">
            <div className="md:mb-20 mt-8 mb-8 md:mt-24 flex justify-center    flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="w-full flex  lg:justify-center ">
                  <h1 className="  text-xl lg:text-3xl mb-10 text-black text-left ">
                    {`  Getting a hold of essential sustainability
without the risk of your investing`}
                  </h1>
                </div>
                <p className=" text-justify   text- text-black leading-loose">
                  Sustainability is a business approach to creating long-term
                  value by examining how you operate in the AltTech ecological,
                  social and economic environment. Developing such strategies
                  offers long-term, competitive advantage. With the need for
                  greater corporate responsibility and transparency, companies
                  now recognize the need to go sustainable and soften AltTech
                  ecological footprint.
                </p>
              </div>
              <div className="md:w-1/2 mb-13">
                {" "}
                <div className="flex justify-center">
                  <video controls width="" className="md:w-[642px] h-[362px]">
                    <source src="/video-example.webm" type="video/webm" />
                    <source src="/video/grass.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <Link href="/adat">
                <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
                  READ MORE
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <IconPages />

      <section className=" md:container md:mx-auto flex flex-col justify-center">
        <div className="w-full flex  justify-center ">
          <h1 className=" capitalize text-xl lg:text-3xl my-7 text-black text-center lg:text-left ">
            {` A whole New World Of Solutions `}
          </h1>
        </div>
        <div className="md:flex hidden justify-center">
          <img src="/solutions/solution.png" alt="" />
        </div>
        <div className="flex md:hidden  justify-center">
          <img src="/solutions/solutionmob.png" alt="" />
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${"/down/ourvision1.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=""
      >
        <SolutionBoard />
      </section>
      <section className="flex  md:container md:mx-auto justify-center">
        <div>
          <p className="text-3xl text-black text-center mt-14">
            How It Works For You
          </p>
          <img
            className="md:flex hidden"
            src="/solutions/howitwork.png"
            alt=""
          />
          <img
            className="flex w-[600px] md:hidden"
            src="/solutions/howitowrkmob2.png"
            alt=""
          />
          <div className="flex justify-center mt-4 mb-20 ">
            <Link href={"/solution"}>
              <p className="text-blue hover:border-blue hover:border-2 p-2 font-bold bg-white border-blue border-2   ease-in duration-300 rounded-md  hover:bg-blue hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                Explore Solutions
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="p-4 md:container flex justify-center md:mx-auto">
        <div className="flex flex-col  mb-6 w-[1200px] border  rounded-r-full bg-[#20303c] rounded-l-full">
          <p className="text-center text-3xl text-white my-4">
            How can you engage with  AltTech ?{" "}
          </p>
          <div className="flex justify-center mt-4 mb-8 ">
            <Link href={""}>
              <p className="text-white hover:border-white border-2 p-3 font-bold bg-[#20303c] ease-in duration-300 rounded-md  hover:bg-white hover:text-black   flex justify-center items-center text-left hover:cursor-pointer">
                Know More
              </p>
            </Link>
          </div>
        </div>
      </section> */}

      <section
        style={{
          backgroundImage: `url(${"/down/handplant2.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container mb- md:mx-auto">
          <div className="w-full flex  lg:justify-center ">
            <h1 className=" capitalize text-xl lg:text-3xl my-10 text-white text-left ">
              {` What You Get `}
            </h1>
          </div>
          <div className="grid    items-center grid-cols-1 md:grid-cols-3">
            {whyworkwithus.map(({ text }, index) => {
              return (
                <div className="my-12  p-2 flex justify-center " key={index}>
                  <p className="mt-2 ">
                    ✅<span> </span>
                  </p>
                  <p className="text-white w-[300px] font-semibold text-xl">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <section className="md:pt-8 md:pb-10  text-zinc-90 bg-blue">
        <div className="lg:container p-4 mx-auto mb-8">
          <div className="flex gap-4 justify-center mb-10">
            <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
              Our Offerings
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12 gap-4 pt-4 lg:pt-8">
            {offerings.map(({ name1, name2, images, id, links }) => (
              <Link key={id} href={links}>
                <div className="w-auto relative">
                  <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                    <Image
                      layout="fill"
                      alt=""
                      objectFit="cover"
                      src={images}
                    />
                    <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                    <div className="flex items-center justify-between z-40 w-full p-4 ">
                      <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                        {name1} <br /> {name2}
                      </h1>
                      {rightIcon}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
