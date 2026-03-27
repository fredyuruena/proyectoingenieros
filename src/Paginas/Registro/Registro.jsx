import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GiOilPump } from 'react-icons/gi';
import './Registro.css';

const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica para el registro
    console.log("Registrando usuario...");
  };

  return (
    <div className="registro-page">
      {/* Lado izquierdo */}
      <div className="registro-left">
        <div className="registro-logo-placeholder">Logo</div>
        <GiOilPump className="registro-illustration" size={280} />
      </div>

      {/* Lado derecho */}
      <div className="registro-right">
        <div className="registro-form-container">
          <h1 className="registro-title">Regístrate</h1>
          <p className="registro-subtitle">Rellena los datos solicitados</p>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="username@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Contraseña"
                required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirma contraseña</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Contraseña"
                required
              />
              <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="btn-primary">Regístrate</button>
          </form>

          <div className="registro-footer">
            <p>¿Ya tienes una cuenta? <NavLink to="/login">Inicia sesión</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
