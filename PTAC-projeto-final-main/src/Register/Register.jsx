import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./register.css";

export default function Register() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        id: id,
        Nome: Nome,
        Email: Email,
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