import React from "react";
import "./Event.scss";
import data from "../../utils/data";
import { BiUser } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const Event = () => {
  return (
    <div className="mentor">
      <div className="mentor__head">
        <h1>Upcoming Event</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="mentors">
      <div className="mentor__card">
          <img src={data.event} alt="mentor" />
          <div className="top__left">
                <p>10 APR</p>
          </div>
          <div className="mentor__content">
            <h4>TED Talks at UCF College of Education</h4>
            <div className="mentor__status">
              <div className="user">
                <BiUser className="userBi"/>
                <p>4.00 pm - 8.00 pm</p>
                <AiOutlineStar className="yulduz"/>
                <p>Dhaka Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mentor__card">
          <img src={data.event} alt="mentor" />
          <div className="top__left">
                <p>10 APR</p>
          </div>
          <div className="mentor__content">
            <h4>Summer Course Starts From June</h4>
            <div className="mentor__status">
              <div className="user">
                <BiUser className="userBi"/>
                <p>4.00 pm - 8.00 pm</p>
                <AiOutlineStar className="yulduz"/>
                <p>Dhaka Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mentor__card">
          <img src={data.event} alt="mentor" />
          <div className="top__left">
                <p>10 APR</p>
          </div>
          <div className="mentor__content">
            <h4>Importance of Research Seminar</h4>
            <div className="mentor__status">
              <div className="user">
                <BiUser className="userBi"/>
                <p>4.00 pm - 8.00 pm</p>
                <AiOutlineStar className="yulduz"/>
                <p>Dhaka Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
