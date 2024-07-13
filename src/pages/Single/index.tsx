import * as React from "react";
import { Breadcrumbs } from "../../components";
import { useParams } from "react-router-dom";
import { challenges } from "../../constants/challenges";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";

const Single = () => {
  const params = useParams();

  const challenge = React.useMemo(() => {
    if (!params?.id) {
      return null;
    }

    return challenges.find(challenge => challenge.identifier === params.id);
  }, [params]);

  const swiper = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (swiper.current) {
      const swiperConfig = window.document.createElement("script");

      swiperConfig.type = "application/json";

      swiperConfig.classList.add("swiper-config");

      swiperConfig.append(`{
        "loop": true,
        "speed": 600,
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": "auto",
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        },
        "pagination": {
          "el": ".swiper-pagination",
          "type": "bullets",
          "clickable": true
        }
      }`);

      swiper.current.insertAdjacentElement("afterbegin", swiperConfig);
    }
  }, []);

  return (
    <main className="main">
      <Helmet>
        <title>{challenge?.title} | The Blacklist</title>
      </Helmet>
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>{challenge?.title}</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
                {challenge?.videoId && (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${challenge?.videoId}`}
                    className="cta-btn"
                  >
                    Watch Video
                    <br />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <Breadcrumbs
          parent={{ link: "/challenges", title: "Challenges" }}
          child={{ title: challenge?.title }}
        />
      </div>

      <section id="gallery-details" className="gallery-details section">
        <div className="container" data-aos="fade-up">
          {challenge?.videoId && (
            <iframe
              title={challenge?.title || "Challenge Title"}
              style={{
                width: "100%",
                height: "80vh",
              }}
              src={`https://www.youtube.com/embed/${challenge?.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>This is an example of portfolio details</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit.
                  Non aspernatur atque natus ut cum nam et. Praesentium error
                  dolores rerum minus sequi quia veritatis eum. Eos et doloribus
                  doloremque nesciunt molestiae laboriosam.
                </p>

                <p>
                  Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
                  Perspiciatis occaecati earum et magnam animi. Quibusdam non
                  qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque
                  minus deserunt assumenda tempore. Delectus voluptas
                  necessitatibus est.
                </p>

                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat
                  debitis. Molestiae et autem libero. Explicabo et quod
                  necessitatibus similique quis dolor eum. Numquam eaque
                  praesentium rem et qui nesciunt.
                </p>
              </div>
            </div>

            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Challenge</strong> {challenge?.title}
                  </li>
                  <li>
                    <strong>Score</strong> {challenge?.score}
                  </li>
                  {challenge?.submissionDate && (
                    <li>
                      <strong>Date</strong>{" "}
                      {dayjs(challenge?.submissionDate).format("DD MMM, YYYY")}
                    </li>
                  )}
                  {/* <li>
                    <a href="#" className="btn-visit align-self-start">
                      Visit Website
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className="portfolio-details-slider swiper init-swiper"
            ref={swiper}
          >
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img src={challenge?.image} alt="" />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-8.jpg`}
                  alt=""
                />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-9.jpg`}
                  alt=""
                />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-10.jpg`}
                  alt=""
                />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-11.jpg`}
                  alt=""
                />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-12.jpg`}
                  alt=""
                />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-13.jpg`}
                  alt=""
                />
              </div>

              <div className="swiper-slide">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/gallery/gallery-14.jpg`}
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Single;
