import React from "react";
import Banner from "../../componentes/Banner/Banner";
import bannerImage from "../../assets/banner-home.jpg";

const Inicio = () => {
  return (
    <div>
      <Banner
        title="Impulsando el Comercio y el Turismo en México"
        subtitle="Tu aliado estratégico para el crecimiento empresarial. Representamos, defendemos y fortalecemos a los sectores productivos del país."
        backgroundImage={bannerImage}
        primaryButton={{ text: "Únete a la Cámara", link: "/afiliate" }}
        secondaryButton={{ text: "Conoce Más", link: "/nosotros" }}
      />
    </div>
  );
};

export default Inicio;
