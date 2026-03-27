import { useEffect, useState } from "react";
import "./VacantesCarousel.css";

const VacantesCarousel = ({ title, vacantes }) => {
  const [index, setIndex] = useState(0);

  // auto-slide cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 2 >= vacantes.length ? 0 : prev + 2
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [vacantes.length]);

  // mostrar 2 tarjetas
  const visibles = vacantes.slice(index, index + 2);

  return (
    <section className="vacantes-section">
      <h2 className="vacantes-title">{title}</h2>

      <div className="vacantes-container">
        {visibles.map((vacante, i) => (
          <div className="vacante-card card-base" key={i}>
            
            <img
              src={vacante.imagen}
              alt={vacante.titulo}
              className="vacante-img"
            />

            <div className="vacante-content">
              <h3>{vacante.titulo}</h3>
              <p>{vacante.descripcion}</p>

              <a
                href="#"
                className="vacante-btn"
              >
                Aplica hoy mismo
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* indicadores */}
      <div className="vacantes-dots">
        {Array.from({ length: Math.ceil(vacantes.length / 2) }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === Math.floor(index / 2) ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default VacantesCarousel;