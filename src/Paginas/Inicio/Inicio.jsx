import React from "react";
import Banner from "../../componentes/Banner/Banner";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import ForosSection from "../../componentes/ForosSection/ForosSection";
import tarjeta4 from "../../assets/fabrica.jpg";
import tarjeta3 from "../../assets/centralelectrica.jpg";
import tarjeta1 from "../../assets/ingenieros1.jpg";
import tarjeta2 from "../../assets/ingenieros2.jpg";
import SabiasQue from "../../componentes/SabiasQue/SabiasQue";
import VacantesCarousel from "../../componentes/VacantesCarousel/VacantesCarousel";
import vacante1 from "../../assets/analista.jpg";
import vacante2 from "../../assets/supervisor.jpg";
import vacante3 from "../../assets/desarrollador.jpg";
import vacante4 from "../../assets/industrial.jpg";
import Valores from "../../componentes/Valores/Valores";

const Inicio = () => {
  const slides = [
  {
    image: banner1,
    title: "Unión nacional de ingenieros",
    subtitle: "¡Reserva esta fecha!"
  },
  {
    image: banner2,
    title: "Impulsando el desarrollo",
    subtitle: "Conectamos talento y empresas"
  },
  {
    image: banner3,
    title: "Unión nacional de ingenieros",
    subtitle: "¡Reserva esta fecha!"
  }
];
const eventos = [
  {
    imagen: tarjeta1,
    fecha: "Sin costo - 11 y 12 de abril",
    titulo: "Feria Laboral Nacional 2026",
  },
  {
    imagen: tarjeta2,
    fecha: "Curso virtual - 24 al 30 de Mar",
    titulo: "Analisis de Causa Raíz",
  },
  {
    imagen: tarjeta3,
    fecha: "Curso virtual - 27 al 31 de May",
    titulo: "Mejores prácticas en operaciones",
  },
  {
    imagen: tarjeta4,
    fecha: "Webinar - Lun 14 6:30PM",
    titulo: "Mantenimiento con parada de planta",
  },
];
const vacantes = [
  {
    imagen: vacante2,
    titulo: "Supervisor de Construcción",
    descripcion:
      "Buscamos un profesional responsable de coordinar y supervisar proyectos de construcción...",
  },
  {
    imagen: vacante1,
    titulo: "Analista de sistemas",
    descripcion:
      "Se requiere profesional encargado del desarrollo y mantenimiento de soluciones tecnológicas...",
  },
  {
    imagen: vacante4,
    titulo: "Ingeniero Industrial",
    descripcion:
      "Optimización de procesos y mejora continua en planta...",
  },
  {
    imagen: vacante3,
    titulo: "Desarrollador Web",
    descripcion:
      "Desarrollo de aplicaciones modernas con React...",
  },
];


  
  return (
    <>
    
      <Banner slides={slides} />
      <ForosSection
      title="¡ACTUALIZA TUS CONOCIMIENTOS CON NUESTROS FOROS!"
      eventos={eventos}
    />
      <SabiasQue />
      <VacantesCarousel
      title="EXPLORA VACANTES"
      vacantes={vacantes}
    />
    <div>
      <Valores />
    </div>
    </>
  );
};

export default Inicio;


