import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./register.css";

export default function Register() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
  const [nomeMusica, setNomeMusica] = useState("");
  const [url, setUrl] = useState("");
  const [artista, setArtista] = useState("");
  const [album, setAlbum] = useState("");
  const [anoLancado, setAnoLancado] = useState("");

  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        id: id,
        url: url,
        nomeMusica: nomeMusica,
      },
    ]);
    setId(id + 1);
    setNome("");
    setEmail("");
  };

  return (
    <div>
        <div class="container">
            <img src="" alt="" />
        </div>
    </div>
  );
}