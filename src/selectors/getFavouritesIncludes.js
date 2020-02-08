import {createSelector} from 'reselect';
import memoize from "lodash.memoize";

const getFavourites = state => state.favourites;

export const getFavouritesIncludes = createSelector(
getFavourites,
(favourites) => memoize( id => favourites.includes(id))
);