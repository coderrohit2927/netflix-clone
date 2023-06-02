import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import {GrSearchAdvanced} from "react-icons/gr"

const NetflixNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" alt="neflix_logo" height="60px" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tv-shows">TV Shows</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/new-popular">New & Popular</Link>
        </li>
        <li>
          <Link to="/my-list">My List</Link>
        </li>
      </ul>

        <GrSearchAdvanced />
     
    </nav>
  );
};

export default NetflixNavbar;
