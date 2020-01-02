import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='logo'>Wheel Good Logo</div>
      <nav className='menu'>
        <Link to='#'>Home</Link>
        <Link to='#'>Map Legend</Link>
        <Link to='#'>About</Link>
        <Link to='#'>Contact</Link>
      </nav>
    </div>
  );
};

export default NavBar;
