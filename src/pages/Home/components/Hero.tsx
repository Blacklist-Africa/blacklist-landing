import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>
              <span>We are the</span>{" "}
              <span className="underlight">Blacklist</span> Team
            </h2>
            <p>
              A group of professionals hell-bent on changing the Education
              Narrative of Niger in order to accelerate its Natural Resource
              Management Sector
            </p>
            <a
              href="https://www.youtube.com/watch?v=34-2hZPpn0I&t=40s"
              target="_blank"
              className="btn-get-started"
            >
              Watch our video
              <br />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
