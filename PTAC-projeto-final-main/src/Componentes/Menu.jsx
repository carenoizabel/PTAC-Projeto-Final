import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.css";

export default function Menu () {
    return(
        <div className='navbar'>
            <div class="btn-group-vertical">
                <Link to='/ultimas-ouvidas'>Últimas Ouvidas</Link>
                <Link to='/minha-playlist'>Minha Playlist</Link>
                <Link to='/favoritar'>Favoritar</Link>
            </div>
        </div>
    );
}
