import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Index.css";

const prefersDesktopFade = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 993px)").matches;

const HomeSlider = () => {
  const [fade, setFade] = useState(prefersDesktopFade);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 993px)");
    const sync = () => setFade(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    speed: 500,
  };

  return (
    <section className="homeslider site-fullbleed">
      <div className="homeslider-inner position-relative">
        {/* Remount when fade toggles so Slick recalculates track height (fade collapses on many phones) */}
        <Slider key={fade ? "fade" : "slide"} {...settings} className="homeslider-main">
          <div className="item">
            <Link to="/products" className="hero-slide-link" aria-label="Shop products">
              <picture>
                <source
                  srcSet="https://divinityimpex.com/images/hero/mobile/mobile-02.png"
                  media="(max-width: 992px)"
                />
                <img
                  src="https://divinityimpex.com/images/hero/hero-1.jpeg"
                  alt=""
                  className="w-100 hero-slide-img"
                />
              </picture>
            </Link>
          </div>
          <div className="item">
            <Link to="/products" className="hero-slide-link" aria-label="Shop products">
              <picture>
                <source
                  srcSet="https://divinityimpex.com/images/hero/mobile/mobile-02.png"
                  media="(max-width: 992px)"
                />
                <img
                  src="https://divinityimpex.com/images/hero/hero-2.jpeg"
                  alt=""
                  className="w-100 hero-slide-img"
                />
              </picture>
            </Link>
          </div>
          <div className="item">
            <Link to="/products" className="hero-slide-link" aria-label="Shop products">
              <picture>
                <source
                  srcSet="https://divinityimpex.com/images/hero/mobile/mobile-04.png"
                  media="(max-width: 992px)"
                />
                <img
                  src="https://divinityimpex.com/images/hero/hero-3.jpeg"
                  alt=""
                  className="w-100 hero-slide-img"
                />
              </picture>
            </Link>
          </div>
          <div className="item">
            <Link to="/products" className="hero-slide-link" aria-label="Shop products">
              <picture>
                <source
                  srcSet="https://divinityimpex.com/images/hero/mobile/mobile-05.png"
                  media="(max-width: 992px)"
                />
                <img
                  src="https://divinityimpex.com/images/hero/hero-4.jpeg"
                  alt=""
                  className="w-100 hero-slide-img"
                />
              </picture>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
