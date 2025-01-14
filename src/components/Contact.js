import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { contactData, FORM_CARRY_API } from "../utils/portfolio-data";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: null,
    lastName: null,
    emailAddress: null,
    message: null,
  });

  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false)

  const handleUserData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContactForm({ ...contactForm, [name]: value })
  }

  const resetFormData = () => {
    setContactForm({
      firstName: "",
      lastName: "",
      emailAddress: "",
      message: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { firstName, lastName, emailAddress, message } = contactForm
    fetch(FORM_CARRY_API, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, emailAddress, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          resetFormData();
          alert("Thank you! I’ve received your message and will respond shortly.");
        }
        else if (response.code === 422) {
          // Field validation failed
          setShowError(true)
          setError(response.message)
        }
        else {
          resetFormData();
          setShowError(true)
          setError(response.message)
        }
      })
      .catch(error => {
        resetFormData();
        setShowError(true)
        setError(error.message ? error.message : error);
      });
  }

  return (
    <section className="w-full px-4 sm:px-12 md:px-8 lg:px-10 xl:px-52 py-16" id="contact">
      <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
        DO YOU KNOW ME?
      </h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-5">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col justify-evenly border-2 border-black bg-black w-full h-full rounded-2xl px-4 py-8">
          {contactData.map((item) => {
            return (
              <div
                key={item.contactUniqueId}
                className="flex items-center gap-5 text-white mb-8"
              >
                <Icon icon={item.contactIcon}
                  className="w-[30px] h-[30px] lg:w-16 lg:h-16" />
                <div className="flex flex-col justify-center">
                  <h1 className="text-sm lg:text-xl">{item.contactName}</h1>
                  <p className="text-xs lg:text-xl font-semibold">{item.contactDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <div className="border-2 border-black rounded-2xl p-8 flex flex-col justify-between">
            <div className="flex flex-wrap md:flex-nowrap gap-8 mb-4">
              <div className="w-full sm:w-1/2">
                <h6 className="text-sm lg:text-xl font-semibold">First Name</h6>
                <input
                  type="text"
                  name="firstName"
                  maxLength={30}
                  value={contactForm.firstName}
                  onChange={handleUserData}
                  required
                  className="opacity-60 px-4 py-2 text-sm lg:text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                  placeholder="Enter First Name"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <h6 className="text-sm lg:text-xl font-semibold">Last Name</h6>
                <input
                  type="text"
                  name="lastName"
                  maxLength={30}
                  value={contactForm.lastName}
                  onChange={handleUserData}
                  required
                  className="opacity-60 px-4 py-2 text-sm lg:text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <h6 className="text-sm lg:text-xl font-semibold">Email Address</h6>
              <input
                type="email"
                value={contactForm.emailAddress}
                name="emailAddress"
                maxLength={50}
                onChange={handleUserData}
                required
                className="opacity-60 px-4 py-2 text-sm lg:text-xl w-full rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="mb-4">
              <h6 className="text-sm lg:text-xl font-semibold">Message</h6>
              <textarea
                value={contactForm.message}
                name="message"
                maxLength={240}
                style={{ resize: "none" }}
                onChange={handleUserData}
                required
                className="opacity-60 px-4 py-2 text-sm lg:text-xl w-full h-32 rounded-lg border-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 text-sm lg:text-xl bg-black text-white rounded-md border-2 border-black hover:bg-white hover:text-black hover:border-black"
                type="submit"
              >
                Submit
              </button>
            </div>
            <span className="text-red-500 flex justify-center mt-5 text-lg">{showError && error}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;