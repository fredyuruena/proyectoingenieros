import "./Tarjetas.css";

const Tarjetas = ({ items }) => {
  return (
    <section className="tarjetas">
      <div className="tarjetas__container">
        <span className="tarjetas__subtitle">NUESTROS PILARES</span>

        <h2 className="tarjetas__title">
          Comprometidos con el <br />
          desarrollo empresarial y la excelencia.
        </h2>

        <div className="tarjetas__grid">
          {items.map((item, index) => (
            <div key={index} className="tarjeta">
              <div className="tarjeta__icon">{item.icon}</div>
              <h3 className="tarjeta__title">{item.title}</h3>
              <p className="tarjeta__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tarjetas;