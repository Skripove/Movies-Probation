import {
    ADD_WATCHED_MOVIE,
    DELETE_WATCHED_MOVIE,
    FILL_WATCHED_MOVIES
} from './actions';

const defaultState = [];

export const watchedMovies = (state=defaultState, action) => {
  switch(action.type){
    case ADD_WATCHED_MOVIE:
      return [...state, action.id]
    case DELETE_WATCHED_MOVIE:
      return state.filter((id) => id !== action.id)
    case FILL_WATCHED_MOVIES:
      return action.arr
    default:
      return state
  }
}