import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const getRatings = state => state.ratings;

export const getRating = createSelector(
  getRatings,
  ratings =>
    memoize(id => {
      const result = ratings.find(obj => obj.id === id);
      return result === undefined ? NaN : result.rating;
    })
);
