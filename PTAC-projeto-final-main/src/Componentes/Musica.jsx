
import { useEffect, useState } from "react";
import MusicaIndi from "../Componentes/MusicaIndi.jsx";
import Menu from "../Componentes/Menu.jsx";
import '@fortawesome/fontawesome-free/css/all.css';
import { FaBell, FaUsers } from 'react-icons/fa';
import img from "../../public/imguser.png"
import './musica.css';

export default function Musica() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  return (
    <div>
      <div className="navbar">
                <Menu />
            </div>
            <div className="main">
                <div className="usuario">
                <img className ="img-user" src={img} alt=""></img>
                     <p> Olá, Izabel</p>
                </div>
                <div className="config">
                <p><FaBell /></p>
                <p><FaUsers /></p>
                </div>
                <div className="card">
                <MusicaIndi listaMusicas={listaLocalStorage} />
                </div>
            </div>
    </div>
  );
}
