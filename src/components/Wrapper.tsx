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

  const handlePageLoad = () => {
    setLoader({ isRemoved: false, isLoaded: true });
  };

  React.useEffect(() => {
    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
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
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {!loader.isRemoved && (
        <div id="preloader" className={loader.isLoaded ? "loaded" : ""}>
          <div className="line"></div>
        </div>
      )}
    </>
  );
};

export default Wrapper;
