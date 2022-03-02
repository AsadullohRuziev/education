import React from 'react';
import './Footer.scss'
const Footer = () => {
  return(
    <>
      <footer>
        <div className='one'>
          <h2>Education</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo, perferendis ad officia distinctio similique laudantium error at aliquid in?</p>
          <h2>Follow us</h2>
          <div className="social">
            <i>hi</i>
            <i>hi</i>
            <i>hi</i>
            <i>hi</i>
          </div>
        </div>
        <div className="two">
          <h2>Feature links</h2>
          <ul className="link">
            <li><span>❭</span> <a href="#">About us</a></li>
            <li><span>❭</span><a href="#">Graduation</a></li>
            <li><span>❭</span><a href="#">Scholarship</a></li>
            <li><span>❭</span><a href="#">Admissions</a></li>
            <li><span>❭</span><a href="#">International</a></li>
            <li><span>❭</span><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="two">
          <h2>Support</h2>
          <ul className="link">
            <li><span>❭</span><a href="#">Language</a></li>
            <li><span>❭</span><a href="#">WordPress</a></li>
            <li><span>❭</span><a href="#">Privacy</a></li>
            <li><span>❭</span><a href="#">FAQs</a></li>
            <li><span>❭</span><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="four">
          <h2>Contact us</h2>
          <p className='address'>59-home 39, Dom Chilonzor Tashkent Uzbekistan</p>
          <p><span>📞</span> +017 4845 7269</p>
          <p><span>💬</span>asadullohruziev@gmail.com</p>
          <p><span>🌐</span>asadullohruziev.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;