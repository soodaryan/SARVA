import React from 'react';
import { Link } from 'react-router-dom';
import Sarva from './images/Sarva_logo_1.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Sarva} alt='Sarva' />
      <ul className='navList'>
        <li className='navItem'>
          <Link to="/" className='navLink'>Home</Link>
        </li>
        <li className='navItem'>
          <Link to="/dashboard" className='navLink'>Dashboard</Link>
        </li>
        <li className='navItem'>
          <Link to="/features" className='navLink'>Features</Link>
        </li>
        <li className='navItem'>
          <Link to="/login" className='navLink'>Login / SignUp</Link>
        </li>
      </ul>
      <div className='searchContainer'>
        <input type='text' placeholder='Search...' className='searchBoxNav' />
      </div>
    </nav>
  );
};

export default Navbar;