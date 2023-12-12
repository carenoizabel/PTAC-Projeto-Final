import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Register from './Register/Register.jsx'
import Musica from './Componentes/Musica.jsx'
import MusicaIndi from './Componentes/MusicaIndi.jsx'
import Destaque from './Componentes/Destaque.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/musica" element={<Musica />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
