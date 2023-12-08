import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Register from './Register/Register.jsx'
import Menu from './Componentes/Menu.jsx'
import Musica from './Componentes/Musica.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/musica" element={<Musica />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
