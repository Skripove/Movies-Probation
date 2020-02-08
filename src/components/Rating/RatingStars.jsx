import React from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import styled from "styled-components";

const StyledRatingStars = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 100%;
  button {
    margin-top: 10px;
    font-size: 13px;
  }
  span {
    color: #c3c7ff;
  }
`;

const RatingStars = ({ initialRating, onChange, onClick, clear }) => {
  return (
    <StyledRatingStars>
      <Rating
        initialRating={initialRating}
        onChange={onChange}
        onClick={onClick}
        emptySymbol={<FontAwesomeIcon icon={faStarEmpty} size="2x" />}
        fullSymbol={<FontAwesomeIcon icon={faStarFull} size="2x" />}
        fractions={2}
      />
      <br />
      <Button white onClick={clear}>
        Сброс
      </Button>
    </StyledRatingStars>
  );
};

export default RatingStars;

RatingStars.propTypes = {
  initialRating: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  clear: PropTypes.func
};
