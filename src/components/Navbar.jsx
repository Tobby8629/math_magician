import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="logo">
      <h3>Math MAGICIAN</h3>
    </div>
    <nav>
      <Link to="/"> Home </Link>
      <Link to= "Quotes"> Quotes </Link>
      <Link to="arithemetic"> calculator </Link>
    </nav>
  </header>
);

export default Navbar;
