import React from "react";
import Reva from "../assets/images/reva.jpg";

const LandingPage = () => {
  return (
    <div id="heroSection" className="mb-16 lg:h-auto mt-24 lg:mt-28 flex flex-col lg:flex-row-reverse md:px-8 lg:px-10 xl:px-52 w-full">

      <div className="relative w-full flex justify-center -z-10 xl:w-7/12">
        <img
          src={Reva}
          alt="Reva Logo"
          className="w-full h-auto object-cover lg:h-fit"
        />
      </div>

      <div className="flex flex-col w-full xl:w-5/12 gap-5 justify-start lg:justify-center lg:items-start -mt-10 lg:mt-32 2xl:mt-56 px-4 md:px-0 xl:px-0">
        <h6 className="text-gray-500 text-sm font-light tracking-[6px]">
          PRAVEEN REVATAGAON
        </h6>

        <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold text-gray-950">
          From Backend Logic to Frontend Magic - I Do It All!
        </h1>

        <h4 className="text-gray-500 leading-8 text-base sm:text-lg lg:text-md xl:text-lg font-normal font-pt-serif text-justify">
          Dedicated Full Stack Developer creating seamless, scalable, and user-friendly web applications.
          Passionate about bridging backend logic with captivating frontend design to deliver high-quality,
          impactful digital solutions. Let's build something amazing together!
        </h4>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
          <button className="px-4 py-2 w-full sm:w-1/2 md:w-1/2 lg:w-[180px] bg-black text-white font-medium rounded-md border border-transparent hover:bg-white hover:text-black hover:border hover:border-black">
            <a href="https://wa.me/+919620548555?text=Hi, Let's Connect!!!" rel="noreferrer" target="_blank">Contact Me</a>
          </button>
          <button className="px-4 py-2 w-full sm:w-1/2 md:w-1/2 lg:w-[180px] border border-black text-black font-medium rounded-md hover:bg-black hover:text-white hover:border-transparent">
            <a href="/Praveen_Revatagaon.pdf" download="Praveen_Revatagaon.pdf" rel="noreferrer" target="_blank">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>

  );
};

export default LandingPage;