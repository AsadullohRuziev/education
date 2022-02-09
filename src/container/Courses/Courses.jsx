import React from "react";
import "./Courses.scss";
import data from "../../utils/data";
import { BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import {AiOutlineStar} from 'react-icons/ai'


const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__head">
        <h1>Our All The Online Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="cards">
        <div className="cardin">
          <img src={data.card} alt="card" />
          <div className="card__active">
            <BiUser />
            <p>5.8k</p>
            <BsEye />
            <p>69k</p>
            <AiOutlineStar/>
            <img src={data.doira} alt="" />
          </div>
          <hr />
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
