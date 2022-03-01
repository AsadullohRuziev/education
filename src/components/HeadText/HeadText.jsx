import React from "react";
import './HeadText.scss'

const HeadText = ({ title, text }) => {
  return (
    <>
      <h1 className="h1__title">{title}</h1>
      <p className="p_text">{text}</p>
    </>
  );
};

export default HeadText;




