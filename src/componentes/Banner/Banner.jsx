import './Banner.css';

// Recibe props para que pueda usarse en distintas secciones
const Banner = ({
  title,              // Título principal del banner
  subtitle,           // Texto descriptivo (opcional)
  backgroundImage,    // Imagen de fondo del banner
  primaryButton,      // Botón principal (texto + link)
  secondaryButton     // Botón secundario (texto + link)
}) => {
  return (
    // Section principal del banner
    // Usamos style inline para cambiar la imagen de fondo dinámicamente
    <section
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Capa oscura encima de la imagen */}
      <div className="banner-overlay">

        {/* Contenedor del contenido textual */}
        <div className="banner-content">

          {/* Título principal */}
          <h1>{title}</h1>

          {/* El subtítulo solo se renderiza si existe */}
          {subtitle && <p>{subtitle}</p>}

          {/* Contenedor de botones */}
          <div className="banner-buttons">

            {/* Botón principal:
                Solo aparece si se envía la prop primaryButton */}
            {primaryButton && (
              <a
                href={primaryButton.link}
                className="btn btn-primary"
              >
                {primaryButton.text}
              </a>
            )}

            {/* Botón secundario:
                También es opcional */}
            {secondaryButton && (
              <a
                href={secondaryButton.link}
                className="btn btn-secondary"
              >
                {secondaryButton.text}
              </a>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
