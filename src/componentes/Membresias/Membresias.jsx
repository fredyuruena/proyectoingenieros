import { useEffect, useState } from "react";
import "./Membresias.css";

const Membresias = () => {
  const [membresias, setMembresias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ==============================
  // MOCK ACTIVO 
  // ==============================
  useEffect(() => {
    setTimeout(() => {
      setMembresias([
        {
          id: 1,
          titulo: "NIVEL INICIAL",
          nombre: "Pyme",
          precio: 2500,
          beneficios: [
            "Representación institucional básica",
            "Networking trimestral",
            "Inclusión en Directorio Digital",
            "Boletín mensual",
          ],
        },
        {
          id: 2,
          titulo: "CRECIMIENTO",
          nombre: "Empresarial",
          precio: 5800,
          beneficios: [
            "Representación institucional básica",
            "Networking trimestral",
            "Inclusión en Directorio Digital",
            "Boletín mensual",
            "Asesoría legal y contable",
            "Talleres premium",
            "Misiones comerciales nacionales",
          ],
        },
        {
          id: 3,
          titulo: "LIDERAZGO",
          nombre: "Corporativo",
          precio: 12000,
          beneficios: [
            "Representación institucional básica",
            "Networking trimestral",
            "Inclusión en Directorio Digital",
            "Boletín mensual",
            "Asesoría legal y contable",
            "Talleres premium",
            "Misiones comerciales nacionales",
            "Patrocinios premium",
            "Gestor corporativo 24/7",
            "Presencia de marca en homepage",
          ],
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // ==============================
  // FETCH para producción 
  // ==============================
  /*
  useEffect(() => {
    fetch("/api/membresias")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar membresías");
        }
        return res.json();
      })
      .then((data) => {
        setMembresias(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No pudimos cargar las membresías. Intenta más tarde.");
        setLoading(false);
      });
  }, []);
  */

  if (loading) return <p style={{ textAlign: "center" }}>Cargando membresías...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  // Generar lista única de beneficios
  const todosBeneficios = [
    ...new Set(membresias.flatMap((m) => m.beneficios)),
  ];

  return (
    <section className="membresias">
      <div className="membresias-header">
  <h2 className="membresias-subtitulo">Planes diseñados para crecer</h2>
  <p className="membresias-descripcion">
    Elija el nivel de respaldo que su organización necesita. 
    Todas nuestras membresías incluyen representación ante organismos gubernamentales.
  </p>
</div>

      {/* TARJETAS */}
      <div className="membresias__grid">
        {membresias.map((m, index) => (
          <div key={m.id} className="membresia-card">
         <span className="membresia-titulo">{m.titulo}</span>
            <h3 className="membresia-nombre">{m.nombre}</h3>
            <p className="precio">
              ${m.precio.toLocaleString()} <span>/ año</span>
            </p>

            <ul>
  {index > 0 && (
    <li className="incluye-anterior">
      ➕ Todo lo incluido en {membresias[index - 1].nombre}
    </li>
  )}

  {m.beneficios
    .filter((beneficio) =>
      index === 0
        ? true
        : !membresias[index - 1].beneficios.includes(beneficio)
    )
    .map((b, i) => (
      <li key={i}>✔ {b}</li>
    ))}
</ul>

            <button className="btn-unirse">Unirse ahora</button>
          </div>
        ))}
      </div>

      {/* TABLA COMPARATIVA */}
      <div className="tabla-comparativa">
        <h3>Comparativa de beneficios</h3>

        <table>
          <thead>
            <tr>
              <th>Beneficio</th>
              {membresias.map((m) => (
                <th key={m.id}>{m.nombre}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {todosBeneficios.map((beneficio, index) => (
              <tr key={index}>
                <td>{beneficio}</td>
                {membresias.map((m) => (
                  <td key={m.id}>
                    {m.beneficios.includes(beneficio) ? "✔" : "❌"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Membresias;
