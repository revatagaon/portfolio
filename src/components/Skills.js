import { Icon } from "@iconify/react/dist/iconify.js"
import { skillsData } from "../utils/portfolio-data"

const Skills = () => {
  return <section className="w-full h-[1200px] px-52" id="skills">
    <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
      WHAT I KNOW!
    </h6>
    <h1 className="text-5xl font-bold text-gray-950 mb-5">
      Skills
    </h1>

    {/* {skillsData} */}
    <div className="grid grid-cols-4 grid-flow-row gap-5 mt-6">
      {skillsData.map((data) => {
        return (
          <div key={data.uniqueId} className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
            <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
              <Icon icon={data.skillIcon} width={data.skillSize} height={data.skillSize} className="group-hover:text-white" />
              <h1 className="font-bold text-3xl">{data.skillName}</h1>
              <p className="text-lg text-center text-black opacity-65">
                <i>{data.skillDesc}</i>
              </p>
            </div>
          </div>
        )
      })}

      {/* <div className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
        <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
          <Icon icon="lineicons:css3" width="182" height="182" className="group-hover:text-white" />
          <h1 className="font-bold text-3xl">CSS</h1>
          <p className="text-lg text-center text-black opacity-65">
            <i>Responsive and flexible layouts with Flexbox and Grid.</i>
          </p>
        </div>
      </div>

      <div className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
        <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
          <Icon icon="bxl:javascript" width="172" height="172" className="group-hover:text-white" />
          <h1 className="font-bold text-3xl">JavaScript</h1>
          <p className="text-lg text-center text-black opacity-65">
            <i>Interactive, dynamic features with JavaScript and DOM manipulation.</i>
          </p>
        </div>
      </div>

      <div className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
        <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
          <Icon icon="ion:logo-react" width="172" height="172" className="group-hover:text-white" />
          <h1 className="font-bold text-3xl">React</h1>
          <p className="text-lg text-center text-black opacity-65">
            <i>Building SPAs with React and state management using Hooks, Redux etc.</i>
          </p>
        </div>
      </div>

      <div className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
        <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
          <Icon icon="fa6-brands:node-js" width="172" height="172" className="group-hover:text-white" />
          <h1 className="font-bold text-3xl">Node JS</h1>
          <p className="text-lg text-center text-black opacity-65">
            <i>Building backend services and APIs with Node.js and Express.</i>
          </p>
        </div>
      </div>

      <div className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
        <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
          <Icon icon="simple-icons:git" width="172" height="172" className="group-hover:text-white" />
          <h1 className="font-bold text-3xl">Git</h1>
          <p className="text-lg text-center text-black opacity-65">
            <i>Version control for collaborative development and code tracking.</i>
          </p>
        </div>
      </div>

      <div className="group max-w-sm overflow-hidden flex border-2 border-black rounded-2xl w-[300px] h-[450px]">
        <div className="w-full h-full flex items-center justify-around flex-col py-10 group-hover:bg-stone-900">
          <Icon icon="file-icons:figma" width="172" height="172" className="group-hover:text-white" />
          <h1 className="font-bold text-3xl">Figma</h1>
          <p className="text-lg text-center text-black opacity-65">
            <i>UI/UX design and prototyping with Figma.</i>
          </p>
        </div>
      </div> */}
    </div>


  </section>
}
export default Skills