import React, { useState } from 'react';
import './FormularioVacante.css';

const FormularioVacante = () => {
  const [cvFile, setCvFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando postulación...");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  return (
    <div className="vacante-page">
      <div className="vacante-container">

        <div className="vacante-header">
          <div className="vacante-logo">Logo</div>
          <h1>Formulario de solicitud de vacante</h1>
        </div>

        <form onSubmit={handleSubmit}>

          <h2 className="vacante-section-title">Datos personales</h2>

          <div className="vacante-group">
            <div className="radio-group-container">
              <span>Tipo de puesto buscado (seleccione)</span>
              <label className="radio-option">
                <input type="radio" name="tipoBusqueda" value="Tiempo completo" required /> Tiempo completo
              </label>
              <label className="radio-option">
                <input type="radio" name="tipoBusqueda" value="Medio tiempo" /> Medio tiempo
              </label>
              <label className="radio-option">
                <input type="radio" name="tipoBusqueda" value="Estacional" /> Estacional
              </label>
            </div>
          </div>

          <div className="form-grid grid-2">
            <div className="vacante-group">
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="vacante-group">
              <input type="text" placeholder="Apellido" required />
            </div>
          </div>

          <div className="form-grid grid-2">
            <div className="vacante-group">
              <input type="text" placeholder="Dirección" required />
            </div>
            <div className="vacante-group">
              <input type="text" placeholder="Ciudad" required />
            </div>
          </div>

          <div className="form-grid grid-2">
            <div className="vacante-group">
              <input type="text" placeholder="Código Postal" required />
            </div>
            <div className="vacante-group">
              <input type="text" placeholder="Provincia/Estado" required />
            </div>
          </div>

          <div className="form-grid grid-2">
            <div className="vacante-group">
              <input type="tel" placeholder="Número de teléfono" required />
            </div>
            <div className="vacante-group">
              <input type="text" placeholder="Cédula Profesional" />
            </div>
          </div>

          <div className="vacante-group">
            <input type="email" placeholder="Dirección de correo electrónico (Email)" required />
          </div>


          <h2 className="vacante-section-title">Datos del cargo</h2>

          <div className="vacante-group">
            <input type="text" placeholder="Posición codiciada" required />
          </div>

          <div className="vacante-group">
            <div className="radio-group-container">
              <span>Disponibilidad (seleccione)</span>
              <label className="radio-option">
                <input type="checkbox" name="disponibilidad" value="Dia" /> Día
              </label>
              <label className="radio-option">
                <input type="checkbox" name="disponibilidad" value="Tarde" /> Tarde
              </label>
              <label className="radio-option">
                <input type="checkbox" name="disponibilidad" value="Noche" /> Noche
              </label>
              <label className="radio-option">
                <input type="checkbox" name="disponibilidad" value="Fin de semana" /> Fin de semana
              </label>
            </div>
          </div>

          <div className="form-grid grid-2">
            <div className="vacante-group">
              <input type="number" placeholder="Numero de horas deseadas" min="1" />
            </div>
            <div className="vacante-group">
              <input type="text" placeholder="Expectativas salariales ($)" />
            </div>
          </div>

          <div className="cv-upload-section">
            <label className="cv-upload-label">
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
              {cvFile ? `Archivo seleccionado: ${cvFile.name}` : "Por favor adjunte su CV AQUÍ | Gracias por tu aplicación"}
            </label>
          </div>

          <div className="submit-btn-container">
            <button type="submit" className="btn-primary">Enviar</button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default FormularioVacante;
