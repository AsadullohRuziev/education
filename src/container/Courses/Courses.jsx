import React, { useState, useEffect } from "react";
// import "./Courses.scss";
import { BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import coursesData from "../../data/data.json";

const postsPerPage = 3;
let arrayForHoldingPosts = [];

const Courses = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = coursesData.courses.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <div className="  flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-center pt-14 text-5xl leading-loose font-bold not-italic font-sans text-black">
        Our All The Online Courses
      </h1>
      <p className="text-center w-1/2 m-auto pt-3 font-sans not-italic font-normal text-base leading-6 text-gray-500 pb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris
        non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <div className=" w-full flex flex-row items-center justify-center  flex-wrap m-auto">
        {postsToShow.map((course) => {
          return (
            <div
              className=" bg-white hover:shadow-2xl w-3/12 my-7 mx-6"
              key={course.id}
            >
              <img
                className=" w-11/12 m-5 rounded-3xl"
                src={course.imageBig}
                alt="card"
              />
              <div className=" flex justify-around items-center p-3">
                <BiUser className=" border border-gray-300 border-solid rounded-full p-1 text-3xl text-blue-600" />
                <p className="not-italic font-normal text-sm leading-10 text-gray-500">
                  {course.person}k
                </p>
                <BsEye className=" border border-gray-300 border-solid rounded-full p-1 text-3xl text-blue-600" />
                <p className="not-italic font-normal text-sm leading-10 text-gray-500">
                  {course.view}k
                </p>
                <AiOutlineStar className=" border border-gray-300 border-solid rounded-full p-1 text-3xl text-blue-600" />
                <p className="not-italic font-normal text-sm leading-10 text-gray-500">
                  {course.star}
                </p>
                <img
                  className=" w-10 h-10 rounded-full"
                  src={course.imageCircle}
                  alt="kokat"
                />
              </div>
              <div className="border-t-2 w-11/12 border-solid border-gray-400  m-auto" />
              <div className=" flex justify-between items-center w-11/12    m-auto p-5">
                <p className="not-italic font-bold  font-sans text-2xl leading-10 text-black">
                  {course.title}
                </p>
                <span className=" text-blue-600 font-bold text-2xl not-italic font-sans leading-10 ">
                  ${course.price}
                </span>
              </div>
              <p className=" not-italic font-normal text-sm m-4 pb-5 text-gray-500">
                {course.text}
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleShowMorePosts}
        className="btnViewAll bg-blue-600 hover:bg-blue-400 font-sans not-italic font-normal text-base leading-6 text-white py-4 px-8 border-none text-center my-12 rounded-md"
      >
        View All Course
      </button>
    </div>
  );
};

export default Courses;
