import React, {useState} from "react";
import "./Blog.scss";
import data from "../../utils/data";
import malumot from "../../data/data.json"


const Blog = () => {

  const [showMore, setShowMore] = useState(false)

  return(
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
    {malumot.blog.map((blog, key)=>{
      return(
        <div key={blog.id} className="card__in__card">
        <img className="teacher" src={blog.img} alt="card" />
        <div className="card__active">
          <h4>{blog.heading}</h4>
          <p>{blog.text}   {showMore ? blog.text : `${blog.text.substring(0, 105)}`}</p>
          <button  onClick={()=>setShowMore(!showMore)} >{showMore ? "Read less..." : "Read more..."}</button>
        </div>
      </div>
      )
    })}
  </div>
  <button className="btnViewAll">View All</button>
</div>
  )
};

export default Blog;

