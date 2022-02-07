import React from 'react';
import './Navbar.css'


const Navbar = () => {
  return(
      <nav className='navbar'>
        <div className='navbar__logo'>
            <a href="#/">Education</a>
        </div>
        <ul className='links'>
            <li className='link'><a href="#home">Home</a></li>
            <li className='link'><a href="#courses">Courses</a></li>
            <li className='link'><a href="#page">Page</a></li>
            <li className='link'><a href="#blog">Blog</a></li>
            <li className='link'><a href="#contact">Contact</a></li>
        </ul>
        <div>
            <button className='btn btn__singin'>Singin</button>
            <button className='btn btn__singup'>Sing Up</button>
        </div>
      </nav>
  );
};

export default Navbar;
