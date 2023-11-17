// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <h2>User Dashboard</h2>
      <button className='menu-button' onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Registration</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
