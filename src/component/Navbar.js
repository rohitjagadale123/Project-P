import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='img-container'>
        <img className='img' src='https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png' alt='Logo' />
      </div>
      <ul className='nav-links'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About</li>
        <li className='nav-item'>Contact</li>
        <li  className='sign-Out-btn'><Link to={'/'}>Sign Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
