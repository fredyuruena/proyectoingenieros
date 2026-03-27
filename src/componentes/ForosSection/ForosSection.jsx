import "./ForosSection.css";

const ForosSection = ({ title, eventos }) => {
  return (
    <section className="foros-section">
      <h2 className="foros-title">{title}</h2>

      <div className="foros-grid">
        {eventos.map((evento, index) => (
          <div className="foro-card card-base" key={index}>
            
            <img
              src={evento.imagen}
              alt={evento.titulo}
              className="foro-img image-rounded"
            />

            <div className="foro-fecha">
              {evento.fecha}
            </div>

            <h3 className="foro-titulo">
              {evento.titulo}
            </h3>

            <div className="foro-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForosSection;