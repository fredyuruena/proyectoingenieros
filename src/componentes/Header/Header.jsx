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
        <NavLink to="/acualiza">Actualiza</NavLink>
        <NavLink to="/explora">Explora</NavLink>
        <NavLink to="/aplica-hoy">Aplica Hoy</NavLink>
        
      </nav>
      
    </div>
    </header>
  );
};
