import React from "react";

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
      <section id="problem" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Problem</h2>
          <p>Our blocker</p>
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
    </>
  );
};

export default Mission;
