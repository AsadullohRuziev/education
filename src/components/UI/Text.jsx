import React from "react";
import styled from "styled-components";

const Text = ({ title }) => {
  return <Ptag>{title}</Ptag>;
};

export default Text;

const Ptag = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: #555555;
`;
