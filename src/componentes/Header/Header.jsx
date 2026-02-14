import React from "react";
import logo from "./logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
    
    <div className="header-container">
      <div>
        <img src={logo} alt="Logo Canaco" className="logo" />
      </div>

      {/* Barra de navegacion principal */}
      <nav className="Barra-navegacion">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/bolsa-trabajo">Bolsa de trabajo</NavLink>
        <NavLink to="/membresias">Membresias</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
      {/* Boton de afiliacion */}
      <div className="">
        <NavLink to="/afiliate" className="btn-header">Afiliate</NavLink>
      </div>
    </div>
    </header>
  );
};
