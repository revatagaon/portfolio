import ELIT from "../assets/images/projects/ELIT.png";
import ELIT1 from "../assets/images/projects/ELIT-1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const Projects = () => {

  const sliderImages = [
    { uniqueId: 0, image: ELIT },
    { uniqueId: 1, image: ELIT1 },
    { uniqueId: 2, image: ELIT },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2500); // change slide every 2 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const previuosSlide = () => {
    if (current === 0) setCurrent(sliderImages.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === sliderImages.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return <section className="w-full h-[1050px] px-52" id="project">
    <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
      WHAT I DID?
    </h6>
    <h1 className="text-5xl font-bold text-gray-950 mb-5">
      Project
    </h1>
    <div className="overflow-hidden relative">
      <div className="flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}>
        {sliderImages.map((data) => {
          return <img src={data.image} key={data.uniqueId} alt="ELIT Logo" 
          className="border-2 border-black rounded-2xl"
           />
        })}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-black px-10">
        <button onClick={previuosSlide}>
          <Icon icon="gg:arrow-left-o" width="40" height="40" />
        </button>
        <button onClick={nextSlide}>
          <Icon icon="gg:arrow-right-o" width="40" height="40" />
        </button>
      </div>

      <div className="absolute bottom-0 py-5 flex justify-center gap-4 w-full" >
        {sliderImages.map((slides, index) => {
          return (
            <div onClick={() => setCurrent(slides.uniqueId)}
              className={`rounded-full w-5 h-5 cursor-pointer ${slides.uniqueId === current ? "bg-black" : "bg-gray-400"}`}></div>)
        })}
      </div>
    </div>
  </section>
}
export default Projects;