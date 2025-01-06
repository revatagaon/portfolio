import { Icon } from "@iconify/react/dist/iconify.js"

const Footer = () => {
  return <section className="w-full h-[200px] px-52">
    <hr />
    <div className="flex justify-around items-center mt-20">
      <div>
        <h1>2025 ©️ Copy Rights Reserved</h1>
        {/* <p>Feel free to copy</p> */}
      </div>
      <div className="flex flex-col">
        <h1>Let's Connect</h1>
        <ul className="flex gap-5">
          <li>
            <a href="https://www.instagram.com/follow_reva/" rel="noreferrer" target="_blank">
              <Icon icon="lineicons:instagram" width="36" height="36" className="cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/praveen-revatagaon/" rel="noreferrer" target="_blank">
              <Icon icon="lineicons:linkedin" width="38" height="38" className="cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/followreva/" rel="noreferrer" target="_blank">
              <Icon icon="lineicons:facebook-square" width="38" height="38" className="cursor-pointer" />
            </a>
          </li>
          {/* <li><Icon icon="lineicons:github" width="24" height="24" /></li> */}
        </ul>
      </div>
    </div>
    <h1 className="flex justify-center my-16 font-medium">Made with <Icon icon="noto:heart-suit" width="16" height="16" className="mt-1 mx-2" /> in India</h1>
  </section>
}
export default Footer