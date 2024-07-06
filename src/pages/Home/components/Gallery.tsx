import * as React from "react";
import { challenges } from "../../../constants/challenges";

const Gallery = () => {
  React.useEffect(() => {
    (window as any).GLightbox?.({
      selector: ".glightbox",
    });
  }, []);

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>E-Lab Challenges</h2>
        <p>Walk with us</p>
      </div>
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
  );
};

export default Gallery;
