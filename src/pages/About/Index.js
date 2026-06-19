import React from "react";
import { Link } from "react-router-dom";
import slide01 from "../../assets/images/about-slides/slide-01.png";
import slide02 from "../../assets/images/about-slides/slide-02.png";
import slide03 from "../../assets/images/about-slides/slide-03.png";
import slide04 from "../../assets/images/about-slides/slide-04.png";
import slide05 from "../../assets/images/about-slides/slide-05.png";
import slide06 from "../../assets/images/about-slides/slide-06.png";
import slide07 from "../../assets/images/about-slides/slide-07.png";
import slide08 from "../../assets/images/about-slides/slide-08.png";
import slide09 from "../../assets/images/about-slides/slide-09.png";
import slide10 from "../../assets/images/about-slides/slide-10.png";
import slide11 from "../../assets/images/about-slides/slide-11.png";
import "./Index.css";

const SLIDES = [
  slide01,
  slide02,
  slide03,
  slide04,
  slide05,
  slide06,
  slide07,
  slide08,
  slide09,
  slide10,
  slide11,
];

export default function About() {
  return (
    <div className="about-stack">
      <a className="about-stack__skip" href="#about-main">
        Skip to main content
      </a>

      <h1 className="about-stack__sr-only">
        About Divinity Impex — Global Brands Business Hub
      </h1>

      <main id="about-main" className="about-stack__main">
        {SLIDES.map((src, i) => {
          const n = i + 1;
          return (
            <figure className="about-stack__slide" key={n}>
              <img
                src={src}
                alt={`Divinity Impex presentation — slide ${n} of ${SLIDES.length}`}
                className="about-stack__img"
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : undefined}
              />
            </figure>
          );
        })}

        <div className="about-stack__actions">
          <Link to="/contact" className="about-stack__btn">
            Contact us
          </Link>
        </div>
      </main>
    </div>
  );
}
