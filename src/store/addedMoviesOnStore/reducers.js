import { ADD_MOVIE, DELETE_MOVIE, FILL_MOVIES_ON_STORE } from "./actions";

const defaultState = [];

export const moviesInStore = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return [...state, action.movObj];
    }
    case DELETE_MOVIE:
      return state.filter(mov => mov.id !== action.id);
    case FILL_MOVIES_ON_STORE:
      return action.arr;
    default:
      return state;
  }
};
