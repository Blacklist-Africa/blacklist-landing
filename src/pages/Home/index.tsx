import * as React from "react";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Team from "./components/Team";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const sectionElement = window.document.querySelector(location.hash);

      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [location]);

  return (
    <main id="main">
      <Hero />
      <Mission />
      <Team />
      <Gallery />
    </main>
  );
};

export default Home;
