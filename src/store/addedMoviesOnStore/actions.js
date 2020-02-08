export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const FILL_MOVIES_ON_STORE = "FILL_MOVIES_ON_STORE";

export const addMovieOnStore = movObj => {
  return {
    type: ADD_MOVIE,
    movObj
  };
};

export const deleteMovieFromStore = id => {
  return {
    type: DELETE_MOVIE,
    id
  };
};

export const fillMoviesOnStore = arr => {
  return {
    type: FILL_MOVIES_ON_STORE,
    arr
  };
};
