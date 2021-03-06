import React from "react";
import "./Mentor.scss";
import data from "../../utils/data";
import { BiUser } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const Mentor = () => {
  return (
    <div className="mentor">
      <div className="mentor__head">
        <h1>Meet with Our Mentor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="mentors">
      <div className="mentor__card">
          <img src={data.mentor} alt="mentor" />
          <div className="mentor__content">
            <h3>Mohammod Ali</h3>
            <h6>CEO, Developer</h6>
            <div className="mentor__status">
              <div className="user">
                <BiUser className="userBi"/>
                <p>8.2k</p>
                <AiOutlineStar className="yulduz"/>
                <p>4.5</p>
              </div>
              <p>25+ Courses</p>
            </div>
          </div>
        </div>
        <div className="mentor__card">
          <img src={data.mentor} alt="mentor" />
          <div className="mentor__content">
            <h3>Mohammod Ali</h3>
            <h6>CEO, Developer</h6>
            <div className="mentor__status">
              <div className="user">
                <BiUser className="userBi"/>
                <p>8.2k</p>
                <AiOutlineStar className="yulduz"/>
                <p>4.5</p>
              </div>
              <p>25+ Courses</p>
            </div>
          </div>
        </div>
        <div className="mentor__card">
          <img src={data.mentor} alt="mentor" />
          <div className="mentor__content">
            <h3>Mohammod Ali</h3>
            <h6>CEO, Developer</h6>
            <div className="mentor__status">
              <div className="user">
                <BiUser className="userBi"/>
                <p>8.2k</p>
                <AiOutlineStar className="yulduz"/>
                <p>4.5</p>
              </div>
              <p>25+ Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
