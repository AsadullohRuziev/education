import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return <Btn>{title}</Btn>;
};

export default Button;

const Btn = styled.button`
  background: #086cf9;
  border-radius: 4px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  transition: .5s;

  &:hover {
    background-color: #1600db;
    opacity: 1;
  }
`;
