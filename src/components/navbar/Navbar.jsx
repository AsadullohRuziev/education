import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <span>Education</span>
        </div>
        <ul className='app__navbar-links'>
            <li> <a href="#home">Home</a></li>
            <li> <a href="#courses">Courses</a></li>
            <li> <a href="#page">Page</a></li>
            <li> <a href="#blog">Blog</a></li>
            <li> <a href="#contact">Contact</a></li>
            <li> <a href="#"></a></li>
            <li> <a href="#"></a></li>
        </ul>
        <div className="app__navbar-login">
            <a href="#" className='app__navbar-login_signin'>Sign in</a>
            <a href="#" className='app__navbar-login_signup'>Sign up</a>
        </div>
    </nav>
  );
};

export default Navbar;

