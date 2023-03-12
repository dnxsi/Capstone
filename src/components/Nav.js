import React from 'react';
import Logo from './Logo.svg'
import { Link } from 'react-router-dom';
import './index.css'

function Nav() {
  return (
    <>
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/booking">Reservation</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
    </>
  );
}

export default Nav;