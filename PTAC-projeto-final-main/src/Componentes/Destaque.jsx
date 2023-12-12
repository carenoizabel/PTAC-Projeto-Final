import Menu from "../Componentes/Menu.jsx";
import '@fortawesome/fontawesome-free/css/all.css';
import { FaBell, FaUsers } from 'react-icons/fa';
import img from "../../public/imguser.png"
import "./destaque.css";
import MusicaIndi from "./MusicaIndi.jsx";

export default function Destaque () {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    return(
        <div className="main">
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
                <div className="quadro-card">
        {listaLocalStorage.slice(-4).map((musica) => (
        <div className="card" key={musica.id}>
            <h3 className="titulo-musica">{musica.nomeMusica}</h3>
            <iframe 
            className="iframe"
            width="250"
            height="250"
            title= "YouTube video player"
            src={ "https://www.youtube.com/embed/" + musica.url.slice(17)}
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
        ))}
        </div>
        </div>
            </div>
            
    );
}