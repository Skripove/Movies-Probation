import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Rating from "../components/Rating/Rating";
import { getRating } from "../selectors/getRating";
import {
  addRating,
  changeRating,
  deleteRating
} from "../store/ratings/actions";

const RatingContainer = props => {
  const { id, getRating, changeRating, addRating, deleteRating } = props;

  const [selectValue, setSelectValue] = useState("0");

  useEffect(() => {
    const rating = getRating(id);
    if (rating) {
      setSelectValue(rating);
    }
  }, [getRating, id]);

  const selectChange = evt => {
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const value = evt.target.value;
    const inLocalStorage = arr.find(obj => obj.id === id);
    if (inLocalStorage) {
      if (value === "0") {
        deleteRating(id);
        if (
          inLocalStorage.watched === false &&
          inLocalStorage.favourites === false
        )
          arr = arr.filter(obj => obj.id !== id);
        else {
          arr = arr.map(obj => {
            if (obj.id === id) return Object.assign(obj, { rating: value });
            return obj;
          });
        }
      } else {
        getRating(id)
          ? changeRating(id, value)
          : addRating({ id: id, rating: value });
        arr = arr.map(obj => {
          if (obj.id === id) return Object.assign(obj, { rating: value });
          return obj;
        });
      }
    } else {
      addRating({ id: id, rating: value });
      arr = [
        ...arr,
        { id: id, rating: value, watched: false, favourites: false }
      ];
    }
    localStorage.setItem("userContent", JSON.stringify(arr));
    setSelectValue(value);
  };

  return (
    <Rating
      onClick={evt => evt.preventDefault()}
      value={selectValue}
      onChange={selectChange}
    />
  );
};

const mapStateToProps = state => ({
  getRating: getRating(state)
});

const mapDispatchToProps = dispatch => ({
  addRating: obj => dispatch(addRating(obj)),
  changeRating: (id, rating) => dispatch(changeRating(id, rating)),
  deleteRating: id => dispatch(deleteRating(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingContainer);

RatingContainer.propTypes = {
  id: PropTypes.number,
  addRating: PropTypes.func,
  changeRating: PropTypes.func,
  deleteRating: PropTypes.func,
  getRating: PropTypes.func
};
