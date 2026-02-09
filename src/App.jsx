import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./componentes/Header/Header.jsx";
import Banner from './componentes/Banner/Banner'
import bannerImage from './assets/banner-home.jpg'
import Footer from './componentes/Footer/Footer'


import { Routes, Route } from "react-router-dom";

/* Imports de routerDoom */
import Inicio from "./Paginas/Inicio/Inicio.jsx";
import Nosotros from "./Paginas/Nosotros/Nosotros.jsx";
import BolsaTrabajo from "./Paginas/BolsaTrabajo/BolsaTrabajo.jsx";
import Membresias from "./Paginas/Membresias/Membresias.jsx";
import Contacto from "./Paginas/Contacto/Contacto.jsx";




function App() {

  return (
    <>
    {/* Import del header */}
  <Header/>


    

    {/* llamado de rutas */}
    <main>
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/bolsa-trabajo" element={<BolsaTrabajo />} />
        <Route path="/membresias" element={<Membresias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
    </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
