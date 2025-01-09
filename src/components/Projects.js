import ELIT from "../assets/images/projects/ELIT.png";
import ELIT1 from "../assets/images/projects/ELIT-1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const Projects = () => {
  const sliderImages = [
    { uniqueId: 0, image: ELIT },
    { uniqueId: 1, image: ELIT1 },
    { uniqueId: 2, image: ELIT },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2500);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const previousSlide = () => {
    if (current === 0) setCurrent(sliderImages.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === sliderImages.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <section className="w-full px-4 sm:px-12 md:px-8 lg:px-10 xl:px-52 py-16" id="project">
      <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
        WHAT I DID?
      </h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-5">
        Project
      </h1>
      <div className="overflow-hidden relative border-2 border-black rounded-2xl">
        <div
          className="flex transition ease-out duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`
          }}
        >
          {sliderImages.map((data) => {
            return (
              <img
                src={data.image}
                key={data.uniqueId}
                alt="Project Images"
              />
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center text-black px-4">
          <button
            onClick={previousSlide}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          >
            <Icon icon="gg:arrow-left-o" width="100%" height="100%" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          >
            <Icon icon="gg:arrow-right-o" width="100%" height="100%" />
          </button>
        </div>

        <div className="absolute bottom-0 py-5 flex justify-center gap-2 sm:gap-4 w-full">
          {sliderImages.map((slides, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrent(slides.uniqueId)}
                className={`rounded-full w-4 h-4 sm:w-5 sm:h-5 cursor-pointer ${slides.uniqueId === current ? "bg-black" : "bg-gray-400"}`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;