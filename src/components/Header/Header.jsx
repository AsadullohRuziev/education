import React from "react";
import data from "../../utils/data";
import Button from "../UI/Button";
import "./Header.scss";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="header">
        <H1>Self-Paced Learning Courses Online</H1>
        <HeadText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida
          massa. Ultrices bibendum sagittis pellentesque vitae sit.
        </HeadText>
      <div className="flex justify-center items-center mt-14 pb-48">
        <Button  className="pb-48" title={"Start a coures"}/>
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





// styles

const HeadText = styled.p`
  width: 60%;
  margin: 0 auto;
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  text-align: center;
  color: #ffffff;
`;


const H1 = styled.h1`
  text-align: center;
  font-size: 56px;
  font-weight: bold;
  line-height: 73px;
  padding-top: 200px;
  padding-bottom: 24px;
  color: #fff;
`