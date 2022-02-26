import React from "react";
import "./Blog.scss";
import data from "../../utils/data";
import { BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import {AiOutlineStar} from 'react-icons/ai'



const Blog = () => {
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
          <img className="teacher" src={data.card} alt="card" />
          <div className="card__active">
            <BiUser className="user" />
            <p>5.8k</p>
            <BsEye className="koz"/>
            <p>69k</p>
            <AiOutlineStar className="yulduz"/>
            <p>4.5</p>
            <img src={data.doira} alt="" />
          </div>
          <div className="line"/>
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p className="card__text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
        <div className="cardin">
          <img className="teacher" src={data.card} alt="card" />
          <div className="card__active">
            <BiUser className="user" />
            <p>5.8k</p>
            <BsEye className="koz"/>
            <p>69k</p>
            <AiOutlineStar className="yulduz"/>
            <p>4.5</p>
            <img src={data.doira} alt="" />
          </div>
          <div className="line"/>
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p className="card__text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
        <div className="cardin">
          <img className="teacher" src={data.card} alt="card" />
          <div className="card__active">
            <BiUser className="user" />
            <p>5.8k</p>
            <BsEye className="koz"/>
            <p>69k</p>
            <AiOutlineStar className="yulduz"/>
            <p>4.5</p>
            <img src={data.doira} alt="" />
          </div>
          <div className="line"/>
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p className="card__text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
        <div className="cardin">
          <img className="teacher" src={data.card} alt="card" />
          <div className="card__active">
            <BiUser className="user" />
            <p>5.8k</p>
            <BsEye className="koz"/>
            <p>69k</p>
            <AiOutlineStar className="yulduz"/>
            <p>4.5</p>
            <img src={data.doira} alt="" />
          </div>
          <div className="line"/>
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p className="card__text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
        <div className="cardin">
          <img className="teacher" src={data.card} alt="card" />
          <div className="card__active">
            <BiUser className="user" />
            <p>5.8k</p>
            <BsEye className="koz"/>
            <p>69k</p>
            <AiOutlineStar className="yulduz"/>
            <p>4.5</p>
            <img src={data.doira} alt="" />
          </div>
          <div className="line"/>
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p className="card__text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
        <div className="cardin">
          <img className="teacher" src={data.card} alt="card" />
          <div className="card__active">
            <BiUser className="user" />
            <p>5.8k</p>
            <BsEye className="koz"/>
            <p>69k</p>
            <AiOutlineStar className="yulduz"/>
            <p>4.5</p>
            <img src={data.doira} alt="" />
          </div>
          <div className="line"/>
          <div className="card__price">
              <p>Development</p>
              <span className="price">$150</span>
          </div>
          <p className="card__text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <button className="btnViewAll">View All Course</button>
    </div>
  );
};

export default Blog;
