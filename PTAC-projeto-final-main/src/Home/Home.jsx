import Menu from "../Componentes/Menu.jsx";
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.css';
export default function Home() {
    return (
        <div className="container">
            <div className="navbar">
                <Menu />
            </div>
            <div className="main">
                <div className="usuario">
                     <img className ="img-user" src="imguser.png" alt="" />
                     <p>Olá, Izabel</p>
                </div>
                <div className="config">
                    <p><i className="fa-regular fa-bell"></i></p>
                    <p><i className="fa-solid fa-users"></i></p>
                </div>
            </div>
        </div>
    );
}