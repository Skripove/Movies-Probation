import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RatingStarsContainer from "../containers/RatingStarsContainer";
import styled from "styled-components";

const StyledCard = styled(Link)`
  position: relative;
  background-color: #f0efef;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  transition: 0.3s;
  text-align: center;
  width: ${props => (props.slider ? "180px" : "43%")};
  min-width: ${props => (props.slider ? "150px" : "")};
  margin: ${props => (props.slider ? "0 15px 0 15px" : "0 0 15px 0")};
  color: black;
  img {
    width: ${props => (props.slider ? "80%" : "50%")};
  }
  h3 {
    margin-bottom: 10px;
    font-size: ${props => (props.slider ? "20px" : "")};
  }
  p {
    text-align: left;
    font-size: ${props => (props.slider ? "10px" : "13px")};
  }
  select {
    position: absolute;
    bottom: 15px;
    left: calc(50% - 25px);
  }
  &:hover {
    cursor: pointer;
    border: 2px solid #a1a1a1;
  }
`;

const MovieItem = ({ slider = false, pathImg, title, overview, id }) => {
  return (
    <StyledCard to={`/films/${id}`} slider={slider ? 1 : 0}>
      <img src={pathImg} alt="Изображение" />
      <h3>{title}</h3>
      <p>
        {overview === ""
          ? "Описание отсутствует..."
          : overview.substr(0, 200) + "..."}
      </p>
      <RatingStarsContainer id={id} />
    </StyledCard>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  slider: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number
};

StyledCard.propTypes = {
  slider: PropTypes.number
};
