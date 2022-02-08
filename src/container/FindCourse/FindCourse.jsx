import React from 'react';
import data from '../../utils/data';
import './FindCourse.scss'
import { FaPlay } from 'react-icons/fa';

const FindCourse = () => {
  return(
      <div className='findcourse'>
          <div className="left">
              <h2>Find Your Course That Makes Bright Future</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, </p>
              <p className='bold__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>
              <button>Learn More</button>
          </div>
          <div className="right">
              <img src={data.findcourse} alt="" />
              <FaPlay  className='play'/>
          </div>
      </div>
  );
};

export default FindCourse;
