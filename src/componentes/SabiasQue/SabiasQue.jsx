import "./SabiasQue.css";
import mapa from "../../assets/mexico.png";

const SabiasQue = () => {
  return (
    <section className="sabias-container">

      <div className="sabias-content">
        <h2 className="sabias-title">¿Sabías que...</h2>

        {/* Bloque 1 */}
        <div className="sabias-box-top">
          <p>
            ASOCIACIONMIS tiene una red de Seccionales y Capítulos a nivel nacional?
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="sabias-box-bottom">
          <p>
            Descubre cómo puedes participar, aprender y fortalecer tu desarrollo profesional en tu región.
            Conoce las Seccionales y Capítulos que hoy son parte de ASOCIACIONMIS
          </p>
        </div>

      </div>

      <div className="sabias-image">
        <img src={mapa} alt="Mapa México" />
      </div>

    </section>
  );
};

export default SabiasQue;