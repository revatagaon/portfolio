import { useEffect, useState } from "react";
import LOGO_WHITE from "../assets/images/logoWhite.svg";
import LOGO_BLACK from "../assets/images/logoBlack.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (type) => {
    const sectionID = document.getElementById(type);
    const offSet = 150;
    if (sectionID) {
      const targetScroll = sectionID.offsetTop - offSet;
      sectionID.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <nav className="px-4 sm:px-8 md:px-8 lg:px-10 xl:px-52 fixed top-0 w-full md:mt-8 h-20 z-50 transition-all duration-200 ease-in-out font-pt-serif">
      <div
        className={`flex justify-between items-center text-base py-4 px-2 rounded-xl 
          ${isScrolled ? 'bg-black text-white shadow-[0px_10px_60px_rgba(0,0,0,0.15),_0px_10px_10px_rgba(0,0,0,0.1)]' :
            'bg-transparent text-black shadow-[0px_10px_40px_rgba(0,0,0,0.15),_0px_10px_10px_rgba(0,0,0,0.1)]'}
        w-full`}
      >
        <img
          src={isScrolled ? LOGO_WHITE : LOGO_BLACK}
          alt="Praveen Logo"
          className="w-auto h-12 md:h-16 hover:text-gray-400 transition-colors cursor-pointer"
          onClick={() => goToSection("heroSection")}
        />

        <ul className="hidden md:flex gap-16 ml-auto font-semibold">
          <li onClick={() => goToSection("about")} className="cursor-pointer hover:text-gray-400 transition-colors">
            About
          </li>
          <li onClick={() => goToSection("skills")} className="cursor-pointer hover:text-gray-400 transition-colors">
            Skills
          </li>
          <li onClick={() => goToSection("project")} className="cursor-pointer hover:text-gray-400 transition-colors">
            Project
          </li>
          <li onClick={() => goToSection("contact")} className="cursor-pointer mr-16 hover:text-gray-400 transition-colors">
            Contact
          </li>
        </ul>

        {isMenuOpen ? (
          <Icon
            icon="ooui:close"
            width="32"
            height="32"
            className={`md:hidden lg:hidden xl:hidden 2xl:hidden cursor-pointer ${isScrolled ? "text-white" : "text-black"} 
            icon-size transform transition-transform duration-200 rotate-90`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <Icon
            icon="ooui:menu"
            width="32"
            height="32"
            className={`md:hidden lg:hidden xl:hidden 2xl:hidden cursor-pointer ${isScrolled ? "text-white" : "text-black"} 
            `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}

        {isMenuOpen && (
          <div className="absolute top-[81px] w-[92%] right-[17px] font-semibold bg-black text-white text-center px-4 p-6 rounded-lg shadow-md md:hidden">
            <ul className="flex flex-col gap-6 w-full">
              <li onClick={() => { goToSection("about"); setIsMenuOpen(false); }} className="cursor-pointer hover:text-gray-400 transition-colors">
                About
              </li>
              <li onClick={() => { goToSection("skills"); setIsMenuOpen(false); }} className="cursor-pointer hover:text-gray-400 transition-colors">
                Skills
              </li>
              <li onClick={() => { goToSection("project"); setIsMenuOpen(false); }} className="cursor-pointer hover:text-gray-400 transition-colors">
                Project
              </li>
              <li onClick={() => { goToSection("contact"); setIsMenuOpen(false); }} className="cursor-pointer hover:text-gray-400 transition-colors">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;