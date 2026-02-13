import React from "react";
import "./Nosotros.css";
import Banner from "../../componentes/Banner/Banner";
import Bannernosotros from "../../assets/banner-nosotros.png";
import nosotrosImg from "./nosotros.png";

const Nosotros = () => {
  return (
    <main>
      <>
        {/* Banner de la sección */}

        <Banner
          title="Acerca de Nosotros"
          subtitle="Más de 100 años impulsando el comercio y el turismo"
          backgroundImage={Bannernosotros}
        />

        {/* Sección historia */}
        <section className="nosotros">
          <div className="nosotros-contenedor">
            {/* Texto */}
            <div className="nosotros-texto">
              <h2>Nuestra historia</h2>

              <p>
                Cámara de Comercio, Servicios y Turismo de Ameca, Jalisco. Somos
                un organismo empresarial con más de 100 años de historia,
                comprometido con el desarrollo económico y comercial de Ameca y
                11 municipios de la región.
              </p>

              <li>
                <span>1917</span>
                <strong>Fundación Canaco</strong>
                <p>
                  Nace como una respuesta a la necesidad de organizar y defender
                  los intereses del sector comercial durante la reconstrucción
                  nacional.
                </p>
              </li>

              <li>
                <span>1950</span>
                <strong>Expansión Regional</strong>
                <p>
                  Consolidación de representaciones en los principales
                  municipios, fortaleciendo la red de servicios turísticos.
                </p>
              </li>

              <li>
                <span>2010</span>
                <strong>Transformación Digital</strong>
                <p>
                  Lanzamiento de plataformas digitales para trámites,
                  capacitaciones en línea y soporte tecnológico a PyMES.
                </p>
              </li>

              <li>
                <span>PRESENTE</span>
                <strong>Liderazgo Nacional</strong>
                <p>
                  Institución referente en políticas públicas, sostenibilidad y
                  competitividad global del sector servicios.
                </p>
              </li>
            </div>

            {/* Imagen */}
            <div className="contactoimg">
              <img src={nosotrosImg} alt="Historia CANACO" />
            </div>
          </div>
        </section>

        {/* Mision y vision */}
        <section className="mision-vision">
          <div className="contenedor-cajita">
            <div className="cajita">
              <h3>Misión</h3>
              <p>
                Nuestra misión es impulsar el crecimiento de emprendedores,
                comerciantes y empresarios, fomentando el trabajo en equipo y la
                competitividad.
              </p>
            </div>

            <div className="cajita">
              <h3>Visión</h3>
              <p>
                Ser la institución líder y referente en el sector empresarial en
                México, impulsando la competitividad y el desarrollo económico
                sostenible a tráves de la innovación y la integridad.
              </p>
            </div>
          </div>
        </section>

        {/* Proposito fundamental */}
        <section className="proposito">
          <div>
            <div className="contenedor-cajita">
              <h3 className="proposito-h3">Propósito fundamental</h3>

              <h1 className="proposito-h1">
                Fomentar un entorno de certidumbre jurídica, crecimiento
                equitativo y responsabilidad social para el ecosistema
                empresarial.
              </h1>
            </div>
          </div>
        </section>

        {/* Valores institucionales */}

        <section className="valores">
          <h2 className="valores-titulo">Valores Institucionales</h2>

          <div className="valores-container">
            <div className="valor-card">
              <h3>Integridad</h3>
              <p>
                Actuamos con honestidad y rectitud en cada una de nuestras
                gestiones.
              </p>
            </div>

            <div className="valor-card">
              <h3>Servicio</h3>
              <p>
                Vocación de apoyo constante a nuestros afiliados para su éxito
                comercial.
              </p>
            </div>

            <div className="valor-card">
              <h3>Transparencia</h3>
              <p>
                Claridad absoluta en el manejo de recursos y procesos
                institucionales.
              </p>
            </div>

            <div className="valor-card">
              <h3>Liderazgo</h3>
              <p>
                Inspiramos el cambio positivo en la comunidad empresarial
                mexicana.
              </p>
            </div>
          </div>
        </section>
      </>
    </main>
  );
};

export default Nosotros;
