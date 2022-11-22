import Image from "next/image";
import Link from "next/link";
function SolutionFive() {
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
                {` Solar is not just about going green. it's about getting smart on use.`}
              </p>
            </div>
          </div>
        </section>
        <div className=" lg:px-6 py-10 lg:container lg:mx-auto">
          <h1 className="text-3xl text-center  text-black capitalize lg:text-4xl ">
            The Problem
          </h1>
          <p className="text-center p-4 my-5">
            You pay Rs 8 to 14 per unit of power you consume. You run the risk
            of shutdowns.
          </p>
          <h1 className="text-3xl text-center  my-5 text-black capitalize lg:text-4xl ">
            Solution Arrays
          </h1>
          <div className="w-full bg-slate-800  grid grid-cols-1 justify-center h-fit">
            <p className="text-white p-4 text-center border">
              By producing power you consume, you cut your energy bill from 20
              to as much as 70 per cent. The trick is to get the right
              combination going
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
                <div className="md:w-[267px] flex flex-col justify-center p-5 h-[px]">
                  <div className="w-full flex justify-center">
                    <div className="w-[70px] rounded-full  h-[70px]">
                      <img src="/icon/econo.png" alt="" />
                    </div>
                  </div>
                  <p className="text-center">Economics</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Drop grid energy use by ~70% with the hybrid mode that
                    combines energy eficiency and energy generation
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
                  <p className="text-center"> AltTech ogical</p>
                  <p className="text-black text-justify h-fit   mt-4 ">
                    ✅ Decrease use of Fossil fuel and coal to generate
                    electricity
                  </p>
                  <p
                    className="text-black text-justify  h-fit text-center 
 mt-4 "
                  >
                    ✅ Reduce land use and Habitat loss due to Mining for Coal
                  </p>
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
                    ✅ Solar emits very little to no pollution into the air
                  </p>
                  <p
                    className="text-black text-justify  h-fit text-center 
 mt-4 "
                  >
                    ✅ Reduction on dependency on coal from Indonesia or
                    Australia to produce electricity
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
export default SolutionFive;
