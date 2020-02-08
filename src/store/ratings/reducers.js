import {
  ADD_RATING,
  CHANGE_RATING,
  DELETE_RATING,
  FILL_RATINGS
} from "./actions";

const defaultState = [];

export const ratings = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RATING:
      return [...state, action.obj];
    case CHANGE_RATING: {
      return state.map(elem => {
        if (elem.id === action.id) {
          return {
            id: action.id,
            rating: action.rating
          };
        }
        return elem;
      });
    }
    case DELETE_RATING:
      return state.filter(obj => obj.id !== action.id);
    case FILL_RATINGS:
      return action.arr;
    default:
      return state;
  }
};
