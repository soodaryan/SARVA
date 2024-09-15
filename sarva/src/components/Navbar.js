import React from 'react';
import Sarva from './images/Sarva_logo_1.png' 
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Sarva} alt='Sarva' />
      <ul className='navList'>
        <li className='navItem' >
          <div className='navLink'>Home</div>
        </li>
        <li className='navItem'>
          <div className='navLink' >About</div>
        </li>
        <li className='navItem'>
          <div className='navLink'>Activities</div>
        </li>
        <li className='navItem'>
          <div className='navLink'>Login / SignUp</div>
        </li>
      </ul>
      <div className='searchContainer'>
        <input type='text' placeholder='Search...' className='searchBoxNav' />
        {/* <button className='searchButton'>🔍</button> */}
      </div>

      
    </nav>
  );
};

export default Navbar;