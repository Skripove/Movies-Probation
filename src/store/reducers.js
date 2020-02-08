import { combineReducers } from "redux";
import { ajaxInProgress } from "./ajaxInProgress/reducers";
import { moviesInStore } from "./addedMoviesOnStore/reducers";
import { ratings } from "./ratings/reducers";
import { watchedMovies } from "./watchedMovies/reducers";
import { favouritesMovies } from "./favouritesMovies/reducers";

export default combineReducers({
  moviesInStore,
  ratings,
  ajaxInProgress,
  watched: watchedMovies,
  favourites: favouritesMovies
});

// const userMovies = (state={}, action) => {
//     return {
//         watched: watchedMovies(state.watched, action),
//         favourites: favouritesMovies(state.favourites, action)
//     }
// }
