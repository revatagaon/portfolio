import React from "react";
// import Reva from "../assets/images/reva.png";
import Reva from "../assets/images/reva1.jpg";

const LandingPage = () => {
  return (
    <div id="heroSection" className="h-screen flex
    sm:w-full
    xs:px-3 xs:mt-3
      sm:px-6 sm:mt-4
      md:px-8 md:mt-6
      lg:px-52
      xl:px-52
    ">
      <div className="flex flex-col w-5/12 gap-5 justify-center mt-72">
        <h6 className="text-gray-500 text-sm font-light tracking-[6px]">
          PRAVEEN REVATAGAON
        </h6>

        <h1 className="text-5xl font-bold text-gray-950">
          {/* Crafting Web Experiences */}
          From Backend Logic to Frontend Magic - I Do It All!
        </h1>

        <h4
          className="text-gray-500 leading-8 text-lg font-normal font-pt-serif"
        >
          Dedicated Full Stack Developer creating seamless, scalable, and user-friendly web applications.
          Passionate about bridging backend logic with captivating frontend design to deliver high-quality,
          impactful digital solutions. Let's build something amazing together!
        </h4>

        <div className="flex gap-4 mt-6">
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
      <div className="flex flex-col justify-center w-7/12 relative -z-10">
        <img src={Reva} alt="Reva Logo" className="absolute right-0  object-cover" />
      </div>
    </div>
  );
};

export default LandingPage;