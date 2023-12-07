import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.css";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Menu () {
    return(
  <div class="navbar">
  <div class="logo">
    <img src="Spotify_Logo_RGB_White.png" alt="" />
  </div>
  <ul class="menu">
    <li><a href="#"><i class="fas fa-home"></i> Início</a></li>
    <li><a href="#"><i class="fas fa-search"></i> Buscar</a></li>
    <li><a href="#"><i class="fas fa-book-open"></i> Sua Biblioteca</a></li>
  </ul>
  <div class="playlist">
    <h3>Playlists</h3>
    <ul>
      <li><Link to = {"/"}><img src="albumtaylor.jpeg" alt="" className="albumplay" />   Minha Playlist</Link></li>
      <li><a href="#"><i class="fas fa-heart"></i> Últimas Escutadas</a></li>
      <li><a href="#"><i class="fas fa-plus"></i> Adicionar a Playlist</a></li>
    </ul>
  </div>
</div>
    );
}
