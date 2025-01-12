import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <section className="w-full px-4 sm:px-12 md:px-8 lg:px-10 xl:px-52 py-16">
      <hr />
      <div className="flex flex-col sm:flex-row justify-center items-center mt-10">
        <div className="mt-4 sm:mt-0 text-center sm:text-right">
          <h1 className="text-lg lg:text-2xl font-medium mt-6">Let's Connect</h1>
          <ul className="flex justify-center gap-4 mt-2">
            <li>
              <a href="https://www.instagram.com/follow_reva/" rel="noreferrer" target="_blank">
                <Icon icon="lineicons:instagram" width="38" height="38" className="cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/praveen-revatagaon/" rel="noreferrer" target="_blank">
                <Icon icon="tabler:brand-linkedin" width="38" height="38" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/followreva/" rel="noreferrer" target="_blank">
                <Icon icon="jam:facebook-square" width="38" height="38" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;