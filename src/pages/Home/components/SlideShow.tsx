import React from "react";

const SlideShow: React.FC<{ images: string[] }> = ({ images = [] }) => {
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
    <div className="container gallery-details container-fluid">
      <div className="portfolio-details-slider swiper init-swiper" ref={swiper}>
        <div className="swiper-wrapper align-items-center">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideShow;
