import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "../../styled-components/StyledSelect";

const Rating = ({ value, onChange, onClick }) => {
  return (
    <StyledSelect value={value} onChange={onChange} onClick={onClick}>
      <option value="0">нет</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </StyledSelect>
  );
};

export default Rating;

Rating.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};
