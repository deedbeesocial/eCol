import Image from "next/image";
import Link from "next/link";
function SolutionFour() {
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
                Who says fresh water can be used only once?
              </p>
            </div>
          </div>
        </section>
        <div className=" lg:px-6 py-10 lg:container lg:mx-auto">
          <h1 className="text-3xl text-center  text-black capitalize lg:text-4xl ">
            The Problem
          </h1>
          <p className="text-center p-4 my-5">
            Bangalore uses around 180 Cr litres of fresh water every day. Mumbai
            demands 300 crore litres. Delhi guzzles 350 crore litres a day....{" "}
            <br /> You pay Rs 1000 to Rs 3000 to a tanker of water.
          </p>
          <h1 className="text-3xl text-center  my-5 text-black capitalize lg:text-4xl ">
            Solution Arrays
          </h1>
          <div className="w-full bg-slate-800  grid grid-cols-2 justify-center h-fit">
            <p className="text-white p-4 text-center border">
              Treat all waste water with STP with tertiary treatment systems
            </p>
            <p className="text-white p-4 text-center border">
              Then treat all STP output water to Health Grade
            </p>
            {/* <p className="text-white p-4 text-center border">
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
                <div className="md:w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/econo.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Economics</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Save on ground water pumping and transportation costs
                  </p>
                  {/*  <p className="text-black text-justify  h-fit text-center 
 mt-4 ">
                    ✅ Save of diesel and transportation cost
                  </p> */}
                </div>
              </div>
            </div>

            <div className="flex   flex-col  rounded-3xl  justify-around h-[400px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="md:w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/eclo.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Alttech ogical</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Decrease usage of ground water from aquifers
                  </p>
                  {/*  <p className="text-black text-justify  h-fit text-center 
 mt-4 ">
                    ✅ Save of diesel and transportation cost
                  </p> */}
                </div>
              </div>
            </div>
            <div className="flex   flex-col  rounded-3xl  justify-around h-[400px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="md:w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/social.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Social</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Healthier ground water systems
                  </p>
                  <p
                    className="text-black text-justify  h-fit text-center 
 mt-4 "
                  >
                    ✅ Greater water security and healthy water access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SolutionFour;
