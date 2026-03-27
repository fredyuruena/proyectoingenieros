import React from "react";
import "./Valores.css";
import { ShieldCheck, Heart, Eye, Users } from "lucide-react";

const Valores = () => {
  const items = [
    {
      titulo: "VERACIDAD",
      desc: "Promover la confianza en nuestras relaciones profesionales",
      Icon: ShieldCheck
    },
    {
      titulo: "INTEGRIDAD",
      desc: "Tener en cuenta la equidad de género en el ejercicio de la profesión",
      Icon: Heart
    },
    {
      titulo: "RESPONSABILIDAD",
      desc: "No sacrificar calidad o seguridad por precio",
      Icon: Eye
    },
    {
      titulo: "PRECISIÓN",
      desc: "Utilizar nuevas tecnologías con precaución y prudencia, validando los resultados",
      Icon: Users
    }
  ];

  return (
    <section className="contenedor-valores">
      <div className="franja-amarilla">
        <h2 className="titulo-principal">
          POR EL PAÍS QUE QUEREMOS: SÍ A LA ÉTICA
        </h2>
      </div>

      <div className="grid-tarjetas">
        {items.map((item, index) => (
          <div key={index} className="tarjeta-valor">
            <div className="icono-contenedor">
              <item.Icon size={44} strokeWidth={1.2} />
            </div>
            <h3 className="tarjeta-titulo">{item.titulo}</h3>
            <p className="tarjeta-texto">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Valores;