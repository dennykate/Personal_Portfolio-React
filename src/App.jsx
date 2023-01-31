import React, { useEffect, useState } from "react";
import {
  BackendDev,
  ContactMe,
  Exprience,
  Footer,
  Hero,
  MobileDev,
  Projects,
  ScrollToTop,
  Skills,
} from "./components";

const Main = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 768) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  });

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Exprience />
      <Projects />
      <BackendDev />
      <MobileDev />
      <Skills />
      <ContactMe />
      <Footer />
    <ScrollToTop showScrollBtn={showScrollBtn}/>
    </div>
  );
};

export default Main;
