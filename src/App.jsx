import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./componentes/Header/Header.jsx";
import Footer from './componentes/Footer/Footer'


import { Routes, Route } from "react-router-dom";

/* Imports de routerDoom */
import Inicio from "./Paginas/Inicio/Inicio.jsx";
import Login from "./Paginas/Login/Login.jsx";
import Registro from "./Paginas/Registro/Registro.jsx";
import FormularioVacante from "./Paginas/FormularioVacante/FormularioVacante.jsx";
import VistaPostulados from "./Paginas/VistaPostulados/VistaPostulados.jsx";



function App() {

  return (
    <>
    {/* Import del header */}
  <Header/>


    

    {/* llamado de rutas */}
    <main>
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/formulariovacante" element={<FormularioVacante />} />
        <Route path="/vistapostulados" element={<VistaPostulados/>} />
        
      </Routes>
      
    </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
