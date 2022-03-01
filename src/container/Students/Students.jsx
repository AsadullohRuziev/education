import React from "react";
import "./Students.scss";
import data from "../../utils/data";

const Students = () => {
  return (
    <div className="students">
      <div className="students__head">
        <h1>What Our Students Say</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          mauris non dictumst in leo. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="slider">
        <div className="slider__card">
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
            mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
            egestas.
          </p>
          <div className="slider__card_in">
            <img src={data.slider} alt="" />
            <div className="slider__content">
              <h2>Jony Ahmed</h2>
              <p>UI/UX Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
