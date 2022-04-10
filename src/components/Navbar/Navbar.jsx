import React from "react";
import { navbar } from "../../utils/navbar";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">Education</a>
      </div>

      <ul className="links">
        {navbar.map((value) => (
          <li className="link">
            <NavLink key={value.id} to={value.path}>
              {value.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <button className="btn btn__singin">Singin</button>
        <button className="btn btn__singup">Sing Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
