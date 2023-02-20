import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => (
  <header>
    <div className="logo">
      <h3>Math MAGICIAN</h3>
    </div>
    <nav>
      <Link to="/" className="Navlinks"> Home </Link>
      <Link to="Quotes" className="Navlinks"> Quotes </Link>
      <Link to="arithemetic" className="Navlinks"> calculator </Link>
    </nav>
  </header>
);

export default Navbar;
