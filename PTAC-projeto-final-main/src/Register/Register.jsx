import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../Componentes/Menu.jsx";
import '@fortawesome/fontawesome-free/css/all.css';
import img from "../../public/imguser.png"

import "./register.css";

export default function Register() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
  const [nomeMusica, setNomeMusica] = useState("");
  const [url, setUrl] = useState("");
  const [artista, setArtista] = useState("");
  const [album, setAlbum] = useState("");
  const [letra, setLetra] = useState("");

  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

  const navigate = useNavigate();

  const salvar = async (e) => {
    e.preventDefault();
    await setLista([
      ...lista,
      {
        id: id,
        url: url,
        nomeMusica: nomeMusica,
        artista: artista,
        album: album,
        letra: letra,
      },
    ]);
    setId(id + 1);
    setNomeMusica("");
    setArtista("");
    setUrl("");
    setAlbum("");
    setLetra("");
    navigate("/")
  };

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
                <div className="container">
        <form onSubmit={salvar}>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL da Música" />
                <input type="text" value={nomeMusica} onChange={(e) => setNomeMusica(e.target.value)} placeholder="Nome da Música" />
                <input type="text" value={artista} onChange={(e) => setArtista(e.target.value)} placeholder="Artista" />
                <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} placeholder="Álbum" />
                <input type="text" value={letra} onChange={(e) => setLetra(e.target.value)} placeholder="Letra" />
                <button type="submit">Salvar</button>
            </form>
        </div>
            </div>
        </div>
  );
}