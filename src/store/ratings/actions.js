export const ADD_RATING = "ADD_RATING";
export const CHANGE_RATING = "CHANGE_RATING";
export const DELETE_RATING = "DELETE_RATING";
export const FILL_RATINGS = "FILL_RATINGS";

export const addRating = obj => {
  return {
    type: ADD_RATING,
    obj
  };
};

export const changeRating = (id, rating) => {
  return {
    type: CHANGE_RATING,
    id,
    rating
  };
};

export const deleteRating = id => {
  return {
    type: DELETE_RATING,
    id
  };
};

export const fillRatings = arr => {
  return {
    type: FILL_RATINGS,
    arr
  };
};
