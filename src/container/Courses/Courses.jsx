import React from 'react';
import './Courses.scss';
import data from '../../utils/data';

const Courses = () => {
  return(
      <div className='courses'>
          <div className="courses__head">
              <h1>Our All The Online Courses</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="cards">
              <div className='cardin'>
                    <img src={data.card} alt="card" />
              </div>
          </div>
      </div>
  )
};

export default Courses;
