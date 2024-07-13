import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [loader, setLoader] = React.useState({
    isLoaded: false,
    isRemoved: false,
  });

  const [scrollY, setScrollY] = React.useState(0);

  const handlePageLoad = () => {
    setLoader({ isRemoved: false, isLoaded: true });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("load", handlePageLoad);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", handlePageLoad);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader({ isLoaded: true, isRemoved: true });
    }, 2000);
  }, [loader.isLoaded]);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <span
        id="scroll-top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={`scroll-top d-flex align-items-center justify-content-center${
          scrollY > 100 ? " active" : ""
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </span>

      {!loader.isRemoved && (
        <div id="preloader" className={loader.isLoaded ? "loaded" : ""}>
          <div className="line"></div>
        </div>
      )}
    </>
  );
};

export default Wrapper;
