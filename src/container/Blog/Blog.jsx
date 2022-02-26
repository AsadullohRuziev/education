import React from "react";
import "./Blog.scss";
import data from "../../utils/data";
import { BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__head">
        <h1>Our Latest Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="cards">
        <div className="card__in__card">
          <img className="teacher" src={data.blog} alt="card" />
          <div className="card__active">
            <h4>Product Marketing Creative Camping Brand Image</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
              vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida
              massa.
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
        <div className="card__in__card">
          <img className="teacher" src={data.blog} alt="card" />
          <div className="card__active">
            <h4>Product Marketing Creative Camping Brand Image</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
              vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida
              massa.
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
        <div className="card__in__card">
          <img className="teacher" src={data.blog} alt="card" />
          <div className="card__active">
            <h4>Product Marketing Creative Camping Brand Image</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
              vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida
              massa.
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
      </div>
      <button className="btnViewAll">View All</button>
    </div>
  );
};

export default Blog;
