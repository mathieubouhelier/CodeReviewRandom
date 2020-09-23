import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Nav() {
  return (
    <nav>
      <ul className='nav-links'>
        <Link to="/">Lista aleatoria </Link>
        <Link to="/goldbadgelist">Lista de badges de ouro</Link>
        <Link to="/silverbadgelist">Lista de badges de prata</Link>
        <Link to="/bronzebadgelist">Lista de badges de bronze</Link>
      </ul>
    </nav>
  );
}
export default Nav;
