import { Icon } from "@iconify/react/dist/iconify.js"
import { skillsData } from "../utils/portfolio-data"

const Skills = () => {
  return (
    <section className="w-full px-6 sm:px-12 md:px-24 lg:px-10 xl:px-52 py-16" id="skills">
      <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
        WHAT I KNOW!
      </h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-5">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {skillsData.map((data) => {
          return (
            <div
              key={data.uniqueId}
              className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[450px]">
              <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
                <Icon
                  icon={data.skillIcon}
                  width={data.skillSize}
                  height={data.skillSize}
                  className="group-hover:text-white"
                />
                <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center">
                  {data.skillName}
                </h1>
                <p className="text-sm sm:text-lg text-center text-black opacity-65">
                  <i>{data.skillDesc}</i>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills