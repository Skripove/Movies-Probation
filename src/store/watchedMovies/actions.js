export const ADD_WATCHED_MOVIE = "ADD_WATCHED_MOVIE"
export const DELETE_WATCHED_MOVIE = "DELETE_WATCHED_MOVIE"
export const FILL_WATCHED_MOVIES = "FILL_WATCHED_MOVIES"

export const addWatchedMovie = (id) => {
    return {
        type: ADD_WATCHED_MOVIE,
        id
    }
}

export const deleteWatchedMovie = (id) => {
    return {
        type: DELETE_WATCHED_MOVIE,
        id
    }
}

export const fillWatchedMovies = (arr) => {
  return {
      type: FILL_WATCHED_MOVIES,
      arr
  }
}