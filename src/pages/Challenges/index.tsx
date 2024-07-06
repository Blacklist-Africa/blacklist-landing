import * as React from "react";
import { Breadcrumbs } from "../../components";
import { challenges } from "../../constants/challenges";
import { Link } from "react-router-dom";
import { numberToWord } from "../../utilities/number-to-word";

const Challenges = () => {
  React.useEffect(() => {
    (window as any).GLightbox?.({
      selector: ".glightbox",
    });
  }, []);

  return (
    <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>E-Lab Challenges</h1>
                <p className="mb-0">
                  Walk with us as we ace the E-Lab Challenges!
                </p>
                <a href="/contact" className="cta-btn">
                  Contact Us
                  <br />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Breadcrumbs parent={{ link: "/challenges", title: "Challenges" }} />
      </div>

      <section id="gallery" className="gallery section">
        <div
          className="container container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-3 justify-content-center">
            {challenges.map(challenge => (
              <div key={challenge.identifier} className="col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={challenge.image} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={challenge.image}
                      title={challenge.title}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a
                      href={`/challenges/${challenge.identifier}`}
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Challenges;
