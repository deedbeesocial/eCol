import React from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Managed() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <>
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
            <p className="text-2xl font-bah text-center title-font text-white ">
              When you save energy or water at your building, you cut operating
              costs, and nurture a valuable resource for the future.
            </p>
          </div>
        </div>
      </section>
      <section className=" pb-10 text-zinc-9 bg-lightgray" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid mb-14 lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="AuditingFirms"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                5 Star Hotel
              </h2>
              <p className="prose text-justify text-black font-bah pt-8">
                Alttech drives transformative solutions to create sustainability
                with zero import of water, only 30% import of energy, zero
                export of waste water and waste and air quality that meets the
                best global norms.
              </p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                      <table className="min-w-full bg-slate-800">
                        <thead className="border">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Number Of Rooms
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Water saved per Year(l)
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Money Saved Per Year
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Carbon Footprint Reduction(kgs)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b ">
                            <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-white">
                              100
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹7,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              3,500
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              150
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              7,50,001
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              200
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹15,00,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              250
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹20,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-[430px] md:mt-16 relative"
            >
              <Image
                layout="fill"
                className="absolute h-[700px] w-full object-cover"
                alt=""
                src="/build/1.jpg"
              />
            </div>

            <div
              className="w-full font-bah block h-[10px] md:h-[50px] lg:col-span-2  col-span-1 "
              id="CharteredAccount"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 mt-5 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/build/2.jpg"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Shopping Malls
              </h2>
              <p className="prose text-black text-justify font-bah pt-8">
                {`While we enjoy the comfort of malls you don't realise that keeping you cool costs 100-150 thousand litres per day of water that feeds chiller plants. Alttech disrupts technology and cost, while offering staggering savings.`}
              </p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                      <table className="min-w-full bg-slate-800">
                        <thead className="border">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Size in Sqft
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Water saved per Year(l)
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Money Saved Per Year
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Carbon Footprint Reduction(kgs)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b ">
                            <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-white">
                              {`<10,000`}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹7,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              3,500
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              10,000-30,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              7,50,001
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              30,000-1,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              8,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              className="w-full block h-[10px] md:h-[50px] lg:col-span-2  col-span-1 "
              id="Corporations"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Technology Parks
              </h2>
              <p className="prose text-black  text-justify font-bah pt-8">
                {`Post-pandemic, technology parks are under pressure to improve bottom lines. Alttech solutions can cut your building's running cost, with retrofit investments that fetch over 20-30% IRR.  `}
              </p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                      <table className="min-w-full bg-slate-800">
                        <thead className="border">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Size in Sqft
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Water saved per Year(l)
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Money Saved Per Year
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Carbon Footprint Reduction(kgs)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b ">
                            <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-white">
                              {`< 10,000 `}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹7,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              3,500
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              10,000-30,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              7,50,001
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              30,000-1,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              8,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              {`> 1,00,000 `}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹20,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <p className="prose font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto md:mt-24 h-48 lg:h-[500px] relative"
            >
              <Image
                layout="fill"
                className="absolute h-[400px] w-full object-cover"
                alt=""
                src="/build/3.jpg"
              />
            </div>

            <div
              className="w-full font-bah block h-[10px] md:h-[50px] lg:col-span-2  col-span-1 "
              id="Regulators"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto mt-5 h-48 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/build/5.jpg"
              />
            </div>

            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Educational Institutions
              </h2>
              <p className="prose text-black  text-justify font-bah pt-8">
                Sprawling campuses, intense use of cold/hot water, and food
                opens opportunity for major savings with minimal investments. It
                also inspires resident students into being eco-sensitive and
                adopting such future-proofed directions in their career paths.
              </p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                      <table className="min-w-full bg-slate-800">
                        <thead className="border">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Size in Sqft
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Water saved per Year(l)
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Money Saved Per Year
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Carbon Footprint Reduction(kgs)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b ">
                            <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-white">
                              {`<300 `}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹7,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              3,500
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              300-600
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              7,50,001
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              600-1,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              8,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              {`>1,000 `}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹20,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              className="w-full block h-[10px] md:h-[50px] lg:col-span-2  col-span-1 "
              id="Corporations"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Industries
              </h2>
              <p className="prose text-black  text-justify font-bah pt-8">
                Post-Covid disruptions in markets for the small and medium
                sector, has driven industry to the wall. How can your savings be
                your earnings across segments and geographies? Alttech shows the
                way with Opex savings that bring payback in quick time. You can
                also put an Alttech ogical face to the company to help brand and
                market.
              </p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                      <table className="min-w-full bg-slate-800">
                        <thead className="border">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Size in Sqft
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Water saved per Year(l)
                            </th>
                            <th
                              scope="col"
                              className="text-sm border font-medium text-white px-6 py-4 text-left"
                            >
                              Money Saved Per Year
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4 text-left"
                            >
                              Carbon Footprint Reduction(kgs)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b ">
                            <td className="px-6 py-4 border whitespace-nowrap text-sm font-medium text-white">
                              {`<5,000 `}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹7,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              3,500
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              10,000-30,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              7,50,001
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              5,000-20,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              7,50,001
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              5,000
                            </td>
                          </tr>
                          <tr className="bg-slate-800 border-b">
                            <td className="px-6 border py-4 whitespace-nowrap text-sm font-medium text-white">
                              {`20,000-1,00,000 `}
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              10,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              ₹15,00,000
                            </td>
                            <td className="text-sm border text-white font-light px-6 py-4 whitespace-nowrap">
                              8,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <p className="prose font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto mt-5 h-48 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/build/6.jpg"
              />
            </div>

            {/* <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Outsourcing"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/outsourcing.png"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Outsourcing</h2>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores corporis magnam esse perspiciatis odit asperiores corrupti dicta atque reprehenderit eaque aspernatur nam praesentium, quod natus cum provident voluptatem architecto. Explicabo, impedit ad quibusdam dolorum adipisci ipsa sequi rerum, voluptatem ipsam quo est consequatur officiis nobis accusamus neque sint. Saepe repellat ipsa sunt, adipisci veniam praesentium impedit asperiores unde? Similique.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div> */}

            {/* <div
              className="w-full h-[100px] md:block hidden  lg:col-span-2  col-span-1 "
              id="Staffing"
            ></div>

            <div className="w-auto">
              <h2 className="text-xl ">Staffing</h2>
              <p className="prose pt-8">
                People are the key ingredient to the success of any project or
                initiative. Getting people on-boarded on-time within the budget
                is always a challenge. This is where our expertise can help you.
                We have a strong network of skilled professionals who can be
                staffed quickly across multiple roles, and many of our customers
                have realized enhanced productivity, reduced staffing and
                recruitment costs by partnering with us. We deploy talent with
                not just the right skills, but also the right attitude and
                experience needed for your projects. We also specialize in
                deploying SAP, Oracle professionals and senior executive hiring.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/staffing.png"
              />
            </div>
            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Upskilling"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/upskilling.png"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Upskilling</h2>
              <p className="prose pt-8">
                The digital services eco-system as we know it is undergoing a
                paradigm shift. New stacks and standards are emerging faster
                than ever, and every organization with a digital footprint is
                under serious pressure to quickly build and maintain a
                future-ready workforce. It is no secret that even large
                corporations with immense resources at their disposal are
                struggling to cope with this challenge. Empowering workforce on
                the go requires deep expertise that can be brought within the
                time and cost allocated. Our knowledge services ecosystem is
                constantly connected/updated with experts who can deliver
                online/offline trainings on several in-demand technology skills
                for your project teams and campus recruits.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
