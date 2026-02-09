import './Footer.css';
import logo from '../../assets/canaco-logo.png';
import iconEmail from '../../assets/icon-email.png';
import iconPhone from '../../assets/icon-phone.png';
import iconLocation from '../../assets/icon-location.png';
import iconFacebook from '../../assets/icon-facebook.png';
import iconInstagram from '../../assets/icon-instagram.png';
import iconX from '../../assets/icon-x.png';
const Footer = () => {
  return (
    <footer className="footer">

      {/* Contenido principal */}
      <div className="footer-container">

        {/* Columna 1: Logo y descripción */}
        <div className="footer-column">
          <img
            src={logo}
            alt="Canaco Servytur"
            className="footer-logo"
          />
          <p>
            Cámara Nacional de Comercio, Servicios y Turismo.
            Representando la fuerza económica de nuestra nación desde 1917.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-column">
          <h4>Navegación</h4>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Bolsa de Trabajo</li>
            <li>Membresías</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-column">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <img src={iconEmail} alt="Email" />
              presidencia@canacoameca.com
            </li>
            <li>
              <img src={iconPhone} alt="Teléfono" />
              +52 375 758 0772
            </li>
            <li>
              <img src={iconLocation} alt="Dirección" />
              Enrique Díaz de León 132, Ameca, Jalisco, México
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={iconInstagram} alt="Instagram" />
            </a>
            <a href="#" aria-label="X">
              <img src={iconX} alt="X" />
            </a>
          </div>
        </div>

      </div>


      {/* Barra inferior */}
      <div className="footer-bottom">
        <span>© 2026 Canaco SERVYTUR Ameca. Todos los derechos reservados.</span>

        <div className="footer-legal">
          <a href="#">Aviso de privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
