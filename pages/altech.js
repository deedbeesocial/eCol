import React from "react";
import Image from "next/image";

export default function Altech() {
  return (
    <>
    <section className="md:height-screen">      <section
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
            We give back
          </p>
        </div>
      </section>
      <div className="md:container md:h-screen  md:p-0 p-5  mx-auto">
        <div>
          <h2 className="text-3xl font-bah text-center title-font text-black  mt-6 mb-4"></h2>
          <p className="prose text-justify p-4 text-black font-bah mt-10 mb-10">
            At AltTech Consortium we strive to stimulate business and stimulate
            the economy with distinct green strategies. We also give back to the
            planet, to the community. The planet’s bleeding. There’s so much bad
            news. Humanity is indifferent. We continue with our lives as if
            nothing’s changed. Every thing is not any longer the same. For all
            we know Earth won’t accept the damage we’ve wrecked the last 100
            years. We have to mend, like there’s no tomorrow. We consult,
            mentor, strategise and offer business value for you. And we put all
            our net proceeds back into sustainability education for emerging
            adults{" "}
            <span className="font-semibold active:text-red underline   font-bah  hover:text-orange decoration-blue text-blue">
              <a
                href="https://www.alttech.foundation/foundationgreen"
                target="_blank"
                rel="noreferrer"
              >
                (Foundation Green),
              </a>
            </span>{" "}
            offer water literacy for kids{" "}
            <span className="font-semibold active:text-red underline   font-bah  hover:text-orange decoration-blue text-blue">
              {" "}
              <a
                href="https://www.alttech.foundation/"
                target="_blank"
                rel="noreferrer"
              >
                (RainReach),
              </a>
            </span>
            for galvanising action among city leaders
            <span className="font-semibold cursor-pointer ">
              <a
                href="https://www.alttech.foundation/worldofwater"
                className="underline active:text-red underline   font-bah  hover:text-orange decoration-blue text-blue"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                (WOW Action Forum).
              </a>
            </span>
            <br /> Work with us. We better your bottom line. While we do our bit
            to heal the planet.
          </p>
        </div>
        {/* <div className="grid mb-14 lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
          <div
            className="w-full block h-[10px] md:h-[0px] lg:col-span-2  col-span-1 "
            id="AuditingFirms"
          ></div>
          <div className="w-auto mt-16">
            <h2 className="text-3xl font-bah  title-font text-black   mb-4">
              We give back
            </h2>
            <p className="prose text-justify text-black font-bah pt-2">
              At AltTech Consortium we strive to stimulate business and
              stimulate the economy with distinct green strategies. We also give
              back to the planet, to the community. The planet’s bleeding.
              There’s so much bad news. Humanity is indifferent. We continue
              with our lives as if nothing’s changed. Every thing is not any
              longer the same. For all we know Earth won’t accept the damage
              we’ve wrecked the last 100 years. We have to mend, like there’s no
              tomorrow. We consult, mentor, strategise and offer business value
              for you. And we put all our net proceeds back into sustainability
              education for emerging adults <span className="font-semibold cursor-pointer">(Foundation Green),</span> offer water
              literacy for kids <span className="font-semibold cursor-pointer">(RainReach),</span>  for galvanising action among city
              leaders<span className="font-semibold cursor-pointer">(WOW Action Forum).</span> Work with us. We better your bottom
              line. While we do our bit to heal the planet.
            </p>

           
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
        </div> */}
      </div>
      </section>

    </>
  );
}
