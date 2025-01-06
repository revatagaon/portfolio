import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Contact = () => {

  const [contactForm, setContactFrom] = useState({
    firstName: null,
    lastName: null,
    emailAddress: null,
    message: null,
  })

  return (
    <section className="w-full h-[850px] px-52" id="contact">
      <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
        DO YOU KNOW ME?
      </h6>
      <h1 className="text-5xl font-bold text-gray-950 mb-5">
        Contact Me
      </h1>

      <div className="grid grid-cols-12 w-full h-[600px]">
        <div className="col-span-5 flex flex-col justify-evenly border-2 border-black bg-black w-full h-full rounded-l-2xl px-10">

          <div className="flex items-center gap-5 text-white mb-8">
            <Icon icon="fluent-mdl2:home" width="96" height="96" />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold">Address</h1>
              <p className="text-left">19th Cross, JP Nagar 6th Phase, Bengaluru - 560078</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-white mb-8">
            <Icon icon="fluent-mdl2:edit-mail" width="74" height="74" />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold">Email</h1>
              <p className="text-left">prvn.gr11@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-white mb-8">
            <Icon icon="fluent-mdl2:transfer-call" width="74" height="74" />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold">Phone Number</h1>
              <p className="text-left">+91 9620548555</p>
            </div>
          </div>
        </div>

        <div className="col-span-7 w-full h-full border-2 border-black rounded-r-2xl p-16 flex flex-col justify-between">
          <div className="flex space-x-8 mb-4">
            <div className="w-1/2">
              <h6 className="text-xl font-semibold">First Name</h6>
              <input
                type="text"
                maxLength={30}
                value={contactForm.firstName}
                onChange={(e) => { setContactFrom({ ...contactForm, firstName: e.target.value }) }}
                className="opacity-60 px-4 py-2 text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Enter First Name"
              />
            </div>

            <div className="w-1/2">
              <h6 className="text-xl font-semibold">Last Name</h6>
              <input
                type="text"
                maxLength={30}
                value={contactForm.lastName}
                onChange={(e) => { setContactFrom({ ...contactForm, lastName: e.target.value }) }}
                className="opacity-60 px-4 py-2 text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <h6 className="text-xl font-semibold">Email Address</h6>
            <input
              type="email"
              value={contactForm.emailAddress}
              maxLength={50}
              onChange={(e) => { setContactFrom({ ...contactForm, emailAddress: e.target.value }) }}
              className="opacity-60 px-4 py-2 text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
              placeholder="Enter Email Address"
            />
          </div>

          <div className="mb-4">
            <h6 className="text-xl font-semibold">Message</h6>
            <textarea
              value={contactForm.message}
              maxLength={240}
              style={{ resize: "none" }}
              onChange={(e) => { setContactFrom({ ...contactForm, message: e.target.value }) }}
              className="opacity-60 px-4 py-2 text-xl w-full h-32 rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="px-6 py-2 text-xl bg-black text-white rounded-md border-2 border-black hover:bg-white hover:text-black hover:brder-2 hover:border-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
