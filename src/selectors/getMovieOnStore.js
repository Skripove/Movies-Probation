import {createSelector} from 'reselect';
import memoize from "lodash.memoize";

const getMoviesOnStore = state => state.moviesInStore;

export const getMovieOnStore = createSelector(
getMoviesOnStore,
(moviesInStore) => memoize(id => moviesInStore.find(movie => movie.id === id))
);