import './Banner.css';

import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);

  // Cambio automático cada 5s
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="banner">

      {/* Imagen */}
      <div
        className="banner__slide"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        <div className="banner__overlay"></div>

        {/* Texto */}
        <div className="banner__content">
          <h2>{slides[index].title}</h2>
          <p>{slides[index].subtitle}</p>
        </div>
      </div>

      {/* Indicadores */}
      <div className="banner__dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Banner;