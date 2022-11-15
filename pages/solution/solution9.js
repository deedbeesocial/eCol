import Image from "next/image";
import Link from "next/link";
function SolutionNine() {
  return (
    <>
      <section className="bg-whit">
        <section>
          <div
            className="h-72 flex flex-col justify-center items-center"
            style={{
              backgroundImage: "url('/down/handplant2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="h-[90px] w-3/4 flex justify-center   items-center font-bah text-2xl text-white "
            >
              <p className="text-3xl font-bah  title-font text-white ">
                Re-engineering Local Distribution Energy.
              </p>
            </div>
          </div>
        </section>
        <div className=" lg:px-6 py-10 lg:container lg:mx-auto">
          <h1 className="text-3xl text-center  text-black capitalize lg:text-4xl ">
            The Problem
          </h1>
          <p className="text-center p-4 my-5">
            The transformer in your office campus potentially loses 10-12
            percent energy because of poor power quality.
          </p>
          <h1 className="text-3xl text-center  my-5 text-black capitalize lg:text-4xl ">
            Solution Arrays
          </h1>
          <div className="w-full bg-slate-800  grid grid-cols-1 justify-center h-fit">
            <p className="text-white p-4 text-center border">
              Installing of power quality monitoring systems (PQMs) to monitor,
              govern and rationalize power flow from the external grid into the
              distribution gird, and further into feeder pillar boxes,
              distribution boxes , sub DV, etc.
            </p>
            {/* <p className="text-white p-4 text-center border">
              Treat STP output water to Health Grade
            </p>
            <p className="text-white p-4 text-center border">
              Dismantle softener plant and re-sell and avoid all maintenance
              challenges of rock salt, of scaling of pipes and reduced life of
              pipeline assets of the building
            </p> */}
          </div>
          <h1 className="text-3xl text-center  my-6 text-black capitalize lg:text-4xl ">
            Outcomes
          </h1>
          <div className="flex flex-col    lg:flex-row  justify-center  gap-20">
            <div className="flex   flex-col  rounded-3xl  justify-around h-[400px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/econo.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Economics</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Saving of 8-12% on the local grid with no compromise on
                    comfort for the consumer
                  </p>
                  <p
                    className="text-black text-justify  h-fit text-center 
 mt-4 "
                  >
                    ✅ Higher asset longevity thanks to improved maintenance
                    protocols
                  </p>
                </div>
              </div>
            </div>

            <div className="flex   flex-col  rounded-3xl  justify-around h-[400px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/eclo.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Ecological</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Lesser use of electricity reducing the environment cost
                    of generating electricity
                  </p>
                  <p
                    className="text-black text-justify  h-fit text-center 
 mt-4 "
                  >
                    ✅ Lesser coal mining and less use of extracted coal
                  </p>
                </div>
              </div>
            </div>
            <div className="flex   flex-col  rounded-3xl  justify-around h-[400px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/social.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Social</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Softer footprint with less use of natural resources
                  </p>
                  {/*  <p className="text-black text-justify  h-fit text-center 
 mt-4 ">
                    ✅ Save of diesel and transportation cost
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SolutionNine;
