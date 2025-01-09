import { Icon } from "@iconify/react/dist/iconify.js"

const Footer = () => {
  return (
    <section className="w-full px-4 sm:px-12 md:px-8 lg:px-10 xl:px-52 py-16">
      <hr />
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-10">
        <div className="text-center sm:text-left">
          <h1 className="text-lg sm:text-sm font-medium">2025 ©️ Copy Rights Reserved</h1>

        </div>
        <div className="mt-4 sm:mt-0 text-center sm:text-right">
          <h1 className="text-sm lg:text-lg font-medium mt-6">Let's Connect</h1>
          <ul className="flex justify-center sm:justify-end gap-4 mt-2">
            <li>
              <a href="https://www.instagram.com/follow_reva/" rel="noreferrer" target="_blank">
                <Icon icon="lineicons:instagram" width="30" height="30" className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/praveen-revatagaon/" rel="noreferrer" target="_blank">
                <Icon icon="lineicons:linkedin" width="30" height="30" className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/followreva/" rel="noreferrer" target="_blank">
                <Icon icon="lineicons:facebook-square" width="30" height="30" className="cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="flex justify-center mt-16 text-sm sm:text-base font-medium">
        Made with <Icon icon="noto:heart-suit" width="16" height="16" className="mt-1 mx-2" /> in India
      </h1>
    </section>
  );
}

export default Footer;