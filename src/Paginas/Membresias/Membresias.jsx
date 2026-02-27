import MembresiasComponent from "../../componentes/Membresias/Membresias";
import Banner from "../../componentes/Banner/Banner";
import bannerImage from "../../assets/banner-membresias.jpg"; 

const Membresias = () => {
  return (
    <>
      <Banner
        title="Impulsando el Comercio y el Turismo en México"
        subtitle="Tu aliado estratégico para el crecimiento empresarial. Representamos, defendemos y fortalecemos a los sectores productivos del país."
        backgroundImage={bannerImage}
        primaryButton={{ text: "Únete a la Cámara", link: "/afiliate" }}
        secondaryButton={{ text: "Conoce Más", link: "/nosotros" }}
      />

      <MembresiasComponent />
    </>
  );
};

export default Membresias;