import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../components/logo.png'; // Adjust the path according to your project structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
