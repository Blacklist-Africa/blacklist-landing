import React from "react";
import SlideShow from "./SlideShow";

import ch45 from "../../../assets/slideshow/ch4-5.jpeg";
import ch42 from "../../../assets/slideshow/ch4-2.jpeg";
import ch43 from "../../../assets/slideshow/ch4-3.jpeg";
import ch44 from "../../../assets/slideshow/ch4-4.jpeg";
import ch46 from "../../../assets/slideshow/ch4-6.jpeg";

import ch47 from "../../../assets/slideshow-2/ch4-7.jpg";
import ch48 from "../../../assets/slideshow-2/ch4-8.jpg";
import ch49 from "../../../assets/slideshow-2/ch4-9.jpg";
import ch410 from "../../../assets/slideshow-2/ch4-10.jpg";
import ch41 from "../../../assets/slideshow-2/ch4-1.jpg";

const images1 = [ch45, ch42, ch43, ch44, ch46];

const images2 = [ch47, ch48, ch49, ch410, ch41];

const Mission = () => {
  return (
    <>
      <section id="mission" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Mission</h2>
          <p>Our goal</p>
        </div>
        <div
          className="container container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="quote">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>
                Our mission is to change the narrative of Education in Africa in
                order to improve the Natural Resource Management sector of
                Niger.
              </span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>
      </section>
      <SlideShow images={images1} />
      <section id="problem" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Problem</h2>
          <p>Problem Statement</p>
        </div>
        <div
          className="container container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="quote">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>
                A coup d'état is thought to have taken place in Niger on July
                26, 2023, as a result of the country's present uranium usage,
                which is not helping its people. But as we all know, this is
                because they don't know enough about uranium and how using it
                properly can help them expand their subsistence farming. How can
                we teach the Nigerien people to use uranium responsibly so that
                by 2034, the nation would have seen economic progress and been
                lifted out of poverty?
              </span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>
      </section>
      <section id="solution" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Solution</h2>
          <p>Our idea</p>
        </div>
        <div
          className="container container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="quote">
            <p>
              <i className="bi bi-quote quote-icon-left"></i>
              <span>
                An offline mobile app that educates Nigeriens, gamifies the
                experience for them and award them with a certificate on
                completion
              </span>
              <i className="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>
      </section>
      <SlideShow images={images2} />
    </>
  );
};

export default Mission;
