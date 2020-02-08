import {createSelector} from 'reselect';
import memoize from "lodash.memoize";

const getMoviesOnStore = state => state.moviesInStore;

export const getCards = createSelector(
  getMoviesOnStore,
  (moviesInStore) => memoize(arrId => arrId.map(id => {
    const mov = moviesInStore.find(movie => movie.id === id);
    return (
      {
        id: mov.id,
        pathImg: mov.pathImg,
        overview: mov.overview,
        title: mov.title
      }
    )
  }))
);
