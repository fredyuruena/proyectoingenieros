import React from "react";
import Banner from "../../componentes/Banner/Banner";
import bannerImage from "../../assets/banner-home.jpg";
import bannerImage2 from "../../assets/concanacogente.png";
import Tarjetas from "../../componentes/Tarjetas/Tarjetas";
import Talleres from "../../componentes/Talleres/Talleres";
import Separador from "../../componentes/Separador/Separador";



const Inicio = () => {
  const datosTarjetas = [
    {
      icon: "🤝",
      title: "Representación",
      description:
        "Defendemos los intereses de nuestros afiliados ante las autoridades en los tres niveles de gobierno.",
    },
    {
      icon: "🎓",
      title: "Capacitación",
      description:
        "Programas de formación continua, seminarios y talleres especializados para el crecimiento empresarial.",
    },
    {
      icon: "🔗",
      title: "Networking",
      description:
        "Conectamos empresas y generamos oportunidades estratégicas para fortalecer el sector productivo.",
    },
  ];
  const datosTalleres = [
  {
    image: bannerImage2, 
    title: "Saque provecho a su crédito cooperativo",
    speaker: "Diana Zárate",
    date: "19/enero/2026",
    time: "11:00 am - 1:00 pm",
    location: "REDI Cocula",
  },
  {
    image: bannerImage2,
    title: "Impulsa tus ventas con WhatsApp Business",
    speaker: "Marifer Cortez",
    date: "30/enero/2026",
    time: "11:00 am - 1:30 pm",
    location: "Ameca",
  },
  {
    image: bannerImage2,
    title: "INGLÉS CONNECTED 1A",
    description:
      "La Cámara de Comercio abre inscripciones para el nuevo curso en colaboración con IDEFT.",
  },
];

  return (
    <>
    <Separador size={20} />
      <Banner
        title="Impulsando el Comercio y el Turismo en México"
        subtitle="Tu aliado estratégico para el crecimiento empresarial. Representamos, defendemos y fortalecemos a los sectores productivos del país."
        backgroundImage={bannerImage}
        primaryButton={{ text: "Únete a la Cámara", link: "/afiliate" }}
        secondaryButton={{ text: "Conoce Más", link: "/nosotros" }}
      />
      <Tarjetas items={datosTarjetas} />
      <Banner
        title="Presentes en la 110 Asamblea General de CONCANACO SERVYTUR"
        backgroundImage={bannerImage2}
        primaryButton={{ text: "Leer más", link: "/afiliate" }}
      />
      <Talleres items={datosTalleres} />
    </>
  );
};

export default Inicio;


