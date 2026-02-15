import "./Talleres.css";

const Talleres = ({ items = [] }) => {
  return (
    <section className="talleres">
      <div className="talleres__container">
        <h2 className="talleres__title">Nuestros Talleres y Seminarios</h2>

        <div className="talleres__grid">
          {items.map((item, index) => (
            <div key={index} className="taller">
              <div className="taller__image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="taller__content">
                <h3 className="taller__name">{item.title}</h3>

                <div className="taller__info">
                  {item.speaker && <p>👤 {item.speaker}</p>}
                  {item.date && <p>📅 {item.date}</p>}
                  {item.time && <p>⏰ {item.time}</p>}
                  {item.location && <p>📍 {item.location}</p>}
                  {item.description && <p>{item.description}</p>}
                </div>

                <button className="taller__button">
                  {item.buttonText || "Regístrate"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talleres;