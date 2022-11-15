import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [nametwo, setNametwo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Contract Manufacturing");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("working");

    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("interest", interest);
    console.log("info", info);

    if (!name || !email || !phone || !info) {
      return;
    }

    const response = await fetch("", {
      method: "POST",
      headers: {},
      body: JSON.stringify({ name, email, phone, info, interest }),
    });

    console.log("response", response);

    if (response.status === 200) {
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setInfo("");
      setMessage(
        "Your message is sent. We'll get back to you at the earliest!"
      );
    } else {
      console.log(JSON.stringify(response));
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeInfo = (e) => {
    setInfo(e.target.value);
  };
  const change = (e) => {
    setNametwo(e.target.value);
  };
  if (name && email && phone && info && interest) {
    console.log("iam visible");
  }

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

              <div className=" md:w-fit w-full  lg:p-0 pl-6 mr-6 mb-2 ">
            <p className="font-semibold md:mt-0 mt-5  pb-2 font-bah  text-black text-center md:text-center">
              FIND US ON
            </p>
            <div className="md:mt-0 mt-5 grid-cols-3 gap-10 flex justify-center   ">
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/linkidin.gif" className="w-8 h-8" alt="" />
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/twitter.gif" className="w-8 h-8" alt="" />
              </a>

              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.gif" className="w-8 h-8" alt="" />
              </a>
            </div>
          </div>
            </div>

            <div className="md:w-3/5 w-full">
              <div className=" md:pt-0 pt-12">
                <h2 className="text-2xl text-black ">Write to us</h2>
                <form className="mt-8" onSubmit={sendMessage}>
                  <div className="lg:grid flex flex-col justify-center lg:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="text-black">Name</span>
                      <input
                        type="text"
                        className="block  w-full lg:h-[47px] rounded-sm   focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={name}
                        onChange={changeName}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Organization</span>
                      <input
                        type="text"
                        className="block  w-full lg:h-[47px] rounded-sm   focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={nametwo}
                        onChange={nametwo}
                      />
                    </label>

                    <label className="block">
                      <span className="text-black">Email</span>
                      <input
                        type="email"
                        className=" block  w-full lg:h-[47px] rounded-sm   focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={email}
                        onChange={changeEmail}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Phone</span>
                      <input
                        type="tel"
                        className=" block  w-full lg:h-[47px] rounded-sm   focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={phone}
                        onChange={changePhone}
                      />
                    </label>
                  </div>
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
                  <label className="block mt-6">
                    <span className="text-black">Type Your Message</span>
                    <textarea
                      className="mt-1 block w-full   lg:h-28 rounded-sm border-black focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50"
                      rows="3"
                      value={info}
                      onChange={changeInfo}
                    ></textarea>
                  </label>
                  <div className="w-full flex justify-center items-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {message}
                      </p>
                    ) : (
                      <button
                        className={`w-32 mt-6 bg-blue text-white font-bold text-xs   p-3 rounded-sm transition-all ${
                          name && email && phone && info && interest
                            ? "opacity-100"
                            : "opacity-25"
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </form>
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
          referrerpolicy="no-referrer-when-downgrade"
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
