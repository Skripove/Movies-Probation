import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RatingStars from "../components/Rating/RatingStars";
import { getRating } from "../selectors/getRating";
import {
  addRating,
  changeRating,
  deleteRating
} from "../store/ratings/actions";

const RatingStarsContainer = props => {
  const { id, rating, changeRating, addRating, deleteRating } = props;
  const [selectValue, setSelectValue] = useState(0);

  useEffect(() => {
    if (rating) {
      setSelectValue(rating);
    }
  }, [rating, id]);

  const selectChange = value => {
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const inLocalStorage = arr.find(obj => obj.id === id);
    if (inLocalStorage) {
      rating ? changeRating(id, value) : addRating({ id: id, rating: value });
      arr = arr.map(obj => {
        if (obj.id === id) return Object.assign(obj, { rating: value });
        return obj;
      });
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

  const clear = evt => {
    evt.preventDefault();
    setSelectValue(0);
    deleteRating(id);
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const inLocalStorage = arr.find(obj => obj.id === id);
    if (inLocalStorage) {
      if (
        inLocalStorage.watched === false &&
        inLocalStorage.favourites === false
      )
        arr = arr.filter(obj => obj.id !== id);
      else {
        arr = arr.map(obj => {
          if (obj.id === id) return Object.assign(obj, { rating: 0 });
          return obj;
        });
      }
      localStorage.setItem("userContent", JSON.stringify(arr));
    }
  };

  return (
    <RatingStars
      initialRating={selectValue}
      onChange={selectChange}
      clear={clear}
    />
  );
};

const mapStateToProps = (state, props) => ({
  rating: getRating(state)(props.id)
});

const mapDispatchToProps = dispatch => ({
  addRating: obj => dispatch(addRating(obj)),
  changeRating: (id, rating) => dispatch(changeRating(id, rating)),
  deleteRating: id => dispatch(deleteRating(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingStarsContainer);

RatingStarsContainer.propTypes = {
  id: PropTypes.number,
  addRating: PropTypes.func,
  changeRating: PropTypes.func,
  deleteRating: PropTypes.func,
  rating: PropTypes.number
};
