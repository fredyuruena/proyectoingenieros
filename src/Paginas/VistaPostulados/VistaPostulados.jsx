import React, { useState, useEffect } from 'react';
import './VistaPostulados.css';

const VistaPostulados = () => {
  // Estado para almacenar los datos de los postulados
  // En un entorno real, estos datos vendrían de una petición al backend (ej. usando fetch o axios)
  const [postulados, setPostulados] = useState([]);

  // useEffect se utiliza para simular la carga de datos cuando el componente se monta por primera vez
  useEffect(() => {
    // Datos simulados (mock data) basados en la estructura esperada del backend
    const datosDePrueba = [
      {
        "id": 101,
        "fecha_registro": "2026-04-02",
        "archivo_url": "/servidor/uploads/cv_101.pdf",
        "metadata": {
          "nombre_completo": "Carlos Restrepo",
          "email": "carlos.res@email.com",
          "habilidades_clave": ["WordPress", "Elementor", "cPanel"],
          "experiencia_meses": 36,
          "ultimo_empleo": "Desarrollador Freelance"
        }
      },
      {
        "id": 102,
        "fecha_registro": "2026-04-03",
        "archivo_url": "/servidor/uploads/cv_102.pdf",
        "metadata": {
          "nombre_completo": "Ana Gomez",
          "email": "ana.gomez@email.com",
          "habilidades_clave": ["React", "JavaScript", "CSS"],
          "experiencia_meses": 24,
          "ultimo_empleo": "Frontend Developer"
        }
      },
      {
        "id": 103,
        "fecha_registro": "2026-04-03",
        "archivo_url": "/servidor/uploads/cv_103.pdf",
        "metadata": {
          "nombre_completo": "Luis Perez",
          "email": "luis.perez@email.com",
          "habilidades_clave": ["Node.js", "Express", "MongoDB"],
          "experiencia_meses": 48,
          "ultimo_empleo": "Backend Developer"
        }
      }
    ];

    // Actualizamos el estado con los datos de prueba
    setPostulados(datosDePrueba);
  }, []); // El arreglo vacío [] asegura que esto se ejecute solo una vez al montar

  return (
    <div className="vista-postulados-contenedor">
      {/* Sección principal en blanco con barras amarillas a los lados (logrado por el CSS del contenedor padre) */}
      <div className="vista-postulados-contenido">
        
        {/* Placeholder para el Logo (según la imagen) */}
        <div className="logo-placeholder-postulados">
          Logo
        </div>

        {/* Título de la sección */}
        <h2 className="titulo-postulados">
          Lista de postulados para [nombre de la vacante]
        </h2>

        {/* Contenedor de las tarjetas en formato grid (cuadrícula) */}
        <div className="tarjetas-grid">
          {/* Iteramos sobre el arreglo de postulados usando .map() para renderizar cada tarjeta dinámicamente */}
          {postulados.map((postulado) => (
            <div className="tarjeta-postulado" key={postulado.id}>
              {/* Nombre de la persona (estilo naranja/dorado) */}
              <h3 className="tarjeta-nombre">{postulado.metadata.nombre_completo}</h3>
              
              {/* Mostramos el email en lugar de teléfono (según los datos del backend proveídos) */}
              <p className="tarjeta-dato tarjeta-email">{postulado.metadata.email}</p>
              
              {/* Mostramos las habilidades unidas por coma */}
              <p className="tarjeta-dato tarjeta-verde">
                <strong>Skills:</strong> {postulado.metadata.habilidades_clave.join(', ')}
              </p>
              
              {/* Mostramos la experiencia en meses convirtiendo a años si se desea, o como viene estructurado */}
              <p className="tarjeta-dato tarjeta-verde">
                <strong>Experiencia:</strong> {postulado.metadata.experiencia_meses} meses
              </p>
              
              {/* Mostramos el último empleo */}
              <p className="tarjeta-dato tarjeta-verde">
                <strong>Último empleo:</strong> {postulado.metadata.ultimo_empleo}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default VistaPostulados;
