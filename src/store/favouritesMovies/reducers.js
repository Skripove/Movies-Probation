import {
    ADD_FAVOURITES_MOVIE,
    DELETE_FAVOURITES_MOVIE,
    FILL_FAVOURITES_MOVIES
} from './actions';

const defaultState = [];

export const favouritesMovies = (state=defaultState, action) => {
  switch(action.type){
    case ADD_FAVOURITES_MOVIE:
      return [...state, action.id]
    case DELETE_FAVOURITES_MOVIE:
      return state.filter((id) => id !== action.id)
    case FILL_FAVOURITES_MOVIES:
      return action.arr
    default:
      return state
  }
}