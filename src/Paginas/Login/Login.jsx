import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GiOilPump } from 'react-icons/gi';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de inicio de sesión
    console.log("Iniciando sesión...");
  };

  return (
    <div className="login-page">
      {/* Lado izquierdo (decorativo, similar a tu imagen pero colores adaptados) */}
      <div className="login-left">
        <div className="login-logo-placeholder">Logo</div>
        <GiOilPump className="login-illustration" size={280} />
      </div>

      {/* Lado derecho (formulario) */}
      <div className="login-right">
        <div className="login-form-container">
          <h1 className="login-title">Bienvenido</h1>
          <p className="login-subtitle">Hola de nuevo, ingresa tus datos para acceder</p>

          <form onSubmit={handleLogin}>
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

            <a href="#" className="forgot-password">Recuperar contraseña</a>

            <button type="submit" className="btn-primary">Iniciar Sesión</button>
          </form>

          <div className="login-footer">
            <p>¿Aún no tienes una cuenta? <NavLink to="/registro">Regístrate aquí</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
