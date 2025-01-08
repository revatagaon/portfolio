import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { contactData } from "../utils/portfolio-data";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: null,
    lastName: null,
    emailAddress: null,
    message: null,
  });

  return (
    <section className="w-full px-6 sm:px-12 md:px-24 lg:px-10 xl:px-52 py-16" id="contact">
      <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
        DO YOU KNOW ME?
      </h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-5">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col justify-evenly border-2 border-black bg-black w-full h-full rounded-2xl px-6 py-8">
          {contactData.map((item) => {
            return (
              <div
                key={item.contactUniqueId}
                className="flex items-center gap-5 text-white mb-8"
              >
                <Icon icon={item.contactIcon} width={item.contactSize} height={item.contactSize} />
                <div className="flex flex-col justify-center">
                  <h1 className="text-xl font-semibold">{item.contactName}</h1>
                  <p>{item.contactDesc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-2 border-black rounded-2xl p-8 flex flex-col justify-between">
          <div className="flex flex-wrap gap-8 mb-4">
            <div className="w-full sm:w-1/2">
              <h6 className="text-xl font-semibold">First Name</h6>
              <input
                type="text"
                maxLength={30}
                value={contactForm.firstName}
                onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                className="opacity-60 px-4 py-2 text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Enter First Name"
              />
            </div>

            <div className="w-full sm:w-1/2">
              <h6 className="text-xl font-semibold">Last Name</h6>
              <input
                type="text"
                maxLength={30}
                value={contactForm.lastName}
                onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
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
              onChange={(e) => setContactForm({ ...contactForm, emailAddress: e.target.value })}
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
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className="opacity-60 px-4 py-2 text-xl w-full h-32 rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="px-6 py-2 text-xl bg-black text-white rounded-md border-2 border-black hover:bg-white hover:text-black hover:border-black"
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