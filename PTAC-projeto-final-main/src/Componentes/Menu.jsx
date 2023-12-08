import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.css";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Menu () {
    return(
  <div className="navbar">
  <div className="logo">
    <img src="Spotify_Logo_RGB_White.png" alt="" />
  </div>
  <ul className="menu">
    <li><a href="#"><i className="fas fa-home"></i> Início</a></li>
    <li><a href="#"><i className="fas fa-search"></i> Buscar</a></li>
    <li><a href='#'><i className="fas fa-book-open"></i> Sua Biblioteca</a></li>
  </ul>
  <div className="playlist">
    <h3>Playlists</h3>
    <ul>
      <li><Link to = {"/"}><img src="albumtaylor.jpeg" alt="" className="albumplay" />   Minha Playlist</Link></li>
      <li><a href="#"><i className="fas fa-heart"></i> Últimas Escutadas</a></li>
      <li><Link to = {"/register"}><i className="fas fa-plus"></i> Adicionar a Playlist</ Link></li>
    </ul>
  </div>
</div>
    );
}
