import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <h1>Self-Paced Learning Courses Online</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida
          massa. Ultrices bibendum sagittis pellentesque vitae sit.
        </p>
      </div>
      <button className="btn">Start a coures</button>
    </div>
  );
};

export default Header;
