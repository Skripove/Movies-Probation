import {createSelector} from 'reselect';
import memoize from "lodash.memoize";

const getWatched = state => state.watched;

export const getWatchedIncludes = createSelector(
getWatched,
(watched) => memoize(id => watched.includes(id))
);