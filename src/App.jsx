import React, { useEffect, useState } from "react";
import {
  BackendDev,
  ContactMe,
  Exprience,
  Footer,
  Hero,
  Loading,
  MobileDev,
  Projects,
  ScrollToTop,
  Skills,
} from "./components";

const Main = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 5000);
  }, []);

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
    <>
      {showLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-hidden">
          <Hero />
          <Exprience />
          <Projects />
          <BackendDev />
          <MobileDev />
          <Skills />
          <ContactMe />
          <Footer />
          <ScrollToTop showScrollBtn={showScrollBtn} />
        </div>
      )}
    </>
  );
};

export default Main;
