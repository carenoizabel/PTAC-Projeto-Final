import Menu from "../Componentes/Menu.jsx";
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { FaBell, FaUsers } from 'react-icons/fa';
import img from "../../public/imguser.png"
export default function Home() {
    return (
        <div className="container">
            
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
            </div>
        </div>
    );
}