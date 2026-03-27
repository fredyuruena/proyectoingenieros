import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Columna 1: Logo e Información de Contacto */}
        <div className="footer-column footer-contact">
          <div className="footer-logo">
            Logo
          </div>
          <p>Red Social 1:</p>
          <p>Red Social 2:</p>
          <p>Email:</p>
          <p>Teléfono:</p>
          <p>Dirección:</p>
        </div>

        {/* Columna 2: Capacitaciones */}
        <div className="footer-column">
          <h4 className="footer-heading">Capacitaciones</h4>
          <ul className="footer-list">
            <li>· Cursos</li>
            <li>· Cursos Cerrados</li>
            <li>· Certificación</li>
          </ul>
        </div>

        {/* Columna 3: Servicios al Ingeniero */}
        <div className="footer-column">
          <h4 className="footer-heading">Servicios al Ingeniero</h4>
          <ul className="footer-list">
            <li>Conferencias</li>
            <li>Beneficios</li>
            <li>Afiliaciones</li>
            <li>Convenios</li>
            <li>Orientación</li>
          </ul>
        </div>

        {/* Columna 4: Quiénes somos */}
        <div className="footer-column">
          <h4 className="footer-heading">Quiénes somos</h4>
          <ul className="footer-list">
            <li>Conócenos</li>
            <li>Términos y Condiciones</li>
            <li>Aviso de privacidad</li> {/* Corrección ortográfica: provacidad -> privacidad */}
          </ul>
        </div>
      </div>

      {/* Derechos reservados en la parte inferior */}
      <div className="footer-bottom">
        <p>&copy; 2026 . Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
