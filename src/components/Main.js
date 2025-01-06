import { useState } from "react";
import LoadingPage from "./loader/LoadingPage";
import LandingPage from "./LandingPage"
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

const Main = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return <>
    {loading ? (
      <LoadingPage onComplete={handleLoadingComplete} />
    ) : (<>
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
    )}
  </>
}
export default Main