import Image from "next/image";
import Link from "next/link";
function About() {
  const team = [
    {
      name: "Dr. Hariharan Chandrashekar",
      image: "/about/chandra.png",
      role: "",
      description:
        "Dr. Hariharan is an environmental economist, entrepreneur, sustainability professional, mentor, writer, policy advocate and urban analyst. He is founder of BCIL AltTech Foundation, a non-government, not-for-profit, industry-led and industry-managed Trust. Its mission objective and his work over thirty years has focused on zero energy development strategies for buildings with freedom from the grid for energy, water and waste.",
    },
    {
      name: "U V Krishna Mohan Rao",
      image: "/about/uv.png",
      role: "",
      description:
        "U V Krishna Mohan Rao, is an engineer with a Masters from the College of Engineering, University of Wisconsin, and IIM-A in the early 1980s. He worked for a decade with the legendary C K Prahalad of Michigan University. For nearly four decades, he has practised energy efficiency with solutions offered for a host of marquee companies in India, and 20 other countries, with over 3000 energy audits that he has presided over in a cross section of industry segments. He is currently energy advisor for 5 star hotel chains in India. UVK is actively involved in Green Business and to date covered over 200 million sq.ft for sustainability consulting including IT Parks, Malls, Hotels, Resorts, Residential and Temple complexes.",
    },
    {
      name: "Pallavi Singh",
      image: "/about/palvi.jpg",
      role: "",
      description:
        "Pallavi Singh is an Urban and Regional Planner, and Research Associate at AltTech.Foundation. She has worked on socio-economic and development aspects of urban development and governance for cities like Usilampatti in TN, Bhopal and Jabalpur in MP. She has been city representative for a project under Climate Action Framework for Smart cities  for Rourkela in Odisha. She has written a chapter for a book titled “Advances in Urbanism, Smart Cities and Sustainability” to be published by Taylor and Francis group/CRC Press.",
    },
  ];

  return (
    <section className="bg-lightgray">
      <section
        style={{
          backgroundImage: `url(${"/down/handplant2.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container flex flex-col justify-center h-72 md:mx-auto">
          <p className="text-4xl tracking-wide  text-center  text-white">
            {" "}
            The future is here – NOW!
          </p>
          <p className="text-xl text-center p-5 text-white">
            {" "}
            Grab this opportunity to reinvent running costs and shore up bottom
            lines as you heed the Covid alarms on Earth.!
          </p>
        </div>
      </section>
      
        {/* <div className="p-4 md:container flex flex-wrap gap-10 mx-auto">
          <div className="w-auto lg:min-w-[700px] flex-1 pb-10">
            <h1 className="text-4xl text-center tracking-wide  text-black">
              Sustainability
            </h1>
            <p className="prose text-justify pt-8 p-5">
              Sustainability is a business approach to creating long-term value
              by examining how you operate in the ecological, social and
              economic environment. Developing such strategies offers long-term,
              competitive advantage. With the need for greater corporate
              responsibility and transparency, companies now recognize the need
              to go sustainable and soften ecological footprint.
            </p>
          </div>

          <div className="w-full flex lg:flex-row   mb-8 flex-1 lg:w-full md:h-fit lg:gap-0 gap-10 items-center  md:flex-col flex-col   ">
            <div className="lg:w-full  flex   lg:min-w-[357px]   lg:h-full  md:h-[400px]  h-[300px] relative">
              <Image
                className=""
                layout="fill"
                alt=""
                objectFit=" cover "
                src="/down/carbon.png"
              />

              <div className="w-full h-[300px] text-white    lg:p-20    flex flex-col justify-center items-center relative ">
                <p className="text-center text-2xl mb-2 font-semibold "></p>
                <p className="pt-4 text-xl text-white text-center leading-loose"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[20px]" id="Core-values"></div>

      <section className=" lg:container mx-auto   text-black">
        <h1 className="text-4xl tracking-wide mb-10 text-center  text-black">
          WHY eCol?
        </h1>
        <div className="flex gap-32 justify-center  flex-row">
          <div className="w-1/2">
            <p className=" prose text-justify pt-8 p-2">
              At eCol we believe that we need to find ways to meet our current
              consumption needs without jeopardizing the future. Business
              growth, profitability and sustainability cannot exist in
              isolation.{" "}
              <span className="font-semibold tracking-wide mb-10 text-center  text-black">
                We want to help create a profitable green future.
              </span>
            </p>

            <p className="text-black text-justify  p-2 ">
              {`
          eCol brings innovative Green Financing solutions for building
          infrastructure. Off-balance sheet mechanisms which own a range of
          applicable equipment configured in such a way as to reduce the
          operations cost of buildings. eCol brings professional analyses of
          properties, designs for water and energy efficient solutions, installs
          infrastructure elements, and maintains systems to ensure energy
          savings with defined payback period. ​ eCol Solutions synthesizes
          low-carbon strategies for buildings and built environments. We provide
          a wide array of solutions with wholesome approaches to design and
          implementation. If yours is an old building, all the more reason for
          you to retrofit solutions. New projects can gain from 'Doing it right
          the first time'.`}
            </p>
          </div>
          <div>
            <img className="h-[500px]" src="/down/wearezenith.png" alt="" />
          </div>
        </div> */}
        {/* <div className="lg:container mb-10  mx-auto">
         
          <div className="flex justify-center mt-4 mb-8 ">
            <Link href={""}>
              <p className="text-white hover:border-black hover:border-2 p-3 font-bold bg-blue ease-in duration-300 rounded-md  hover:bg-white hover:text-black   flex justify-center items-center text-left hover:cursor-pointer">
               Read More
              </p>
            </Link>
          </div>
        </div> */}
     
      <div className="md:container  mx-auto">
        <div className="grid mb-14 lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
          <div
            className="w-full block h-[10px] md:h-[0px] lg:col-span-2  col-span-1 "
            id="AuditingFirms"
          ></div>
          <div className="w-auto mt-16">
            <h2 className="text-3xl font-bah  title-font text-black   mb-4">
              Sustainability
            </h2>
            <p className="prose text-justify text-black font-bah pt-8">
              Sustainability is a business approach to creating long-term value
              by examining how you operate in the ecological, social and
              economic environment. <br /><br /> Developing such strategies offers long-term,
              competitive advantage. With the need for greater corporate
              responsibility and transparency, companies now recognize the need
              to go sustainable and soften ecological footprint.
            </p>

            {/* <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
              <Link href="/contact">
                <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                  Get in touch
                </a>
              </Link>{" "}
              to know more.
            </p> */}
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="w-auto h-48 lg:h-[600px] md:mt-16 relative"
          >
            <Image
              layout="fill"
              className="absolute h-[800px] w-full object-cover"
              alt=""
              src="/down/carbon2.png"
            />
          </div>

          <div
            className="w-full font-bah block h-[10px] md:h-[50px] lg:col-span-2  col-span-1 "
            id="CharteredAccount"
          ></div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="w-auto h-48 mt-5 lg:h-[650px] relative"
          >
            <Image
              layout="fill"
              className="absolute h-full w-full object-cover"
              alt=""
              src="/down/wearezenith.png"
            />
          </div>
          <div data-aos="fade-up" data-aos-once="true" className="w-auto">
            <h2 className="text-3xl font-bah  title-font text-black   mb-4">
              WHY eCol?
            </h2>
            <p className="prose text-black text-justify font-bah pt-8">
              At eCol we believe that we need to find ways to meet our current
              consumption needs without jeopardizing the future. Business
              growth, profitability and sustainability cannot exist in
              isolation.{" "}
              <span className="font-semibold tracking-wide mb-10 text-center  text-black">
                We want to help create a profitable green future.
              </span>
            </p>
            <p className="prose text-black text-justify font-bah pt-8">
              {`
          eCol brings innovative Green Financing solutions for building
          infrastructure. Off-balance sheet mechanisms which own a range of
          applicable equipment configured in such a way as to reduce the
          operations cost of buildings. eCol brings professional analyses of
          properties, designs for water and energy efficient solutions, installs
          infrastructure elements, and maintains systems to ensure energy
          savings with defined payback period. ​ eCol Solutions synthesizes
          low-carbon strategies for buildings and built environments. We provide
          a wide array of solutions with wholesome approaches to design and
          implementation. If yours is an old building, all the more reason for
          you to retrofit solutions. New projects can gain from 'Doing it right
          the first time'.`}
            </p>

            {/* <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
              <Link href="/contact">
                <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                  Get in touch
                </a>
              </Link>{" "}
              to know more.
            </p> */}
          </div>
        </div>
      </div>

      {/* core teaaaaaaaaaaaaaaaaaaaaaaam */}
      <div className="w-full h-[20px]" id="MeetOur-Team"></div>
      <section className=" md:pt-16 md:pb-10 ">
        <div className="container px-6  mx-auto">
          <h1 className="text-3xl text-center text-black capitalize lg:text-4xl ">
            Meet Our Team
          </h1>

          <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {team.map(({ name, image, role, description, id }) => {
              return (
                <div key={id} className="flex   flex-col items-center p-5">
                  <div className="relative lg:w-[300px] lg:h-[300px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                    <Image
                      className="rounded-full"
                      alt="profle"
                      src={image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <h1 className="mt-4 md: text-2xl  text-black capitalize font-bold ">
                    {name}
                  </h1>
                  <div className="flex flex-col justify-center">
                    <h1 className="md:w-100% h-[2px] mt-5  bg-blue mb-5"></h1>
                    <p className=" prose text-justify pt-2 p-5  ">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
export default About;
