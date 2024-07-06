import * as React from "react";
import { michael, tedla } from "../../../assets/team";

const members = [
  {
    name: "Michael Nwuju",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: michael,
  },
  {
    name: "Tedla Tesfaye",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: tedla,
  },
  {
    name: "Brian Gatanazi",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: michael,
  },
  {
    name: "Aziza Solace",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: tedla,
  },
  {
    name: "Isaiah Dembe",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: tedla,
  },
  {
    name: "Ivan Manzi",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: tedla,
  },
  {
    name: "John Pangara",
    description: "Team Lead, Software Engineer. Ex-Head of Engineering.",
    photo: michael,
  },
];

const Team = () => {
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
                "pagination": {
                  "el": ".swiper-pagination",
                  "type": "bullets",
                  "clickable": true
                },
                "breakpoints": {
                  "320": {
                    "slidesPerView": 1,
                    "spaceBetween": 40
                  },
                  "1200": {
                    "slidesPerView": 3,
                    "spaceBetween": 1
                  }
                }
              }`);

      swiper.current.insertAdjacentElement("afterbegin", swiperConfig);
    }
  }, [swiper.current]);

  return (
    <section id="team" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Meet the team</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper" ref={swiper}>
          <div className="swiper-wrapper">
            {members.map(member => (
              <div key={member.name} className="swiper-slide">
                <div className="testimonial-item">
                  <p>{member.description}</p>
                  <div className="profile mt-auto">
                    <img
                      src={member.photo}
                      className="testimonial-img img-fluid"
                      alt={member.name}
                    />
                    <h3>{member.name}</h3>
                    {member.name.includes("Michael") ? "Team Lead" : "Member"}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
