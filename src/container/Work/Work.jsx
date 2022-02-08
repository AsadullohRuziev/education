import React from "react";
import data from "../../utils/data";
import "./Work.scss";
const Work = () => {
  return (
    <div className="work">
      <h1>How It Work</h1>
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
        hendrerit euismod fusce sit.
      </h6>
      <div className="content">
          <div className="content__text">
            <img src={data.online} alt="icon" />
            <h3>Learn More Online</h3>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
          </div>
          <div className="content__text">
            <img src={data.notes} alt="icon" />
            <h3>Writing Notes</h3>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
          </div>
          <div className="content__text">
            <img src={data.touch} alt="icon" />
            <h3>Interactive Sessions</h3>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
          </div>
          <div className="content__text">
            <img src={data.settings} alt="icon" />
            <h3>Life Time Support</h3>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
          </div>
      </div>
    </div>
  );
};

export default Work;
