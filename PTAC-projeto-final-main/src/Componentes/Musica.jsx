import React from "react";

export default function Musica (musica){
    const {titulo, artista, genero, duracao, anolancado, imagem} = musica;

return (
    <div>
        <div className="musica">
            <img src={imagem} alt="" />
            <div className="musica-card">
                <h3 className="musica-titulo">{titulo}</h3>
                <p className="musica-artista">{artista}</p>
                <p className="musica-genero">{genero}</p>
                <p className="musica-ano">{anolancado}</p>
                <p className="musica-duracao">{duracao}</p>
            </div>
        </div>
    </div>
);
}