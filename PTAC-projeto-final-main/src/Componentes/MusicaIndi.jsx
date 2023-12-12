export default function MusicaIndi () {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    return(
        <div className="quadro-card">
        {listaLocalStorage.map((musica) => (
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
    );
}