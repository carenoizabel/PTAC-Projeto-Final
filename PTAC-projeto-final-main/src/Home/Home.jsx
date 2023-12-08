import Menu from "../Componentes/Menu.jsx";
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.css';
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
                    <p><i className="fa-regular fa-bell"></i></p>
                    <p><i className="fa-light fa-users"></i></p>
                </div>
            </div>
        </div>
    );
}