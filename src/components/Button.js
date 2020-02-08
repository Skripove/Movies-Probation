//import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  background-color: ${props =>
    props.white ? "#ffffff" : "rgb(221, 221, 221)"};
  padding: 5px 10px;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #c3c7ff;
  }
`;
//const Button = ({onClick, children, white}) => <StyledButton white={white} onClick={onClick}>{children}</StyledButton>

export default StyledButton;

StyledButton.propTypes = {
  white: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string
};
