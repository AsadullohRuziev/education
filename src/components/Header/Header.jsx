import React from "react";
import data from "../../utils/data";
import "./Header.scss";

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
      <div className="btn__div">
        <button className="btn">Start a coures</button>
      </div>
      <div className="header__context">
        <div className="header__icons">
            <img src={data.courses} alt="icon" />
            <div className="numbers">
                <img src={data.img1400} alt="icon" />
                <p>Online courses</p>
            </div>
        </div>
        <div className="header__icons">
            <img src={data.expert} alt="icon" />
            <div className="numbers">
            <img src={data.img1100} alt="icon" />
                <p>Expert Instructors</p>
            </div>
        </div>
        <div className="header__icons">
            <img src={data.succes} alt="icon" />
            <div className="numbers">
            <img src={data.img800} alt="icon" />
                <p>Success Stories</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
