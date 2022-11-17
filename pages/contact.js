import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputController from "../components/InputController";

export default function Contact() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const isButtonVisble =
    watch("name") &&
    watch("organization") &&
    watch("email") &&
    watch("phone") &&
    watch("info");
  const submit = handleSubmit(async (data) => {
    const { name, organization, email, phone, info } = data;

    try {
      const response = await fetch(
        "",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name,
            organization,
            email,
            phone,
            info,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          organization: "",
          email: "",
          phone: "",
          info: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });
  const [message, setMessage] = useState(false);

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-lightgray">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide text-blue md:ml-4 ">Contact</h1>

          <div className="flex flex-col-reverse md:flex-row justify-center items-start rounded pt-8 ">
            <div className="md:w-2/5 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  md:ml-4">eCol</p>
              <div className="grid gap-10 grid-cols ">
                <div className="text-base pt-8 text-black md:ml-4">
                  <p>BCIL AltTech Foundation 252, , 2nd Main, 5th Cross,</p>
                  <p>RMV II Stage, Bengaluru KARNATAKA 560094</p>

                  <p>Tel : +9148483490</p>
                  <p>E-Mail ID: altech555@gmail.com</p>
                </div>
                <div className="p-4 lg:p-0 pl-6 mr-6 "></div>
              </div>

              <div className=" md:w-fit w-full  lg:p-0 md:pl-6 mb-2 ">
                <p className="font-semibold md:mt-0 mt-5  pb-2 font-bah  text-black text-center md:text-center">
                  FIND US ON
                </p>
                <div className="md:mt-0 mt-5 md:ml-4 grid-cols-3 gap-10 flex justify-center   ">
                  <a
                    className="hover:scale-105 transition-all"
                    href=""
                    // target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/icons/linkidin.gif" className="w-8 h-8" alt="" />
                  </a>
                  <a
                    className="hover:scale-105 transition-all"
                    href=""
                    // target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/icons/twitter.gif" className="w-8 h-8" alt="" />
                  </a>

                  <a
                    className="hover:scale-105 transition-all"
                    href=""
                    // target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/icons/instagram.gif"
                      className="w-8 h-8"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 w-full">
              <div className=" md:pt-0 pt-12">
                <h2 className="text-2xl text-black ">Write to us</h2>
                <div className="mt-8">
                  <div className="lg:grid flex flex-col justify-center lg:grid-cols-2 gap-6">
                    <InputController
                      control={control}
                      name="name"
                      type="text"
                      label="Name"
                      rules={{
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      }}
                    />
                    <label className="block">
                      <InputController
                        control={control}
                        name="organization"
                        type="text"
                        label="Organization"
                        rules={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        }}
                      />
                    </label>

                    <label className="block">
                      <InputController
                        control={control}
                        name="email"
                        type="text"
                        label="Email"
                        rules={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Enter a valid Email",
                          },
                        }}
                      />
                    </label>
                    <label className="block">
                      <InputController
                        control={control}
                        name="phone"
                        type="number"
                        label="Phone"
                        rules={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        }}
                      />
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="text-black">Type Your Message</span>
                    <textarea
                      className="mt-1 block w-full border border-  lg:h-28 rounded-sm  focus:border-green-700 focus:ring focus:ring-green focus:ring-opacity-50"
                      rows="3"
                      {...register("info", {
                        required: true,
                      })}
                    ></textarea>
                    <label
                      className={`text-red-600   text-xs py-1 ${
                        errors.info ? "visible" : "invisible"
                      }`}
                    >
                      This field is required
                    </label>
                  </label>
                  {/* <div className="mt-6">
                  <label className="block">
                      <span className="text-black">
                      How Did You Hear About us?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full    lg:h-[47px] rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      >
                         <option>Search Engine(Google,Yahoo,etc)</option>
                        <option> Recommended By Friends </option>
                        <option>Social Media</option>
                        <option> Blog Or Publication </option>

                        <option>Others</option>
                       
                      
                      </select>
                    </label>
                  </div> */}
                  <label className="block mt-6"></label>
                  <div className="flex justify-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {`Your message is sent. We'll get back to you at the earliest`}
                      </p>
                    ) : (
                      <button
                        onClick={submit}
                        disabled={!isButtonVisble}
                        // className="mt-8 font-bah h-[50px] w-[100px] border-2 border-black text-black font-bold text-xs hover:text-white hover:border-0 hover:bg-blue p-3 rounded-lg transition-all"
                        className={`w-32 mt-6 bg-blue border-2 border-blue  font-bold text-base hover:text-white hover:bg-blue p-3 rounded-lg text-white  transition-all ${
                          isButtonVisble ? "opacity-100" : "opacity-50 "
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.919291103342!2d77.61561581536508!3d12.977013818269358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16851f62c561%3A0xbd1287a493e651fc!2sAlt%20Tech%20Foundation!5e0!3m2!1sen!2sin!4v1668075093036!5m2!1sen!2sin"
          width="100%"
          height="650"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
{
  /* <button className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${name && email && phone && info && interest?"opacity-100":"opacity-25"}`}>
SEND
</button> */
}
