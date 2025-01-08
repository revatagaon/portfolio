import React from "react";
import Reva from "../assets/images/reva.jpg";

const LandingPage = () => {
  return (
    <div id="heroSection" className="h-screen mt-24 flex flex-col lg:flex-row-reverse lg:px-10 xl:px-52 w-full">

      <div className="relative w-full flex justify-center">
        <img
          src={Reva}
          alt="Reva Logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col w-full gap-5 justify-center mt-8 px-4">
        <h6 className="text-gray-500 text-sm font-light tracking-[6px]">
          PRAVEEN REVATAGAON
        </h6>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950">
          From Backend Logic to Frontend Magic - I Do It All!
        </h1>

        <h4 className="text-gray-500 leading-8 text-base sm:text-lg lg:text-lg font-normal font-pt-serif text-justify">
          Dedicated Full Stack Developer creating seamless, scalable, and user-friendly web applications.
          Passionate about bridging backend logic with captivating frontend design to deliver high-quality,
          impactful digital solutions. Let's build something amazing together!
        </h4>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="px-6 py-2 bg-black text-white font-medium rounded-md 
    border border-transparent hover:bg-white hover:text-black hover:border hover:border-black">
            Contact Me
          </button>
          <button className="px-6 py-2 border border-black text-black font-medium rounded-md
    hover:bg-black hover:text-white hover:border-transparent">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;